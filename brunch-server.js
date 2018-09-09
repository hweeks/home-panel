const express = require('express');
const app = express();
const axios = require('axios')

app.use(express.static(__dirname + '/build'))

app.get('/api/weather/:key/:cords', (req, res) => {
  const {key, cords} = req.params
  const base = 'https://api.darksky.net/forecast'
  axios.get(`${base}/${key}/${cords}`).then(
    resp => res.send(resp.data)
  ).catch(
    err => res.send(err.data)
  )
})

module.exports = (config, callback) => {
  app.listen(config.port, '0.0.0.0', function () {
    console.log(`Home Panel listening on: ${config.port}!`);
    callback();
  });

  return app;
};
