import { effects } from 'redux-saga/dist/redux-saga';
import watchMinAppSettingsSaga from './min-app-settings';

const { all, fork } = effects;
export default function* globalRoot() {
  yield all([fork(watchMinAppSettingsSaga)]);
}
