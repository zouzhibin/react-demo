import {combineReducers} from 'redux'
import user from './user'
import {connectRouter} from 'connected-react-router'
import history from "../../utils/history";
let rootReducer = combineReducers({
    user,
    router:connectRouter(history)
})
export default rootReducer