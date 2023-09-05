import styles from "@/styles/homeAside.module.css";
import { AsideOption } from "@/components/Aside/AsideOption";
import { useRouter } from "next/router";
import { logout } from "@/apis/Auth";
import { ConfirmMessage } from "@/components//Messages/ConfirmMessage";
import { useState } from "react";

type Props = {
  active: string;
};

export const HomeAside = ({ active }: Props) => {
  const router = useRouter();
  const [display, setDisplay] = useState('none');

  const handleLogout = () => {
    setDisplay('flex');
  };

  const handleLogoutConfirmed = () => {
    logout();
    router.push('/auth/login');
  };

  const handleLogoutCancelled = () => {
    setDisplay('none');
  };

  return (
    <>
      <ConfirmMessage
        display={display}
        options={["Sim", "Não"]}
        title="Deseja fazer o logout?"
        onConfirm={handleLogoutConfirmed}
        onCancel={handleLogoutCancelled}
      />
      <aside className={styles.userAside}>
         {/* <img src="appexia.png" alt="Appexia" width="20px"> */}
         <ul className={styles.asideOptions}>
          <AsideOption name="Home" active={active == "Home" ? true : false } symbol="heyyo"/>
          <AsideOption name="Courses" active={active == "Courses" ? true : false } symbol="heyyo"/>
          <AsideOption name="Company" active={active == "Company" ? true : false } symbol="heyyo"/>
          <AsideOption name="Profile" active={active == "Profile" ? true : false } symbol="heyyo"/>
          <AsideOption name="Search" active={active == "Search" ? true : false } symbol="heyyo"/>
          <AsideOption name="Admin" active={active == "Admin" ? true : false } symbol="heyyo"/>
          <AsideOption name="Store" active={active == "Store" ? true : false } symbol="heyyo"/>
          <AsideOption name="Suport" active={active == "Suport" ? true : false } symbol="heyyo"/>
          <div className={styles.logout} onClick={handleLogout}>
            Logout
          </div>
        </ul>
      </aside>
    </>
  );
};