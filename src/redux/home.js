const initialState = {
  activeCategory: null,
  searchString: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_CATEGORY':
      return {
        ...state,
        activeCategory: action.payload.categoryId
      }
    case 'SET_SEARCH_STRING':
      return {
        ...state,
        searchString: action.payload.searchString
      }
    default:
      return state
  }
}