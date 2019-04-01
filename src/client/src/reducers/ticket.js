import { TICKET_FETCHED } from '../actions/ticket'

export default (state = null, action = {}) => {
  switch (action.type) {
    case TICKET_FETCHED:
      return action.ticket
    default:
      return state
  }
}