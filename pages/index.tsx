import UserContainer from '../components/Users/UserContainer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <UserContainer />
      </main>
    </div>
  );
}
