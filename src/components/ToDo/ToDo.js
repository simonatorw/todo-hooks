import React, { useState } from 'react';

import ToDoView from './ToDoView';
import { add, updateField, remove } from './ToDoApi';

export default function ToDo() {
	const [toDos, setToDo] = useState(['Feed cat', 'Sleep']);
	const [val, setVal] = useState('');
	
	const addCb = React.useCallback((e) => add(val, toDos, setToDo, setVal, e), [val, toDos]);
	const updateCb = React.useCallback((e) => updateField(setVal, e), []);
	const removeCb = React.useCallback((index, e) => remove(index, toDos, setToDo, e), [toDos]);

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