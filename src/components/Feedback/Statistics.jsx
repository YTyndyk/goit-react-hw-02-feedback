import css from './Feedback.module.css';
import Notification from './Notification';

const Statistics = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => (
  <div>
    {countTotalFeedback ? (
      <ul>
        <li className={css.feedbackCounter}>Good: {good}</li>
        <li className={css.feedbackCounter}>Neutral: {neutral}</li>
        <li className={css.feedbackCounter}>Bad: {bad}</li>
        <li className={css.feedbackCounter}>Total: {countTotalFeedback}</li>
        <li className={css.feedbackCounter}>
          Positive feedback: {countPositiveFeedbackPercentage}%
        </li>
      </ul>
    ) : (
      <Notification message="There is no feedback"></Notification>
    )}
  </div>
);

export default Statistics;
