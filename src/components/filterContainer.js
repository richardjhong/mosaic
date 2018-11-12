import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.Component {
  render() {
    return (
      <div className='filter'>
        <form>
          sortFilter: Currently set to {this.props.sortFilter} order based on {this.props.filterCriterion}.
        </form>
        <select onChange={this.props.handleChange}>
          <option>Ascending</option>
          <option>Descending</option>
        </select>

        <form>
          <p>Please select preferred filter criterion:</p>
          <div>
            <input type="radio" onChange={this.props.handleRadioClick} name="radio" value="_score" />
            <label htmlFor="radioButton1">Score</label>
            <br/>
            <input type="radio" onChange={this.props.handleRadioClick} name="radio" value="rating" />
            <label htmlFor="radioButton2">Rating</label>
            <br/>
            <input type="radio" onChange={this.props.handleRadioClick} name="radio" value="import_datetime" />
            <label htmlFor="radioButton3">Import Date time</label>
            <br/>
            <input type="radio" onChange={this.props.handleRadioClick} name="radio" value="title" />
            <label htmlFor="radioButton4">Title</label>

          </div>
        </form>
        <br></br>
      </div>
    )
  }
}

Filter.propTypes = {
  sortFilter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
}

Filter.defaultProps = {
  handleChange: () => {}
}

export default Filter;
