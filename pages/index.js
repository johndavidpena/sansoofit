import Head from 'next/head';
import { useState, useEffect } from 'react';
import MainStyles from '../stylesheets/Main.module.css';
import { motion } from 'framer-motion';
import MobHeader from '../components/MobHeader';
import SignOut from '../components/SignOut';
import Footer from '../components/Footer';
import { useUser } from '../context/userContext';
import Facebook from '../components/Facebook';
import FBuserCard from '../components/FBuserCard';

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

export default () => {
  const [open, setOpen] = useState(false);

  // Our custom hook to get context values
  const { loadingUser, user } = useUser()

  useEffect(() => {
    if (!loadingUser) {
      // You know that the user is loaded: either logged in or out!
      console.log('User: ', user)
    }
    // You also have your firebase app initialized
    // console.log('[pages/index.js] firebase: ', firebase)
  }, [loadingUser, user]);

  return (
    <>
      <Head>
        <title>San Soo Fit</title>
      </Head>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}>
        {!user && (
          <main className={MainStyles.pageGrid}>
            <MobHeader open={open} setOpen={setOpen} user={user} />
            <Facebook />
            <Footer />
          </main>
        )}

        {user && (
          <main className={MainStyles.pageGrid}>
            <MobHeader open={open} setOpen={setOpen} user={user} />
            {!open && (
              <>
                <FBuserCard user={user} />
                <SignOut />
                {/* <Footer /> */}
              </>
            )}

            {open && <>&nbsp;</>}
          </main>
        )}
      </motion.div>
    </>
  );
}
