import React from 'react'
import { connect } from 'react-redux'
import CommentForm from './CommentForm'
import { loadTicket, createComment } from '../actions/ticket'
import {getUsers} from '../actions/users'
import {userId} from '../jwt'

class CreateCommentFormContainer extends React.Component {
    state = {
        textfield: '',
    }

    componentWillMount() {
        if (this.props.authenticated) {
          if (this.props.users === null) this.props.getUsers()
        }
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

    notSubmit = () => {
        alert('Please login to post a comment!')
    }


    render() {
        return (

            <CommentForm
                onSubmit={this.props.authenticated? this.onSubmit: this.notSubmit}
                onChange={this.onChange}
                formValues={this.state}
            />)
    }
}

const mapStateToProps = state => ({
    ticket: state.ticket,
    authenticated: state.currentUser !== null,
    userId: state.currentUser && userId(state.currentUser.jwt),
    users: state.users
  })

  export default connect(mapStateToProps, {loadTicket, createComment, getUsers})(CreateCommentFormContainer)
