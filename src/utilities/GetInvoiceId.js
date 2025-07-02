export function generateInvoiceId() {
  const length = 6
  const alphanumericChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  let numericalPortion = ""

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * alphanumericChars.length)
    numericalPortion += alphanumericChars.charAt(randomIndex)
  }

  return numericalPortion
}

export function isValidInvoiceId(invoiceId) {
  const regex = /^[A-Z0-9]{6}$/
  return regex.test(invoiceId)
}
