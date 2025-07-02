// component
import Button from "../../../components/button/Button"
import Status from "../../../features/invoice/components/Status"

// styles
import styles from "../../../assets/styles/modules/invoice/invoicepage.module.css"

// redux
import { useDispatch } from "react-redux"
import {
  onLoadCanvas,
  toggleCanvas
} from "../../../redux/offcanvas/offCanvasSlice"
import {
  loadModal,
  toggleModal as toggleModalAction
} from "../../../redux/modal/modalSlice"
import { useNavigate } from "react-router-dom"

const InvoiceNav = ({ invoice }) => {
  // redux
  const dispatch = useDispatch()

  // rrd
  const navigate = useNavigate()

  const toggleOffCanvas = () => {
    dispatch(toggleCanvas())
    dispatch(onLoadCanvas("edit-invoice"))
  }

  const toggleModal = () => {
    dispatch(toggleModalAction())
    dispatch(loadModal("confirm-delete"))
  }

  const markAsPaid = async () => {
    await fetch(`https://invoiceapi.vercel.app/invoices/${invoice.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "paid" })
    })
    navigate(0)
  }

  const { status } = invoice

  return (
    <div className={styles.invoiceNav} id="invoiceNav">
      <div className={styles.status}>
        <div>
          <span className="body-text-2">Status</span>
          <Status status={status} />
        </div>
      </div>

      <div className={styles.buttons}>
        <Button variant="editButton" onClick={toggleOffCanvas}>
          Edit
        </Button>
        <Button variant="deleteButton" onClick={toggleModal}>
          Delete
        </Button>

        {invoice.status === "pending" && (
          <Button onClick={markAsPaid}>Mark as Paid</Button>
        )}
      </div>
    </div>
  )
}

export default InvoiceNav
