import React, { Component } from 'react';
import './App.css';
import EventListContainer from './components/EventListContainer'
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'
import EventDetailContainer from './components/EventDetailContainer'
// import CreateAdFormContainer from './components/createAdFormContainer'
import TicketDetailContainer from './components/TicketDetailContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/" exact component={EventListContainer} />
          {/* <Route path="/" exact component={CreateAdFormContainer} /> */}
          <Route path="/events/:id" component={EventDetailContainer} />
          <Route path="/tickets/:id" component={TicketDetailContainer} />

        </div>
      </Provider>

    );
  }
}

export default App;

