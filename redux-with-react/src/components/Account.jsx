import React from 'react'
import { useState } from 'react';
import { decrementFn, incrementByValFn, incrementFn } from '../actions/action';
import { useDispatch, useSelector } from 'react-redux';

function Account() {
  const [inputVal, setInputVal] = useState(0);
  const state = useSelector(state => state.account);
  const dispatch = useDispatch();

  function onType(e) {
    setInputVal(e.target.value);
  }

  return (
    <div style={{ border: '1px solid black', padding: '20px' }} >
      <div>Account Component</div>
      <div>Amount : {state.amount} </div>
      <button onClick={() => dispatch(incrementFn())} >Increment +</button>
      <button onClick={() => dispatch(decrementFn())} >Decrement -</button>
      <input type='number' onChange={onType} value={inputVal} ></input>
      <button onClick={() => dispatch(incrementByValFn(inputVal))} >Increment by {inputVal}</button>
    </div>
  )
}

export default Account