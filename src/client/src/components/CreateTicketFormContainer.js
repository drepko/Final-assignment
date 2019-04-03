import React from 'react'
import { connect } from 'react-redux'
import { createTicket } from '../actions/ticket'
import TicketForm from './TicketForm'
import { loadEvent } from '../actions/events'

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


    render() {
        return (

            <TicketForm
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                formValues={this.state}
            />)
    }
}

const mapStateToProps = state => ({
    event: state.event,
  })

  export default connect(mapStateToProps, {loadEvent, createTicket})(CreateTicketFormContainer)
