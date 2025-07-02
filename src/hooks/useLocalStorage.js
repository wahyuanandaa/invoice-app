import { useState } from "react"

const useLocalStorage = (key, initialValue) => {
  // Retrieve the stored value from localStorage, or use the provided initialValue
  const initial = JSON.parse(localStorage.getItem(key)) ?? initialValue

  // Create state to hold the current value
  const [value, setValue] = useState(initial)

  // Update localStorage whenever the state changes
  const setStoredValue = (newValue) => {
    setValue(newValue)
    localStorage.setItem(key, JSON.stringify(newValue))
  }

  return [value, setStoredValue]
}

export default useLocalStorage
