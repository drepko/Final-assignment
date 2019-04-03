import React from 'react'

export default function TicketForm(props) {
    return <form onSubmit={props.onSubmit}>

        Picture:
        <input
            onChange={props.onChange}
            type="text"
            name="picture"
            value={props.formValues.date}
        />

        Price:
        <input
            onChange={props.onChange}
            type="text"
            name="price"
            value={props.formValues.date}
        />

        Description:
        <input
            onChange={props.onChange}
            type="text"
            name="description"
            value={props.formValues.description}
        />
        <input type="submit" value="POST TICKET" />
    </form>
}



