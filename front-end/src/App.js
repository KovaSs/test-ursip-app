import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Provider} from 'react-redux'
import {getAllArticles} from './AC/actions'


class App extends Component {

  componentDidMount() {

    this.props.getAllArticles()
  
    // fetch(`/api/article/56c782f18990ecf954f6e027`)
    // .then(res => res.json())
    // .then( r => console.log(r))
  }

  render() {
    return (
      <div >
        <header>
          <h1>Welcome to React</h1>
        </header>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default connect({}, {getAllArticles})(App);