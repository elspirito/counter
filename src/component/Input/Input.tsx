import styles from './Input.module.css';
import {InputHTMLAttributes} from "react";
type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ placeholder, ...rest }: InputProps) => {
    return (
        <input placeholder={placeholder} className={styles.input} {...rest} />
    );
};

