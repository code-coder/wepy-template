import { combineReducers } from 'redux';
import { globalDataReducer as globalData } from './global-data';
import { minAppSettingsReducer as settings } from './min-app-settings';

export default combineReducers({ globalData, settings });
