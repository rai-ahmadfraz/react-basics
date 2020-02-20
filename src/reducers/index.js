import {combineReducers} from 'redux';
import isLogin from './isLogged';
import user from './user';
const combinedReducer = combineReducers({
    isLogin,
    user
});
export default combinedReducer;