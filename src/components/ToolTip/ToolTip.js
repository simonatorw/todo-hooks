import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './ToolTip.scss';

export default function ToolTip({ children, msg, className }) {
  const childEl = useRef(null);
  const [ marginLeft, setMarginLeft ] = useState(0);

  useEffect(() => {
    setMarginLeft(`${childEl.current.offsetWidth + 16}px`);
  }, [childEl]);

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