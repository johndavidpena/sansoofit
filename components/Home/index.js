import { useState } from 'react';
import { motion } from 'framer-motion';
import HomeStyles from './Home.module.css';
import WorkoutMenu from '../WorkoutMenu';
import Power from '../Power';
import Endurance from '../Endurance';
import Mobility from '../Mobility';
import Focus from '../Focus';

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const Home = ({ open, setOpen }) => {
  const openStyle = {
    transform: 'translateX(0)'
  }

  const closedStyle = {
    transform: 'translateX(-100%)'
  }

  const [workout, setWorkout] = useState('');

  return (
    <div open={open}
      className={HomeStyles.home}
      style={open ? openStyle : closedStyle}
    >
      {workout === '' && <WorkoutMenu workout={workout} setWorkout={setWorkout} />}

      {workout === 'power' &&
        <motion.div
          initial='hidden'
          animate='visible'
          variants={variants}>
          <Power workout={workout} setWorkout={setWorkout} />
        </motion.div>
      }
      {workout === 'endurance' &&
        <motion.div
          initial='hidden'
          animate='visible'
          variants={variants}>
          <Endurance workout={workout} setWorkout={setWorkout} />
        </motion.div>}
      {workout === 'mobility' &&
        <motion.div
          initial='hidden'
          animate='visible'
          variants={variants}>
          <Mobility workout={workout} setWorkout={setWorkout} />
        </motion.div>}
      {workout === 'focus' &&
        <motion.div
          initial='hidden'
          animate='visible'
          variants={variants}>
          <Focus workout={workout} setWorkout={setWorkout} />
        </motion.div>}
    </div>
  );
}

export default Home;

// import Head from 'next/head';
// import { useEffect } from 'react';
// import { useUser } from '../context/userContext';
// import firebase from '../firebase/clientApp';
// import SignOut from '../components/SignOut';

// export default () => {
//   // Our custom hook to get context values
//   const { loadingUser, user } = useUser()

//   useEffect(() => {
//     if (!loadingUser) {
//       // You know that the user is loaded: either logged in or out!
//       console.log('[pages/members.js] user: ', user)
//     }
//     // You also have your firebase app initialized
//     // console.log('[pages/members.js] firebase: ', firebase)
//   }, [loadingUser, user])

//   return (
//     <>
//       <Head>
//         <title>Now With Firebase - Users</title>
//       </Head>

//       <main>
//         <h1>Users Page</h1>

//         {user && <SignOut />}
//       </main>
//     </>
//   );
// }