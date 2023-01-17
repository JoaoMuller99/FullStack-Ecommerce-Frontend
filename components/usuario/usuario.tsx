import Image from "next/image";
import { useRouter } from "next/router";
// Libs
import { useUser } from "@auth0/nextjs-auth0/client";
import { FaUserCircle } from "react-icons/fa";
// Styles
import styles from "./usuario.module.scss";

export default function Usuario() {
  const router = useRouter();
  const { user } = useUser();

  if (!user) {
    return (
      <div onClick={() => router.push("/api/auth/login")} className={styles.container}>
        <FaUserCircle />
        <h3>Perfil</h3>
      </div>
    );
  }

  return (
    <div onClick={() => router.push("/perfil")} className={styles.container}>
      {user.picture ? <Image src={user.picture} width="24" height="24" alt={user.name || ""} /> : <FaUserCircle />}
      <h3>{user.name}</h3>
    </div>
  );
}
