import request from 'superagent'
import { logout } from './users'
import { isExpired } from '../jwt'
export const TICKET_FETCHED = 'TICKET_FETCHED'
export const TICKET_CREATE_SUCCESS = 'TICKET_CREATE_SUCCESS'
export const COMMENT_CREATE_SUCCESS = 'COMMENT_CREATE_SUCCESS'
export const UPDATE_TICKET_SUCCESS = 'UPDATE_TICKET_SUCCESS'

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

export const createTicket = (data, event) => (dispatch, getState) => {
    const state = getState()
    const jwt = state.currentUser.jwt

    if (isExpired(jwt)) return dispatch(logout())

    request
        .post(`${baseUrl}/events/${event}`)
        .set('Authorization', `Bearer ${jwt}`)
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

export const createComment = (data, ticket) => (dispatch, getState) => {
    const state = getState()
    const jwt = state.currentUser.jwt

    if (isExpired(jwt)) return dispatch(logout())

    request
        .post(`${baseUrl}/tickets/${ticket}`)
        .set('Authorization', `Bearer ${jwt}`)
        .send(data)
        .then(response => {
            dispatch(commentCreateSuccess(response.body))
        })
        .catch(console.error)
}

const updateTicketSuccess = (ticket) => ({
    type: UPDATE_TICKET_SUCCESS,
    ticket
})

export const updateTicket = (data, ticketId) => (dispatch, getState) => {
    const state = getState()
    const jwt = state.currentUser.jwt

    if (isExpired(jwt)) return dispatch(logout())
    //console.log('data', data)
    request
        .patch(`${baseUrl}/tickets/${ticketId}`)
        .set('Authorization', `Bearer ${jwt}`)
        .send(data)
        .then(dispatch(updateTicketSuccess(data)))
        .catch(err => console.error(err))
}