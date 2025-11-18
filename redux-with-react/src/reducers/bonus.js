import { incrementBonus, incrementByVal } from "../actions/action";

export default function bonusReducer(state = { points: 0 }, action) {
    switch (action.type) {
        case incrementBonus:
            return { points: state.points + 1 };
        case incrementByVal:
            if (action.payload >= 100)
                return { points: state.points + 1 };
        default:
            return state;
    }
}