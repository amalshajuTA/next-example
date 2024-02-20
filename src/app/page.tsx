import Link from "next/link";
import styles from './page.module.css';
export default function Home() {
  return (
    <div className={styles.main}>
      <h1>Home</h1>
      <Link href="/login">
        <button>Go to Login  Page</button>
      </Link>
    </div>
  );
}
