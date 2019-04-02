import request from 'superagent'
export const USERS_FETCHED = 'USERS_FETCHED'
export const USER_FETCHED = 'USER_FETCHED'

const baseUrl = 'http://localhost:4000'

const usersFetched = users => ({
    type: USERS_FETCHED,
    users
})

export const loadUsers = () => (dispatch, getState) => {
    if (getState().users) return

    request(`${baseUrl}/users`)
        .then(response => {
            dispatch(usersFetched(response.body))
        })
        //.then(response => console.log(response.body))
        .catch(console.error)
}

const userFetched = user => ({
    type: USER_FETCHED,
    user
})

export const loadUser = (id) => (dispatch, getState) => {
    request(`${baseUrl}/users/${id}`)
        .then(response => {
            dispatch(userFetched(response.body))
        })
        //.then(res => console.log('load ad action creator',res.body))
        .catch(console.error)
}




