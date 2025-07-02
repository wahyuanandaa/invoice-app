import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { useFetchData } from "../../services/api/useFetch"

const initialState = {
  invoiceItems: [],
  loading: false,
  sortedInvoice: []
}

const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    updateSortedInvoice: (state, action) => {
      state.sortedInvoice = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getInvoiceAsync.pending, (state) => {
        state.loading = true
      })
      .addCase(getInvoiceAsync.fulfilled, (state, action) => {
        state.loading = false
        state.invoiceItems = [...action.payload]
      })
  }
})

export const getInvoiceAsync = createAsyncThunk(
  "invoice/getInvoiceAsync",
  async (url) => {
    const data = await useFetchData(url)
    return data.invoices
  }
)

export const { updateSortedInvoice } = invoiceSlice.actions

export default invoiceSlice.reducer
