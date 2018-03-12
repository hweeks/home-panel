import React from 'react';
import PropTypes from 'prop-types';
import { LightContainer } from './styles';

const Light = ({ name, isOn, level }) => (
  <LightContainer>
    <div>{name}</div>
    <div>{isOn}</div>
    {isOn === 'on' && <div>{level}%</div>}
  </LightContainer>
);

Light.propTypes = {
  name: PropTypes.string.isRequired,
  isOn: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
};

export default Light;
