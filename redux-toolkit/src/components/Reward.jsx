import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, incrementByAmt } from '../reducers/reward';

function Reward() {
    const points = useSelector(state => state.reward.points);
    const dispatch = useDispatch();

    return (
        <div style={{ border: '1px solid black', padding: '20px' }}>
            <div>Reward Component</div>
            <div>Points : {points}</div>
            <button onClick={() => dispatch(increment())} >Increment +</button>
            <button onClick={() => dispatch(incrementByAmt(10))} >Increment by 10</button>
        </div>
    )
}

export default Reward