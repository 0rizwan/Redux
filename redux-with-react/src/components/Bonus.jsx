import React from 'react'
import { incrementBonusFn } from '../actions/action'
import { useDispatch, useSelector } from 'react-redux'

function Bonus() {
  const points = useSelector(state => state.bonus.points);
  const amount = useSelector(state => state.account.amount);
  const dispatch = useDispatch();

  return (
    <div style={{ border: '1px solid black', padding: '20px' }}>
      <div>Bonus Component</div>
      <div>Amount : ${amount}</div>
      <div>Points : {points}</div>
      <button onClick={() => dispatch(incrementBonusFn())} >Increment +</button>
    </div>
  )
}

export default Bonus