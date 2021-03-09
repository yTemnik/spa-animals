import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import animalsReducer from "./animals-reducer";
import todayReducer from "./today-reducer";


let reducers = combineReducers({
  todayPage : todayReducer,
  animalsPage : animalsReducer
})


const store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store;

export default store;