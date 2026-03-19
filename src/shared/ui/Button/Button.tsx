import React from "react";
import styles from './Button.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    variant?: 'primary' | 'danger' | 'ghost' | 'back'
    size?: 'sm' | 'md'
}
export const Button = ({
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    ...props}: ButtonProps) => {
    return (
        <button
            className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}