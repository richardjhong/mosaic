import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImageInformation extends Component {

  render () {
    return (
      <div id="imageinfo-container" >
        <div className="top">
          <div className="left">
            <h2 className="tag"> Click on an image to get its original image, title, <br/>import date time, score, & rating! Scroll down to get additional images.<br/><br/> Also fill in the search criterion above to look for new things; alternatively, leave it blank to see what's trending.</h2>
          </div>
          {/* <hr/> */}
          <figure className="right">
            <img src={this.props.information.src} onClick={this.props.handleFavoriteClick} alt="info_img" data-downscale={this.props.information.src}/>
            <figcaption>
              <h5>Click on the image above to add to favorites!</h5>
              Title: {this.props.information.title}<br/>
              Import Date-time: {this.props.information.time}<br/>
              Score: {this.props.information.score}<br/>
              Rating: {this.props.information.rating} <br/>
            </figcaption>
          </figure>
        </div>
        <div className="bottom">
          {this.props.favorites.length > 0 && <hr/>}
          <div className="bottom-top">
            <div className="bottom-top-top">
              {this.props.favorites.length > 0 && <h5>Cumulative Favorites: {this.props.counter}</h5>}
            </div>
            <div className="bottom-top-bottom">
              {/* {this.props.counter > 10 && <div style="border-left:1px solid #000;height:5px"></div>} */}
              {this.props.counter > 5 && <h6>/ Warning: adding a new favorite will replace previous ones.</h6>}
            </div>
          </div>
          <div className="bottom-bottom">
            {this.props.favorites.length > 0 && this.props.favorites.map((favorite, index) => { return (<img src={favorite} alt="fav_img" key={index} data-reference={index} className="favoriteImages"/>)})}
          </div>
        </div>
      </div>
    )
  }
}

ImageInformation.propTypes = {
  information: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
}

ImageInformation.defaultProps = {
  handleClick: () => {}
}

export default ImageInformation;
