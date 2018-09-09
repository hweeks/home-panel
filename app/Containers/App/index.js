import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Hue from '../../Components/Hue';
import Weather from '../../Components/Weather';
import * as actions from '../../actions';
import baseStyles, { AppContainer } from './styles';
import { lightProp, titleProp } from '../../types';

class App extends PureComponent {
  componentDidMount() {
    const { getLights, getWeather } = this.props;
    getLights();
    getWeather();
  }
  render() {
    const { lightData, weatherData, setLights } = this.props;
    baseStyles();
    return (
      <AppContainer>
        <Weather weatherData={weatherData} />
        <Hue lightData={lightData} setLights={setLights} />
      </AppContainer>
    );
  }
}

App.propTypes = {
  lightData: PropTypes.arrayOf(PropTypes.shape(lightProp)),
  weatherData: PropTypes.arrayOf(PropTypes.shape(titleProp)),
  getLights: PropTypes.func.isRequired,
  setLights: PropTypes.func.isRequired,
  getWeather: PropTypes.func.isRequired,
};

App.defaultProps = {
  lightData: null,
  weatherData: null,
};

const mapStateToProps = (state) => {
  const { hue, weather } = state;
  return Object.assign({}, hue, weather);
};

const mapDispatchToProps = dispatch => bindActionCreators({
  getLights: actions.getLightStatus,
  setLights: actions.setLightStatus,
  getWeather: actions.getForecast,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
