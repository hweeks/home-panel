import {
  GET_LIGHTS,
  RECEIVE_LIGHTS,
  FAIL_LIGHTS,
  GET_GROUPS,
  RECEIVE_GROUPS,
  FAIL_GROUPS,
} from '../actions';

const initialState = {
  isLoading: true,
  lightData: null,
};

const lightsFetched = (state, payload) => {
  const lightObj = {
    lightData: payload,
    isLoading: false,
  };
  return Object.assign({}, state, lightObj);
};

const groupsFetched = (state, payload) => {
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
