import React, { Component } from 'react';
import { View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers';
import firebase from 'firebase';
import {
	APIKEY, 
	AUTHDOMAIN, 
	DATABASEURL, 
	PROJECTID,
	STORAGEBUCKET,
	MSGSENDERID
} from 'react-native-dotenv';
import Router from './router';


class App extends Component {

	constructor(){
		super();
		firebase.initializeApp({
			apiKey: APIKEY,
	    	authDomain: AUTHDOMAIN,
	    	databaseURL: DATABASEURL,
	    	projectId: PROJECTID,
	    	storageBucket: STORAGEBUCKET,
	    	messagingSenderId: MSGSENDERID
		});
	}

	render(){
		const { container } = styles;

		return(
			<View style={container}>
				<Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
					<View style={{flex: 1}}>
						<Router />
					</View>
				</Provider>
			</View>
		);
	}
}


const styles = {
	container: {
		flex: 1
	}
};


export default App;