import useTaskContext from "hooks/useTaskContext";
import styles from "./FeedbackMessage.module.scss";
import capitalize from "utils/capitalize";
import closeIcon from "assets/icons/close.png"
import CustomButton from "components/CustomButton/CustomButton";

export default function FeedbackMessage() {
    const {feedbackMessageContent, setShowFeedbackMessage, showFeedbackMessage, clearFeedbackMessageTimeout} = useTaskContext()

    const handleClose = () => {
        setShowFeedbackMessage(false);
        clearFeedbackMessageTimeout();
    }

    return (
        <div className={`${styles.feedbackMessageContainer} ${showFeedbackMessage ? styles.show : ""}`} >
            <span>{capitalize(feedbackMessageContent)}</span>
            <CustomButton onClick={() => handleClose()} >
                <img src={closeIcon} alt="" />
            </CustomButton>
        </div>
    )
}