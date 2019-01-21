import { effects } from 'redux-saga/dist/redux-saga';
import { getMinAppSettingApi } from '../../../api/api';
import { actionTypes, minAppSettingsSuccess, minAppSettingsFailure } from '../../actions/global/min-app-settings';
const { call, put, takeEvery } = effects;

function* minAppSettings(action) {
  try {
    const data = yield call(getMinAppSettingApi, { method: 'GET', data: action.payload.params });
    if (data) {
      yield put(minAppSettingsSuccess(data));
    } else {
      yield put(minAppSettingsFailure(data));
    }
  } catch (e) {
    // something goes wrong
    console.log('something goes wrong:', e);
  }
}

export default function* watchMinAppSettingsSaga() {
  yield takeEvery(actionTypes.MIN_APP_SETTINGS_START, minAppSettings);
}
