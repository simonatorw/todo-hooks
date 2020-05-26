import React from 'react';
import PropTypes from 'prop-types';

import './ToolTip.scss';

export default function ToolTip({ children, msg, className }) {
  return (
    <div className={`tool-tip ${className}`}>
      {children}
      <div className="tip">
        {msg}
      </div>
    </div>
  );
}

ToolTip.propTypes = {
  children: PropTypes.node.isRequired,
  msg: PropTypes.string.isRequired
}