import styles from "./App.module.scss";
import TaskContext from "contexts/TaskContext";
import TaskList from "components/TaskList/TaskList";
import AddForm from "components/AddForm/AddForm";
import InfoMessage from "components/TaskListFooter/TaskListFooter";
import Controls from "components/Controls/Controls";
import FeedbackMessage from "components/FeedbackMessage/FeedbackMessage";
import useTaskListState from "hooks/useTaskListState";
import ResponsiveContainer from "components/ResponsiveContainer/ResponsiveContainer";
import CustomButton from "components/CustomButton/CustomButton";
import closeIcon from "assets/icons/close.png"

function App() {
  const taskListState = useTaskListState()

  return (
   <div className={styles.appContainer}>
    <TaskContext.Provider value={taskListState}>
      <ResponsiveContainer>
      <AddForm className={styles.addForm} />
      <TaskList className={styles.taskList}/>
      {taskListState.taskList.length !== 0 && <InfoMessage className={styles.infoMessage}/>}
      </ResponsiveContainer>
      <FeedbackMessage/>
    </TaskContext.Provider>
   </div>
  );
}

export default App;
