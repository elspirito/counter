import {useState} from "react";
import styles from "./Counter.module.css";
import {Button} from "../Button/Button.tsx";
import {Display} from "../Display/Display.tsx";

export const Counter02 = () => {
    const minValue = 0
    const maxValue = 5
    const [count, setCount] = useState(minValue);
    const [isSettings, setIsSettings] = useState(false)

    const incHandler = () => {
        if (count < maxValue) {
            setCount(prevState => prevState + 1)
        }
    }
    const resHandler = () => setCount(0)


    return isSettings
        ? (
            <Button onClick={() => setIsSettings(false)}>Back</Button>

        )
        : (
            <div className={styles.counter}>
                <Display count={count} maxValue={maxValue}/>
                <div style={{display: "flex", gap: '8px'}}>
                    <Button disabled={count === maxValue} onClick={incHandler}>Increment</Button>
                    <Button disabled={count === minValue} onClick={resHandler}>Reset</Button>
                </div>
                <Button onClick={() => setIsSettings(true)}>Open Settings</Button>
            </div>
        )
};