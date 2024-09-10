import {SET_USER_DETAILS} from '../actions/ActionType';

const INITIAL_STATE = {
  userDetails: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER_DETAILS:
      return {...state, userDetails: action.payload};

    default:
      return state;
  }
};
