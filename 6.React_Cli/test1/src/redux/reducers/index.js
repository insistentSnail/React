/*
改文件用于汇总所有的reducer
*/
import { combineReducers } from "redux"
import countReducer from "./count"
import personReducer from './person'

// combineReducers合并reducer
const allReducer = combineReducers({
  he:countReducer,
  rens:personReducer
})

export default allReducer
