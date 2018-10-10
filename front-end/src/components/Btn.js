import React, { Component } from 'react';
import {connect} from 'react-redux'
import { withRouter } from "react-router-dom";
import { getAllArticles } from '../actions'
import mapStateToProps from '../components/Article'

class Btn extends Component {
  onClick =() =>{
    console.log('click', this.props)
    this.props.getAllArticles()
  }

  render() {
    return (
      <p>
        <button className = 'btn' type = "primary" onClick={this.onClick}>Refresh</button>
      </p>
    )
  }
}

export default connect(mapStateToProps, { getAllArticles })(Btn)
