import styles from './Input.module.css';
import {InputHTMLAttributes} from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = ({placeholder, value, ...rest}: InputProps) => {
    return (
        <input
            className={styles.input}
            placeholder={placeholder}
            value={value}
            {...rest}
        />
    );
};

