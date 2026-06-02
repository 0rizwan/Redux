import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    amount: 1
}

export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        increment: (state) => {
            state.amount += 1;
        },
        decrement: (state) => {
            state.amount -= 1;
        },
        incrementByAmt: (state, action) => {
            state.amount += parseInt(action.payload);
        }
    }
});

export const { increment, decrement, incrementByAmt } = accountSlice.actions;

export default accountSlice.reducer;