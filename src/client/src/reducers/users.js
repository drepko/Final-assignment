import { USERS_FETCHED} from '../actions/users'

export default (state = null, action = {}) => {
    switch (action.type) {
        case USERS_FETCHED:
            return action.users            
        default:
            return state

    }
}