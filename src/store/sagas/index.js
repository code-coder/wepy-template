import { effects } from 'redux-saga/dist/redux-saga';
import globalRoot from './global';

const { all, fork } = effects;
export default function* root() {
  yield all([fork(globalRoot)]);
}
