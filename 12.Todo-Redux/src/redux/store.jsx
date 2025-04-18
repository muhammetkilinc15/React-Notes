import { configureStore } from '@reduxjs/toolkit'
import TodoSlice from './TodoSlice'

export const store = configureStore({
  reducer: {
    todos : TodoSlice
  },
})