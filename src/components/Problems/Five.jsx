import React, { useReducer } from 'react'

// useReducer Problems

function reducer(state, action){
    if(action == 'increment'){
    return {
        count: state.count + 1
    }
    }
    if(action == 'decrement'){
    return {
        count: state.count - 1
    }
    }
     if(action == 'increment5'){
    return {
        count: state.count + 5
    }
    }
}

const Five = () => {
    const [state, action] = useReducer(reducer, {count : 0})
  return (
    <div>
      <button onClick={()=>action('increment')}>Increment</button> 
      Count: {state.count}
      <button onClick={()=>action('decrement')}>Decrement</button> <br />
      <button onClick={()=>action('increment5')}>Increment5</button>
    </div>
  )
}

export default Five
