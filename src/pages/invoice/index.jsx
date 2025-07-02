import Invoice from "./component/Invoice"

export const invoiceLoader = async ({ params }) => {
  const id = params.id ?? ""
  const url = `https://invoiceapi.vercel.app/invoices/${id}`
  const response = await fetch(url)
  const invoiceData = await response.json()
  return { id, invoice: invoiceData.invoice }
}

const InvoicePage = () => {
  return <Invoice />
}

export default InvoicePage
