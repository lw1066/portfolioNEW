"use client";

import styles from "../page.module.css";
import { usePathname, useRouter } from "next/navigation";

export default function HomeNav() {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (event) => {
    event.preventDefault();

    if (pathname === "/") {
      const start = Date.now();

      const forceTop = () => {
        window.scrollTo(0, 0);

        if (Date.now() - start < 5000) {
          requestAnimationFrame(forceTop);
        }
      };

      forceTop();
      return;
    }

    router.push("/");
  };

  return (
    <a href="/" className={styles.topLeft} onClick={handleClick}>
      Home
    </a>
  );
}
