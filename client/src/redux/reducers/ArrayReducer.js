import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arr:[1,2,3]
}

export const counterSlice = createSlice({
  name: 'arrays',
  initialState,
  reducers: {
    setArr: (state, action) => {
        state.arr = action.payload;
    },
    addToArray: (state, action) => {
        state.arr.push(action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { setArr, addToArray } = counterSlice.actions

export default counterSlice.reducer