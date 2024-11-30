import {useState} from "react";
import styles from "./Counter.module.css";
import {Button} from "../Button/Button.tsx";
import {Display} from "../Display/Display.tsx";

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
            <Display count={count} maxValue={maxValue} />
            <div style={{display: "flex", gap: '8px'}}>
                <Button disabled={count === maxValue} onClick={incHandler}>Increment</Button>
                <Button disabled={count === minValue} onClick={resHandler}>Reset</Button>
            </div>
        </div>
    );
};