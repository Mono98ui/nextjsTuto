"use client";

import Link from "next/link";
import styles from "./navbarlinks.module.css";
import { usePathname } from 'next/navigation'

const Navbarlinks = ({ item }) => {
  const pathname = usePathname()

  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathname === item.path && styles.active
      }`}
    >
      {item.title}
    </Link>
  );
};

export default Navbarlinks;