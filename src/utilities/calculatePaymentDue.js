export function calculatePaymentDueDate(createdAt, paymentTerm) {
  const dueDate = new Date(createdAt)
  dueDate.setDate(dueDate.getDate() + paymentTerm)

  const formattedDueDate = `${
    dueDate.getMonth() + 1
  }-${dueDate.getDate()}-${dueDate.getFullYear()}`
  return formattedDueDate
}
