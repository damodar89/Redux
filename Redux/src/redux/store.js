// import {createStore} from 'redux'

// import combineReducers from './rootReducer'
// const store = createStore(combineReducers);

// export default store;


// ############## toolkit #################### 

// import { configureStore } from '@reduxjs/toolkit';
// // import rootReducer from './reducers';
// import rootReducer from './rootReducer';
// import productSaga from './productSaga';

// const sagaMiddleware = createSagaMiddleware();
// import createSagaMiddleware from 'redux-saga';

// const store = configureStore({
//     reducer: rootReducer,
//     middleware:()=>[sagaMiddleware]
// });

// sagaMiddleware.run(productSaga)
// export default store;

// ###########################

import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'; // Import createSagaMiddleware
import rootReducer from './rootReducer';
import productSaga from './productSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware), // Use getDefaultMiddleware to include thunk, logger, etc.
});

sagaMiddleware.run(productSaga);
export default store;