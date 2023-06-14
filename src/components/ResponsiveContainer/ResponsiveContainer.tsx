import { HTMLProps } from "react";
import styles from "./ResponsiveContainer.module.scss";

type ResponsiveContainerProps = HTMLProps<HTMLDivElement>;

export default function ResponsiveContainer({className = "", children, ...props}: ResponsiveContainerProps) {
    return (
        <div {...props} className={`${styles.container} ${className}`} >
            <div className={styles.innerContainer} >
                {children}
            </div>
        </div>
    )
}