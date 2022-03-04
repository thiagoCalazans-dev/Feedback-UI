import { createContext, useEffect, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState()
const [feedback, setFeedback] = useState([]);
const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
})

useEffect(() => {
    fetch('http://localhost:5000/feedback')
    .then((response) => response.json())
    .then((data) =>
    setFeedback(data)) 
    setIsLoading(false)       
    }  
, [])

//Delete feedback
    const deleteFeedback = async (id) => {
    if(window.confirm('Are you sure you want to delete?'))
    {await fetch(`http://localhost:5000/feedback/${id}`, {
        method: 'DELETE',
      })
    setFeedback(feedback.filter((item) => item.id !== id))
  }
}
  
  //Add Feedback
  const addFeedback = async (newFeedback) => {
      const response = await fetch('http://localhost:5000/feedback', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(newFeedback)
      })
      
      const data = await response.json()
    setFeedback([data, ...feedback]);
  };  

  //Set item to be updated
  const editFeedback = (item) => {
          setFeedbackEdit({
        item,
        edit: true
    })
  } 

  //Update FeedbackItem
  const updateFeedback = async (id, updItem) => {
      const response = await fetch(`http://localhost:5000/feedback/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updItem)
      })

      const data = await response.json()
      setFeedback(feedback.map((item) => item.id === id ? {
          ...item, ...data} : item
      ))
  }

    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback, 
        updateFeedback,       
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;