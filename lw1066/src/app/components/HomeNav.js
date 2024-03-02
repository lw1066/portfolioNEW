import styles from "../page.module.css";
import Link from "next/link";

export default function HomeNav () {

    return (
        <Link href='/' className={`${styles.description} ${styles.topLeft}`}>
        <p>
            Head Home!
        </p>        
        </Link>
    )
}