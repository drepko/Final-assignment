import React from 'react'
//import EventForm from './EventForm'

export default function AdDetail(props) {
    console.log('props in adDetail', props)
    if (props.ad === null) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1>{props.ad.title}</h1>
            <p>{props.ad.description}</p>
            <p>€{props.ad.price}</p>
            <button onClick={props.onDelete}>WEG ERMEE</button>

            <img src = {props.ad.picture}/>
            <p>{props.ad.email}</p>
            <p>{props.ad.phoneNumber}</p>
        </div>
    )
    // console.log(props)
    // if(props.event === null){
    //     return <div>Loading...</div>
    // } 
    
    // console.log('props.editMode', props)
    // if(!props.editMode) {
    // return (<div>
    //         <h1>{props.event.name}</h1>
    //         <i>{props.event.date}</i>
    //         <p>{props.event.description}</p>
    //         <button onClick = {props.onDelete}>WEG ERMEE</button>
    //         <button onClick = {props.onEdit}>Edit</button>
    //     </div>)
    // } else {
    //     return <EventForm
    //         formValues={props.formValues}
    //         onSubmit={props.onSubmit}
    //         onChange={props.onChange}
    //     />
    // }      
  
}



