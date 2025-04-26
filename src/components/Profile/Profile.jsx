import style from './Profile.module.css';

function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={style.profileCard}>
      <div>
        <img className={style.userImg} src={image} alt={name} />
        <p className={style.userName}>{name}</p>
        <p className={style.userTag}>@{tag}</p>
        <p className={style.userLocation}>{location}</p>
      </div>

      <ul className={style.userStats}>
        <li className={style.userStatsUnit}>
          <span className={style.userStatsLabel}>Followers</span>
          <span className={style.userStatsValue}>{followers}</span>
        </li>
        <li className={style.userStatsUnit}>
          <span className={style.userStatsLabel}>Views</span>
          <span className={style.userStatsValue}>{views}</span>
        </li>
        <li className={style.userStatsUnit}>
          <span className={style.userStatsLabel}>Likes</span>
          <span className={style.userStatsValue}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
