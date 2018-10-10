import React, { Component } from 'react';
import { BrowserRouter as Router, browserHistory, Route, NavLink, Switch} from "react-router-dom";
import {connect} from 'react-redux'
import { withRouter } from "react-router";
import Article from './components/Article';
import ArticleText from './components/ArticleText';

class App extends Component {

  render() {
  
    console.log('this.props', this.props)
    return (
      <div className='main'>
        <Router history={browserHistory}>
        <div>
          <Switch>
            <Route exact path="/" component={Article} />
            <Route  path="/article/:id" component={ArticleText} />   
          </Switch>
        </div>  
        </Router>
      </div>
    )
  }
}

export default App