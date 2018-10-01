import React, { Component } from 'react';

import Article from './components/Article';
import ArticleText from './components/ArticleText';


class App extends Component {
  render() {
    // console.log(articles) 
    return (
      <div className='main'>
        <div className='main__article'>
          <header>
            <h2> Article List</h2>
          </header>
          <Article />
        </div>

        <div className='main__text'>
          <ArticleText />
        </div>
      </div>  
    )
  }
}

export default App