

// Import libraries for making component
import React from 'react';
import {
	View,
	Text,
} from 'react-native';


// Make a component
const Header = (props) => {
		const { 
			viewStyle,
			textStyle 
		} = styles;

		return(
			<View style={viewStyle}>
				<Text style={textStyle}>{props.headerText}</Text>
			</View>
			);
};


// Styling the component
const styles = {
	viewStyle: {
		backgroundColor: '#34b3a0',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 13,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		elevation: 5,
		position: 'relative'
	},
	textStyle: {
		fontSize: 25
	}

};


// Make the component available to other part of the app
export { Header };