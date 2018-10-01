import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addArticles, getAllArticles} from '../actions'
import { Button } from 'antd';


class Article extends Component {

  componentDidMount() {
    this.props.getAllArticles()
  }

  onClick =() =>{
    console.log('click', this.props)
    this.props.getAllArticles()
  }

  render() {
    const {articles} = this.props
    // console.log(articles) 
    return (
      <div>
        <section className='article'>
          <ul>
            {
              articles.map((item) => {
                // console.log('item', item)
                return <li key={item.id}>{item.title}</li>
              })
            }
          </ul>
        </section>
        <p>
          <Button type="primary" onClick={this.onClick}>Default</Button>
        </p>
      </div>
    )
  }
}

const mapStateToProps = state => (
  {
    articles: state.app.articles
  }
) 

export default connect(mapStateToProps, { addArticles, getAllArticles })(Article)