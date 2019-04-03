import React from 'react'
import {connect} from 'react-redux'
import TicketDetail from './TicketDetail'
import { loadTicket } from '../actions/ticket'
import {getUsers} from '../actions/users'

class TicketDetailContainer extends React.Component {

  componentDidMount() {
    this.props.loadTicket(Number(this.props.match.params.id))
    //this.props.loadUser(Number(this.props.match.params.id))
    //have to figure out how to get the right param for user. Something with eager true in enities.
  }

  render() {
    return (

    <div>
    <TicketDetail
      ticket={this.props.ticket}
      event = {this.props.event}
      users = {this.props.users}
      />
    </div>)
  }
}


const mapStateToProps = state => ({
  ticket: state.ticket,
  event: state.event,
  users: state.users
})



export default connect(mapStateToProps, {loadTicket, getUsers})(TicketDetailContainer)