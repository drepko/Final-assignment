import React from 'react'



export default function TicketDetail(props) {

    if (props.ticket === null || props.event === null) {
        return <div>Loading...</div>
    }

    //const event = props.event.tickets.price

    const numberOfComments = props.ticket.comments.length
    console.log('number of comments', numberOfComments)

    const price = props.event.tickets.map(ticket => ticket.price)
    console.log('price', price)

    const averagePrice = price.reduce((a,b) => a + b, 0) / price.length
    console.log('average price', averagePrice)

    const postingHour = new Date(props.ticket.time).getHours() 
    console.log('postingtime', postingHour)

    const user = props.user
    console.log('user', user)

    return (
        <div>
            <h1>Risk: {props.risk}%</h1>
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