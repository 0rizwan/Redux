import React, { useState } from 'react'
import Account from './components/Account.jsx'
import Bonus from './components/Bonus.jsx'
import { useDispatch, useSelector } from 'react-redux'
import Reward from './components/Reward.jsx';
import Admin from './components/Admin.jsx';

function App() {
  const account = useSelector((state) => state.account);
  const points = useSelector((state) => state.bonus.points);
  const rewardPoints = useSelector((state) => state.reward.points);
  const dispatch = useDispatch();

  return (
    <div style={{ border: '1px solid black', padding: '20px' }}>
      <h3>App</h3>
      {
        account.pending ? <p>Loading...</p>
          : account.error ? <p>{account.error}</p>
            : <div>Total Amount : ${account.amount} </div>
      }
      <div>Total Bonus : {points} </div>
      <div>Total Reward : {rewardPoints} </div>
      <Account />
      <Bonus />
      <Reward />
      <Admin />
    </div>
  )
}

export default App