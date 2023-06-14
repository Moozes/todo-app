import useTaskContext from "hooks/useTaskContext";
import styles from "./TaskList.module.scss";
import Task from "components/Task/Task";

type TaskListProps = {
    className?: string;
}

export default function TaskList({className}: TaskListProps) {
    const {taskList, filter} = useTaskContext();

    const filteredTaskList = 
        filter === "all" ? taskList : 
        filter === "active" ? taskList.filter(elm => !elm.done) : 
        taskList.filter(elm => elm.done) 

    return (
        <div className={`${styles.taskListContainer} ${className}`}>
            {filteredTaskList.map(elm => (
                <Task className={styles.task} task={elm} key={elm.id}/>
            ))}
            {taskList.length === 0 && <p className={styles.message}>There are no items to show!</p>}
        </div>
    )
}