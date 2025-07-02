// styles
// import styles from "../../assets/styles/modules/offcanvas/offcanvas.module.css"
import thisCanvasStyles from "../../assets/styles/modules/offcanvas/createinvoicecanvas.module.css"

// component
import Button from "../button/Button"

// redux
import { useDispatch } from "react-redux"
import {
  toggleCanvas,
  onLoadCanvas
} from "../../redux/offcanvas/offCanvasSlice"
import OffCanvasForm from "./form/OffCanvasForm"

// rrd
import { useParams, useNavigate } from "react-router-dom"

// react
import { useEffect, useState } from "react"

const EditInvoiceCanvas = () => {
  const navigate = useNavigate()
  const params = useParams()
  const dispatch = useDispatch()

  // state
  const [data, setData] = useState(null)
  const [editedFormData, setEditedFormData] = useState(undefined)

  // utils
  const updateForm = (data) => {
    setEditedFormData(data)
  }

  const submitData = async () => {
    if (editedFormData) {
      const filteredData = Object.entries(editedFormData).filter(
        ([key]) => key !== "id"
      )
      await fetch(`https://invoiceapi.vercel.app/invoices/${params.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(filteredData))
      })
      setData(editedFormData)
      navigate(0)
    }
  }

  // event handlers
  const handleClose = () => {
    dispatch(toggleCanvas())
    dispatch(onLoadCanvas(""))
  }

  const handleSave = () => {
    submitData()
    handleClose()
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://invoiceapi.vercel.app/invoices/${params.id}`
      )
      const data = await response.json()
      setData(data?.invoice ?? {})
    }
    fetchData()
  }, [])

  return (
    <div className={thisCanvasStyles.offcanvas}>
      <div className={thisCanvasStyles.header}>
        <h2>Edit Invoice</h2>
        <Button onClick={handleClose} variant="deleteButton">
          Close
        </Button>
      </div>
      <OffCanvasForm
        data={data}
        updateForm={updateForm}
        handleSave={handleSave}
        editedFormData={editedFormData}
      />
    </div>
  )
}

export default EditInvoiceCanvas
