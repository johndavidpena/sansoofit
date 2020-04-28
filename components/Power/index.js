import { useState } from 'react';
import { motion } from "framer-motion"
import Head from 'next/head';
import BackButton from '../BackButton';
import PowerMenu from './PowerMenu';
import PowerWorkout from './PowerWorkout';

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const Power = ({ workout, setWorkout }) => {
  const [level, setLevel] = useState(0);

  const handleSelect = value => {
    setLevel(value);
  }

  return (
    <>
      <Head>
        <title>San Soo Power</title>
      </Head>

      <>
        {/* FIX: Create or modify so below goes back to /Power/PowerMenu */}
        <BackButton workout={workout} setWorkout={setWorkout} />

        {level === 0 && <PowerMenu level={level} setLevel={setLevel} />}

        {level === 1 &&
          <motion.div
            initial='hidden'
            animate='visible'
            variants={variants}>
            <PowerWorkout level={level} />
          </motion.div>
        }
        {level === 2 &&
          <motion.div
            initial='hidden'
            animate='visible'
            variants={variants}>
            <PowerWorkout level={level} />
          </motion.div>
        }
        {level === 3 &&
          <motion.div
            initial='hidden'
            animate='visible'
            variants={variants}>
            <PowerWorkout level={level} />
          </motion.div>
        }
        {level === 4 &&
          <motion.div
            initial='hidden'
            animate='visible'
            variants={variants}>
            <PowerWorkout level={level} />
          </motion.div>
        }
        {level === 5 &&
          <motion.div
            initial='hidden'
            animate='visible'
            variants={variants}>
            <PowerWorkout level={level} />
          </motion.div>
        }
        {level === 6 &&
          <motion.div
            initial='hidden'
            animate='visible'
            variants={variants}>
            <PowerWorkout level={level} />
          </motion.div>
        }
        {level === 7 &&
          <motion.div
            initial='hidden'
            animate='visible'
            variants={variants}>
            <PowerWorkout level={level} />
          </motion.div>
        }
        {level === 8 &&
          <motion.div
            initial='hidden'
            animate='visible'
            variants={variants}>
            <PowerWorkout level={level} />
          </motion.div>
        }
        {level === 9 &&
          <motion.div
            initial='hidden'
            animate='visible'
            variants={variants}>
            <PowerWorkout level={level} />
          </motion.div>
        }
        {level === 10 &&
          <motion.div
            initial='hidden'
            animate='visible'
            variants={variants}>
            <PowerWorkout level={level} />
          </motion.div>
        }
      </>
    </>
  );
}

export default Power;
