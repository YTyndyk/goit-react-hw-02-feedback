import css from './Feedback.module.css';
import React from 'react';

class Feedback extends React.Component {
  render() {
    return (
      <div>
        <h1 className={css.title}>Please leave feedback</h1>
        <div>
          <button type="button" className={css.btn}>
            Good
          </button>
          <button type="button" className={css.btn}>
            Neutral
          </button>
          <button type="button" className={css.btn}>
            Bad
          </button>
        </div>
      </div>
    );
  }
}

export default Feedback;
