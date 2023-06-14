import useTaskContext from "hooks/useTaskContext";
import styles from "./Controls.module.scss";
import { useHotkeys } from 'react-hotkeys-hook';
import CustomButton from "components/CustomButton/CustomButton";

export default function Controls() {
    const {taskList, deleteAll, deleteFinished, displayFeedbackMessage} = useTaskContext();

    const handleDeleteAll = () => {
        deleteAll();
        if(taskList.length === 0) {
            displayFeedbackMessage("nothing to delete!")
        } else {
            displayFeedbackMessage("all tasks were deleted successfully!")
        }
    }

    const handleDeleteFinished = () => {
        deleteFinished();
        if(taskList.filter(elm => elm.done).length === 0) {
            displayFeedbackMessage("nothing to delete!")
        } else {
            displayFeedbackMessage("all finished tasks were deleted successfully!")
        }
    }

    useHotkeys("ctrl+i", () => handleDeleteAll())
    useHotkeys("ctrl+y", () => handleDeleteFinished())

    return (
        <div className={styles.controlsContainer} >
            <CustomButton onClick={handleDeleteAll} >
                <span>Delete All</span>
                <code>ctrl + i</code>
            </CustomButton>
            <CustomButton onClick={handleDeleteFinished} >
                <span>Delete Finished</span>
                <code>ctrl + y</code>
            </CustomButton>
        </div>
    )
}