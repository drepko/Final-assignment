import React from 'react'

export default function EventForm(props) {
    return <form onSubmit={props.onSubmit}>

        Name:
        <input
            onChange={props.onChange}
            type="text"
            name="name"
            value={props.formValues.name}
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
            type="url"
            name="picture"
            value={props.formValues.picture}
        />

        Start:
        <input
            onChange={props.onChange}
            type="date"
            name="start"
            value={props.formValues.start}
        />

        End:
        <input
            onChange={props.onChange}
            type="date"
            name="end"
            value={props.formValues.end}
        />
        <input type="submit" value="POST EVENT" />

        {
            !props.formValues.name | !props.formValues.description |
            !props.formValues.picture | !props.formValues.start |
            !props.formValues.end &&

            <p style={{ color: 'red', textAlign: 'left', marginLeft: '10.5%' }}>This form is not complete!</p>

        }
    </form>
}



