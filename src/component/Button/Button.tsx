import styles from './Button.module.css';

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
    disabled?: boolean;
};
export const Button = (
    {
        children,
        onClick,
        disabled,
    }: ButtonProps) => {
    return (
        <button
            className={styles.button}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
};