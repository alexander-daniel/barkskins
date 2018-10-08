import React from 'react';
import classnames from 'classnames';

class Input extends React.Component {

  static defaultProps = {
    onClick: () => {},
    className: '',
    placeholder: 'start typing...',
    onChange: () => {}
  };

  render() {
    const { className, onClick, placeholder, onChange } = this.props;

    return (
      <input
        className={classnames('text-input', className)}
        onClick={onClick}
        placeholder={placeholder}
        onChange={onChange}
      />
    );
  }
}

export default Input;
