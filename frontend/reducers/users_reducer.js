import { 
    RECEIVE_CURRENT_USER
} from '../actions/session_actions';
const _nullUser = {};

export default (state = _nullUser, action) => {
    Object.freeze(state);
    // debugger;
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.user.id]: action.user });
        default:
            return state;
    }
}