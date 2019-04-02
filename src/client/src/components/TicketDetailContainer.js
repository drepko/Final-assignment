import React from 'react'
import {connect} from 'react-redux'
import TicketDetail from './TicketDetail'
import { loadTicket } from '../actions/ticket'
import { loadUser } from '../actions/users'

class TicketDetailContainer extends React.Component {

  componentDidMount() {
    this.props.loadTicket(Number(this.props.match.params.id))
    this.props.loadUser(3)
  }

  //event = this.props.event
 

  riskCalculator() {
      return 60;
  }

  render() {
      console.log(this.props.user)
//console.log('TicketDetailContainer: aantal comments per ticket', this.comments)
    return (

    <div>
    <TicketDetail
      ticket={this.props.ticket}
      risk = {this.riskCalculator()}
      event = {this.props.event}
      user = {this.props.user}
      />
    </div>)
  }
}


const mapStateToProps = state => ({
  ticket: state.ticket,
  event: state.event,
  user: state.user
})

export default connect(mapStateToProps, {loadTicket, loadUser})(TicketDetailContainer)