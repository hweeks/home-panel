import config from '../hpconfig';

export const GET_WEATHER = 'GET_WEATHER';
function getWeather() {
  return {
    type: GET_WEATHER,
  };
}

export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';
function receiveWeather(results, names) {
  const builtResults = results.map((item, ind) => Object.assign({}, item, { name: names[ind] }));
  return {
    type: RECEIVE_WEATHER,
    payload: builtResults,
  };
}

export const FAIL_WEATHER = 'FAIL_WEATHER';
function failWeather(res) {
  return {
    type: FAIL_WEATHER,
    payload: res,
  };
}


export function getForecast() {
  return (dispatch) => {
    dispatch(getWeather());
    const { weather } = config;
    const { key, cities } = weather;
    const names = cities.map(item => item.name);
    const citiesFetch = cities.map(({ cords }) => fetch(`api/weather/${key}/${cords}`));
    return Promise.all(citiesFetch).then(results => Promise.all(results.map(res => res.json()))).then(results => dispatch(receiveWeather(results, names))).catch(res => dispatch(failWeather(res)));
  };
}
