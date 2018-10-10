import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import { getArticlesText } from '../actions'
import Loader from './Loader'



class ArticleText extends Component {
  componentDidMount() {
    this.props.getArticlesText(this.props.location.pathname.slice(9))
  }
  render() {
    const {articleText, articleTitle} = this.props
    return(
      <div className='main__text'>
        <div className='text'>
          <h2>
            {articleTitle.title ? articleTitle.title : <Loader/>}
          </h2>
          <div>
            {articleText.text ? articleText.text : ''}
          </div>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = state => (
  {
    articleTitle: state.text.articleTitle,
    articleText: state.text.articleText
  }
) 


export default connect(mapStateToProps, { getArticlesText })(ArticleText)