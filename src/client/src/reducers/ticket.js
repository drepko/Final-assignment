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
      //console.log('state', state)
      //return {...state, comments: state.comments}, action.ticket
      //console.log('state', state)
      //return {...state, comments: state.comments}, action.ticket
      //return {...state, ...state.comments}, action.ticket
      //return {...state, ...state.comments}, action.ticket
      if(action.ticket.picture) {
        state.picture =  action.ticket.picture
      }
      if (action.ticket.description)
      state.description = action.ticket.description
      if (action.ticket.price) {
        state.price = action.ticket.price
      }
    default:
      return state
  }
}

// case TICKET_CREATE_SUCCESS:
// return {...state, tickets: state.tickets.concat(action.ticket)}