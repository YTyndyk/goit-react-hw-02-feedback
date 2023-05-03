import css from './Feedback.module.css';
export const Title = ({ title }) => {
  return <h2 className={css.title}>{title}</h2>;
};

export default Title;
