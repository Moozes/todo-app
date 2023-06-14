import { createContext } from "react";
import { TTask } from "types/types";


const TaskContext = createContext<{
    taskList: TTask[];
    editTask: (id: string, text: string) => void;
    deleteTask: (id: string) => void;
    toggleDone: (id: string) => void;
    addTask: (text: string) => void;
    deleteAll: () => void;
    deleteFinished: () => void;
    feedbackMessageContent: string;
    showFeedbackMessage: boolean;
    setFeedbackMessageContent: React.Dispatch<React.SetStateAction<string>>;
    setShowFeedbackMessage:  React.Dispatch<React.SetStateAction<boolean>>;
    createFeedbackMessageTimeout: () => void,
    clearFeedbackMessageTimeout: () => void,
    displayFeedbackMessage: (message: string) => void;
    filter: string;
    setFilter: React.Dispatch<React.SetStateAction<string>>;
}>(null!)

export default TaskContext;