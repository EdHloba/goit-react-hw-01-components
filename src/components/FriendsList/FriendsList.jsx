import { FriendsListItem } from 'components/FriendsList/FriendsListItem';
import PropTypes from 'prop-types';
import css from './FriendsList.module.css';

export const FriendsList = ({ friends }) => {
  return  <ul className={css.friendsList}>
    {friends.map(({ id, avatar, name, isOnline }) => {
     return <FriendsListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
      />;
    })}
  </ul>;
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
