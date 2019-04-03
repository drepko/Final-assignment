import { TICKET_FETCHED, UPDATE_TICKET_SUCCESS } from '../actions/ticket'
import { COMMENT_CREATE_SUCCESS } from '../actions/ticket'
//import {TICKET_CREATE_SUCCESS} from '../actions/ticket'

export default (state = null, action = {}) => {
  switch (action.type) {
    case TICKET_FETCHED:
      return action.ticket
      case COMMENT_CREATE_SUCCESS:
      return {...state, comments: state.comments.concat(action.comment)}
      case UPDATE_TICKET_SUCCESS:
      //return {...state, comments: state.comments}, action.ticket
      //console.log('state', state)
      //return {...state, comments: state.comments}, action.ticket
      return {...state}, action.ticket
    default:
      return state
  }
}

// case TICKET_CREATE_SUCCESS:
// return {...state, tickets: state.tickets.concat(action.ticket)}