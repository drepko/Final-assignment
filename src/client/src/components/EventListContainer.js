import React from 'react'
import { connect } from 'react-redux'
import EventList from './EventList'
import { loadEvents } from '../actions/events'


class EventListContainer extends React.Component {
  componentDidMount() {
    this.props.loadEvents()
  }

  render() {
    return <EventList events={this.props.events}
    />
  }
}

const mapStateToProps = state => ({
  //ad: state.ad,
  events: state.events
})

export default connect(mapStateToProps, { loadEvents})(EventListContainer)