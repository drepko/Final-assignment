import React from 'react'
import { connect } from 'react-redux'
import EventDetail from './EventDetail'
import { loadEvent } from '../actions/events'

class EventDetailContainer extends React.Component {

  componentDidMount() {
    this.props.loadEvent(Number(this.props.match.params.id))
  }

  render() {
    return (
      <div>
        <EventDetail
          event={this.props.event}
        />
      </div>)
  }
}


const mapStateToProps = state => ({
  event: state.event,
})

export default connect(mapStateToProps, { loadEvent })(EventDetailContainer)