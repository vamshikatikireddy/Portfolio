import { Flex } from "../../components/functional";
import styles from "./style.module.css";
import { projectDetails } from "../../mock";
import projectImage from "../../assets/pcatimg.png";

const Projects = () => {
  const project = projectDetails[0] || {};

  return (
    <Flex direction="column" className={styles.container}>
      <h1 className={styles.title}>Projects</h1>
      <Flex direction="row" gap="1rem">
        <Flex direction="column" gap="1rem" className={styles.container}>
          <h1 className={styles.projectTitle}>{project.projectName}</h1>
          <Flex direction="row" gap="1rem">
            <h2 className={styles.technologiesUsed}>Technologies Used :</h2>
            <span> {project.technologiesUsed}</span>
          </Flex>
          <p className={styles.projectDescription}>
            <strong>Description : </strong> {project.projectDescription}
          </p>
          <ul className={styles.descriptionContainer}>
            {project.DescriptionPoints.map((point: string, index: number) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </Flex>
        <Flex direction="column" gap="1rem" className={styles.container}>
          <img src={projectImage} alt="Project Image" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Projects;
