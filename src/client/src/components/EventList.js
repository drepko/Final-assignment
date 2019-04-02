import React from 'react'
import { Link } from "react-router-dom";
import './EventList.css'

export default function EventList(props) {

    //console.log(this.props.events)
    if (props.events === null) {
        return <div>Loading...</div>
    }
    return <ul>

        {props.events.map(event =>
            <li key={event.id}>
                <h3>{event.name}</h3>
                <Link to={`/events/${event.id}`}><img class = 'event-logo'src = {event.picture}/></Link>


            </li>
        )
        }
    </ul>

}


