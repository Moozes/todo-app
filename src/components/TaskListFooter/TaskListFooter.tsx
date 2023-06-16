import useTaskContext from "hooks/useTaskContext";
import styles from "./TaskListFooter.module.scss";
import CustomButton from "components/CustomButton/CustomButton";

type TaskListFooterProps = {
    className?: string
}

export default function TaskListFooter({className}: TaskListFooterProps) {
    const {taskList, deleteFinished, displayFeedbackMessage, filter, setFilter} = useTaskContext()

    const tasksLeft = taskList.filter(elm => !elm.done).length;

    const handleDeleteFinished = () => {
        deleteFinished();
        if(taskList.filter(elm => elm.done).length === 0) {
            displayFeedbackMessage("nothing to delete!")
        } else {
            displayFeedbackMessage("all finished tasks were deleted successfully!")
        }
    }

    if(taskList.length === 0)
        return null;

    return (
        <div className={`${styles.container} ${className}`} >
            <div className={`${styles.tasksLeft}`}>items left: <strong> {tasksLeft} </strong></div>
            <div className={`${styles.empty}`}></div>
            <div className={styles.filters} >
                <CustomButton 
                    className={`${styles.customButton} ${filter === "all" ? styles.active : ""}`}
                    onClick={() => setFilter("all")}
                >All</CustomButton>
                <CustomButton 
                    className={`${styles.customButton} ${filter === "active" ? styles.active : ""}`}
                    onClick={() => setFilter("active")}
                >Active</CustomButton>
                <CustomButton 
                    className={`${styles.customButton} ${filter === "completed" ? styles.active : ""}`}
                    onClick={() => setFilter("completed")}
                >Completed</CustomButton>
            </div>
            <div className={`${styles.empty}`}></div>
            <CustomButton className={`${styles.customButton}`} onClick={handleDeleteFinished}>Clear Completed</CustomButton>
        </div>
    )
}