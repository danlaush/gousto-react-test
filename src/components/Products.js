import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from '../redux/actions/product'

class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts()
  }

  // Hide products that don't match the selected category
  filterByActiveCategory(product) {
    return !this.props.activeCategory
      ? product
      : product.categories
        .filter(c => c.id === this.props.activeCategory)
        .length
  }

  filterBySearchString(product) {
    return !this.props.searchString
      ? product
      : product.title.toLowerCase().includes(this.props.searchString.toLowerCase())
        || product.description.toLowerCase().includes(this.props.searchString.toLowerCase())
  }

  render() {
    return (
      <div>
        <h2 className="visually-hidden">Products</h2>
        {!!this.props.error &&
          <p>There was an error getting the list of products.</p>
        }
        {!!this.props.products.length &&
          <ul>
            {this.props.products
              .filter(this.filterByActiveCategory.bind(this))
              .filter(this.filterBySearchString.bind(this))
              .map(({title, id, description}) => (
              <li key={id}>
                {title}
                <p>{description}</p>
              </li>
            ))}
          </ul>
        }
      </div>
    )
  }
}

// eslint-disable-next-line
const mapStateToProps = ({product, home}) => ({
  products: product.products,
  error: product.error,
  activeCategory: home.activeCategory,
  searchString: home.searchString
})

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => {
      dispatch(fetchProducts())
    }
  }
}
  

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products)
