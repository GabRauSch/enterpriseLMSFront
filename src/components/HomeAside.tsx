import styles from "@/styles/homeAside.module.css";
import { AsideOption } from "@/components/AsideOption";

type Props = {
    active: string
}

export const HomeAside  = ({active}: Props)=>{
    return (
        <aside className={styles.userAside}>
            {/* <img src="appexia.png" alt="Appexia" width="20px"> */}
            <ul className={styles.asideOptions}>
              <AsideOption name="Home" active={active == "Home" ? true : false } symbol="heyyo"/>
              <AsideOption name="Courses" active={active == "Courses" ? true : false } symbol="heyyo"/>
              <AsideOption name="Company" active={active == "Company" ? true : false } symbol="heyyo"/>
              <AsideOption name="Profile" active={active == "Profile" ? true : false } symbol="heyyo"/>
              <AsideOption name="Search" active={active == "Search" ? true : false } symbol="heyyo"/>
              <AsideOption name="Admin" active={active == "Admin" ? true : false } symbol="heyyo"/>
              <AsideOption name="Creator" active={active == "Creator" ? true : false } symbol="heyyo"/>
              <AsideOption name="Store" active={active == "Store" ? true : false } symbol="heyyo"/>

            </ul>
      </aside>
    )
}