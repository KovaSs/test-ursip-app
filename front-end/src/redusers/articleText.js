import {START, SUCCESS, FAIL, GET_ARTICLE_TEXT} from '../constants'


const initialState = {
  articleTitle: '',
  articleText: '',
  loading: false
}

export default (state = initialState, action) => {

  const {type, payload, response, randomId} = action

  switch (type) {
     case GET_ARTICLE_TEXT + START: 
        return { 
          ...state,
          loading: true,
          articleTitle: '',
          articleText: ''
        } 

    case GET_ARTICLE_TEXT + SUCCESS:
      return { 
      ...state,
      loading: false,
      articleTitle: response, 
      articleText: response
    } 

    case GET_ARTICLE_TEXT + FAIL: 
      return { 
        ...state,
        loading: true
      }

    default:
       return state
  }
}