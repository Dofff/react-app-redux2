import { combineReducers } from 'redux';
import counter from './counter';
import ui from './ui';
// root reducer
const reducers = combineReducers({
  counter, ui,
});

export default reducers;
