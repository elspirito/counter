import styles from './Button.module.css';
import {ButtonHTMLAttributes} from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>
export const Button = (
    {
        children,
        onClick,
        disabled,
        ...rest
    }: ButtonProps) => {
    return (
        <button
            className={styles.button}
            disabled={disabled}
            onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    );
};