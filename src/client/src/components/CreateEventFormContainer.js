import React from 'react'
import { connect } from 'react-redux'
import EventForm from './EventForm'
import {createEvent } from '../actions/events'
import {getUsers} from '../actions/users'
import {userId} from '../jwt'

class CreateEventFormContainer extends React.Component {
    state = {
        name: '', 
        description: '',
        picture: '',
        start: '',
        end: ''
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.setState({
            name: '', 
            description: '',
            picture: '',
            start: '',
            end: ''
        })
        this.props.createEvent(this.state)
    }

    notSubmit = () => {
        alert('Please login to post a ticket!')
    }

    componentWillMount() {
        if (this.props.authenticated) {
          if (this.props.users === null) this.props.getUsers()
        }
      }

    render() {
        return (
            <EventForm
                onSubmit={this.props.authenticated? this.onSubmit: this.notSubmit}
                onChange={this.onChange}
                formValues={this.state}
                authenticated = {this.props.authenticated}
            />)
    }
}

const mapStateToProps = (state) => ({
    authenticated: state.currentUser !== null,
    userId: state.currentUser && userId(state.currentUser.jwt),
    users: state.users  })
  
  export default connect(mapStateToProps, {createEvent, getUsers})(CreateEventFormContainer)
