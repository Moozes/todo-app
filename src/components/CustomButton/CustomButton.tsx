import { ButtonHTMLAttributes, DetailedHTMLProps, HTMLProps } from "react";
import styles from "./CustomButton.module.scss";


type CustomButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export default function CustomButton({className, ...props}: CustomButtonProps) {
    return (
        <button {...props} className={`${styles.button} ${className}`} ></button>
    )
}