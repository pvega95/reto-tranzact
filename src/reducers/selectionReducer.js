import { types } from "../types/types";

// selectionRef = {
//     id: 'asdasdas',
//     name: 'Team to Win',
//     selected: {
//         id: "se_1",
//         price: 1.213
//     }
// }

const initialState = {
  selections: [],
  active: null,
};

export const selectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.selectionsActive:
      return {
        ...state,
        active: {
          ...action.payload,
        },
      };

    case types.selectionsAddNew:
      return {
        ...state,
        selections: [...state.selections, action.payload],
      };

    case types.selectionsUpdated:
      return {
        ...state,
        selections: state.selections.map((selection) =>
          selection.id === action.payload.id
            ? action.payload.selection
            : selection
        ),
      };

    case types.selectionsDelete:
      return {
        ...state,
        active: null,
        selections: state.selections.filter(
          (note) => note.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
