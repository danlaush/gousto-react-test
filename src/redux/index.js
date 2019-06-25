import { combineReducers } from 'redux'
import home from './home'
import category from './category'
import product from './product'

export default combineReducers({
  home,
  category,
  product
})
