import { combineReducers } from 'redux';
import articles from './articles'
import articleText from './articleText'

export default combineReducers({
  app: articles,
  text: articleText
}) 

