import React from 'react'
import { Link } from "react-router-dom";

export default function EventList(props) {

    //console.log(this.props.events)
    if (props.events === null) {
        return <div>Loading...</div>
    }
    return <ul>

        {props.events.map(event =>
            <li key={event.id}>
                <h3>{event.name}</h3>
                <Link to={`/events/${event.id}`}><img src = {event.picture}/></Link>


            </li>
        )
        }
    </ul>

}


