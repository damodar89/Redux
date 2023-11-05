import { takeLatest, put, call } from 'redux-saga/effects';

import { PRODUCT_LIST, SET_PRODUCT_LIST} from './constant';
import { type } from '@testing-library/user-event/dist/type';

function* getProducts(){
       let data = yield fetch("https://jsonplaceholder.typicode.com/todos/1")
    data = yield data.json()

    // yield put((type:SET_PRODUCT_LIST, data))
    yield put({ type: SET_PRODUCT_LIST, payload: data });

    
  
}


function* productSaga()
{
  yield takeLatest(PRODUCT_LIST,getProducts)  
}

export default productSaga;