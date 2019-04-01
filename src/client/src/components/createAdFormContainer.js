import React from 'react'
import { connect } from 'react-redux'
import { createAd } from '../actions/ads'
import AdForm from './AdForm'

class CreateAdFormContainer extends React.Component {
    state = {
        title: '',
        description: '',
        picture: '',
        price: '',
        email: '',
        phoneNumber: ''
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.setState({
            title: '',
            description: '',
            picture: '',
            price: '',
            email: '',
            phoneNumber: ''
        })
        this.props.createAd(this.state)
    }

    render() {
        return (

            <AdForm
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                formValues={this.state}
            />)
    }
}

export default connect(null, { createAd })(CreateAdFormContainer)