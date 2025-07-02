export default function checkStatusType(value) {
  const paymentStatus = ["pending", "draft", "paid"]

  let status

  if (paymentStatus.includes(value)) {
    status = value
  } else {
    status = "error"
  }

  return status
}
