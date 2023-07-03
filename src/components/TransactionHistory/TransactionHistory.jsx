import { Transaction } from 'components/TransactionHistory/Transaction';
import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead className={css.header}>
        <tr>
          <th className={css.item}>Type</th>
          <th className={css.item}>Amount</th>
          <th className={css.item}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.body}>
        {items.map(({ id, type, amount, currency }) => {
        return (
          <Transaction
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        );
        })}
      </tbody>
      
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
