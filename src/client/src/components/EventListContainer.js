import React from 'react'
import { connect } from 'react-redux'
import EventList from './EventList'
import { loadEvents } from '../actions/events'
import CreateEventFormContainer from './CreateEventFormContainer'


class EventListContainer extends React.Component {
  componentDidMount() {
    this.props.loadEvents()
  }

  render() {
    return (
    <div>
    <EventList events={this.props.events}
    />
    <CreateEventFormContainer/>  
    </div>
    )}
}

const mapStateToProps = state => ({
  events: state.events
})

export default connect(mapStateToProps, { loadEvents})(EventListContainer)