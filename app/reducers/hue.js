import flow from 'lodash.flow'
import {
  GET_LIGHTS,
  RECEIVE_LIGHTS,
  FAIL_LIGHTS,
  GET_GROUPS,
  RECEIVE_GROUPS,
  FAIL_GROUPS,
} from '../actions';

const buildLightObject = (light) => {
  const { name, state } = light[1];
  const id = light[0];
  const level = Math.ceil((state.bri / 254) / 0.01);
  const isOn = state.on ? 'on' : 'off';
  return Object.assign({}, { name, isOn, level, id });
};

const combineGroupAndLight = (lights, groups) => {
  const lightArr = Object.entries(lights).map(buildLightObject);
  const groupArr = Object.entries(groups).map(info => Object.assign({}, info[1]));
  return groupArr.map((group) => {
    let {lights, name} = group
    lights = lights.map(val => lightArr.find(item => item.id === val));
    return {lights, name};
  });
};

const initialState = {
  lightData: null,
};

const lightsFetched = (state, [lights, groups]) => {
  const lightObj = {
    lightData: combineGroupAndLight(lights, groups),
    isLoading: false,
  };
  return Object.assign({}, state, lightObj);
};

const groupsFetched = (state, payload) => {
  debugger
  const groupObj = {
    groupData: payload,
    isLoading: false,
  };
  return Object.assign({}, state, groupObj);
};

const lightsFailed = (state, payload) => ({
  isError: true,
  isLoading: false,
  message: payload,
});

const hue = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIGHTS:
      return state;
    case RECEIVE_LIGHTS:
      return lightsFetched(state, action.payload);
    case FAIL_LIGHTS:
      return lightsFailed(state, action.payload);
    case GET_GROUPS:
      return state;
    case RECEIVE_GROUPS:
      return groupsFetched(state, action.payload);
    case FAIL_GROUPS:
      return lightsFailed(state, action.payload);
    default:
      return state;
  }
};

export default hue;
