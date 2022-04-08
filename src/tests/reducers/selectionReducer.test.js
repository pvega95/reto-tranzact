import { selectionReducer } from "../../reducers/selectionReducer";
import { types } from "../../types/types";

describe("Test Case for selectionReducer", () => {
  test("should add new selection", () => {
    const initialState = {
      selections: [],
      active: null,
    };

    const action = {
      type: types.selectionsAddNew,
      payload: {
        id: "MKT_1",
        name: "Team to Win",
        selections: {
          id: "SEL_1",
          name: "Real Madrid",
          price: 1.23,
        },
      },
    };

    const state = selectionReducer(initialState, action);
    expect(state).toEqual({
      selections: [
        {
          id: "MKT_1",
          name: "Team to Win",
          selections: {
            id: "SEL_1",
            name: "Real Madrid",
            price: 1.23,
          },
        },
      ],
      active: null,
    });
  });
});
