export const connectStockAction = (stock = []) => ({
    type: "item/connect", payload: stock
});

export const disconnectStockAction = () => ({
    type: "item/disconnect"
});