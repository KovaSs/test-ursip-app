import React, { Component } from 'react';
import Article from './components/Article';
import ArticleText from './components/ArticleText';
import {connect} from 'react-redux'
import { withRouter } from "react-router";
// import { browserHistory, Router, Route} from "react-router";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className='main'>
        <Router>
        <div>
          <Route exact path="/" component={Article} />
          <Route exact path="/id" component={ArticleText} />   
        </div>  
        </Router>
      </div>
    )
  }
}

export default App