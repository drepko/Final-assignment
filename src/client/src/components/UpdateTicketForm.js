import React from 'react'

export default function UpdateTicketForm(props) {
    return <form onSubmit={props.onSubmit}>

        Picture:<br/>
        <input
            onChange={props.onChange}
            type="url"
            name="picture"
            value={props.formValues.date}
        />
        <br/>
        Price:<br/>
        <input
            onChange={props.onChange}
            type="number"
            name="price"
            value={props.formValues.date}
        />
        <br/>
        Description:<br/>
        <input
            onChange={props.onChange}
            type="text"
            name="description"
            value={props.formValues.description}
        />
        <br/>
        <input type="submit" value="EDIT TICKET" />
        {!props.formValues.picture && !props.formValues.price &&!props.formValues.description &&
            <p style={{ color: 'red' }}>Nothing to update!</p>
        }
    </form>
}



