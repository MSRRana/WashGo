import {SET_USER_DETAILS} from '../actions/ActionType';

export const setUserDetails = data => {
  return async dispatch => {
    dispatch({type: SET_USER_DETAILS, payload: data});
  };
};
