import React, { Component } from 'react';
import { TextInput, View, Text, Platform } from 'react-native';


const Input = ({ label, 
				 onChangeText, 
				 value,
				 underlineColorAndroid,
				 maxLength,
			     placeholder, 
		   		 secureTextEntry, 
				 returnKeyLabel }) => {

	const { inputStyle, labelStyle, containerStyle } = styles;

	return (
		<View style={containerStyle}>
			<Text style={labelStyle}>{label}</Text>
			<TextInput
			returnKeyLabel={returnKeyLabel}
			secureTextEntry={secureTextEntry}
			placeholder={placeholder}
			autoCorrect={false}
			style={inputStyle}
			maxLength={maxLength}
			onChangeText={onChangeText}
			value={value}
			underlineColorAndroid={(Platform.OS === underlineColorAndroid) ? 'transparent':'transparent'}
			/>
		</View>
	);
};


const styles = {
	inputStyle: {
		color: '#000',
		paddingLeft: 5,
		paddingRight: 20,
		lineHeight: 23,
		fontSize: 18,
		flex: 2
	},
	labelStyle: {
		fontSize: 18,
		paddingLeft: 20,
		flex: 1
	},
	containerStyle: {
		flex: 1,
		height: 40,
		flexDirection: 'row',
		alignItems: 'center'
	}
};


export { Input };