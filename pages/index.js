import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useWindowSize } from '../hooks/useWindowSize';
import MainStyles from '../stylesheets/Main.module.css';
import { motion } from 'framer-motion';
import MobHeader from '../components/MobHeader';
import DeskNav from '../components/DeskNav';
import SignOut from '../components/SignOut';
import Footer from '../components/Footer';
import { useUser } from '../context/userContext';
import Facebook from '../components/Facebook';

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

export default () => {
  // const size = useWindowSize();
  // let width = size.width;

  const [menu, setMenu] = useState('');
  // useEffect(() => {
  //   if (width <= 768) {
  //     setMenu('mobile');
  //   } else if (width > 768) {
  //     setMenu('desktop');
  //   }

  //   return () => { };
  // }, [width]);

  const [open, setOpen] = useState(false);

  // Our custom hook to get context values
  const { loadingUser, user } = useUser()

  useEffect(() => {
    if (!loadingUser) {
      // You know that the user is loaded: either logged in or out!
      // console.log('[pages/index.js] user: ', user)
    }
    // You also have your firebase app initialized
    // console.log('[pages/index.js] firebase: ', firebase)
  }, [loadingUser, user])

  return (
    <>
      <Head>
        <title>San Soo Fit</title>
      </Head>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}>
        <div className={MainStyles.pageGrid}>
          <main>
            {!user && (
              <>
                <Facebook />
                <Footer />
              </>
            )}

            {user && (
              <>
                <MobHeader open={open} setOpen={setOpen} />
                {/* {menu === 'mobile' && <MobHeader open={open} setOpen={setOpen} /> || <DeskNav />} */}
                <SignOut />
                <Footer />
              </>
            )}
          </main>
        </div>
      </motion.div>
    </>
  );
}
