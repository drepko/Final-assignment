import request from 'superagent'
export const COMMENT_CREATE_SUCCESS = 'COMMENT_CREATE_SUCCESS'

const baseUrl = 'http://localhost:4000'

const commentCreateSuccess = comment => ({
    type: COMMENT_CREATE_SUCCESS,
    comment
})

export const createTicket = (data, ticket) => dispatch => {
    console.log('data', data, 'event', ticket)
    request
        .post(`${baseUrl}/events/${ticket}`)
        .send(data)
        .then(response => {
            dispatch(commentCreateSuccess(response.body))
        })
        .catch(console.error)
}


