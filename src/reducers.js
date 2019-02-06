import { combineReducers } from "redux";
import homeReducers from './containers/Home/reducers';

export default combineReducers({
  home: homeReducers,
});
