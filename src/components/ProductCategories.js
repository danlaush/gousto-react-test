import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCategories } from '../redux/actions/category'
import './ProductCategories.css'

class ProductCategories extends Component {
  componentDidMount() {
    this.props.fetchCategories()
  }

  render() {
    return (
      <div>
        <h2 className="visually-hidden">Product Categories</h2>
        {!!this.props.error &&
          <p>There was an error getting the list of product categories.</p>
        }
        {!!this.props.categories.length &&
          <ul className="ProductCategories__list">
            {this.props.categories.map(({title, id}) => (
              <li key={id} className="ProductCategories__list-item">{title}</li>
            ))}
          </ul>
        }
      </div>
    )
  }
}

// eslint-disable-next-line
const mapStateToProps = ({category}) => ({
  categories: category.categories,
  error: category.error
})

const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: () => {
      dispatch(fetchCategories())
    }
  }
}
  

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCategories)
