import actionTypes from '../actions/actionTypes';
import stateTree from '../stateTree';

export default function dataReducer(state = stateTree, action) {

    switch(action.type) {
		case actionTypes.GET_WEATHER_SUCCEEDED:
			return { ...state, details: action.data };
        default:
            return state;
    }
}