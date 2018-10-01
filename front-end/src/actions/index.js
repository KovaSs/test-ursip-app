
// export default getAllArticles = () => {
//     return {
//       type: 'GET_ALL_ATRICLES' + 'START',
//       callAPI: `/api/articles`
//     }
// }

export function getAllArticles() {
  return {
    type: 'LOAD_ALL_ARTICLES',
    callAPI: `/api/article`
  }
}

export function addArticles() {
  return {
    type: "ADD_ARTICLES"
  }
}