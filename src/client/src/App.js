import React, { Component } from 'react';
import './App.css';
import EventListContainer from './components/EventListContainer'
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'
import EventDetailContainer from './components/EventDetailContainer'
// import CreateAdFormContainer from './components/createAdFormContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/" exact component={EventListContainer} />
          {/* <Route path="/" exact component={CreateAdFormContainer} /> */}
          <Route path="/events/:id" component={EventDetailContainer} />
        </div>
      </Provider>

    );
  }
}

export default App;

