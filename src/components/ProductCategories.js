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
          <div className="ProductCategories__list-wrapper">
            <ul className="ProductCategories__list">
              {this.props.categories.map(({title, id}) => (
                <li key={id} className="ProductCategories__list-item">
                  <button
                    onClick={this.props.setActiveCategory.bind(this, id)}
                    className={
                      "ProductCategories__button " + 
                      (this.props.activeCategory === id ? '--active' : null)
                    }>{title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        }
      </div>
    )
  }
}

// eslint-disable-next-line
const mapStateToProps = ({home, category}) => ({
  categories: category.categories,
  error: category.error,
  activeCategory: home.activeCategory
})

const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: () => {
      dispatch(fetchCategories())
    },
    setActiveCategory: (id) => {
      dispatch({
        type: 'SET_ACTIVE_CATEGORY',
        payload: { categoryId: id }
      })
    }
  }
}
  

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCategories)
