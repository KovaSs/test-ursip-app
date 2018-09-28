

export default function getAllArticles () {
    return {
      type: 'GET_ALL_ATRICLES' + 'START',
      callAPI: `/api/articles`
    }
}