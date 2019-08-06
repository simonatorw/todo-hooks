import React from 'react';
import PropTypes from 'prop-types';

import './App.scss';

function AppView({
  toDos,
  updateField,
  add,
  remove,
  val
}) {
	return (
		<div className="main">
			<h1>ToDo Hooks</h1>
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

AppView.propTypes = {
  toDos: PropTypes.array.isRequired,
  updateField: PropTypes.func.isRequired,
  add: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  val: PropTypes.string.isRequired
};

export default AppView;