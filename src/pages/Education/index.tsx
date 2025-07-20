import { Flex } from "../../components/functional";
import styles from "./style.module.css";
import collegeImage from "../../assets/collegePic.webp";

const Education = () => {
  return (
    <Flex direction="column" className={styles.container}>
      <h1 className={styles.title}>Education</h1>
      <Flex direction="row" gap="1rem">
        <div className={styles.educationContent}>
          <h1 className={styles.courseTitle}>Undergraduate : </h1>
          <div className={styles.collegeDetails}>
            <h2>B.Tech in Computer Science and Engineering</h2>
            <h3>BVC Engineering College, Amalapuram</h3>
            <h4>Passout Year : 2022</h4>
          </div>
          <h1 className={styles.courseTitle}>Diploma : </h1>
          <div className={styles.collegeDetails}>
            <h2>Diploma in Computer Engineering</h2>
            <h3>BVC institute of Technology and Science, Amalapuram</h3>
            <h4>Passout Year : 2019</h4>
          </div>
        </div>

        <img
          src={collegeImage}
          alt="College Image"
          className={styles.collegeImage}
        />
      </Flex>
    </Flex>
  );
};

export default Education;
