export default function getTotal(value) {
  const total = value.reduce((acc, curr) => {
    return acc + curr.quantity * curr.price
  }, 0)

  return total
}
