export const add = (action, setValState, dispatch, e) => {
  if (e.keyCode === 13 && action.payload) {
    setValState('');

    return dispatch(action);
  }
}

export const updateField = (setValState, e) => setValState(e.target.value);

export const remove = (action, dispatch) => dispatch(action);