import styles from "@/styles/homeAside.module.css";
import { AsideOption } from "@/components/AsideOption";

type Props = {
    active: string
}

export const HomeAside  = ({active}: Props)=>{
    return (
        <aside className={styles.userAside}>
          <nav>
              {/* <img src="appexia.png" alt="Appexia" width="20px"> */}
              <ul>
                <AsideOption name="Home" active={active == "Home" ? true : false } symbol="heyyo"/>
                <AsideOption name="Courses" active={active == "Courses" ? true : false } symbol="heyyo"/>
                <AsideOption name="Company" active={active == "Company" ? true : false } symbol="heyyo"/>
                <AsideOption name="Profile" active={active == "Profile" ? true : false } symbol="heyyo"/>
              </ul>
          </nav>
      </aside>
    )
}