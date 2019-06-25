import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCategories } from '../redux/actions/category'


class ProductCategories extends Component {
  componentDidMount() {
    this.props.fetchCategories()
  }

  render() {
    return (
      <div>
        <h2 className="visually-hidden">Product Categories</h2>
        {!!this.props.error &&
          <p>There was an error: {this.props.error.message}</p>
        }
        {!!this.props.categories.length &&
          <ul>
            {this.props.categories.map(({title, id}) => (
              <li key={id}>{title}</li>
            ))}
          </ul>
        }
      </div>
    )
  }
}

// eslint-disable-next-line
const mapStateToProps = ({home}) => ({
  categories: home.categories,
  error: home.error
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
