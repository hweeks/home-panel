import React from 'react';
import PropTypes from 'prop-types';
import Column from '../Column';
import Row from '../Row';
import WeatherIcon, { Degree } from '../WeatherIcons';
import { Summary, Temp } from './styles';

const Forecast = ({
  icon, high, low, summary,
}) => (
  <Column>
    <Column>
      <Row>
        <Temp>High {Math.ceil(high)}<Degree />F</Temp>
        <WeatherIcon name={icon} />
        <Temp>Low {Math.ceil(low)}<Degree />F</Temp>
      </Row>
      <Summary>
        {summary}
      </Summary>
    </Column>
  </Column>
);

Forecast.propTypes = {
  icon: PropTypes.string.isRequired,
  high: PropTypes.number.isRequired,
  low: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
};

export default Forecast;
