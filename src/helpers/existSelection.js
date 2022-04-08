export const existSelection = ( id, selections) => {
    return !!selections.find( selection => selection.id === id);
}