import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import styles from './Registration.module.css';

export default function Registration() {
  return (
    <div className={styles.container}>
      <RegistrationForm />
    </div>
  );
}