import { combineReducers } from 'redux';
import usersReducers from './usersReducer';
import authReducers from './authReducer';

export default combineReducers({
  users: usersReducers,
  auth: authReducers
});