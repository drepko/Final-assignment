import request from 'superagent'
export const TICKET_FETCHED = 'TICKET_FETCHED'
export const TICKET_CREATE_SUCCESS = 'TICKET_CREATE_SUCCESS'
export const COMMENT_CREATE_SUCCESS = 'COMMENT_CREATE_SUCCESS'

const baseUrl = 'http://localhost:4000'

const ticketFetched = ticket => ({
    type: TICKET_FETCHED,
    ticket
})

export const loadTicket = (id) => (dispatch, getState) => {
    request(`${baseUrl}/tickets/${id}`)
        .then(response => {
            dispatch(ticketFetched(response.body))
        })
        .catch(console.error)
}

const ticketCreateSuccess = ticket => ({
    type: TICKET_CREATE_SUCCESS,
    ticket
})

export const createTicket = (data, event) => dispatch => {
    console.log('data', data, 'event', event)
    request
        .post(`${baseUrl}/events/${event}`)
        .send(data)
        .then(response => {
            dispatch(ticketCreateSuccess(response.body))
        })
        .catch(console.error)
}

const commentCreateSuccess = comment => ({
    type: COMMENT_CREATE_SUCCESS,
    comment
})

export const createComment = (data, ticket) => dispatch => {
    request
        .post(`${baseUrl}/tickets/${ticket}`)
        .send(data)
        .then(response => {
            dispatch(commentCreateSuccess(response.body))
        })
        .catch(console.error)
}
