import React from 'react';
import classnames from 'classnames';

const Button = React.forwardRef((props, ref) => {
  const { className, onClick, children, style, type } = props;

  return (
    <button ref={ref} type={type} style={style} className={classnames('btn', className)} onClick={onClick}>
      {children}
    </button>
  );
});

export default Button;
