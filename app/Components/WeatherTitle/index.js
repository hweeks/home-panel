import React from 'react';
import PropTypes from 'prop-types'
import Title from '../Title';
import Column from '../Column';
import Row from '../Row';
import WeatherIcon, { Degree } from '../WeatherIcons';

const WeatherTitle = ({
  name, icon, temperature, summary,
}) => (
  <Column>
    <Title>{name}</Title>
    <Column>
      <Row>
        <WeatherIcon name={icon} />
        <span>{Math.ceil(temperature)}<Degree />F</span>
      </Row>
      <Row>
        {summary}
      </Row>
    </Column>
  </Column>
);

WeatherTitle.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
}

export default WeatherTitle;
