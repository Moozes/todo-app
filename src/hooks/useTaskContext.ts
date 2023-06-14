import { useContext } from "react";
import TaskContext from "contexts/TaskContext";

export default function useTaskContext() {
    return useContext(TaskContext)
}