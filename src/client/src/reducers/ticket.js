import { TICKET_FETCHED } from '../actions/ticket'
import { COMMENT_CREATE_SUCCESS } from '../actions/ticket'

export default (state = null, action = {}) => {
  switch (action.type) {
    case TICKET_FETCHED:
      return action.ticket
      case COMMENT_CREATE_SUCCESS:
      return {...state, comments: state.comments.concat(action.comment)}
    default:
      return state
  }
}

// case TICKET_CREATE_SUCCESS:
// return {...state, tickets: state.tickets.concat(action.ticket)}