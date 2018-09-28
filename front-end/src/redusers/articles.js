

const initialState = {
  artcles: []
}


export default (state = initialState, action) => {
  const {type, payload, response, randomId} = action

  switch (type) {
     case 'LOAD_ALL_ARTICLES' + 'START': 
        return { 
          ...state,
          loading: true,
          atricles: payload
        } 

    case 'LOAD_ALL_ARTICLES' + 'SUCCESS': 
      return { 
      ...state,
      loading: false,
      atricles: payload
    } 

    case 'LOAD_ALL_ARTICLES' + 'FAIL': 
      return { 
        ...state,
        loading: true
      } 

    }

  }