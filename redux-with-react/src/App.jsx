import React, { useState } from 'react'
import Account from './components/Account.jsx'
import Bonus from './components/Bonus.jsx'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div style={{ border: '1px solid black', padding: '20px' }}>
      <h3>App</h3>
      <div>Current Account : {state.account.amount} </div>
      <div>Total Bonus : {state.bonus.points} </div>
      <Account />
      <Bonus />
    </div>
  )
}

export default App