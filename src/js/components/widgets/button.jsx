import React from 'react';
import classnames from 'classnames';

class Button extends React.Component {

  static defaultProps = {
    onClick: () => {},
    className: '',
    style: {},
    type: null
  };

  render() {
    const { className, onClick, children, style, type } = this.props;

    return (
      <button type={type} style={style} className={classnames('btn', className)} onClick={onClick}>
        {children}
      </button>
    );
  }
}

export default Button;
