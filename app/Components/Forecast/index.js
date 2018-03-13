import React from 'react';
import Column from '../Column';
import Row from '../Row';
import WeatherIcon, { Degree } from '../WeatherIcons';
import { Summary, Temp } from './styles';
import { forecastProp } from '../../types';

const Forecast = ({
  icon, high, low, summary,
}) => (
  <Column key={`temp-${high - low}`}>
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

Forecast.propTypes = forecastProp;

export default Forecast;
