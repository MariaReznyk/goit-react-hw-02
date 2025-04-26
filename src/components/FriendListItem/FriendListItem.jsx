import style from './FriendListItem.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <img src={avatar} alt={name} width="48" />
      <p className={style.friendName}>{name}</p>
      {isOnline ? (
        <span className={style.isOnline}>Online</span>
      ) : (
        <span className={style.isOffline}>Offline</span>
      )}
    </>
  );
}

export default FriendListItem;
