import React from 'react';
import PropTypes from 'prop-types';
import Row from '../Row';
import Column from '../Column';
import Loading from '../Loading';
import Light from '../Light';
import Title from '../Title';
import { LightsContainer, LightButton } from './styles';
import { lightProp } from '../../types';

const HueGroup = ({ name, lights, setLights }) => (
  <LightsContainer key={`hue-group-${name}`}>
    <Title>{name}</Title>
    <Row>{lights.map(props => <Light {...props} />)}</Row>
    <Row>
      <LightButton
        onClick={() => {
          const ids = lights.map(item => item.id);
          const state = lights[0].isOn !== 'on';
          setLights(ids, state);
        }}
      >{lights[0].isOn === 'on' ? 'Turn Off' : 'Turn On'}
      </LightButton>
    </Row>
  </LightsContainer>
);

HueGroup.propTypes = {
  name: PropTypes.string.isRequired,
  setLights: PropTypes.func.isRequired,
  lights: PropTypes.arrayOf(PropTypes.shape(lightProp)).isRequired,
};

const HueWrapper = ({ lightData, setLights }) => {
  if (!lightData) {
    return <Row key="hue-loader"><Loading /></Row>;
  }
  const allLights = lightData.map(item => item.lights).reduce((all, prev) => all.concat(prev), []);
  const ids = allLights.map(itm => itm.id);
  const state = allLights.every(itm => itm.isOn === 'on');
  return (
    <Column>
      <Row key="hue-wrapper">
        {lightData.map(props => <HueGroup setLights={setLights} {...props} />)}
      </Row>
      <Row>
        <LightButton onClick={() => setLights(ids, !state)}>
          {state ? 'Toggle All Off' : 'Toggle All On'}
        </LightButton>
      </Row>
    </Column>
  );
};

HueWrapper.propTypes = {
  setLights: PropTypes.func.isRequired,
  lightData: PropTypes.arrayOf(PropTypes.shape(HueGroup.propTypes)).isRequired,
};

export default HueWrapper;
