import { combineReducers } from 'redux';
import hue from './hue';
import weather from './weather';

const homePanelApp = combineReducers({ hue, weather });

export default homePanelApp;
