import style from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

function FriendList({ friends }) {
  return (
    <ul className={style.friendList}>
      {friends.map(friend => (
        <li className={style.friendListItem} key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

export default FriendList;
