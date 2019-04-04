import React from 'react'
import { connect } from 'react-redux'
import { createTicket } from '../actions/ticket'
import TicketForm from './TicketForm'
import { loadEvent } from '../actions/events'
import {getUsers} from '../actions/users'
import {userId} from '../jwt'
import './CreateTicketFormContainer.css'

class CreateTicketFormContainer extends React.Component {
    state = {
        picture: '',
        price: '',
        description: '',
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.setState({
            picture: '',
            price: '',
            description: '',
        })
        const id = this.props.event.id
        this.props.createTicket(this.state, id)
        //gechecked met 1 of het werkt, dan juiste eventId ophalen
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
            <div className = 'ticketform'>
            <TicketForm 
                onSubmit={this.props.authenticated? this.onSubmit: this.notSubmit}
                onChange={this.onChange}
                formValues={this.state}
                authenticated = {this.props.authenticated}
            />
            </div>)
    }
}

const mapStateToProps = (state) => ({
    event: state.event,
    authenticated: state.currentUser !== null,
    userId: state.currentUser && userId(state.currentUser.jwt),
    users: state.users  })
  
  export default connect(mapStateToProps, {loadEvent, createTicket, getUsers})(CreateTicketFormContainer)
