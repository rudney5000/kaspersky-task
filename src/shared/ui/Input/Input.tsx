import React from "react";
import styles from './Input.module.scss'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    label?: string,
    error?: string,
    icon?: React.ReactNode
}

export const Input = ({
    label,
    error,
    icon,
    className = '',
    ...props
}: InputProps) => {
    return (
        <div className={styles.wrapper}>
            {label && <label className={styles.label}>{label}</label>}
            <div className={styles.inputWrap}>
                {icon && <span className={styles.icon}>{icon}</span>}
                <input
                    className={`${styles.input} ${icon ? styles.withIcon : ''} ${error ? styles.hasError : ''} ${className}`}
                    {...props}
                />
            </div>
            {error && <span className={styles.error}>{error}</span>}
        </div>
    )
}