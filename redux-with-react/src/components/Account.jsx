import React from 'react'

function Account({ amount, incrementFn, decrementFn, onType, incrementAmtByVal, inputVal }) {
  return (
    <div style={{ border: '1px solid black', padding: '20px' }} >
      <div>Account Component</div>
      <div>Amount : {amount} </div>
      <button onClick={incrementFn} >Increment +</button>
      <button onClick={decrementFn} >Decrement -</button>
      <input type='number' onChange={onType} value={inputVal} ></input>
      <button onClick={incrementAmtByVal} >Increment by {inputVal}</button>
    </div>
  )
}

export default Account