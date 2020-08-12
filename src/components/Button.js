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
    const { name } = this.props;
    const { classStyle } = this.props;
    return (
      <button className={classStyle} type="submit">
        {name}
      </button>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string,
  classStyle: PropTypes.string,
};

Button.defaultProps = {
  name: '0',
  classStyle: 'button-item',
};

export default Button;
