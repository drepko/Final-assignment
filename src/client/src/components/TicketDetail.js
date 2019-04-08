import React from 'react'
import CreateCommentFormContainer from './CreateCommentFormContainer';
import './TicketDetail.css'
import UpdateTicketFormContainer from './UpdateTicketFormContainer'

export default function TicketDetail(props) {

    if (props.ticket === null || props.event === null) {
        return <div>Loading...</div>
    }

    //have to add tickets per user in calculation. Something with eager true in enities.
    //have to change color, depending on risk.
    let risk = 5;

    const allPrices = props.event.tickets.map(ticket => ticket.price)
    //console.log('all prices', allPrices)

    const averagePrice = allPrices.reduce((a, b) => a + b, 0) / allPrices.length
    //console.log('average price', averagePrice)

    const ticketPrice = props.ticket.price
    //console.log('ticketprice', ticketPrice)

    if (ticketPrice < averagePrice) {
        const difference = ((averagePrice - ticketPrice) / averagePrice) * 100
        risk += difference
    }
    if (ticketPrice > averagePrice) {
        const difference = ((ticketPrice - averagePrice) / averagePrice) * 100
        if (difference < 10) {
            risk -= difference
        } else {
            risk -= 10
        }
    }

    const postingHour = new Date(props.ticket.time).getHours()
    //console.log('postingtime', postingHour)

    if (postingHour > 9 && postingHour < 17) {
        risk -= 10
    } else {
        risk += 10
    }


    const numberOfComments = props.ticket.comments.length
    //console.log('number of comments', numberOfComments)

    if (numberOfComments > 3) {
        risk += 5
    }

    const users = props.users
    console.log('users', users)

    // const usersprops = Object.keys(users).map(us => us.ticket)
    // console.log('userprops', usersprops)

    // Object.keys(users).forEach(function(key) {

    //     console.log(key, users[key.ticket]);

    //   });

    if (risk > 95) {
        risk = 95
    }

    if (risk < 5) {
        risk = 5
    }

    return (
        <div className='ticketdetail'>
            <div className='ticketdetail-flex'>
                <div className='ticketdetail-child'>
                    <h2 style={risk < 30 ? { borderBottom: '5px solid #37B2AD' } : risk > 70 ? { borderBottom: '5px solid #E84858' } : { borderBottom: '5px solid #F7A000' }}>Risk: {Math.floor(risk)}%</h2>
                    <p style={{ fontSize: '9px' }}>This is the risk we have calculated of this ticket being a fraud.</p>
                    <p style={{ fontSize: '11px' }}>Price:<br />
                        {`€ ${props.ticket.price},-`}</p>
                    <p style={{ fontSize: '11px' }}>Event:<br />
                        {props.event.name}</p>
                    <p style={{ fontSize: '11px' }}>Description:<br />
                        {props.ticket.description}</p>
                    {props.ticket.picture &&
                        <img className='ticketimage' src={props.ticket.picture} />
                    }
                </div>
                <div className='ticketdetail-child'>

                    <h2>Comments</h2>
                    <ul>
                        {props.ticket.comments.map(comment =>
                            <li key={comment.id} style={{ fontSize: '11px' }}>{comment.textfield}</li>)}
                    </ul>
                    <CreateCommentFormContainer />
                </div>
                <div className='ticketdetail-child'>

                    <h2>Edit ticket</h2>
                    <p style={{ fontSize: '9px' }}>Only the author can do this!</p>
                    <UpdateTicketFormContainer />
                </div>
            </div>

        </div>
    )
}

