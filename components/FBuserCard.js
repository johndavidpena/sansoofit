import PageStyles from '../stylesheets/Page.module.css';

const FBuserCard = ({ user }) => {
  // console.log('FBcard props: ', props);

  return (
    <div className={PageStyles.FBcard}>
      <div className={PageStyles.FBwelcome}>
        <span>Welcome</span>
        <span>{user.displayName}</span>
      </div>

      <div className={PageStyles.FBavatar}>
        <img src={user.photoURL} alt='Facebook user avatar' />
      </div>
    </div>
  );
}

export default FBuserCard;
