import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './ToolTip.scss';

export default function ToolTip({ children, msg, className }) {
  const childEl = React.useRef(null);
  const [ marginLeft, setMarginLeft ] = useState('0px');
  const width = childEl.current?.offsetWidth;

  useEffect(() => {
    setMarginLeft(`${width + 16}px`);
  }, [width]);

  return (
    <div className={`tool-tip ${className}`}>
      <div className="child" ref={childEl}>{children}</div>
      <div className="tip" style={{ marginLeft }}>
        {msg}
      </div>
    </div>
  );
}

ToolTip.propTypes = {
  children: PropTypes.node.isRequired,
  msg: PropTypes.string.isRequired
}