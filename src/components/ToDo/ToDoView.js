import React from 'react';
import PropTypes from 'prop-types';

import ToolTip from '../ToolTip/ToolTip';

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
          <ToolTip msg={item} key={i} className="todo-tip">
            <li onDoubleClick={() => remove(i)}>
              {item}
            </li>
          </ToolTip>
        ))}
			</ol>
		</div>
	);
}

ToDoView.propTypes = {
  toDos: PropTypes.array.isRequired,
  updateField: PropTypes.func,
  add: PropTypes.func,
  remove: PropTypes.func,
  val: PropTypes.string.isRequired
};