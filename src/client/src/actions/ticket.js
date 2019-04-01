import request from 'superagent'
export const TICKET_FETCHED = 'TICKET_FETCHED'

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