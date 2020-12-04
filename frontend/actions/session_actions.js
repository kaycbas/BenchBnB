export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
import { 
    postUser,
    postSession,
    deleteSession
} from '../util/session_api_util';

const receiveCurrentUser = user => {
    return {
        type: RECEIVE_CURRENT_USER,
        user
    }
}

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
}

const receiveErrors = errors => {
    return {
        type: RECEIVE_ERRORS,
        errors
    }
}

export const signup = user => dispatch => {
    return postUser(user)
        .then(u => dispatch(receiveCurrentUser(u)));
}

export const login = user => dispatch => {
    return postSession(user)
        .then(u => dispatch(receiveCurrentUser(u)));
}

export const logout = () => dispatch => {
    return deleteSession()
        .then(() => dispatch(logoutCurrentUser()));
}


