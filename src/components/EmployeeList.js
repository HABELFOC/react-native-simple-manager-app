import React from 'react';
import { View, Text } from 'react-native';


const EmployeeList = () => {
	return(
		<View style={styles.container}>
			<Text style={styles.text}>EmployeeList 1</Text>
			<Text style={styles.text}>EmployeeList 2</Text>
			<Text style={styles.text}>EmployeeList 3</Text>
			<Text style={styles.text}>EmployeeList 4</Text>
			<Text style={styles.text}>EmployeeList 5</Text>
		</View>
	);
};	


const styles = {
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#111'
	}
};


export default EmployeeList;