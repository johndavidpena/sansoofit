import PowerStyles from './Power.module.css';
import VideoStyles from '../../stylesheets/Video.module.css';

import WORKOUTS from './WORKOUTS';
import { RepsCounter, SaveWorkoutButton } from '../RepsCounter';

const PowerWorkout = ({ level }) => {
  const adjLevel = level - 1;

  return (
    <div className={PowerStyles.PW}>

      <div className={PowerStyles.title}>
        <span className={PowerStyles.titleWorkout}>power</span><br />
        <span>{WORKOUTS[adjLevel].name}</span>&nbsp;
          <span className={PowerStyles.symbol}>&nbsp;&#9651;</span>
      </div>

      <div className={PowerStyles.exerciseContainer}>
        <span className={PowerStyles.exerciseName}>{WORKOUTS[adjLevel].exercise1}</span>

        <video controls className={VideoStyles.VID}>
          <source src={WORKOUTS[adjLevel].exercise1url} type='video/mp4' />
          Your browser does not support the video tag.
        </video>

        <RepsCounter />
      </div>

      <div className={PowerStyles.exerciseContainer}>
        <span className={PowerStyles.exerciseName}>{WORKOUTS[adjLevel].exercise2}</span>

        <video controls className={VideoStyles.VID}>
          <source src={WORKOUTS[adjLevel].exercise2url} type='video/mp4' />
            Your browser does not support the video tag.
          </video>

        <RepsCounter />
      </div>

      <div className={PowerStyles.lastExerciseContainer}>
        <span className={PowerStyles.exerciseName}>{WORKOUTS[adjLevel].exercise3}</span>

        <video controls className={VideoStyles.VID}>
          <source src={WORKOUTS[adjLevel].exercise3url} type='video/mp4' />
            Your browser does not support the video tag.
          </video>

        <RepsCounter />
      </div>

      <SaveWorkoutButton />
    </div>
  );
}

export default PowerWorkout;
