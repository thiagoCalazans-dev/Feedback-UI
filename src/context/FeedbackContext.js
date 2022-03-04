import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
const [feedback, setFeedback] = useState([
    {
        id: 1,
        rating: 10,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris efficitur vitae urna vitae interdum. Quisque fermentum nec arcu condimentum accumsan.',
    },
    {
        id: 2,
        rating: 9,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris efficitur vitae urna vitae interdum. Quisque fermentum nec arcu condimentum accumsan.',
    },
    {
        id: 3,
        rating: 8,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris efficitur vitae urna vitae interdum. Quisque fermentum nec arcu condimentum accumsan.',
    }
]);
const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
})

//Delete feedback
    const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete?'))
    setFeedback(feedback.filter((item) => item.id !== id))
  }
  
  //Add Feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };  

  //Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
        item,
        edit: true
    })
  }

  //Update FeedbackItem
  const updateFeedback = (id, updItem) => {
      console.log (id, updItem)
  }

    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,        
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;