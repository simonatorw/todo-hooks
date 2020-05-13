import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ToDoView from './ToDoView';
import { add as addAction, remove as removeAction } from './state/actions';
import { add, updateField, remove } from './ToDoApi';

export default function ToDo() {
	const [val, setVal] = useState('');
	const toDos = useSelector(state => state.toDoState.toDos);
	const dispatch = useDispatch();

	const addCb = React.useCallback((e) => add(addAction(val), setVal, dispatch, e), [val, dispatch]);
	const updateCb = React.useCallback((e) => updateField(setVal, e), []);
	const removeCb = React.useCallback((index) => remove(removeAction(index), dispatch), [dispatch]);

	React.useEffect(() => {
		console.log('Initializing...');
	}, []);

	React.useEffect(() => {
		console.log('Updated...');
	}, [toDos]);

	return (	
		<ToDoView
			toDos={toDos}
			updateField={updateCb}
			add={addCb}
			remove={removeCb}
			val={val}
		/>
	);
}