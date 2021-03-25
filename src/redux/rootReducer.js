import { combineReducers } from 'redux';
import setUpReducer from './testReducer';

export default combineReducers({
  connected: setUpReducer,
});
