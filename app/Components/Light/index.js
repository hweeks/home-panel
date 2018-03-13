import React from 'react';
import PropTypes from 'prop-types';
import { LightContainer } from './styles';
import {
  lightProp,
} from '../../types'

const Light = ({ name, isOn, level, id }) => (
  <LightContainer key={`light-${id}`}>
    <div key={`${name}-${id}`}>{name}</div>
    <div key={`${isOn}-${id}`}>{isOn}</div>
    {isOn === 'on' && <div key={`${level}-${id}`}>{level}%</div>}
  </LightContainer>
);

Light.propTypes = lightProp

export default Light;
