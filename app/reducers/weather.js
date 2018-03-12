import {
  GET_WEATHER,
  RECEIVE_WEATHER,
  FAIL_WEATHER,
} from '../actions';

const initialState = {
  weatherData: null,
};

const weatherFetched = (state, payload) => Object.assign({}, state, { weatherData: payload });

const weatherFailed = (state, payload) => Object.assign({}, state, { errorMessage: payload });

const weather = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER:
      return state;
    case RECEIVE_WEATHER:
      return weatherFetched(state, action.payload);
    case FAIL_WEATHER:
      return weatherFailed(state, action.payload);
    default:
      return state;
  }
};

export default weather;
