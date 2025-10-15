import React, { useState } from 'react'
import { products } from './products'


const Three = () => {
    const [input,setInput] = useState('')
    let filteredUsers = products.filter((item)=>{
        if(item.category.toLowerCase().includes(input) || item.price.toString().includes(input) || item.name.toLowerCase().includes(input)){
            return item
        }
    })
  return (
    <div>
      <input type="text" placeholder='Search...' onChange={(e)=>setInput(e.target.value.toLowerCase())} value={input} />
      {filteredUsers.map((item)=>
      <li key={item.id}>
        <img src={`${item.image}`}/> 
        <span>{item.name}</span>
        <span>{item.price}</span>
        <span>{item.rating}</span>
      </li>
    )}
    </div>
  )
}

export default Three
