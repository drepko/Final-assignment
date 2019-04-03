import { combineReducers } from 'redux'
import events from './events'
import event from './event'
import ticket from './ticket'
import login from './login'
import signup from './signup'
import users from './users'
import currentUser from './currentUser'

export default combineReducers({
    events,
    event,
    ticket,
    login,
    signup,
    users,
    currentUser
})

