import PowerCard from './PowerCard';
import WORKOUTS from './WORKOUTS';

const PowerMenu = ({ level, setLevel }) => (
  <>
    <PowerCard
      name={WORKOUTS[0].name}
      symbol='&#9651;'
      exercise1={WORKOUTS[0].exercise1}
      exercise2={WORKOUTS[0].exercise2}
      exercise3={WORKOUTS[0].exercise3}
      onClick={() => setLevel(1)} />
    <PowerCard
      name={WORKOUTS[1].name}
      symbol='&#9651;'
      exercise1={WORKOUTS[1].exercise1}
      exercise2={WORKOUTS[1].exercise2}
      exercise3={WORKOUTS[1].exercise3}
      onClick={() => setLevel(2)} />
    <PowerCard
      name={WORKOUTS[2].name}
      symbol='&#9651;'
      exercise1={WORKOUTS[2].exercise1}
      exercise2={WORKOUTS[2].exercise2}
      exercise3={WORKOUTS[2].exercise3}
      onClick={() => setLevel(3)} />
    <PowerCard
      name={WORKOUTS[3].name}
      symbol='&#9651;'
      exercise1={WORKOUTS[3].exercise1}
      exercise2={WORKOUTS[3].exercise2}
      exercise3={WORKOUTS[3].exercise3}
      onClick={() => setLevel(4)} />
    <PowerCard
      name={WORKOUTS[4].name}
      symbol='&#9651;'
      exercise1={WORKOUTS[4].exercise1}
      exercise2={WORKOUTS[4].exercise2}
      exercise3={WORKOUTS[4].exercise3}
      onClick={() => setLevel(5)} />
    <PowerCard
      name={WORKOUTS[5].name}
      symbol='&#9651;'
      exercise1={WORKOUTS[5].exercise1}
      exercise2={WORKOUTS[5].exercise2}
      exercise3={WORKOUTS[5].exercise3}
      onClick={() => setLevel(6)} />
    <PowerCard
      name={WORKOUTS[6].name}
      symbol='&#9651;'
      exercise1={WORKOUTS[6].exercise1}
      exercise2={WORKOUTS[6].exercise2}
      exercise3={WORKOUTS[6].exercise3}
      onClick={() => setLevel(7)} />
    <PowerCard
      name={WORKOUTS[7].name}
      symbol='&#9651;'
      exercise1={WORKOUTS[7].exercise1}
      exercise2={WORKOUTS[7].exercise2}
      exercise3={WORKOUTS[7].exercise3}
      onClick={() => setLevel(8)} />
    <PowerCard
      name={WORKOUTS[8].name}
      symbol='&#9651;'
      exercise1={WORKOUTS[8].exercise1}
      exercise2={WORKOUTS[8].exercise2}
      exercise3={WORKOUTS[8].exercise3}
      onClick={() => setLevel(9)} />
    <PowerCard
      name={WORKOUTS[9].name}
      symbol='&#9651;'
      exercise1={WORKOUTS[9].exercise1}
      exercise2={WORKOUTS[9].exercise2}
      exercise3={WORKOUTS[9].exercise3}
      onClick={() => setLevel(10)} />
  </>
);

export default PowerMenu;
