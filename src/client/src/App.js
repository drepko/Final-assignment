import React, { Component } from 'react';
import './App.css';
import EventListContainer from './components/EventListContainer'
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'
import EventDetailContainer from './components/EventDetailContainer'
// import CreateAdFormContainer from './components/createAdFormContainer'
import TicketDetailContainer from './components/TicketDetailContainer'
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import LogoutPage from './components/LogoutPage'
import TopBar from './components/TopBar'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
        <nav>
            <TopBar />
          </nav>
          <main style={{marginTop:75}}>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/logout" component={LogoutPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route path="/" exact component={EventListContainer} />
          {/* <Route path="/" exact component={CreateAdFormContainer} /> */}
          <Route path="/events/:id" component={EventDetailContainer} />
          <Route path="/tickets/:id" component={TicketDetailContainer} />
          </main>
        </div>
      </Provider>

    );
  }
}

export default App;

