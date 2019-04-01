import request from 'superagent'
export const EVENTS_FETCHED = 'EVENTS_FETCHED'
export const EVENT_FETCHED = 'EVENT_FETCHED'
export const EVENT_CREATE_SUCCESS = 'EVENT_CREATE_SUCCESS'

const baseUrl = 'http://localhost:4000'

const eventsFetched = events => ({
    type: EVENTS_FETCHED,
    events
})

export const loadEvents = () => (dispatch, getState) => {
    if (getState().events) return

    request(`${baseUrl}/events`)
        .then(response => {
            dispatch(eventsFetched(response.body))
        })
        //.then(response => console.log(response.body))
        .catch(console.error)
}

const eventFetched = event => ({
    type: EVENT_FETCHED,
    event
})

export const loadEvent = (id) => (dispatch, getState) => {
    request(`${baseUrl}/events/${id}`)
        .then(response => {
            dispatch(eventFetched(response.body))
        })
        //.then(res => console.log('load ad action creator',res.body))
        .catch(console.error)
}


const eventCreateSuccess = ad => ({
    type: EVENT_CREATE_SUCCESS,
    ad
})

export const createEvent = (data) => dispatch => {
    request
        .post(`${baseUrl}/events`)
        .send(data)
        .then(response => {
            dispatch(eventCreateSuccess(response.body))
        })
        .catch(console.error)
}

