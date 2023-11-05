import { combineReducers } from 'redux'
import { CartData } from './reducer'
import { productData } from '../productReducer';
console.log("rootReducer Data>>>>", CartData);

export default combineReducers({
    CartData,
    productData
})