import React from 'react'
import { connect } from 'react-redux'
import EventList from './EventList'
import { loadEvents } from '../actions/events'
import CreateEventFormContainer from './CreateEventFormContainer'
import './EventListContainer.css'
//import Pagination from "react-js-pagination";

class EventListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsCount: 9,
      start: 0
    };
  }

  renderNewItem = () => {
    if (this.state.itemsCount < this.props.events.length) {
      this.setState((prevState) => ({ itemsCount: (prevState.itemsCount + 9), start: (prevState.start + 9)}));
    }
  }

  renderPrevItem = () => {
    if(this.state.itemsCount > 9) {
      this.setState((prevState) => ({ itemsCount: (prevState.itemsCount - 9), start: (prevState.start - 9)}));

    }
  }
  componentDidMount() {
    this.props.loadEvents()
  }

  render() {
    if (this.props.events === null) {
      return <div>Loading...</div>
    }
    return (

      <div className='events'>
        <div className='eventcontainer'>
          {/* <EventList events={this.props.events} */}
          <EventList
            events={this.props.events.slice(this.state.start, this.state.itemsCount)} />
          <button id = 'nextbutton' onClick={this.renderNewItem}>NEXT</button>
          <button id = 'backbutton' onClick={this.renderPrevItem}>BACK</button>

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