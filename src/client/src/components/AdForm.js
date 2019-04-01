import React from 'react'

// This should be a simple functional component (without state) 
// calling the onSubmit and onChange callbacks. The <input> fields should 
// also use the values. Add a field for name, date and description and a submit button.

export default function AdForm(props) {
    //console.log(props.formValues)
    return <form onSubmit={props.onSubmit}>
        Title:
         <input
            onChange={props.onChange}
            type="text"
            name="title"
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

        Email:
        <input
            onChange={props.onChange}
            type="text"
            name="email"
            value={props.formValues.date}
        />

        Phone number:
        <input
            onChange={props.onChange}
            type="text"
            name="phoneNumber"
            value={props.formValues.date}
        />
        <input type="submit" value="Save" />
    </form>
}



