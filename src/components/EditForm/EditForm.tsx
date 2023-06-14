import { useEffect, useState } from "react";
import styles from "./EditForm.module.scss";
import useTaskContext from "hooks/useTaskContext";
import { TTask } from "types/types";
import CustomButton from "components/CustomButton/CustomButton";

type EditFormProps = {
    hide?: boolean
    setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
    task: TTask;
}
// TODO: use a ref instead of state, because no need to rerender on each input change
export default function EditForm({task, hide, setIsEditMode}: EditFormProps) {
  const [value, setValue] = useState("");
  const {editTask, displayFeedbackMessage} = useTaskContext();


  useEffect(() => {
    setValue(task.text);
  }, [hide, task])

  const handleEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(value === "") {
      setIsEditMode(false);
      displayFeedbackMessage("nothing was changed!")
    } else {
      editTask(task.id, value);
      setIsEditMode(false);
      displayFeedbackMessage("task edited successfully!")
    }
  }


  return (
    <form onSubmit={handleEdit} className={`${styles.editFormContainer} ${hide && styles.hide}`}>
        <input value={value} onChange={e => setValue(e.target.value)} type="text" placeholder="Task..."/>
        <CustomButton type="submit">Edit</CustomButton>
    </form>
  )
}
