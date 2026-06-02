import React, { useState } from 'react'
import Account from './components/Account.jsx'
import Bonus from './components/Bonus.jsx'
import { useDispatch, useSelector } from 'react-redux'
import Reward from './components/Reward.jsx';

function App() {
  const amount = useSelector((state) => state.account.amount);
  const points = useSelector((state) => state.bonus.points);
  const rewardPoints = useSelector((state) => state.reward.points);
  const dispatch = useDispatch();

  return (
    <div style={{ border: '1px solid black', padding: '20px' }}>
      <h3>App</h3>
      <div>Total Amount : ${amount} </div>
      <div>Total Bonus : {points} </div>
      <div>Total Reward : {rewardPoints} </div>
      <Account />
      <Bonus />
      <Reward />
    </div>
  )
}

export default App