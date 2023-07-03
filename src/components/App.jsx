import { Profile } from 'components/Profile/Profile';
import user from 'user.json';

import { Statistics } from 'components/Statistics/Statistics';
import data from 'data.json';

import { FriendsList } from 'components/FriendsList/FriendsList';
import friends from 'friends.json';

import { TransactionHistory } from "components/TransactionHistory/TransactionHistory";
import transactions from 'transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 18,
        color: '#000000',
      }}
    >
      <Profile {...user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
