# Home panel
A leaving home info panel

## install

    $ yarn

## running

    $ yarn start

Navigate to [localhost:3333](http://localhost:3333/) to see it in action.

## purpose

the idea behind this project is a quick overview of your smart home and daily weather. Ideally this would be hanging next to your door as you exit so you can see what to expect in weather, what your lights are currently doing, and your current AC settings. It's designed to run on a local computer, and be available on your network.

## hpconfig

Inside of the `app/` folder you need to place a config named `hpconfig.js` of this shape:

```js
const config = {
  hue: 'http://<<INTERNAL_IP>>/api/<<USER>>',
  weather: {
    key: '<<API_KEY>>',
    cities: [
      {
        name: 'Home',
        cords: '37.7870,122.3930',
      },
      {
        name: 'Palo Alto',
        cords: '37.4419,122.1430',
      },
    ],
  },
};

export default config;
```

This config should point to your lights, and the cities array can be as many as you'd like. I am using the [darksky api](https://darksky.net/dev) for weather and [Phillips Hue](https://www.developers.meethue.com/) for lighting. Be sure to follow those links to get your own setup.

## choices in tech

I'm using react for the main application, express for my server, and brunch as my build tool.

### fe choices

For the FE I thought doing a redux app, with a single global application state, only a single PureComponent, and the rest being functional components was the most simple and elegant way to do this. I also am using styled-components for the simplicity of it, and weather icons from [eric flowers](https://github.com/erikflowers/weather-icons). This icons are mapped by me for styled-components. I intend to make a PR for their main NPM package to share the simplicity.

### be choices

Instead of doing CORS work, I decided it would be easiest to just use axios and have a nice wrapper for my external calls. I also felt like this was easier to read and created a nice API layer.

## TODOS

  * set weather to refresh every 15 minutes
  * add nest integration
  * tests need to actually exist
