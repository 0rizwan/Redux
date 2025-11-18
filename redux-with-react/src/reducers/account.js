import { decrement, getUserAccFullfiled, getUserAccPending, getUserAccRejected, increment, incrementByVal } from "../actions/action";

export default function accountsReducer(state = { amount: 1 }, action) {
    switch (action.type) {
        case getUserAccPending:
            return { ...state, pending: true };
        case getUserAccRejected:
            return { ...state, pending: false, error: action.error };
        case getUserAccFullfiled:
            return { amount: action.payload, pending: false };
        case increment:
            return { amount: state.amount + 1 };
        case decrement:
            return { amount: state.amount - 1 };
        case incrementByVal:
            return { amount: state.amount + action.payload };
        default:
            return state;
    }
}