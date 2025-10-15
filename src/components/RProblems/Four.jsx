import React, { useState } from 'react'
import { products } from './products';

const Four = () => {
    const [input, setInput] = useState('')
    const[filteredProducts, setFilteredProducts] = useState(products)
    function handleClick(data){
        console.log(data)
        let prod = products.filter((item) => {
            if(item.name.toLowerCase().includes(data) || item.category.toLowerCase().includes(data) || item.price.toString().includes(data)){
                return item
            }
        })
        console.log(prod)
        setFilteredProducts(prod)
    }
  return (
    <div>
      <input type="text" placeholder='search...' value={input} onChange={(e)=>setInput(e.target.value.toLowerCase())} />
        <button onClick={()=>handleClick(input)}>Search..</button>
    {filteredProducts.map((item)=>
    <li key={item.id}>
        <span>{item.name}</span> <br />
        <span style={{color: 'green'}}>{item.price}</span> ||{'  '}       
        <span style={{color: 'red'}}>{item.category}</span>
    </li>)}
    </div>
  )
}

export default Four
