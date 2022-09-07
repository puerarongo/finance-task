import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { trackedStockAction } from "../../redux/action/trackedStoks-action";
import styles from "./Monitoring.module.css";

const Monitoirng = ({ data }) => {
    const dispatch = useDispatch();
    let { trackedStock } = useSelector(state => state.trackedReducer);

    //if (trackedStock === undefined) trackedStock = [];

    const checkboxHandler = () => {
        const selectedCheckBoxes = document.querySelectorAll('#NASDAQ:checked');
        //console.log(selectedCheckBoxes)
        const checkedValues = Array.from(selectedCheckBoxes).map(elem => elem.name);
        dispatch(trackedStockAction(checkedValues));
    }
    
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Monitored stocks</h2>
            <ul className={styles.list}>
                {data.length > 0 && (
                    data.map(({ticker, exchange}, index) => {
                        return <li key={index} className={styles.list__item}>
                            <h3 className={styles.stock__title}>{ticker}</h3>
                            {trackedStock.includes(ticker) ? (
                            <input type="checkbox" id={exchange} name={ticker} onChange={checkboxHandler} checked/>
                            ) : (
                                <input type="checkbox" id={exchange} name={ticker} onChange={checkboxHandler} />
                            )}
                        </li>
                    })
                )}
            </ul>
        </div>
    )
};

export default Monitoirng;