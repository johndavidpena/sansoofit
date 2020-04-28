import { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../Card';

// TODO: Animation not allowed to run correctly
const variants = {
  visible: { translateX: 0 },
  hidden: { translateX: '-150%', transition: { duration: 1 } },
}

const LevelMenu = props => {
  const [hidden, setHidden] = useState('');

  const handleSelect = value => {
    props.setLevel(value);
    // setHidden('hidden');
    console.log('handleSelect, value: ', value);
  }

  return (
    <>
      <motion.div
        initial='visible'
        animate={hidden}
        variants={variants}>
        <Card
          name='one'
          symbol='&#9651;'
          onClick={() => handleSelect('one')}
        />

        <Card name='two'
          symbol='&#8414;'
          onClick={() => handleSelect('two')} />

        <Card name='three'
          symbol='&#10061;'
          onClick={() => handleSelect('three')} />
      </motion.div>
    </>
  );
}

export default LevelMenu;
