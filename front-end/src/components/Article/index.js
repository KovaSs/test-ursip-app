import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Link, Route} from 'react-router-dom';
import { getAllArticles, getArticlesText } from '../../actions'
import Btn from '../Btn'


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
            {articles.map((item) => (
                <Link key={item.id} to={`/article/${item.id}`}>
                  <li>
                      {item.title}
                  </li>
                </Link>
              ))}
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

export default connect(mapStateToProps, { getAllArticles, getArticlesText })(Article)