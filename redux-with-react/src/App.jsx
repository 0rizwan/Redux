import React, { useState } from 'react'
import Account from './components/Account.jsx'
import Bonus from './components/Bonus.jsx'

function App({ store }) {
  const [amount, setAmount] = useState(0);
  const [bonus, setBonus] = useState(0);
  const [inputVal, setInputVal] = useState(0);

  function incrementAmt() {
    setAmount(amount + 1);
  }

  function decrementAmt() {
    setAmount(amount - 1);
  }

  function incrementAmtByVal() {
    setAmount(parseInt(amount) + parseInt(inputVal));
    setInputVal(0);
  }

  function onType(e) {
    setInputVal(e.target.value);
  }

  function incrementBonus() {
    setBonus(bonus + 1);
  }

  return (
    <div style={{ border: '1px solid black', padding: '20px' }}>
      <h3>App</h3>
      <div>Current Account : {amount} </div>
      <div>Total Bonus : {bonus} </div>
      <Account amount={amount} incrementFn={incrementAmt} decrementFn={decrementAmt} inputVal={inputVal} onType={onType} incrementAmtByVal={incrementAmtByVal} />
      <Bonus store={store} bonus={bonus} incrementFn={incrementBonus} />
    </div>
  )
}

export default App