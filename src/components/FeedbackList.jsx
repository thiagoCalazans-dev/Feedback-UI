import { useContext } from "react";
import React from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList({handleDelete }) {
  const {feedback} = useContext(FeedbackContext)

  if (!feedback || feedback.length === 0) {
    <p>no feedback yet</p>;
  }

  return (
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
