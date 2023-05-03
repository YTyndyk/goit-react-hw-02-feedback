import css from './Feedback.module.css';
import React from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Title from './Title';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
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
  countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;
  countPositiveFeedbackPercentage = ({ good }) =>
    Math.round((good / this.countTotalFeedback(this.state)) * 100);

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={css.profile}>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            countTotalFeedback={this.countTotalFeedback(this.state)}
            countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage(
              this.state
            )}
          />
        </Section>
      </div>
    );
  }
}

export default Feedback;
