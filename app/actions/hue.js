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

const returnJson = res => res.json();

export function getLightStatus() {
  return (dispatch) => {
    dispatch(getLights());
    const { hue } = config;
    const lightsFetch = [
      fetch(`${hue}/lights`),
      fetch(`${hue}/groups`),
    ];
    return Promise.all(lightsFetch).then(
      results => Promise.all(results.map(returnJson)),
    ).then(res => dispatch(receiveLights(res))).catch(res => dispatch(failLights(res)));
  };
}

export function setLightStatus(ids, state) {
  return (dispatch) => {
    const { hue } = config;
    const putPayload = { method: 'PUT', body: JSON.stringify({ on: state }) };
    const lights = ids.map(id => fetch(`${hue}/lights/${id}/state`, putPayload));
    return Promise.all(lights).then(
      results => Promise.all(results.map(returnJson)),
    ).then(() => getLightStatus()(dispatch)).catch(res => dispatch(failLights(res)));
  };
}
