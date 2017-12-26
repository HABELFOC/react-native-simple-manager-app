import { 
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER_STATUS,
	USER_LOGGED_OUT,
	USER_ABOUT_TO_LOGOUT
 } from '../actions/types';

const INITIAL_STATE = {
	email: '', 
	password: '',
	user: null,
	error: '',
	loading: false,
	showLoginForm: true
};

export default (state = INITIAL_STATE, action) => {
	console.log('ACTION CALLED!!');
	switch (action.type) {
		case EMAIL_CHANGED:
			return { ...state, email: action.payload };
		case PASSWORD_CHANGED:
			return { ...state, password: action.payload };
		case LOGIN_USER_SUCCESS:
			return { ...state, user: action.payload, error: '', loading: false, showLoginForm: false };
		case LOGIN_USER_FAIL:
			return { ...state, error: 'Authencation Failed.', password: '', loading: false};
		case USER_LOGGED_OUT:
			return { ...state, showLoginForm: true, user: null, email: '', password: '' };
		case USER_ABOUT_TO_LOGOUT:
			return { ...state, showLoginForm: null };
		case LOGIN_USER_STATUS:
			return { ...state, loading: true, error: '' };
		default:
			return state;
	}
};