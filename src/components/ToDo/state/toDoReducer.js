import actionTypes from './actionTypes';

const initialState = {
  toDos: ['duh']
};

export default function toDoReducer(state = initialState, action) {
  switch(action.type) {
    case actionTypes.ADD:
      return { ...state, toDos: [ ...state.toDos, action.payload ] };
    case actionTypes.REMOVE: {
      const toDos = state.toDos.slice();

      toDos.splice(action.payload, 1);
      
      return { ...state, toDos };
    }
    default:
      return state;
  }
}