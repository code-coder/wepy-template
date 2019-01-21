import { UPDATE_GLOBAL_DATA } from '../../types/global/global-data';
import { handleAction } from 'redux-actions';

const initState = { showFocusTips: true, model: '', loginStatus: '' };

const globalDataReducer = handleAction(
  UPDATE_GLOBAL_DATA,
  (state, { payload }) => {
    payload.isLogin = payload.loginStatus && payload.loginStatus === 'login';
    return { ...state, ...payload };
  },
  initState
);
export { globalDataReducer };
