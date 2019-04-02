import { combineReducers } from 'redux'
import events from './events'
import event from './event'
import ticket from './ticket'
import users from './users'
import login from './login'
import signup from './signup'
//import user from './user'

export default combineReducers({
    events,
    event,
    ticket,
    users,
    login,
    signup
    //user
})

