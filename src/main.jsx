import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes} from "react-router-dom"
import './index.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/* <Provider> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  {/* </Provider> */}
  </React.StrictMode>
)
