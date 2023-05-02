import css from './Feedback.module.css';
import React from 'react';
import FeedbackOptions from './FeedbackOptions';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    console.log(e.target.textContent);
    const obj = e.target.textContent.toLocaleLowerCase();
    switch (obj) {
      case 'good':
        this.setState(prevState => {
          return { good: prevState.good + 1 };
        });
        break;
      case 'neutral':
        this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
        break;
      case 'bad':
        this.setState(prevState => ({ bad: prevState.bad + 1 }));
        break;
      default:
        break;
    }
  };

  render() {
    const state = this.state;
    const { good, neutral, bad } = state;
    const total = good + neutral + bad;
    const positivePercentage = ((good / total) * 100).toFixed([0]);
    return (
      <div>
        <h1 className={css.title}>Please leave feedback</h1>
        <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
        <div>
          <h2 className={css.title}>Statistics</h2>
          <p className={css.feedbackCounter}>Good: {this.state.good}</p>
          <p className={css.feedbackCounter}>Neutral: {this.state.neutral}</p>
          <p className={css.feedbackCounter}>Bad: {this.state.bad}</p>
        </div>
        <div>
          <p className={css.feedbackCounter}>Total: </p>
          <p className={css.feedbackCounter}>Positive feedback: </p>
        </div>
      </div>
    );
  }
}

export default Feedback;
