import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isOpen: false,
  contentKey: ""
}

const modalSlice = createSlice({
  name: "offcanvas",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.isOpen = !state.isOpen
    },
    loadModal: (state, payload) => {
      state.contentKey = payload.payload
    }
  }
})

export const { toggleModal, loadModal } = modalSlice.actions

export default modalSlice.reducer
