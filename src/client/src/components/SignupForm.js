import React, { PureComponent } from 'react'
import './SignupForm.css'
export default class SignupForm extends PureComponent {
	state = {}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state)
	}

	handleChange = (event) => {
		const { name, value } = event.target

		this.setState({
			[name]: value
		})
	}

	render() {
		return (
			<form className='signupform' onSubmit={this.handleSubmit}>
				<div>
					<label htmlFor="email">Email</label> <br />
					<input type="email" name="email" id="email" value={
						this.state.email || ''
					} onChange={this.handleChange} />
				</div>
				<br />
				<div>
					<label htmlFor="password">Password</label><br />
					<input type="password" name="password" id="password" value={
						this.state.password || ''
					} onChange={this.handleChange} />
				</div>
				<br />
				<div>
					<label htmlFor="confirmPassword">Confirm password</label><br />
					<input type="password" name="confirmPassword" id="confirmPassword" value={
						this.state.confirmPassword || ''
					} onChange={this.handleChange} />
				</div>

				{
					this.state.password &&
					this.state.confirmPassword &&
					this.state.password !== this.state.confirmPassword &&
					<p style={{ color: 'red' }}>The passwords do not match!</p>
				}
				<br />
				<button type="submit">Sign up</button>
			</form>
		)
	}
}
