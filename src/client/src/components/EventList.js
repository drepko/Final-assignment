import React from 'react'
import { Link } from "react-router-dom";
import './EventList.css'

export default function EventList(props) {
    const today = new Date().toISOString().split('T')[0]
    console.log('today', today)

    if (props.events === null) {
        return <div>Loading...</div>
    }
    return (

        <div className='parent-flex'>
            {props.events.map(event =>
                event.end > today &&
                <div className='child-flex'>
                    <h3>{event.name}</h3>
                    <Link to={`/events/${event.id}`}><img class='event-logo' src={event.picture} /></Link>
                </div>
            )
            }
        </div>
    )
}


