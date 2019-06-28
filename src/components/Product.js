import React, { Component } from 'react'
import './Product.css'

export default class Product extends Component {
  state = {
    isOpen: false
  }
  handleClick() {
    this.setState({isOpen: !this.state.isOpen})
  }
  render() {
    return (
      <>
        <button
          className={[
            "Product__toggle",
            (this.state.isOpen ? '--active' : undefined)
          ].filter(i => i).join(' ')}
          onClick={this.handleClick.bind(this)}
          aria-expanded={this.state.isOpen ? 'true' : 'false'}>{this.props.title}</button>
        {this.state.isOpen &&
          <p>{this.props.description}</p>}
      </>
    )
  }
}
