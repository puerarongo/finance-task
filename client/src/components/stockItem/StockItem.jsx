import React from "react";
import styles from "./StockItem.module.css";

const StockItem = ({data}) => {
    return (
        <>
            <li className={styles.list__item}>
                <div className={styles.container}>
                    <h3 className={styles.title}>{data.ticker}</h3>
                    <p>{data.price}$</p>
                </div>
                <div className={styles.container__changes}>
                    <p className={styles.change__price}>{data.change}$</p>
                    <p className={styles.change__price}>{data.change_percent}%</p>
                    <p className={styles.change__price}>{data.dividend}</p>
                    <p>{data.yield}</p>
                </div>
            </li>
        </>
    )
};

export default StockItem;