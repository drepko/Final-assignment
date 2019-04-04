import React from 'react'
import { connect } from 'react-redux'
import EventList from './EventList'
import { loadEvents } from '../actions/events'
import CreateEventFormContainer from './CreateEventFormContainer'
import './EventListContainer.css'
//import Pagination from "react-js-pagination";

class EventListContainer extends React.Component {
  componentDidMount() {
    this.props.loadEvents()
  }

  render() {
    return (
      <div className = 'events'>
        <div className='eventcontainer'>
          <EventList events={this.props.events}
          />
        </div>
        <div id="eventform">
          <CreateEventFormContainer />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  events: state.events
})

export default connect(mapStateToProps, { loadEvents })(EventListContainer)