import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { trackedStockAction } from "../../redux/action/trackedStoks-action";
import PropTypes from 'prop-types';
import styles from "./Monitoring.module.css";

const Monitoirng = ({ data }) => {
    const dispatch = useDispatch();
    let { trackedStock } = useSelector(state => state.trackedReducer);
    
    if (trackedStock === undefined) trackedStock = [];

    const checkboxHandler = () => {
        const selectedCheckBoxes = document.querySelectorAll('#NASDAQ:checked');
        const checkedValues = Array.from(selectedCheckBoxes).map(elem => elem.name);
        dispatch(trackedStockAction(checkedValues));
    };

    const filtred = data.map(elem => {
        if (trackedStock.includes(elem.ticker)) {
            return { ticker: elem.ticker, exchange: elem.exchange, active: false }
        }
        else {
            return { ticker: elem.ticker, exchange: elem.exchange, active: true }
        }
    });

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Monitored stocks</h2>
            <ul className={styles.list}>
                {filtred.length > 0 && (
                    filtred.map(({ticker, exchange, active}, index) => {
                        return <li key={index} className={styles.list__item}>
                            <h3 className={styles.stock__title}>{ticker}</h3>
                            <label className={styles.checkbox__google}>
                                <input
                                    className={styles.checkbox}
                                    type="checkbox"
                                    id={exchange}
                                    name={ticker}
                                    onChange={checkboxHandler}
                                    checked = {!active}
                                />
                                <span className={styles.checkbox__switch}></span>
                            </label>
                        </li>
                    })
                )}
            </ul>
        </div>
    )
};


Monitoirng.propTypes = {
    data: PropTypes.array.isRequired
};

export default Monitoirng;