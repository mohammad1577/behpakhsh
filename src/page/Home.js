import { React } from 'react'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../context/ProductsProvider'
const Home = () => {
  const { number, setNumber } = useProductsContext()
  return (
    <div className='App'>
      <input
        type='text'
        value={number}
        className='inputNumber'
        style={(number % 2 === 0) ? { backgroundColor: "red" } : { backgroundColor: "blue" }}
        readOnly
      />
      <button
        className='search-btn'
        onClick={() => setNumber(number + 1)}
      >
        افزودن
      </button>
      <button
        className='search-btn'
        onClick={() => setNumber(number - 1)}
      >
        کاستن
      </button>
      <Link to='/state'>
        <button
          className='search-btn'
        >
          انتقال به صفحه جدید
        </button>
      </Link>
    </div>
  )
}

export default Home
