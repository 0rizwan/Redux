import React from 'react'
import { incrementBonusFn } from '../actions/action'

function Bonus({ store }) {
  return (
    <div style={{ border: '1px solid black', padding: '20px' }}>
      <div>Bonus Component</div>
      <div>Total points : {store.getState().bonus.points}</div>
      <button onClick={() => store.dispatch(incrementBonusFn())} >Increment +</button>
    </div>
  )
}

export default Bonus