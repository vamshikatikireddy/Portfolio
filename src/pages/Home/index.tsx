import styles from "./style.module.css";
import { Flex } from "../../components/functional";
import myphoto from "../../assets/mypicture.jpg";
function Home() {
  return (
    <div className={styles.container}>
      <Flex
        direction="column"
        horizontal="center"
        vertical="center"
        className="contentWrapper"
      >
        <Flex direction="row" vertical="center" horizontal="center" gap="3rem">
          <Flex
            direction="column"
            vertical="center"
            horizontal="center"
            gap="1rem"
            className={styles.profileContent}
          >
            <h1 className={styles.title}>Vamsi Katikireddy</h1>
            <h2 className={styles.subtitle}>
              React.js Developer | Frontend Developer
            </h2>
            <span>
              Building scalable and engaging web applications from concept to
              deployment. I leverage my experience with the MERN stack and
              modern front-end libraries to deliver robust digital solutions."
            </span>
          </Flex>
          <Flex
            direction="row"
            vertical="center"
            horizontal="center"
            gap="1rem"
          >
            <img src={myphoto} alt="Logo" className={styles.myPicture} />
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}

export default Home;
