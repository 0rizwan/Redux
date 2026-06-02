import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../slices/bonusSlice';

function Bonus() {
  const points = useSelector(state => state.bonus.points);
  const dispatch = useDispatch();

  return (
    <div style={{ border: '1px solid black', padding: '20px' }}>
      <div>Bonus Component</div>
      <div>Points : {points}</div>
      <button onClick={() => dispatch(increment())} >Increment +</button>
    </div>
  )
}

export default Bonus