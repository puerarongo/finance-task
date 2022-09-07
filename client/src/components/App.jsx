import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { connectSocket, disconnectSocket } from "../redux/operation/connectSocket";

import Interval from "./interval/Interval";
import Monitoirng from "./monitoring/Monitoring";
import StockItem from "./stockItem/StockItem";
import styles from "./App.module.css";

const App = () => {
  const dispatch = useDispatch();
  const { stock } = useSelector(state => state.stockReducer);
  let { trackedStock } = useSelector(state => state.trackedReducer);

  if (trackedStock === undefined) trackedStock = [];
  
  useEffect(() => {
    dispatch(connectSocket());
    
    return () => {
      dispatch(disconnectSocket())
    }
  }, [dispatch]);

  const intervalHandler = (interval) => {
    dispatch(disconnectSocket())
    dispatch(connectSocket(interval))
  };


  return (
    <>
      <div className={styles.container}>
        {stock && (
          <>
            <Interval handler={intervalHandler} />
            <Monitoirng data={stock} />
            <ul className={styles.list}>
            {stock.length > 0 && trackedStock.length !== stock.length  ? (
              stock.map((elem, index) => {
                if (trackedStock.includes(elem.ticker)) {
                  return ""
                }
                else {
                  return <StockItem key={index} data={elem} /> 
                }
                
              })
            ) : (<div className={styles.warning}>There are no stocks you are following!</div>)}
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default App;