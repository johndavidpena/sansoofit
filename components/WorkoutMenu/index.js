import { useState } from 'react';
import Card from '../Card';

const WorkoutMenu = props => {
  const [hidden, setHidden] = useState('');

  const handleSelect = value => {
    props.setWorkout(value);
    setHidden('hidden');
  }

  return (
    <>
      <Card
        name='power'
        symbol='&#9651;'
        onClick={() => handleSelect('power')} />

      <Card name='endurance'
        symbol='&#8414;'
        onClick={() => handleSelect('endurance')} />

      <Card name='mobility'
        symbol='&#10061;'
        onClick={() => handleSelect('mobility')} />

      <Card name='focus'
        symbol='&#8231;'
        onClick={() => handleSelect('focus')} />
    </>
  );
}

export default WorkoutMenu;
