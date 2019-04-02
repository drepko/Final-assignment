import React from 'react'
import {connect} from 'react-redux'
import { Link } from "react-router-dom";
import CreateTicketFormContainer from './CreateTicketFormContainer';

class EventDetail extends React.Component{
//export default function EventDetail(props) {

    render() {
        if (this.props.event === null) {
            return <div>Loading...</div>
        }
            return (
                <div>
                    <h2>{this.props.event.name}</h2>
                    <p>Description:{this.props.event.description}</p>
                    <p>Start:{this.props.event.start}</p>
                    <p>End:{this.props.event.end}</p>
                    <h2>Available Tickets</h2>
        
                    <ul>
                    {this.props.event.tickets.map(ticket => 
                        <li key = {ticket.id}>
                            {/* <img src = {ticket.picture}/>
                            <p>{ticket.description}</p> */}
                            <Link to={`/tickets/${ticket.id}`}><h3>Price: €{ticket.price}</h3></Link>
                        </li>
                        )}
                    </ul>
                    <CreateTicketFormContainer event = {this.props.event}/>
                </div>
            )
  }
  
}

const mapStateToProps = state => ({
    event: state.event,
  })

  export default connect(mapStateToProps)(EventDetail)