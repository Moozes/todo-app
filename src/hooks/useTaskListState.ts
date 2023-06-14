import { initialTaskList } from "data/data";
import { useRef, useState } from "react";
import { TTask } from "types/types";
import { v4 as uuidv4 } from 'uuid';

export default function useTaskListState() {
    const [taskList, setTaskList] = useState<TTask[]>(initialTaskList);

    const editTask = (id: string, text: string) => {
      setTaskList(prev => prev.map(elm => {
        if(elm.id !== id)
          return elm;
        else {
          return {
            ...elm,
            text
          }
        }
      }))
    }
  
    const deleteTask = (id: string) => {
      setTaskList(prev => prev.filter(elm => elm.id !== id))
    }
  
    const toggleDone = (id: string) => {
      setTaskList(prev => prev.map(elm => {
        if(elm.id !== id)
          return elm;
        else {
          return {
            ...elm,
            done: !elm.done
          }
        }
      }))
    }
  
    const addTask = (text: string) => {
      setTaskList(prev => prev.concat({
        id: uuidv4(),
        text,
        done: false
      }))
    }
  
    const deleteAll = () => {
      setTaskList([])
    }
  
    const deleteFinished = () => {
      setTaskList(prev => prev.filter(elm => !elm.done))
    }

    const [feedbackMessageContent, setFeedbackMessageContent] = useState("");
    const [showFeedbackMessage, setShowFeedbackMessage] = useState(false);

    const feedbackMessageTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)
    
    const createFeedbackMessageTimeout = () => {
      feedbackMessageTimeoutRef.current = setTimeout(() => {
        setShowFeedbackMessage(false)
      }, 2000)
    }

    const clearFeedbackMessageTimeout = () => {
      clearTimeout(feedbackMessageTimeoutRef.current)
    }

    const displayFeedbackMessage = (messasge: string) => {
      setFeedbackMessageContent(messasge);
      setShowFeedbackMessage(true);
      clearFeedbackMessageTimeout();
      createFeedbackMessageTimeout();
    }

    const [filter, setFilter] = useState("all");


    return {
        taskList,
        editTask,
        deleteTask,
        toggleDone,
        addTask,
        deleteAll,
        deleteFinished,
        feedbackMessageContent,
        setFeedbackMessageContent,
        showFeedbackMessage,
        setShowFeedbackMessage,
        createFeedbackMessageTimeout,
        clearFeedbackMessageTimeout,
        displayFeedbackMessage,
        filter,
        setFilter
    }
}