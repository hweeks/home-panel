import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Hue from '../../Components/Hue';
import Weather from '../../Components/Weather';
import * as actions from '../../actions';
import baseStyles, { AppContainer } from './styles';

class App extends PureComponent {
  componentDidMount() {
    const { getLights, getWeather } = this.props;
    getLights();
    getWeather();
  }
  render() {
    const { lightData, weatherData } = this.props;
    baseStyles();
    return (
      <AppContainer>
        <Hue lightData={lightData} />
        <Weather weatherData={weatherData} />
      </AppContainer>
    );
  }
}

App.propTypes = {
  lightData: PropTypes.array,
  weatherData: PropTypes.array,
  getLights: PropTypes.func.isRequired,
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
  getWeather: actions.getForecast,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
