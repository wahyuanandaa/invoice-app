const extractPrices = (array) => {
  const prices = array.map((item) => {
    return {
      quantity: item.quantity,
      price: item.price
    }
  }) ?? {
    quantity: 0,
    price: 0
  }

  return prices
}

export default extractPrices
