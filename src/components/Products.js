import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from '../redux/actions/product'


class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts()
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
            {this.props.products.map(({title, id}) => (
              <li key={id}>{title}</li>
            ))}
          </ul>
        }
      </div>
    )
  }
}

// eslint-disable-next-line
const mapStateToProps = ({product}) => ({
  products: product.products,
  error: product.error
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
