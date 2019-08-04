import React, { useState, useEffect } from 'react';

import './App.scss';

function App() {
	const [toDos, setToDo] = useState(['Feed cat', 'Sleep']);
	const [val, setVal] = useState('');

	useEffect(() => {
		console.log('Initializing...');
	}, []);

	const add = e => {
		if (e.keyCode === 13) {
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
		<div className="main">
			<h1>ToDo Hooks</h1>
			<input type="text" onKeyDown={add} value={val} onChange={updateField} />
			<ul>
				{toDos.map((item, i) => <li key={i} onDoubleClick={() => remove(i)}>{item}</li>)}
			</ul>
		</div>
	);
}

export default App;