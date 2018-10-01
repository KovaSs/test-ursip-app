import React, { Component } from 'react';
import { Button } from 'antd';
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
        <Button type="primary" onClick={this.onClick}>Refresh</Button>
      </p>
    )
  }
}

export default connect(mapStateToProps, { getAllArticles })(Btn)
