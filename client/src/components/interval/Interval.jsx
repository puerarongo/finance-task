import React, { useState } from "react";
import PropTypes from 'prop-types';
import styles from "./Interval.module.css";

const Interval = ({ handler }) => {
    const [interval, setInterval] = useState("");

    const inputHandler = e => {
        const { value } = e.currentTarget;
        setInterval(value);
    };

    const sumbitHandler = e => {
        e.preventDefault();



        handler(interval * 1000);
        setInterval(() => "");
    };


    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Select quotes update rate in seconds:</h2>
            <form onSubmit={sumbitHandler}>
                <input
                    className={styles.input__form}
                    type="number"
                    name="interval"
                    value={interval}
                    onChange={inputHandler}
                />
                <button className={styles.form__button} type="sumbmit">Take!</button>
            </form>
        </div>
    )
};

Interval.propTypes = {
    handler: PropTypes.func.isRequired
};

export default Interval;
