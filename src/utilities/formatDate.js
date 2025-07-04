export default function formatDate(inputDate) {
  const date = new Date(inputDate)

  if (isNaN(date.getTime())) {
    // handle invalid date
    return "Invalid Date"
  }

  const formattedDate = new Intl.DateTimeFormat("en", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  }).format(date)

  return formattedDate.toString().split("/").join("-")
}

export function formatToDateString(inputDate) {
  const date = new Date(inputDate)

  if (isNaN(date.getTime())) {
    // handle invalid date
    return "Invalid Date"
  }

  const formattedDate = new Intl.DateTimeFormat("en", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(date)

  return formattedDate
}
