import { types } from "../../types/types";

describe("Pruebas con nuestros tipos", () => {
  test("debe de tener estos tipos", () => {
    expect(types).toEqual({
      uiStartLoading: "[UI] Start Loading",
      uiFinishLoading: "[UI] Finish Loading",

      selectionsAddNew: "[Selection] New selection",
      selectionsUpdated: "[Selection] Updated selection",
      selectionsDelete: "[Selection] New Delete",
      selectionsActive: "[Selection] Set active selection",
    });
  });
});
