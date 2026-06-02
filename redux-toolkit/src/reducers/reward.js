import { createAction, createReducer } from "@reduxjs/toolkit"

export const increment = createAction('reward/increment');
export const incrementByAmt = createAction('reward/incrementByAmt');

const initialState = {
    points: 15
}

export const rewardReducer = createReducer(initialState, (builder) => {
    builder.addCase(increment, (state, action) => {
        state.points += 1;
    }).addCase(incrementByAmt, (state, action) => {
        state.points += parseInt(action.payload);
    })
})