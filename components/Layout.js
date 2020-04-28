import { useWindowSize } from '../hooks/useWindowSize';
import { useState, useEffect } from 'react';
import MainStyles from '../stylesheets/Main.module.css';
import { motion } from 'framer-motion';
import MobHeader from '../components/MobHeader';
import DeskNav from '../components/DeskNav';
import Footer from '../components/Footer';

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

export default props => {
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

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}>
      <div className={MainStyles.pageGrid}>
        <MobHeader open={open} setOpen={setOpen} />
        {/* {menu === 'mobile' && <MobHeader open={open} setOpen={setOpen} /> || <DeskNav />} */}

        <main className={MainStyles.page}>
          {props.content}
        </main>

        <Footer />
      </div>
    </motion.div>
  );
}
