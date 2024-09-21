import s from './Feedback.module.css'

const Feedback = ({ good, neutral, bad, totalFeedback, positive }) => {
  return (
      <div className={s.feedback}>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {totalFeedback}</p>
          <p>Positive: {positive}%</p>
    </div>
  )
}

export default Feedback