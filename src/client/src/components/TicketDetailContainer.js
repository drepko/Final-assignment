import React from 'react'
import {connect} from 'react-redux'
import TicketDetail from './TicketDetail'
import { loadTicket } from '../actions/ticket'

class TicketDetailContainer extends React.Component {

  componentDidMount() {
    this.props.loadTicket(Number(this.props.match.params.id))
  }

  render() {

    return (
    <div>
    <TicketDetail
      ticket={this.props.ticket}
      />
    </div>)
  }
}


const mapStateToProps = state => ({
  ticket: state.ticket,
})

export default connect(mapStateToProps, {loadTicket})(TicketDetailContainer)