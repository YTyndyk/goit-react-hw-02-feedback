import PropTypes from 'prop-types';
import css from './Feedback.module.css';

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
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
