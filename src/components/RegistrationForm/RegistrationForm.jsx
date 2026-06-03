import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { register } from '../../redux/auth/operations';
import styles from './RegistrationForm.module.css';

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label className={styles.label}>
          Name
          <Field type="text" name="name" className={styles.input} />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </label>
        <label className={styles.label}>
          Email
          <Field type="email" name="email" className={styles.input} />
          <ErrorMessage name="email" component="div" className={styles.error} />
        </label>
        <label className={styles.label}>
          Password
          <Field type="password" name="password" className={styles.input} />
          <ErrorMessage name="password" component="div" className={styles.error} />
        </label>
        <button type="submit" className={styles.button}>Register</button>
      </Form>
    </Formik>
  );
}