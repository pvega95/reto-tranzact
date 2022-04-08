import { existSelection } from "../helpers/existSelection";
import { types } from "../types/types";

export const startNewSelection = (selection) => {
    return (dispatch, getState) => {
        const { id } = selection;
        const { selections } = getState().bets;
        dispatch(activeSelection(selection));
        if (existSelection(id, selections)) {
            dispatch(refreshSelection( id, selection));
        } else {
            dispatch(addNewSelection(selection));
        }
    }
}

export const activeSelection = ( selection ) => ({
    type: types.selectionsActive,
    payload: {
        ...selection
    }
});

export const addNewSelection = ( selection ) => ({
    type: types.selectionsAddNew,
    payload: {
        ...selection
    }
})

export const refreshSelection = ( id, selection ) => ({
    type: types.selectionsUpdated,
    payload: {
        id,
        selection: {
            ...selection
        }
    }
});

export const deleteSelection = (id) => ({
    type: types.selectionsDelete,
    payload: id
});
