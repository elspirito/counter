import {useState} from "react";
import styles from "./Counter.module.css";
import {Button} from "../Button/Button.tsx";
import {Display} from "../Display/Display.tsx";
import {Input} from "../Input/Input.tsx";

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

    const savingSettingsHanlder = () => {
        localStorage.setItem("settings", JSON.stringify(
            {
                minValue: minValue,
                maxValue: maxValue,
            }
        ))
    }


    return isSettings
        ? (
            <div className={styles.counterWrapper}>
                <h3>Settings</h3>

                <label htmlFor="">
                    Min Value
                    <Input type={"number"} placeholder={'0'}/>
                </label>

                <label htmlFor="">
                    Max Value
                    <Input type={"number"} placeholder={'0'}/>
                </label>

                <div style={{display: "flex", gap: '8px'}}>
                    <Button onClick={() => setIsSettings(false)}>Back</Button>
                    <Button onClick={savingSettingsHanlder}>Set</Button>
                </div>

            </div>
        )
        : (
            <div className={styles.counterWrapper}>
                <Display count={count} maxValue={maxValue}/>
                <div style={{display: "flex", gap: '8px', justifyContent: 'space-between'}}>
                    <span>Min Value: {minValue}</span>
                    <span>Max Value: {maxValue}</span>
                </div>
                <div style={{display: "flex", gap: '8px'}}>
                <Button disabled={count === maxValue} onClick={incHandler}>Increment</Button>
                    <Button disabled={count === minValue} onClick={resHandler}>Reset</Button>
                </div>
                <Button onClick={() => setIsSettings(true)}>Open Settings</Button>
            </div>
        )
};