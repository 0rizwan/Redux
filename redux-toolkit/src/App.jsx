import React, { useState } from 'react'
import Account from './components/Account.jsx'
import Bonus from './components/Bonus.jsx'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const amount = useSelector((state) => state.account.amount);
  const points = useSelector((state) => state.bonus.points);
  const dispatch = useDispatch();

  return (
    <div style={{ border: '1px solid black', padding: '20px' }}>
      <h3>App</h3>
      <div>Total Amount : ${amount} </div>
      <div>Total Bonus : {points} </div>
      <Account />
      <Bonus />
    </div>
  )
}

export default App