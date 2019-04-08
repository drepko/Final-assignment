import React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import CreateTicketFormContainer from './CreateTicketFormContainer';
import './EventDetail.css'

class EventDetail extends React.Component {
    //export default function EventDetail(props) {

    render() {
        if (this.props.event === null) {
            return <div>Loading...</div>
        }
        return (
            <div className='eventdetail'>
                <div className='detail-flex'>
                    <div className='childdetail-flex'>
                        <h2>{this.props.event.name}</h2>
                        <p>Description:<br />
                            {this.props.event.description}</p>
                        <p>Start:<br />
                            {this.props.event.start}</p>
                        <p>End:<br />
                            {this.props.event.end}</p>
                        {/* <img id = 'eventdetail-img' src = {this.props.event.picture}/> */}
                    </div>

                    <div className='childdetail-flex'>
                        <h2>Available Tickets</h2>
                        <ul>
                            {this.props.event.tickets.map(ticket =>
                                <li key={ticket.id}>
                                    {/* <img src = {ticket.picture}/>
                            <p>{ticket.description}</p> */}
                                    <Link to={`/tickets/${ticket.id}`}><button className='ticketprice-button'>€{ticket.price}, -</button></Link>
                                </li>
                            )}
                        </ul>
                    </div>

                    <div className='childdetail-flex'>
                        <h2>Post a Ticket</h2>

                        <div id='post-ticketform'>
                            <CreateTicketFormContainer event={this.props.event} />
                        </div>
                    </div>
                </div >

            </div>
        )
    }

}

const mapStateToProps = state => ({
    event: state.event,
})

export default connect(mapStateToProps)(EventDetail)