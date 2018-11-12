import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Images extends Component {
  render () {
    return (
      <div id="images-container" >
        <hr/>
        {this.props.listings.map((gif, index) => {
          return (
            <img onClick={this.props.handleClick} src={gif.images.fixed_height_small.url} alt="gif_img" name={gif.title || 'filler'} data-time={gif.import_datetime} data-original={gif.images.original.url} data-rating={gif.rating} data-score={gif._score} key={index}/>
          )
        })}
      </div>
    )
  }
}

Images.propTypes = {
  listings: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired
}

Images.defaultProps = {
  handleClick: () => {}
}

export default Images;
