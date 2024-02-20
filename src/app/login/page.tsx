import Link from "next/link";
import styles from './login.module.css'

export default function Login() {
  return (
    <div className={styles.main}>
      <h1>Login</h1>
      <Link href="/">
        <button>Go to Home Page</button>
      </Link>
    </div>
  );
}


    
