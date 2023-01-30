import React, { useState, useContext } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { Products } from '../products/Productlist'
import { proContext } from '../Context'

function Search() {
  const [inputInfo, setInputInfo] = useState()
  const { SearchValue } = useContext(proContext)

  const handleSearch = () => {
    if (inputInfo) {
      const searchWord = inputInfo
      const resArr = Products.filter((item) =>
        item.name.toLowerCase().includes(searchWord.toLowerCase())
      )
      if (resArr.length > 0) {
        SearchValue(resArr)
      }
      setInputInfo('')
    }
  }
  return (
    <div>
      <input
        style={{ width: '200px', height: '25px' }}
        value={inputInfo}
        onChange={(e) => setInputInfo(e.target.value)}
        placeholder='搜索商品'
      />
      <button onClick={handleSearch}>
        <SearchOutlined style={{ fontSize: '30px', color: 'orange' }} />
      </button>
    </div>
  )
}

export default Search
