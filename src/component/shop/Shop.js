import React ,{useContext}from 'react'
import {Products} from '../products/Productlist'
import Product from '../Product'
import './Shop.css';
import {proContext} from "../Context"



export default function Shop() {
  const{searchItem}=useContext(proContext)

  
  if(searchItem.length>0){
    return(
      <div >
          <div style={{marginLeft: '200px',fontSize:'20px'}}>您搜索的商品:</div>
          <div>{searchItem.map((product)=><Product data={product} key={product.id}/>)}</div>
         
      </div>)
  }else {
    return (
    <div>
        <div>{Products.map((product)=><Product data={product} key={product.id}/>)}</div>
    </div>
  ) 
  
}}
