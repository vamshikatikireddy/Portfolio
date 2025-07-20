import styles from "./style.module.css";
import { Flex } from "../../components/functional";
import { IoCall, IoMail } from "react-icons/io5";
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
      <Flex direction="column" horizontal="center">
        <div className={styles.phoneDetails}>
          <h3>Contact me</h3>
          <Flex direction="row" horizontal="center" gap="1rem">
            <IoCall />
            <p>+91 9553111696</p>
          </Flex>
          <a href="mailto:Katikireddy.vamshi@gmail.com">
            <Flex direction="row" horizontal="center" gap="1rem">
              <IoMail />
              <p>Katikireddy.vamshi@gmail.com</p>
            </Flex>
          </a>
        </div>
      </Flex>
    </Flex>
  );
}

export default Footer;
