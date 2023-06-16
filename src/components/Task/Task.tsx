import { useState } from "react";

import styles from "./Task.module.scss";
import deleteIcon from "assets/icons/delete.png";
import editIcon from "assets/icons/edit.png";
import capitalize from "utils/capitalize";
import EditForm from "components/EditForm/EditForm";
import { TTask } from "types/types";
import useTaskContext from "hooks/useTaskContext";
import CustomCheckbox from "components/CustomCheckbox/CustomCheckbox";

type TaskProps = {
  className?: string;
  task: TTask;
};

export default function Task({ className, task }: TaskProps) {
    const [isEditMode, setIsEditMode] = useState(false)
    const {deleteTask, toggleDone, displayFeedbackMessage} = useTaskContext();

    const handleDelete = () => {
      deleteTask(task.id);
      displayFeedbackMessage("task deleted successfully!")
      

    }

    const handleToggleDone = () => {
      toggleDone(task.id);
      if(task.done) {
        displayFeedbackMessage("task unckecked successfully!")
      } else {
        displayFeedbackMessage("task ckecked successfully!")
      }
    }

  return (
    <div className={`${styles.container} ${className}`}>
      {isEditMode ? (
        <EditForm setIsEditMode={setIsEditMode} task={task}/>
      ) : (
        <div className={`${styles.taskContainer}`}>
          <CustomCheckbox checked={task.done} onChange={handleToggleDone} className={styles.customCheckbox}/>
          <p className={`${styles.text} ${task.done ? styles.done : ""}`}>{capitalize(task.text)}</p>
          <div className={styles.empty}></div>
          <div className={styles.icons}>
            <img className={`${styles.editIcon} ${task.done ? styles.hide : ""}`} src={editIcon} alt="" onClick={() => setIsEditMode(true)}/>
            <img className={styles.deleteIcon} src={deleteIcon} alt="" onClick={handleDelete} />
          </div>
        </div>
      )}
    </div>
  );
}
