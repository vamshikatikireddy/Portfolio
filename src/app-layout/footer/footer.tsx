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
      <Flex horizontal="center">
        <p>@2025 Vamsi Katikireddy</p>
      </Flex>
      <Flex direction="column" horizontal="center">
        <h3>Contact</h3>
        <p>Katikireddy.vamshi@gmail.com</p>
        <p>+91 9553111696</p>
      </Flex>
    </Flex>
  );
}

export default Footer;
