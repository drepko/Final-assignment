import React from 'react'
import { connect } from 'react-redux'
import request from 'superagent'
import AdList from './adList'
import { loadAds, deleteAd } from '../actions/ads'


class AdListContainer extends React.Component {
  componentDidMount() {
    this.props.loadAds()
  }

  onDelete = () => {
    console.log('ondelete functie', this.props.ads)
    this.props.deleteAd(this.props.ad)
    this.props.history.push('/')
  }

  render() {
    console.log(this.props.ads)
    return <AdList ads={this.props.ads}
      onDelete={this.onDelete}
    />
  }
}

const mapStateToProps = state => ({
  ad: state.ad,
  ads: state.ads
})

export default connect(mapStateToProps, { loadAds, deleteAd })(AdListContainer)