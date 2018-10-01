import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";
import { getAllArticles } from '../actions'
import Btn from '../components/Btn'

class Article extends Component {
  componentDidMount() {
    this.props.getAllArticles()
  }
  render() {
    const {articles} = this.props
    // console.log(articles) 
    return (
      <div className='main__article'>
        <section className='article'>
          <h2> Article List</h2>
          <ul>
            {
              articles.map((item) => (
                <li key={item.id}>
                  <Link to={`/${item.id}`}>
                    {item.title}
                  </Link>
                </li>
              ))
            }
          </ul>
          <Btn />
        </section>
      </div>
    )
  }
}

export const mapStateToProps = state => (
  {
    articles: state.app.articles
  }
) 

export default connect(mapStateToProps, { getAllArticles })(Article)