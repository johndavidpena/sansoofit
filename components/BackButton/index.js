import BBstyles from './BBstyles.module.css';

const BackButton = ({ workout, setWorkout }) => (
  <button
    className={BBstyles.bb}
    onClick={() => setWorkout('')}>
  </button>
);

export default BackButton;

// &#1422; Cool flower looking one
// &#9664; left arrow