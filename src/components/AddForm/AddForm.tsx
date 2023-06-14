import useTaskContext from "hooks/useTaskContext";
import styles from "./AddForm.module.scss";
import { useRef } from "react";
import CustomButton from "components/CustomButton/CustomButton";

type AddFormProps = {
    className?: string;
}

export default function AddForm({className}: AddFormProps) {
    const {addTask, displayFeedbackMessage} = useTaskContext()
    const inputRef = useRef<HTMLInputElement>(null!)

    const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(inputRef.current.value) {
            addTask(inputRef.current.value);
            displayFeedbackMessage("task added successfully!")
        }
        inputRef.current.value = "";
    }

    return (
        <form onSubmit={handleAdd} className={`${styles.addFormContainer} ${className}`} >
            <input ref={inputRef} type="text" placeholder="Add Item..."/>
            <CustomButton type="submit" >Add</CustomButton>
        </form>
    )
}