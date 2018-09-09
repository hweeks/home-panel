import flow from 'lodash.flow';
import {
  GET_WEATHER,
  RECEIVE_WEATHER,
  FAIL_WEATHER,
} from '../actions';

const initialState = {
  weatherData: null,
};

const titlePropsBuilder = (weatherData) => {
  const { currently: { icon, temperature }, daily: { summary } } = weatherData;
  const { name } = weatherData;
  const titlePropsBuilt = {
    name, icon, temperature, summary,
  };
  return Object.assign({}, { titleProps: titlePropsBuilt }, weatherData);
};

const simpleProps = (dayData) => {
  const {
    icon, apparentTemperatureMin, apparentTemperatureMax, summary,
  } = dayData;
  const temps = { high: apparentTemperatureMax, low: apparentTemperatureMin };
  return Object.assign({}, { icon, summary }, temps);
};

const dailyProps = (weatherData) => {
  const { daily: { data } } = weatherData;
  const { titleProps } = weatherData;
  const forecastProps = data.map(simpleProps).slice(0, 4);
  return Object.assign({}, { forecastProps }, { titleProps });
};

const weatherFetched = (state, payload) => {
  const weatherData = payload.map(flow([titlePropsBuilder, dailyProps]));
  return Object.assign({}, state, { weatherData });
};

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
