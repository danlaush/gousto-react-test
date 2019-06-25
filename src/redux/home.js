const initialState = {
  activeCategory: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_CATEGORY':
      return {
        ...state,
        activeCategory: action.payload.categoryId
      }
    default:
      return state
  }
}