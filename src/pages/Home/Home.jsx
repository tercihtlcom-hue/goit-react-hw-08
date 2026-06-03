import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to Contact Book App</h1>
      <p>Manage your contacts securely with JWT authentication.</p>
    </div>
  );
}