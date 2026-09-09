"use client";

import styles from "../page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HomeNav() {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    // Force scroll before navigation
    window.scrollTo(0, 0);
    // Small delay to ensure scroll happens
    setTimeout(() => {
      router.push("/");
    }, 50);
  };

  return (
    <a href="/" className={styles.topLeft} onClick={handleClick}>
      Home
    </a>
  );
}
