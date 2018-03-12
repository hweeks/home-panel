import config from '../hpconfig';

export const GET_LIGHTS = 'GET_LIGHTS';
function getLights() {
  return {
    type: GET_LIGHTS,
  };
}

export const RECEIVE_LIGHTS = 'RECEIVE_LIGHTS';
function receiveLights(res) {
  return {
    type: RECEIVE_LIGHTS,
    payload: res,
  };
}

export const FAIL_LIGHTS = 'FAIL_LIGHTS';
function failLights(res) {
  return {
    type: FAIL_LIGHTS,
    payload: res,
  };
}

export const GET_GROUPS = 'GET_GROUPS';
function getGroups() {
  return {
    type: GET_GROUPS,
  };
}

export const RECEIVE_GROUPS = 'RECEIVE_GROUPS';
function receiveGroups(res) {
  return {
    type: RECEIVE_GROUPS,
    payload: res,
  };
}

export const FAIL_GROUPS = 'FAIL_GROUPS';
function failGroups(res) {
  return {
    type: FAIL_GROUPS,
    payload: res,
  };
}

export function getLightStatus() {
  return (dispatch) => {
    dispatch(getLights());
    const { hue } = config;
    return fetch(`${hue}/lights`).then(res => res.json()).then((res) => {
      dispatch(receiveLights(res));
    }).catch(res => dispatch(failLights(res)));
  };
}

export function getGroupsStatus() {
  return (dispatch) => {
    dispatch(getGroups());
    const { hue } = config;
    return fetch(`${hue}/groups`).then(res => res.json()).then((res) => {
      dispatch(receiveGroups(res));
    }).catch(res => dispatch(failGroups(res)));
  };
}
