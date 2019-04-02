import { EVENT_FETCHED } from '../actions/events'
import {TICKET_CREATE_SUCCESS} from '../actions/ticket'

export default (state = null, action = {}) => {
  switch (action.type) {
    case EVENT_FETCHED:
      return action.event
    case TICKET_CREATE_SUCCESS:
        return {...state, ticket: [action.ticket] }
    default:
      return state
  }
}

