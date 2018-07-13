import { combineReducers } from 'redux';
import song from './song';
import list from './list';

export default combineReducers({
  [song.constants.NAME]: song.reducer,
  [list.constants.NAME]: list.reducer
});