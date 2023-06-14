import { HTMLProps } from "react";
import styles from "./CustomCheckbox.module.scss";
import checkIcon from "assets/icons/icon-check.svg"


type CustomCheckboxProps = HTMLProps<HTMLInputElement>;

export default function CustomCheckbox({className, ...props}: CustomCheckboxProps) {

    const constainerClassName = `${styles.container} ${className} ${props.checked ? styles.checked : styles.unchecked}`;

    return (
        <div className={constainerClassName} >
            <input {...props} type="checkbox" />
            <img src={checkIcon} alt="" className={styles.icon} />
        </div>
    )
}