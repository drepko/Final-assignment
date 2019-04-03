import React from 'react'

export default function EventForm(props) {
    return <form onSubmit={props.onSubmit}>

        Name:
        <input
            onChange={props.onChange}
            type="text"
            name="name"
            value={props.formValues.date}
        />

        Description:
        <input
            onChange={props.onChange}
            type="text"
            name="description"
            value={props.formValues.description}
        />

        Picture:
        <input
            onChange={props.onChange}
            type="text"
            name="picture"
            value={props.formValues.date}
        />

        Start:
        <input
            onChange={props.onChange}
            type="text"
            name="start"
            value={props.formValues.date}
        />

        End:
        <input
            onChange={props.onChange}
            type="text"
            name="end"
            value={props.formValues.date}
        />

        <input type="submit" value="POST EVENT" />
    </form>
}



