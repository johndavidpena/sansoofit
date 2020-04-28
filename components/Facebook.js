import { useState } from 'react';
import PageStyles from '../stylesheets/Page.module.css';
import firebase from '../firebase/clientApp';

const FBcard = props => {
  // console.log('FBcard props: ', props);

  return (
    <div className={PageStyles.FBcard}>
      <div className={PageStyles.FBwelcome}>
        <span>Welcome</span>
        <span>{props.FBuser.displayName}</span>
      </div>

      <div className={PageStyles.FBavatar}>
        <img src={props.FBuser.photoURL} alt='Facebook user avatar' />
      </div>
    </div>
  );
}

const FBlogin = props => {
  // Create an instance of the Facebook provider object:
  var provider = new firebase.auth.FacebookAuthProvider();

  provider.setCustomParameters({
    'display': 'popup'
  });

  // TODO: save to database
  const loginWithPopup = async () => {
    await firebase.auth().signInWithPopup(provider)
      .then(function (result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // var facebookUser = result.user.displayName;
        // console.log("loginWithPopup -> facebookUser", facebookUser);
        var facebookUser = result.user;
        props.setFBuser(facebookUser);
      }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
      });
  }

  const loginWithRedirect = async () => {
    await firebase.auth().signInWithRedirect(provider);

    firebase.auth().getRedirectResult().then(function (result) {
      if (result.credential) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        console.log('loginWithRedirect token: ', token);
      }
      // The signed-in user info.
      var user = result.user;
      console.log('loginWithRedirect user: ', user);

      setFBuser(result.user.displayName);
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }

  return (
    <div className={PageStyles.facebookImage}
      onClick={() => loginWithPopup()}>
      {/* onClick={() => loginWithRedirect()}> */}
      <img src="https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/18928641_251957295286418_4362086450741641216_n.png?_nc_cat=111&amp;_nc_sid=ad8a9d&amp;_nc_ohc=v05DcUCQrIoAX9W7Ujh&amp;_nc_ht=scontent-dfw5-1.xx&amp;oh=c81840e92227c5b36f8a59ec7603049a&amp;oe=5EC2697B" alt="login with Facebook" ></img>
    </div>
  );
}

const Facebook = () => {
  const [FBuser, setFBuser] = useState('');

  return (
    <>
      {!FBuser ? <FBlogin setFBuser={setFBuser} /> : <FBcard FBuser={FBuser} />}
    </>
  );
}

export default Facebook;
