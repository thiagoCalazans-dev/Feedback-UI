import { useContext } from "react";
import React from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";
import Spinner from "./shared/Spinner";

function FeedbackList({handleDelete }) {
  const {feedback, isLoading} = useContext(FeedbackContext)

  if (!isLoading && (!feedback || feedback.length === 0)) {
    <p>no feedback yet</p>;
  }

 
  return isLoading ? <Spinner/> : (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem
          key={item.id}
          item={item}        
        />
      ))}
    </div>
  );
}


export default FeedbackList;
