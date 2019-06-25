import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import About from './pages/About.js'
import Home from './pages/Home.js'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="navBar">
          <Link to="/">Home</Link>
          <Link to="/about-us">About</Link>
        </header>

        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
        </main>
      </div>
    )
  }
}

export default App
