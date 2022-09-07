import { io } from "socket.io-client";
import {connectStockAction, disconnectStockAction} from "../action/stock-action";

const socket = io("http://localhost:4000");

export const connectSocket = (interval = 5000) => dispatch => {
    socket.connect()
    socket.emit("start", interval)
    socket.on("ticker", socket => {
        dispatch(connectStockAction(socket))
    })
};

export const disconnectSocket = () => dispatch => {
    socket.disconnect();
    dispatch(disconnectStockAction())
};

export const updateIntervalSocket = interval => async dispatch => {
    await dispatch(connectSocket(interval));
};