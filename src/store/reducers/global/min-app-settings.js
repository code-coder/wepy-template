import { actionTypes } from '../../actions/global/min-app-settings';
import { handleAction } from 'redux-actions';

const initState = { homePageShareParams: {}, companyDetailShareParams: '{}', seminarDetailParams: '{}' };

const minAppSettingsReducer = handleAction(
  actionTypes.MIN_APP_SETTINGS_SUCCESS,
  (state, { payload }) => {
    if (!payload) return { suggestionsWechatNumber: '暂无' };
    payload.suggestionsWechatNumber = payload.suggestionsWechatNumber || '暂无';
    return { ...state, ...payload };
  },
  initState
);
export { minAppSettingsReducer };
