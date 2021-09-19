import React from 'react'
import { useHistory } from 'react-router-dom'
import { useProductsContext } from '../context/ProductsProvider'

const State = () => {
  const { number } = useProductsContext()

  let history = useHistory();

  return (
    <div className='App'>
      <h4>شما این عدد را از صفحه قبل گرفتید</h4>
      <h3 style={{ marginLeft: '20px' }}> {number}</h3>
      <button
        className='search-btn px-5 py-3 '
        style={{ border: 'none', borderRadius: '15px', marginLeft: '15px' }}
        onClick={history.goBack}
      >
        بازگشت
      </button>
    </div>
  )
}

export default State
