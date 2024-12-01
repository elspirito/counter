import {ChangeEvent, useState} from "react";
import {Counter01} from "./component/Counter/Counter01.tsx";


export const App = () => {
    const [version, setVersion] = useState('counter01')
    const changeVersionHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setVersion(e.target.value)
    }

    const componentRender = () => {
        switch (version) {
            case 'counter01':
                return <Counter01/>;
            case 'counter02':
                return '<Counter02/>';
            case 'counter03':
                return '<Counter03/>';
            default:
                return 'Error';
        }
    }

    return (
        <div>
            <select onChange={changeVersionHandler} name="" id="">
                <option value="counter01">Counter 01</option>
                <option value="counter02">Counter 02</option>
                <option value="counter03">Counter 03</option>
            </select>
            {componentRender()}
        </div>
    );
};