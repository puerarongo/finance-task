import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { trackedStockAction } from "../../redux/action/trackedStoks-action";
import styles from "./Monitoring.module.css";

const Monitoirng = ({ data }) => {
    const dispatch = useDispatch();
    let { trackedStock } = useSelector(state => state.trackedReducer);
    

    //if (trackedStock === undefined) trackedStock = [];

    const checkboxHandler = e => {
        console.log(e.target)
        const selectedCheckBoxes = document.querySelectorAll('#NASDAQ:checked');
        const checkedValues = Array.from(selectedCheckBoxes).map(elem => elem.name);
        dispatch(trackedStockAction(checkedValues));
    };
    
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Monitored stocks</h2>
            <ul className={styles.list}>
                {data.length > 0 && (
                    data.map(({ticker, exchange}, index) => {
                        return <li key={index} className={styles.list__item}>
                            <h3 className={styles.stock__title}>{ticker}</h3>
                            <label className={styles.checkbox__google}>
                                <input className={styles.checkbox}
                                    type="checkbox" id={exchange} name={ticker} onChange={checkboxHandler} />
                                <span className={styles.checkbox__switch}></span>
                            </label>
                        </li>
                    })
                )}
            </ul>
        </div>
    )
};

export default Monitoirng;