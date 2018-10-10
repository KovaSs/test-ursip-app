import {GET_ARTICLE_TEXT, START, SUCCESS, FAIL, LOAD_ALL_ARTICLES} from '../constants'

export function getAllArticles() {
  return {
    type: LOAD_ALL_ARTICLES,
    callAPI: `/api/article`
  }
}

export function addArticles() {
  return {
    type: ADD_ARTICLES
  }
}
export function getArticlesText(id) {
  return {
    type: GET_ARTICLE_TEXT,
    callAPI: `/api/article/${id}`
  }
}