import React from 'react'
import { connect } from 'react-redux'
import UpdateTicketForm from './UpdateTicketForm'
import {getUsers} from '../actions/users'
import {userId} from '../jwt'
import { updateTicket } from '../actions/ticket'
import { loadTicket } from '../actions/ticket'

class UpdateTicketFormContainer extends React.Component {
    state = {}

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault()

        const id = this.props.ticket.id
        console.log('ticket id', id)
        this.props.updateTicket(this.state, id)
    }

    notSubmit = () => {
        alert('You are not allowed to edit this ticket!')
    }

    componentWillMount() {
        if (this.props.authenticated) {
          if (this.props.users === null) this.props.getUsers()
        }
      }

    render() {
        return (

            <UpdateTicketForm
                onSubmit={this.props.authenticated? this.onSubmit: this.notSubmit}
                onChange={this.onChange}
                formValues={this.state}
                authenticated = {this.props.authenticated}
            />)
    }
}

const mapStateToProps = (state) => ({
    ticket: state.ticket,
    event: state.event,
    authenticated: state.currentUser !== null,
    userId: state.currentUser && userId(state.currentUser.jwt),
    users: state.users  })
  
  export default connect(mapStateToProps, {updateTicket, getUsers, loadTicket})(UpdateTicketFormContainer)
