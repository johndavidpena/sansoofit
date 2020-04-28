import { useState } from 'react';
import Head from 'next/head';
import BackButton from '../BackButton';
import LevelMenu from './LevelMenu';

const Mobility = ({ workout, setWorkout }) => {
  const [level, setLevel] = useState('');

  return (
    <>
      <Head>
        <title>San Soo Mobility</title>
      </Head>

      <>
        <BackButton workout={workout} setWorkout={setWorkout} />
        <LevelMenu level={level} setLevel={setLevel} />
      </>
    </>
  );
}

export default Mobility;


