const trackedStockReducer = (state = [], action) => {
    switch (action.type) {
        case "trackedStock/array":
            return {
                trackedStock: action.payload
            }
        default:
            return state
    }
};

export default trackedStockReducer;