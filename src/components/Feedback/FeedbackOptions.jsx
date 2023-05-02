import css from './Feedback.module.css';
import React from 'react';

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <div>
    <button type="button" className={css.btn} onClick={onLeaveFeedback}>
      Good
    </button>
    <button type="button" className={css.btn} onClick={onLeaveFeedback}>
      Neutral
    </button>
    <button type="button" className={css.btn} onClick={onLeaveFeedback}>
      Bad
    </button>
  </div>
);
export default FeedbackOptions;
