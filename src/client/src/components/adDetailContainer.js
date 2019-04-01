import React from 'react'
import {connect} from 'react-redux'
import AdDetail from './adDetail'
//import {loadEvent, updateEvent, deleteEvent} from '../actions/events'
import { loadAd, deleteAd } from '../actions/ads'

class AdDetailContainer extends React.Component {
//   state = { editMode: false }

//   onEdit = () => {

//     this.setState({
//       editMode: true,
//       formValues: {
//         name: this.props.event.name,
//         date: this.props.event.date,
//         description: this.props.event.description
//       }
//     })
//   }

//   onChange = (event) => {
//     this.setState({
//       formValues: {
//         ...this.state.formValues,
//         [event.target.name]: event.target.value
//       }
//     })
//   }

//   onSubmit = (event) => {
//     event.preventDefault()
//     this.setState({
//       editMode: false
//     })
//     this.props.updateEvent(this.props.event.id, this.state.formValues)
//   }

  componentDidMount() {
    this.props.loadAd(Number(this.props.match.params.id))
  }

  onDelete = () => {
    //console.log('ondelete functie', this.props.ads)
    this.props.deleteAd(this.props.ad.id)
    this.props.history.push('/')
  }

  render() {
      console.log('props in detailContainer', this.props.ad)
      //console.log(this.onDelete)
    return (
    <div>
    <AdDetail
      ad={this.props.ad}
      onDelete={this.onDelete}

    //   editMode={this.state.editMode}
    //   onEdit={this.onEdit}
    //   onChange={this.onChange}
    //   onSubmit={this.onSubmit}
    //   formValues={this.state.formValues}
      />
    </div>)
  }
}


const mapStateToProps = state => ({
  ad: state.ad,
})

export default connect(mapStateToProps, {loadAd, deleteAd})(AdDetailContainer)