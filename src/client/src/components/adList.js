import React from 'react'
import { Link } from "react-router-dom";

export default function AdList(props) {


    //console.log(this.props.events)
    if (props.ads === null) {
        return <div>Loading...</div>
    }
    console.log(props.ads, 'im props.ads in adlist')
    return <ul>

        {props.ads.map(ad =>
            <li key={ad.id}>
                <Link to={`/ads/${ad.id}`}><h4>{ad.title}</h4></Link>
                {/* <button onClick={props.onDelete}>WEG ERMEE</button> */}
                <p> Description:</p>
                <p>{ad.description}</p>

            </li>
        )
        }
    </ul>

}


