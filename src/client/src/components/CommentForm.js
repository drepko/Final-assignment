import React from 'react'

export default function CommentForm(props) {
    return <form onSubmit= {props.onSubmit}>

        <div>
        <textarea
            onChange={props.onChange}
            type="text"
            name="textfield"
            value={props.formValues.textfield}
        >
        Hi.. feel free to leave a comment!
        </textarea>
        </div>
        <input type="submit" value="POST COMMENT" />
    </form>
}



