import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchQuery extends Component {

  render () {
    return (
      <div id="search-container">
        <form onKeyDown={this.props.onKeyDown}>
          searchCriterion: {this.props.searchQuery}
          <br/>
          <input type="text" onChange={this.props.onChange} placeholder="Insert search word here." />
          {/* <button id="input" onClick={this.props.onClick}>Search</button> */}
        </form>
        <hr/>
        <button id="btn-trending" onClick={this.props.trendingClick} >Trending</button>
      </div>
    )
  }
}

SearchQuery.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  handleTextChange: PropTypes.func.isRequired
}

SearchQuery.defaultProps = {
  handleTextChange: () => {}
}

export default SearchQuery;
