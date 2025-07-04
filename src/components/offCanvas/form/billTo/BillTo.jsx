// react
import { useState, useEffect, useRef } from "react"

// styles
import styles from "../../../../assets/styles/modules/offcanvas/offcanvasform.module.css"

// components
import Form from "../../../forms"

// utils
import formatDate from "../../../../utilities/formatDate"
import { calculatePaymentDueDate } from "../../../../utilities/calculatePaymentDue"

const BillTo = ({
  handleInputChange,
  update,
  formError,
  inputRef,
  formData
}) => {
  // defaults
  const options = [
    {
      value: "30",
      label: "Next 30 Days"
    },
    {
      value: "14",
      label: "Next 14 Days"
    },
    {
      value: "7",
      label: "Next 7 Days"
    },
    {
      value: "1",
      label: "Next 1 Day"
    }
  ]

  // state
  const [formDate, setFormDate] = useState(new Date())
  const [selectedValue, setSelectedValue] = useState(options[0])

  // ref
  const OptionRef = useRef(null)

  // functions
  const handleSelectChange = (value) => {
    setSelectedValue(value)
  }

  useEffect(() => {
    if (formData) {
      const newData = {
        createdAt: formatDate(formDate.toString()),
        paymentDue: calculatePaymentDueDate(
          formDate,
          Number(formData.paymentTerms)
        )
      }

      update(newData)
    }
  }, [formDate, selectedValue])

  // DESTRUCTED FORM ERRORS
  const { street, city, postCode, country } = formError?.clientAddress ?? {}
  const { clientName, clientEmail, description } = formError ?? {}

  return (
    <section className={styles.billTo}>
      <h4 className="text--h3">Bill To</h4>
      <div className="d-flex flex-column gap-2">
        <Form.Text
          label={`Client's Name`}
          width="100%"
          name="clientName"
          ref={inputRef}
          value={formData.clientName}
          id="clientName"
          isValid={clientName?.valid ?? false}
          errorMsg={clientName?.errorMsg ?? ""}
          onChange={handleInputChange}
        />
        <Form.Text
          label={`Client's Email`}
          width="100%"
          name="clientEmail"
          ref={inputRef}
          value={formData.clientEmail}
          isValid={clientEmail?.valid ?? false}
          errorMsg={clientEmail?.errorMsg ?? ""}
          onChange={handleInputChange}
        />
        <Form.Text
          label="Street Address"
          width="100%"
          id="clientStreet"
          ref={inputRef}
          value={formData.clientAddress?.street ?? ""}
          isValid={street?.valid ?? false}
          errorMsg={street?.errorMsg ?? ""}
          name="street"
          onChange={(e) => {
            handleInputChange(e, "clientAddress")
          }}
        />
      </div>
      <div className={styles.billTofieldset}>
        <div className={styles.billTofieldsetInner}>
          <Form.Text
            label="City"
            width="100%"
            name="city"
            ref={inputRef}
            value={formData.clientAddress?.city ?? ""}
            id="clientCity"
            isValid={city?.valid ?? false}
            errorMsg={city?.errorMsg ?? ""}
            onChange={(e) => {
              handleInputChange(e, "clientAddress")
            }}
          />
        </div>
        <div className={styles.billTofieldsetInner}>
          <Form.Text
            label="Post Code"
            width="100%"
            ref={inputRef}
            value={formData.clientAddress?.postCode ?? ""}
            name="postCode"
            id="clientPostCode"
            isValid={postCode?.valid ?? false}
            errorMsg={postCode?.errorMsg ?? ""}
            onChange={(e) => {
              handleInputChange(e, "clientAddress")
            }}
          />
        </div>
        <div className={styles.billTofieldsetInner}>
          <Form.Text
            label="Country"
            width="100%"
            name="country"
            ref={inputRef}
            value={formData.clientAddress?.country ?? ""}
            id="clientCountry"
            isValid={country?.valid ?? false}
            errorMsg={country?.errorMsg ?? ""}
            onChange={(e) => {
              handleInputChange(e, "clientAddress")
            }}
          />
        </div>
      </div>

      <div className="d-flex gap-2 pt-4">
        <Form.Date
          label="Invoice Date"
          id="clientData"
          date={formDate}
          defaultDate={formData.createdAt}
          setDate={setFormDate}
        />
        <Form.Select
          label="Payment Terms"
          id="clientPaymentTerms"
          onChange={handleSelectChange}
          defaultOption={formData.paymentTerms}
          selectedValue={selectedValue}
          options={options}
          ref={OptionRef}
        />
      </div>

      <div className="pt-2">
        <Form.Text
          label="Project Description"
          ref={inputRef}
          value={formData?.description ?? ""}
          id="invoiceDesc"
          width="100%"
          name="description"
          errorMsg={description?.errorMsg ?? ""}
          isValid={description?.valid ?? false}
          onChange={handleInputChange}
        />
      </div>
    </section>
  )
}

export default BillTo
