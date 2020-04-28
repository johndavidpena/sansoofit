import CardStyles from './Card.module.css';

const Card = props => (
  <div
    onClick={props.onClick}
    className={CardStyles.card}>
    <div className={CardStyles.absCentered}>
      <span>{props.name}</span>&nbsp;

      <span className={CardStyles.symbol}>&nbsp;{props.symbol}</span>

      {props.children}

    </div>
  </div>
);

export default Card;
