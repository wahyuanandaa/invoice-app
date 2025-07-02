import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isOpen: false,
  contentKey: ""
}

const offCanvasSlice = createSlice({
  name: "offcanvas",
  initialState,
  reducers: {
    toggleCanvas: (state) => {
      state.isOpen = !state.isOpen
    },
    onLoadCanvas: (state, action) => {
      state.contentKey = action.payload
    }
  }
})

export const { toggleCanvas, onLoadCanvas } = offCanvasSlice.actions

export default offCanvasSlice.reducer
