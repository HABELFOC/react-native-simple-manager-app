import React, { Component } from 'react';
import { View, Text, Keyboard } from 'react-native';
import { Card, CardSection, Button, Input, Spinner } from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser, userLogOut } from '../actions';
import { Actions } from 'react-native-router-flux';


globalTimeOut = null;
secs = 1000;

class LoginForm extends Component {
	

	// Update email state
	emailChanged(email) {
		if (globalTimeOut != null){
			clearTimeout(globalTimeOut);
		}

		let newEmail = email;
		globalTimeOut = setTimeout(() => {
			globalTimeOut = null;
			// preform some action
			this.props.emailChanged(newEmail); // call the action creator

		}, secs); // run after 1 sec
	}


	// emailChanged(email) {
	// 	this.props.emailChanged(email);
	// }

	// Update password state
	passwordChanged(password) {
		this.props.passwordChanged(password);
	}


	ButtonPressed() {

		// Hide Keyboard after button pressed
		Keyboard.dismiss();

		const { email, password } = this.props;

		// Pass 'email' and 'password' to 'loginUser' action creator
		this.props.loginUser({ email, password });
	}


	// render button/loader
	renderButton() {
		if (this.props.loading) {
			return <Spinner size="large" />;
		}


		return(
			<Button onPress={this.ButtonPressed.bind(this)}>
				Login
			</Button>
		);
	}

	renderLoginForm() {
		return(
			<Card>
				<CardSection>
					<Input 
					label="Email"
					placeholder="email@gmail.com"
					underlineColorAndroid={'android'}
					onChangeText={this.emailChanged.bind(this)}
					autoCorrect={false}
					maxLength={80}
					/>
				</CardSection>

				<CardSection>
					<Input 
					label="Password"
					placeholder="password"
					underlineColorAndroid={'android'}
					onChangeText={this.passwordChanged.bind(this)}
					secureTextEntry
					maxLength={80}
					autoCorrect={false}
					/>
				</CardSection>

				<Text style={styles.errorStyle}>
					{this.props.error}
				</Text>

				<CardSection>
					{this.renderButton()}
				</CardSection>
			</Card>
		);
	}

	// when user logout
	userLogOut() {
		this.props.userLogOut(); // call 'userLogOut' action in action creator
	}

	// Entire Login Form
	renderStatus() {
		switch (this.props.showLoginForm) {
			case true:
				return this.renderLoginForm();
			case false: 
				return (
					<Card>
						<CardSection>
							<Button onPress={this.userLogOut.bind(this)}>
								Logout
							</Button>
						</CardSection>
						<CardSection>
							<Button onPress={() => Actions.main()}>
								Employee List
							</Button>
						</CardSection>
					</Card>
					);
			default:
				return (
					<Card>
						<CardSection>
							<Spinner size={'large'} />
						</CardSection>
					</Card>
				);
		}
	}

	render(){
		console.log('Redux State/Actions Is: ------------');
		console.log(this.props);
		return this.renderStatus();
	}
}


const styles = {
	errorStyle: {
		color: 'red',
		fontSize: 20,
		alignSelf: 'center'
	}
};


function mapStateToProps(state, ownProps) { // DRYS
	const { 
			email,
			password,
			user,
			loading,
			error,
			showLoginForm,
			navToSecondPage
		  } = state.auth;

	return { 
		email: email,
		password: password,
		user: user,
		loading: loading,
		error: error,
		showLoginForm
	 };
}


export default connect(mapStateToProps, {
 emailChanged,
 passwordChanged,
 loginUser,
 userLogOut
})(LoginForm);