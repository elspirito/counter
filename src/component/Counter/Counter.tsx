import {useState} from "react";
import styles from "./Counter.module.css";

export const Counter = () => {
    const minValue = 0
    const maxValue = 5
    const [count, setCount] = useState(minValue);


    const incHandler = () => {
        if (count < maxValue) {
            setCount(prevState => prevState + 1)
        }
    }
    const resHandler = () => setCount(0)

    return (
        <div className={styles.counter}>
            <div>
                <h1 style={{color: count === maxValue ? 'red' : 'black', textAlign: 'center'}}>
                    {count}
                </h1>
                <progress max={maxValue} value={count}></progress>
            </div>
            <div>
                <button disabled={count === maxValue} onClick={incHandler}>Increment</button>
                <button disabled={count === minValue} onClick={resHandler}>Reset</button>
            </div>
        </div>
    );
};