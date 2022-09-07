const initialState = { type: "disconnect" };

const stockReducer = (state = initialState, action) => {
    switch (action.type) {
        case "item/connect":
            console.log("!!!")
            return {
                type: "connect",
                stock: action.payload
            }
        case "item/disconnect":
            console.log(">")
            return {
                ...state,
                type: "disconnect"
            }
        default:
            return state
    }
};

export default stockReducer;