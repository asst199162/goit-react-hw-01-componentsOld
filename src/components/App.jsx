//import PropTypes from 'prop-types';
import { ProfileCard } from 'components/profile/profile'
import user from 'components/user.json'

import { Statistics } from './Statistics/statistics';
import data from 'components/data.json';

import { FriendList } from './FriendList/freind';
import friends from 'components/friends.json'

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from 'components/transactions.json'


export const App = () => {
  return (
    
    <>
      <ProfileCard users={user} />
      <Statistics data={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions = {transactions}/>
      
    </>
    
  );
};
