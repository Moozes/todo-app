import { useEffect, useRef} from "react";
import styles from "./EditForm.module.scss";
import useTaskContext from "hooks/useTaskContext";
import { TTask } from "types/types";
import CustomButton from "components/CustomButton/CustomButton";

type EditFormProps = {
    setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
    task: TTask;
}
export default function EditForm({task, setIsEditMode}: EditFormProps) {
  const {editTask, displayFeedbackMessage} = useTaskContext();
  const inputRef = useRef<HTMLInputElement>(null!)


  useEffect(() => {
    inputRef.current.value = task.text;
  }, [task])

  const handleEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(inputRef.current.value === "") {
      setIsEditMode(false);
      displayFeedbackMessage("nothing was changed!")
    } else {
      editTask(task.id, inputRef.current.value);
      setIsEditMode(false);
      displayFeedbackMessage("task edited successfully!")
    }
  }


  return (
    <form onSubmit={handleEdit} className={`${styles.editFormContainer}`}>
        <input ref={inputRef}  type="text" placeholder="Task..."/>
        <CustomButton type="submit">Edit</CustomButton>
    </form>
  )
}
