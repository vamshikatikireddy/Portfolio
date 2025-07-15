import styles from "./style.module.css";
import { Flex } from "../../components/functional";
function Home() {
  return (
    <div className={styles.container}>
      <Flex
        direction="column"
        horizontal="center"
        vertical="center"
        className="contentWrapper"
      >
        <Flex direction="row" vertical="center" horizontal="left" gap="3rem">
          <Flex
            direction="column"
            vertical="center"
            horizontal="left"
            gap="1rem"
            className={styles.profileContent}
          >
            <p>Vamsi Katikireddy</p>
            <p>Full Stack Developer</p>
            <p>Based in Hyderabad</p>
          </Flex>
          <img src="./logo.png" alt="Logo" />
        </Flex>
      </Flex>
    </div>
  );
}

export default Home;
