import FormStyles from '../components/Forms/Form.module.css';
import { useFormik } from 'formik';
import firebase from '../firebase/clientApp';

// TODO: Password validation and error handling
const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      passwordOne: '',
      passwordTwo: '',
      // error: null
    },
    validate,
    onSubmit: async (values) => {
      await firebase.auth().createUserWithEmailAndPassword(values.email, values.passwordOne)
        .then(() => {
          // Create a user in your Firebase realtime database
          return firebase.database().ref('members').push({
            username: values.username,
            email: values.email,
          });
        })
        .then(() => {
          console.log('Signed Up');
          // Router.push('/members');
        })
        .catch(error => {
          console.log('onSubmit error: ', error);
        });
    }
  });

  return (
    <div className={FormStyles.container}>
      <h1>Sign Up</h1>
      <form onSubmit={formik.handleSubmit}
        className={FormStyles.form}>
        {formik.touched.username && formik.errors.username ? (
          <div><p className={FormStyles.errors}>{formik.errors.username}</p></div>
        ) : null}
        <input
          className={FormStyles.input}
          id="username"
          name="username"
          placeholder="Username"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
        />
        {formik.touched.email && formik.errors.email ? (
          <div><p className={FormStyles.errors}>{formik.errors.email}</p></div>
        ) : null}
        <input
          className={FormStyles.input}
          id="email"
          name="email"
          placeholder="Email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        <input
          className={FormStyles.input}
          id="passwordOne"
          name="passwordOne"
          placeholder="Password"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.passwordOne}
        />
        <input
          className={FormStyles.input}
          id="passwordTwo"
          name="passwordTwo"
          placeholder="Confirm password"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.passwordTwo}
        />

        <button type="submit">Submit</button>

        {/* {error && <p>{error.message}</p>} */}
      </form>
    </div>
  );
}

export default SignUp;
