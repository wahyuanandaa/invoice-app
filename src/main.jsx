import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./assets/styles/global.css"
import "./assets/styles/scss/index.scss"

// redux
import { Provider } from "react-redux"
import { store } from "./redux/store.js"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)
