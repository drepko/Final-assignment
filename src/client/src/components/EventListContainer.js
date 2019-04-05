import React from 'react'
import { connect } from 'react-redux'
import EventList from './EventList'
import { loadEvents } from '../actions/events'
import CreateEventFormContainer from './CreateEventFormContainer'
import './EventListContainer.css'
import { transparent } from 'material-ui/styles/colors';
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
      this.setState((prevState) => ({ itemsCount: (prevState.itemsCount + 9), start: (prevState.start + 9) }));
    }
  }

  renderPrevItem = () => {
    if (this.state.itemsCount > 9) {
      this.setState((prevState) => ({ itemsCount: (prevState.itemsCount - 9), start: (prevState.start - 9) }));

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


          <div class="outer">
            <div class="inner"><button id='backbutton' onClick={this.renderPrevItem}>BACK</button>

            <div class="inner"><button id='nextbutton' onClick={this.renderNewItem}>NEXT</button></div>
            </div>
          </div>

        </div>

        <div id="eventform">
          <CreateEventFormContainer />
        </div>
        <div style={{ color: transparent }}>spacing</div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  events: state.events
})

export default connect(mapStateToProps, { loadEvents })(EventListContainer)