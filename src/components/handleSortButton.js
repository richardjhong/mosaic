import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class SortButton extends PureComponent {
  render () {
    return (
      <div className='filter'>
        <button onClick={this.props.handleSort}>Sort</button>
      </div>
    )
  }
}

SortButton.propTypes = {
  handleSort: PropTypes.func.isRequired
}

SortButton.defaultProps = {
  handleSort: () => {}
}

export default SortButton;
