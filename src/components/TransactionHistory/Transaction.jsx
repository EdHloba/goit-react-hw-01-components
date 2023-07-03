import PropTypes from 'prop-types';
import css from './Transaction.module.css';

export const Transaction = ({ type, amount, currency }) => {
  return (

      <tr className={css.row}>
        <td className={css.column}>{type}</td>
        <td className={css.column}>{amount}</td>
        <td className={css.column}>{currency}</td>
      </tr>
  );
};

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};