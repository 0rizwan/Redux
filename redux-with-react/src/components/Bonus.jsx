import React from 'react'
import { incrementBonusFn } from '../actions/action'
import { useDispatch, useSelector } from 'react-redux'

function Bonus() {
  const state = useSelector(state => state.bonus);
  const dispatch = useDispatch();

  return (
    <div style={{ border: '1px solid black', padding: '20px' }}>
      <div>Bonus Component</div>
      <div>Total points : {state.points}</div>
      <button onClick={() => dispatch(incrementBonusFn())} >Increment +</button>
    </div>
  )
}

export default Bonus