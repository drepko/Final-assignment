import React from 'react'
import { connect } from 'react-redux'
//import createComment  from '../actions/ticket'
import CommentForm from './CommentForm'
import { loadTicket, createComment } from '../actions/ticket'

class CreateCommentFormContainer extends React.Component {
    state = {
        textfield: '',
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.setState({
            textfield: '',
        })
        const id = this.props.ticket.id
        this.props.createComment(this.state, id)
    }


    render() {
        return (

            <CommentForm
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                formValues={this.state}
            />)
    }
}

const mapStateToProps = state => ({
    ticket: state.ticket,
  })

  export default connect(mapStateToProps, {loadTicket, createComment})(CreateCommentFormContainer)
