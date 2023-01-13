import { useRouter } from "next/router";
// Libs
import { FaUserCircle } from "react-icons/fa";
// Styles
import styles from "./user.module.scss";

export default function User() {
  const router = useRouter();

  return (
    <div className={styles.styles}>
      <FaUserCircle></FaUserCircle>
    </div>
  );
}
