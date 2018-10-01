
const initialState = {
  articles: [],
  loading: false
}

export default (state = initialState, action) => {

  const {type, payload, response, randomId} = action

  switch (type) {
     case 'LOAD_ALL_ARTICLES' + '_START': 
        return { 
          ...state,
          loading: true
        } 

    case 'LOAD_ALL_ARTICLES' + '_SUCCESS':
      return { 
      ...state,
      loading: false,
      articles: response
    } 

    case 'LOAD_ALL_ARTICLES' + '_FAIL': 
      return { 
        ...state,
        loading: true
      }

    default:
       return state

    }

   

  }