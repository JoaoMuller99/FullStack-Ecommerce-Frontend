import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
// Styles
import styles from "./nav.module.scss";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/">iPad Store</Link>
      <div>
        <div>
          <FiShoppingBag />
          <h3>Cart</h3>
        </div>
      </div>
    </nav>
  );
}
