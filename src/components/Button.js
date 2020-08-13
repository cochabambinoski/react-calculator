import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.css';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { value, color, wide } = this.props;
    let width = '25';
    if (wide) {
      width = parseInt(width, 10) * 2;
    }
    return (
      <button className="button-item" style={{ backgroundColor: `${color}`, width: `${width}%` }} type="submit">
        {value}
      </button>
    );
  }
}

Button.propTypes = {
  value: PropTypes.string,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  value: '0',
  color: '#f5913e',
  wide: false,
};

export default Button;
