import React from 'react'

export default function TicketForm(props) {
    return <form onSubmit={props.onSubmit}>

        Picture:
        <input
            onChange={props.onChange}
            type="url"
            name="picture"
            value={props.formValues.picture}
        />

        Price:
        <input
            onChange={props.onChange}
            type="number"
            name="price"
            value={props.formValues.price}
        />

        Description:
        <input
            onChange={props.onChange}
            type="text"
            name="description"
            value={props.formValues.description}
        />
        <input type="submit" value="POST TICKET" />
        {!props.formValues.price | !props.formValues.description &&
            <p style={{ color: 'red' }}>This form is not complete!</p>
        }
    </form>
}



