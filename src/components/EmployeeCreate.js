import React, { Component } from 'react';
import { Card, CardSection, Button, Input } from './common';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';

class EmployeeCreate extends Component {


	render() {
		console.log("EMPLOYEE STATE IS:==============");
		console.log(this.props);
		return (
			<Card>
				<CardSection>
					<Input
					label="Name"
					placeholder="Steve"
					onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
					/>
				</CardSection>

				<CardSection>
					<Input
					label="Phone"
					placeholder="555-555-5555"
					onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
					/>
				</CardSection>

				<CardSection>
				</CardSection>

				<CardSection>
					<Button>
						Create
					</Button>
				</CardSection>
			</Card>
		);
	}
}


function mapStateToProps(state, ownProps) {
	const { name, phone, shift } = state.employeeForm;

	return {
		name,
		phone,
		shift
	};
}


export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);