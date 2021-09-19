import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ProductsProvider } from './context/ProductsProvider'

ReactDOM.render(
  <ProductsProvider>
    <App />
  </ProductsProvider>,
  document.getElementById('root')
)

reportWebVitals();