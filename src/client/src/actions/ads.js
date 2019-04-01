import request from 'superagent'
export const ADS_FETCHED = 'ADS_FETCHED'
export const AD_FETCHED = 'AD_FETCHED'
export const AD_CREATE_SUCCESS = 'AD_CREATE_SUCCESS'
export const AD_DELETE_SUCCESS = 'AD_DELETE_SUCCESS'

const baseUrl = 'http://localhost:4000'

const adsFetched = ads => ({
    type: ADS_FETCHED,
    ads
})

export const loadAds = () => (dispatch, getState) => {
    if (getState().ads) return

    request(`${baseUrl}/ads`)
        .then(response => {
            dispatch(adsFetched(response.body))
        })
        //.then(response => console.log(response.body))
        .catch(console.error)
}

const adFetched = ad => ({
    type: AD_FETCHED,
    ad
})

export const loadAd = (id) => (dispatch, getState) => {
    request(`${baseUrl}/ads/${id}`)
        .then(response => {
            dispatch(adFetched(response.body))
        })
        //.then(res => console.log('load ad action creator',res.body))
        .catch(console.error)
}


const adCreateSuccess = ad => ({
    type: AD_CREATE_SUCCESS,
    ad
})

export const createAd = (data) => dispatch => {
    request
        .post(`${baseUrl}/ads`)
        .send(data)
        .then(response => {
            dispatch(adCreateSuccess(response.body))
        })
        .catch(console.error)
}

const adDeleted = ad => ({
    type: AD_DELETE_SUCCESS,
    ad
  })
  
  export const deleteAd = (id) => (dispatch) => {
    request
    .delete(`${baseUrl}/ads/${id}`)
      .then(response => {
        dispatch(adDeleted(id))
      })
      .catch(console.error)
  }