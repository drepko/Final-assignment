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
                <Link to={`/events/${event.id}`}><h3>{event.name}</h3></Link>
                <img src = {event.picture}/>


            </li>
        )
        }
    </ul>

}


