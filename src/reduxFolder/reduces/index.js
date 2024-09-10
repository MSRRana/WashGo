import {combineReducers} from 'redux';
import LoginReducer from '../reduces/LoginReducer';

export default combineReducers({
  loginscreen: LoginReducer,
});
