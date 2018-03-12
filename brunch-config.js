exports.files = {
  javascripts: {joinTo: 'app.js'}
};

exports.plugins = {
  babel: {presets: ['env', 'react']},
};

exports.paths = {
  public: './build'
}
