import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={css.list}>
      <li>
        <p className={css.listText}>Good: {good}</p>
      </li>
      <li>
        <p className={css.listText}>Neutral: {neutral}</p>
      </li>
      <li>
        <p className={css.listText}>Bad: {bad}</p>
      </li>
      <li>
        <p className={css.listText}>Total: {total}</p>
      </li>
      <li>
        <p className={css.listText}>Positive feedback: {positivePercentage}%</p>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
