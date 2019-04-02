import { TICKET_FETCHED, TICKET_CREATE_SUCCESS } from '../actions/ticket'

export default (state = null, action = {}) => {
  switch (action.type) {
    case TICKET_FETCHED:
      return action.ticket
      // case TICKET_CREATE_SUCCESS:
      // if (!state) {
      //     return state
      // } else {
      //     return [action.ticket, ...state]
      // }
    default:
      return state
  }
}