import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { startNewSelection } from "../../actions/selection";
import { types } from "../../types/types";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  bets: {
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
  },
};

let store = mockStore(initState);

describe("Test Case por selection", () => {
  beforeEach(() => {
    store = mockStore(initState);
  });

  test("should add start new note", () => {
    store.dispatch(
      startNewSelection({
        id: "SEL_2",
        name: "Barcelona",
        price: 2,
      })
    );

    const actions = store.getActions();
    expect(actions[1]).toEqual({
      type: types.selectionsAddNew,
      payload: { id: "SEL_2", name: "Barcelona", price: 2 },
    });
  });
});
