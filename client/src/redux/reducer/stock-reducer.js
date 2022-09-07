const stockReducer = (state = {}, action) => {
    switch (action.type) {
        case "item/connect":
            return {
                type: "connect",
                stock: action.payload
            }
        case "item/disconnect":
            return {
                ...state,
                type: "disconnect"
            }
        default:
            return state
    }
};

export default stockReducer;