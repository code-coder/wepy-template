import { createActions } from 'redux-actions';

const actionTypes = {
  MIN_APP_SETTINGS_START: 'MIN_APP_SETTINGS_START',
  MIN_APP_SETTINGS_SUCCESS: 'MIN_APP_SETTINGS_SUCCESS',
  MIN_APP_SETTINGS_FAILURE: 'MIN_APP_SETTINGS_FAILURE'
};
const { minAppSettingsStart, minAppSettingsSuccess, minAppSettingsFailure } = createActions({
  [actionTypes.MIN_APP_SETTINGS_START]: payload => payload,
  [actionTypes.MIN_APP_SETTINGS_SUCCESS]: payload => payload,
  [actionTypes.MIN_APP_SETTINGS_FAILURE]: payload => payload
});

export { actionTypes, minAppSettingsStart, minAppSettingsSuccess, minAppSettingsFailure };
