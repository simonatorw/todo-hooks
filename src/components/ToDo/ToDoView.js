import React from 'react';
import PropTypes from 'prop-types';

import './ToDo.scss';

function ToDoView({
  toDos,
  updateField,
  add,
  remove,
  val
}) {
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
  toDos: PropTypes.array.isRequired,
  updateField: PropTypes.func.isRequired,
  add: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  val: PropTypes.string.isRequired
};

export default ToDoView;