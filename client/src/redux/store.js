import { configureStore } from '@reduxjs/toolkit'
import countReducer from './reducers/countReducer'
import ArrayReducer from './reducers/ArrayReducer'

export const store = configureStore({
//   reducer: {
//     countReducer:countReducer,
//     ArrayReducer:ArrayReducer,
//   },
  reducer: {
    countReducer,
    ArrayReducer,
  },
})
