import React from 'react'
import { useState } from 'react';
import { decrementFn, getUserAccount, incrementByValFn, incrementFn } from '../actions/action';
import { useDispatch, useSelector } from 'react-redux';

function Account() {
  const [inputVal, setInputVal] = useState(0);
  const account = useSelector(state => state.account);
  const points = useSelector(state => state.bonus.points);
  const dispatch = useDispatch();

  function onType(e) {
    setInputVal(e.target.value);
  }

  return (
    <div style={{ border: '1px solid black', padding: '20px' }} >
      <div>Account Component</div>
      {
        account.pending ? <p>Loading...</p>
          : account.error ? <p>{account.error}</p>
            : <div>Amount : ${account.amount} </div>
      }
      <div>Points : {points} </div>
      <div>
        <button onClick={() => dispatch(incrementFn())} >Increment +</button>
        <button onClick={() => dispatch(decrementFn())} >Decrement -</button>
        <button onClick={() => dispatch(getUserAccount(1))} >Init amount</button>
      </div>
      <input type='number' onChange={onType} value={inputVal} ></input>
      <button onClick={() => dispatch(incrementByValFn(inputVal))} >Increment by {inputVal}</button>
    </div>
  )
}

export default Account