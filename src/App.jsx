import { useEffect, useState } from 'react'
import './App.css'

import Description from './components/Description/Description'
import Feedback from './components/Feedback/Feedback'
import Options from './components/Options/Options'
import Notification from './components/Notification/Notification'

function App() {
  const [feedback, setFeedback] = useState(() => {
    const storedFeedback = window.localStorage.getItem('feedback');
    return storedFeedback ? JSON.parse(storedFeedback) : {
      good: 0,
      neutral: 0,
      bad: 0,
      total: 0,
    };
  });
  
  useEffect(() => {
    window.localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);


  const updateFeedback = (feedbackType) => {
  if (feedbackType === "reset") {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
      total: 0,
    });
  } else {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
      total: prevFeedback.total + 1,
    }));
  }
};


  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = totalFeedback > 0 ? Math.round((feedback.good / (totalFeedback - feedback.neutral)) * 100) : 0;

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? (<Feedback good={feedback.good} neutral={feedback.neutral} bad={feedback.bad} totalFeedback={totalFeedback} positive={positiveFeedback} />) : (<Notification />)}
    </>
  )
}

export default App
