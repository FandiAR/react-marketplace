import { combineReducers } from 'redux';
import login from '../redux-modules/modules/Login';
import home from '../redux-modules/modules/Home';

export default combineReducers({
    login,
    home,
});