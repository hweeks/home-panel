import React from 'react';
import PropTypes from 'prop-types';
import flow from 'lodash.flow';
import Row from '../Row';
import Loading from '../Loading';
import Light from '../Light';
import Title from '../Title';
import { LightsContainer } from './styles';

const buildLightObject = (light) => {
  const { name, state } = light[1];
  const id = light[0];
  const level = Math.ceil((state.bri / 254) / 0.01);
  const isOn = state.on ? 'on' : 'off';
  return Object.assign({}, { name }, { isOn }, { level }, { id });
};

const combineGroupAndLight = (lights, groups) => {
  const lightArr = Object.entries(lights).map(buildLightObject);
  const groupArr = Object.entries(groups).map(info => Object.assign({}, info[1]));
  return groupArr.map((group) => {
    group.lights = group.lights.map(val => lightArr.find(item => item.id === val));
    return group;
  });
};

const LightGroups = fancyGroupData => fancyGroupData.map((groupData) => {
  const { name, lights } = groupData;
  const groupTitle = name;
  const lightContainers = lights.map(({ name, isOn, level }) => <Light isOn={isOn} name={name} level={level} />);
  return (
    <LightsContainer>
      <Title>{groupTitle}</Title>
      <Row>{lightContainers}</Row>
    </LightsContainer>
  );
});

const HueContainer = ({ lightData, groupData }) => {
  if (!lightData || !groupData) {
    return <Row><Loading /></Row>;
  }
  return (
    <Row>
      {flow([combineGroupAndLight, LightGroups])(lightData, groupData)}
    </Row>
  );
};

// TODO: Custom type shape here
HueContainer.propTypes = {
  lightData: PropTypes.object.isRequired,
  groupData: PropTypes.object.isRequired,
};

export default HueContainer;
