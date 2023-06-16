import styles from "./App.module.scss";
import TaskContext from "contexts/TaskContext";
import TaskList from "components/TaskList/TaskList";
import AddForm from "components/AddForm/AddForm";
import TaskListFooter from "components/TaskListFooter/TaskListFooter";
import FeedbackMessage from "components/FeedbackMessage/FeedbackMessage";
import useTaskListState from "hooks/useTaskListState";
import ResponsiveContainer from "components/ResponsiveContainer/ResponsiveContainer";

function App() {
  const taskListState = useTaskListState()

  return (
    <TaskContext.Provider value={taskListState}>
      <div className={styles.appContainer}>
          <ResponsiveContainer>
            <AddForm className={styles.addForm} />
            <TaskList className={styles.taskList}/>
            <TaskListFooter/>
          </ResponsiveContainer>
          <FeedbackMessage/>
      </div>
    </TaskContext.Provider>
  );
}

export default App;
