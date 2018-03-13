import React from 'react';
import PropTypes from 'prop-types';
import Row from '../Row';
import Column from '../Column';
import Loading from '../Loading';
import WeatherTitle from '../WeatherTitle';
import Forecast from '../Forecast';
import {
  forecastProp,
  titleProp,
} from '../../types'

const Weather = ({ id, titleProps, forecastProps }) => (
  <Column key={`weather-${id}`}>
    <WeatherTitle {...titleProps} />
    {forecastProps.map(dayProp => <Forecast {...dayProp} />)}
  </Column>
);

Weather.propTypes = {
  id: PropTypes.number,
  titleProps: PropTypes.shape(titleProp),
  forecastProps: PropTypes.arrayOf(PropTypes.shape(forecastProp)),
}

const WeatherWrapper = ({ weatherData }) => {
  if (!weatherData) {
    return <Row key={'weather-loader'}><Loading /></Row>;
  }
  return (
    <Row key={'weather-wrapper'}>
      {weatherData.map((props, id) => <Weather id={id} {...props} />)}
    </Row>
  );
};

WeatherWrapper.propTypes = {
  weatherData: PropTypes.arrayOf(PropTypes.shape(Weather.propTypes)),
};

export default WeatherWrapper;
