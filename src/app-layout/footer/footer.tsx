import styles from "./style.module.css";
import { Flex } from "../../components/functional";
interface FooterProps {
  className?: string;
}
function Footer({ className }: FooterProps) {
  return (
    <Flex
      direction="row"
      horizontal="center"
      vertical="center"
      className={`${styles.footer} ${className}`}
    >
      <p>Footer</p>
    </Flex>
  );
}

export default Footer;
