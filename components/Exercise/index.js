import ExerciseStyles from './Exercise.module.css';

const Exercise = props => (
  <div className={ExerciseStyles.container}>
    <div className={ExerciseStyles.title}>
      <span className={ExerciseStyles.name}>{props.exercise}</span>&nbsp;
    <span className={ExerciseStyles.symbol}>&nbsp;{props.symbol}</span>
    </div>

    <div className={ExerciseStyles.notes}>
      {props.notes}
    </div>

    {props.children}
  </div>
);

export default Exercise;
