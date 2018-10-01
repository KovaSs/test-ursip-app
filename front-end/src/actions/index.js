import {START, SUCCESS, FAIL, LOAD_ALL_ARTICLES} from '../constants'

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