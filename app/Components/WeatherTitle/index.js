import React from 'react';
import Title from '../Title';
import Column from '../Column';
import Row from '../Row';
import WeatherIcon, { Degree } from '../WeatherIcons';
import { titleProp } from '../../types';

const WeatherTitle = ({
  name, icon, temperature, summary,
}) => (
  <Column>
    <Title>{name}</Title>
    <Column>
      <Row key={`temp-${name}`}>
        <WeatherIcon name={icon} />
        <span>{Math.ceil(temperature)}<Degree />F</span>
      </Row>
      <Row key={`sum-${icon}`}>
        {summary}
      </Row>
    </Column>
  </Column>
);

WeatherTitle.propTypes = titleProp;

export default WeatherTitle;
