import { ADS_FETCHED, AD_CREATE_SUCCESS} from '../actions/ads'

export default (state = null, action = {}) => {
    switch (action.type) {
        case ADS_FETCHED:
            //console.log('action.ads', action.ads)
            return action.ads
        case AD_CREATE_SUCCESS:
            if (!state) {
                return state
            } else {
                return [action.ad, ...state]
            }            
        default:
            return state

    }
}
