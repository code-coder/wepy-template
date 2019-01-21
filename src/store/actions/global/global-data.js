import { createActions } from 'redux-actions';

const actionTypes = {
  UPDATE_GLOBAL_DATA: 'UPDATE_GLOBAL_DATA'
};

const { updateGlobalData } = createActions({
  [actionTypes.UPDATE_GLOBAL_DATA]: payload => payload
});

export { actionTypes, updateGlobalData };
