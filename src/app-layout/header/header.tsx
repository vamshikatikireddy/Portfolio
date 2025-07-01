import styles from "./style.module.css";
import { Flex } from "../../components/functional";

interface HeaderProps {
  className?: string;
}

const menuItems = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "Education", href: "/" },
  { id: 3, label: "Experience", href: "/experience" },
  { id: 4, label: "Projects", href: "/projects" },
  { id: 5, label: "Skills", href: "/skills" },
  { id: 6, label: "Contact", href: "/contact" },
];

function Header({ className }: HeaderProps) {
  return (
    <header className={`${styles.header} ${className || ""}`}>
      <Flex
        direction="row"
        horizontal="center"
        className={styles.headerContainer}
      >
        <Flex horizontal="left" className={styles.logo}>
          <a href="/">Portfolio</a>
        </Flex>
        <Flex direction="row" horizontal="right" className={styles.nav}>
          <ul className={styles.menuList}>
            {menuItems.map((item) => (
              <li key={item.id} className={styles.menuItem}>
                <a href={item.href} className={styles.menuLink}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </Flex>
      </Flex>
    </header>
  );
}

export default Header;
