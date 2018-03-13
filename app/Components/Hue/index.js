import React from 'react';
import PropTypes from 'prop-types';
import Row from '../Row';
import Loading from '../Loading';
import Light from '../Light';
import Title from '../Title';
import { LightsContainer } from './styles';
import { lightProp } from '../../types';

const HueGroup = ({ name, lights }) => (
  <LightsContainer key={`hue-group-${name}`}>
    <Title>{name}</Title>
    <Row>{lights.map(props => <Light {...props} />)}</Row>
  </LightsContainer>
);

HueGroup.propTypes = {
  name: PropTypes.string,
  lights: PropTypes.arrayOf(PropTypes.shape(lightProp)),
};

const HueWrapper = ({ lightData }) => {
  if (!lightData) {
    return <Row key="hue-loader"><Loading /></Row>;
  }
  return (
    <Row key="hue-wrapper">
      {lightData.map(props => <HueGroup {...props} />)}
    </Row>
  );
};

HueWrapper.propTypes = {
  lightData: PropTypes.arrayOf(PropTypes.shape(HueGroup.propTypes)),
};

export default HueWrapper;
