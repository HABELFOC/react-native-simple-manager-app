import { 
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER_STATUS,
	USER_LOGGED_OUT,
	USER_ABOUT_TO_LOGOUT
} from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const emailChanged = (email) => {
	return {
		type: EMAIL_CHANGED,
		payload: email
	};
};


export const passwordChanged = (password) => {
	return {
		type: PASSWORD_CHANGED,
		payload: password
	};
};


export const userLogOut = () => {
	return async dispatch => {

		dispatch({ type: USER_ABOUT_TO_LOGOUT }); // Show to 'spinner'

		try {
			await firebase.auth().signOut();
			dispatch({ type: USER_LOGGED_OUT });
			console.log('user has logout!');
		} catch (error) {
			console.log('There error occurred while signing user out...', error);
		}
	};
};


/* ES6 Ways */

/*export const loginUser = ({ email, password }) => {
	return (dispatch) => {
		dispatch({ type: LOGIN_USER_STATUS }); // change login status to 'true'

		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(user => loginUserSuccess(dispatch, user))
			.catch((error) => {
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.then(user => loginUserSuccess(dispatch, user))
					.catch((error) => loginUserFail(dispatch));
		});
	};
};


const loginUserSuccess = (dispatch, user) => {
	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: user
	});
};


const loginUserFail = (dispatch) => {
	dispatch({
		type: LOGIN_USER_FAIL
	});
}*/

/* New ES7 Ways */

export const loginUser = ({email, password}) => {
	return async dispatch => {

		dispatch({ type: LOGIN_USER_STATUS });

		try {
			const user = await firebase.auth().signInWithEmailAndPassword(email, password);
			loginUserSuccess(user, dispatch);	
		} catch (error) {
			try {
				const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
				loginUserSuccess(user, dispatch);	
			} catch (error) {
				loginUserFail(dispatch);
			}
		}
		
	};
};


const loginUserSuccess = (user, dispatch) => {
	dispatch({ type: LOGIN_USER_SUCCESS, payload: user});
	Actions.main();
	// Actions.main({ type: 'reset' }); // <- cannot go back to previous screen set as 'main' 'layout'?
};

const loginUserFail = (dispatch) => {
	dispatch({ type: LOGIN_USER_FAIL });
};


