import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSearchString } from '../redux/actions/home'

class ProductSearch extends Component {
  // TODO: check behaviour on low-end devices, possibly debounce
  handleChange(event) {
    this.props.setSearchString(event.target.value)
  }

  clearSearch() {
    this.props.setSearchString('')
  }

  render() {
    return (
      <>
        <h2 className="visually-hidden">Search in products</h2>
        <input type="text"
          value={this.props.searchString}
          onChange={this.handleChange.bind(this)}
          className="ProductSearch" />
        <button
          onClick={this.clearSearch.bind(this)}
          className="ProductSearch__clear">Clear</button>
      </>
    )
  }
}

// eslint-disable-next-line
const mapStateToProps = ({home}) => ({
  searchString: home.searchString
})

const mapDispatchToProps = dispatch => {
  return {
    setSearchString: (string) => {
      dispatch(setSearchString(string))
    }
  }
}
  

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductSearch)
