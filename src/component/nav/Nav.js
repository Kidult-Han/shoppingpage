import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ShoppingOutlined,
  MedicineBoxOutlined,
  PartitionOutlined,
  SmileOutlined,
  LikeOutlined,
} from '@ant-design/icons'
import Makeups from '../pages/Makeups'
import './Nav.css'

const Nav = () => {
  const [Visible, setVisible] = useState(null)
  const handleDisplay = (index) => {
    setVisible(Visible === index ? null : index)
  }

  return (
    <div className='Div'>
      <Link to='/goodsale'>
        <LikeOutlined className='LinkIcon' />
        <span className='Span'>热销产品</span>
      </Link>
      <></>
      <></>
      <Link to='/makeups'>
        {' '}
        <span className='Span' onClick={() => handleDisplay(1)}>
          <ShoppingOutlined className='LinkIcon' />
          化妆护肤
        </span>
        {Visible === 1 ? <Makeups /> : ''}
      </Link>
      <></>
      <></>
      <Link to='/medicine'>
        <span className='Span' onClick={() => handleDisplay(2)}>
          <MedicineBoxOutlined className='LinkIcon' /> 药品保健
        </span>
      </Link>
      <></>
      <></>
      <Link to='/baby'>
        <span className='Span' onClick={() => handleDisplay(3)}>
          <SmileOutlined className='LinkIcon' />
          母婴产品
        </span>
      </Link>
      <></>
      <></>
      <Link to='/others'>
        <span className='Span' onClick={() => handleDisplay(4)}>
          <PartitionOutlined className='LinkIcon' /> 其他
        </span>
      </Link>
    </div>
  )
}
export default Nav
