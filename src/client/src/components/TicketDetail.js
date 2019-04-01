import React from 'react'

export default function TicketDetail(props) {
    if (props.ticket === null) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h2>Ticket from </h2>
            <h3>Price €{props.ticket.price}</h3>
            <h3>{props.ticket.description}</h3>
            <img src = {props.ticket.picture}/>

            <h2>Comments</h2>
            {props.ticket.comments.map(comment => 
                <p>{comment.textfield}</p>)}
        </div>
    )  
}