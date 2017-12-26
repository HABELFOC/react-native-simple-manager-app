import React, { Component } from 'react';
import { View, Text, Platform, TouchableOpacity } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from '../components/LoginForm';
import EmployeeList from '../components/EmployeeList';
import EmployeeCreate from '../components/EmployeeCreate';
import Icon from 'react-native-vector-icons/MaterialIcons';


class RouterComponent extends Component {



	render() {
	return (
		<Router sceneStyle={{paddingTop: (Platform.OS === 'ios') ? 60:45 , backgroundColor:'#F7F7F7'}}>
			<Scene key="root">
				<Scene key="auth">
					<Scene key="login" component={LoginForm} title="Please Login" initial />
				</Scene>

				<Scene key="main">
					<Scene 
					key="employeeList" 
					rightTitle="Add"
					component={EmployeeList} 
					title="Employee List" 
					onRight={() => Actions.employeeCreate()}
					/>

					<Scene 
					key="employeeCreate" 
					component={EmployeeCreate} 
					title="Create Employee" 
					/>
				</Scene>
			</Scene>
		</Router>
		);
	}
}


const styles = {
	rightBtnText: {
		fontSize: 20,
		fontWeight: 'bold'
	},
	rightBtnStyle: {
		justifyContent: 'center',
		alignItems: 'center'
	}
}


export default RouterComponent;