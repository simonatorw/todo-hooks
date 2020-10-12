import React, { useState } from 'react';

import ToDoView from './ToDoView';
import { add, updateField, remove, async } from './ToDoApi';

export default function ToDo() {
	const [toDos, setToDo] = useState([]);
	const [val, setVal] = useState('');

	const addCb = React.useCallback((e) => add(val, toDos, setToDo, setVal, e), [val, toDos]);
	const updateCb = React.useCallback((e) => updateField(setVal, e), []);
	const removeCb = React.useCallback((index, e) => remove(index, toDos, setToDo, e), [toDos]);

	React.useEffect(() => {
		console.log('Initializing...');

		(async function() {
			const data = await async.getApi('./data.json');

			setToDo(data);
		})();
	}, []);

	React.useEffect(() => {
		console.log('Updated...');
	}, [toDos]);

	return (
		<div className="main-container">
			<ToDoView
				toDos={toDos}
				updateField={updateCb}
				add={addCb}
				remove={removeCb}
				val={val}
			/>
			<div className="todo-count">{toDos.length} items</div>
		</div>
	);
}