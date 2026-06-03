import { createAction, createSlice } from "@reduxjs/toolkit"
import { incrementByAmt } from "./accountSlice";

const initialState = {
    points: 0
}

// incrementing bonus points if amount is increased by more than $100.
// const incrementByAmt = createAction('account/incrementByAmt'); // we can direclty use the action by importing

export const bonusSlice = createSlice({
    name: 'bonus',
    initialState,
    reducers: {
        increment: (state) => {
            state.points += 1;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(incrementByAmt, (state, action) => {
            if (action.payload >= 100) {
                state.points += 1;
            }
        })
    }
});

export const { increment } = bonusSlice.actions;

export default bonusSlice.reducer;