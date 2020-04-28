import CardStyles from '../Card/Card.module.css';

const PowerCard = props => (
  <div
    onClick={props.onClick}
    className={CardStyles.powerCard}>
    <div className={CardStyles.grid}>
      <div className={CardStyles.title}>
        <span className={CardStyles.titleWorkout}>power</span><br />
        <span>{props.name}</span>&nbsp;
      <span className={CardStyles.symbol}>&nbsp;{props.symbol}</span>
      </div>

      <div className={CardStyles.exercises}>
        <span>{props.exercise1}</span><br />
        <span>{props.exercise2}</span><br />
        <span>{props.exercise3}</span>
      </div>

    </div>
  </div>
);

export default PowerCard;
