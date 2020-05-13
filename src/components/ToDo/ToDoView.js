import React from 'react';
import PropTypes from 'prop-types';

import './ToDo.scss';

export default function ToDoView({ toDos, updateField, add, remove, val }) {
	return (
		<div className="main">
			<h2>ToDo Hooks</h2>
      <input type="text"
        onKeyDown={add}
        value={val}
        onChange={updateField}
        className="input-box"
      />
			<ol className="list">
				{toDos.map((item, i) => (
          <li
            key={i}
            onDoubleClick={() => remove(i)}
          >
            {item}
          </li>
        ))}
			</ol>
		</div>
	);
}

ToDoView.propTypes = {
  toDos: PropTypes.array,
  updateField: PropTypes.func,
  add: PropTypes.func,
  remove: PropTypes.func,
  val: PropTypes.string.isRequired
};