import React from 'react';
import PropTypes from 'prop-types';
import flow from 'lodash.flow';
import Row from '../Row';
import Column from '../Column';
import Loading from '../Loading';
import WeatherTitle from '../WeatherTitle';
import Forecast from '../Forecast';

const titleProps = (weatherData) => {
  const { currently: { icon, temperature, summary } } = weatherData;
  const { name } = weatherData;
  const titleProps = {
    name, icon, temperature, summary,
  };
  return Object.assign({}, { titleProps }, weatherData);
};

const simpleProps = (dayData) => {
  const {
    icon, apparentTemperatureMin, apparentTemperatureMax, summary,
  } = dayData;
  const temps = { high: apparentTemperatureMax, low: apparentTemperatureMin };
  return Object.assign({}, { icon, summary }, temps);
};

const dailyProps = (weatherData) => {
  const { daily: { data } } = weatherData;
  const { titleProps } = weatherData;
  const forecastProps = data.map(simpleProps);
  return Object.assign({}, { forecastProps }, { titleProps });
};

const Weather = ({ titleProps, forecastProps }) => (
  <Column>
    <WeatherTitle {...titleProps} />
    {forecastProps.map(dayProp => <Forecast {...dayProp} />)}
  </Column>
);

// TODO Build a custom type
Weather.propTypes = {
  titleProps: PropTypes.object.isRequired,
  forecastProps: PropTypes.object.isRequired,
};

const WeatherWrapper = ({ weatherData }) => {
  if (!weatherData) {
    return <Row><Loading /></Row>;
  }
  const weatherProps = weatherData.map(flow([titleProps, dailyProps]));
  return (
    <Row>
      {weatherProps.map(props => <Weather {...props} />)}
    </Row>
  );
};

// TODO Build a custom type
WeatherWrapper.propTypes = {
  weatherData: PropTypes.object.isRequired,
};

export default WeatherWrapper;
