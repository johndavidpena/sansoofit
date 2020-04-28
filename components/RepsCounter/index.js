import { useState, useEffect } from 'react';
import RCstyles from './RC.module.css';
// import { AuthUserContext, withAuthorization } from '../Session';
// import { withFirebase } from '../Firebase';

const RepsCounter = props => {
  // const [reps, setReps] = useState(0);
  // const [weight, setWeight] = useState(0);
  // const [saved, setSaved] = useState('Save');
  // const [description, showDescription] = useState(false);
  // const toggle = () => showDescription(!description);

  // useEffect(() => {
  //   const { workout, id } = props.exercise;
  //   const user = props.firebase.auth.currentUser.uid;

  //   props.firebase.exercises(workout, id, user).once('value')
  //     .then(snapshot => {
  //       if (snapshot.val() !== null && user === snapshot.val().userId) {
  //         setReps(snapshot.val().reps);
  //         setWeight(snapshot.val().weight);
  //       }
  //     })
  //     .catch(err => console.log(err));
  // }, [props.firebase, props.exercise]);

  // const saveExercise = (event, authUser) => {
  //   event.preventDefault();
  //   const { workout, exercise, id } = props.exercise;

  //   props.firebase.exercises(workout, id, authUser.uid).set({
  //     userId: authUser.uid,
  //     workout,
  //     exercise,
  //     id,
  //     reps,
  //     weight,
  //     createdAt: props.firebase.serverValue.TIMESTAMP,
  //   });

  //   setSaved('Saved');
  // }

  return (
    // <AuthUserContext.Consumer>
    //   {authUser => (
    <form
      className={RCstyles.form}
    // onSubmit={event => saveExercise(event, authUser)}
    >
      <div className={RCstyles.labelInput}>
        <label htmlFor="sets">Sets</label>
        <input
          className={RCstyles.input}
          name='sets'
          type='number'
        // onChange={e => setSets(e.target.value)}
        // value={reps}
        />
      </div>

      <div className={RCstyles.labelInput}>
        <label htmlFor="reps">Reps</label>
        <input
          className={RCstyles.input}
          name='reps'
          type='number'
        // onChange={e => set(e.target.value)}
        // value={weight}
        />
      </div>
    </form>
    //   )}
    // </AuthUserContext.Consumer>
  );
}

const SaveWorkoutButton = () => (
  <button type='submit' className={RCstyles.button}>
    {/* {saved} */}
    Save Workout
  </button>
);

// const Card = withFirebase(RepsCounter);

// const condition = authUser => !!authUser;

// export default withAuthorization(condition)(Card);

export {
  RepsCounter,
  SaveWorkoutButton
};
