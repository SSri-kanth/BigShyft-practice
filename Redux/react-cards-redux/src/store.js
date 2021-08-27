import { createStore, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from 'react-redux';
import rootReducer from './reducer'

/*
export default configureStore({
    reducer:{

    }
})
*/

const store = createStore(reducer);

function reducer(currentState, action){
    return state;
}

export default store;