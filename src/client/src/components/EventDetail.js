import React from 'react'
import { Link } from "react-router-dom";

export default function EventDetail(props) {
    if (props.event === null) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h2>{props.event.name}</h2>
            <p>Description:{props.event.description}</p>
            <p>Start:{props.event.start}</p>
            <p>End:{props.event.end}</p>
            <h2>Available Tickets</h2>

            <ul>
            {props.event.tickets.map(ticket => 
                <li key = {ticket.id}>
                    {/* <img src = {ticket.picture}/>
                    <p>{ticket.description}</p> */}
                    <Link to={`/tickets/${ticket.id}`}><h3>Price: {ticket.price}</h3></Link>
                </li>
                )}
            </ul>
        </div>
    )  
}



