import React, { useState, useEffect } from 'react';

import ToDoView from './ToDoView';

function ToDo() {
	const [toDos, setToDo] = useState(['Feed cat', 'Sleep']);
	const [val, setVal] = useState('');

	useEffect(() => {
		console.log('Initializing...');
	}, []);

	useEffect(() => {
		console.log('Updated...');
	}, [toDos]);

	const add = e => {
		if (e.keyCode === 13 && val) {
			setToDo([ ...toDos, val]);
			setVal('');
		}
	}

	const updateField = e => {
		setVal(e.target.value);
	}

	const remove = i => {
		toDos.splice(i, 1);
		setToDo([ ...toDos ]);
	}

	return (	
		<ToDoView
			toDos={toDos}
			updateField={updateField}
			add={add}
			remove={remove}
			val={val}
		/>
	);
}

export default ToDo;