import { Flex } from "../../components/functional";
import style from "./style.module.css";
import skillsData from "../../mock/skills";

const Skills = () => {
  const skills = skillsData;
  return (
    <Flex direction="column" className={style.container}>
      <h1 className={style.title}>Skills</h1>
      <Flex direction="column" gap="2rem">
        {skills.map((skillCategory) => (
          <Flex
            key={skillCategory.category}
            direction="column"
            gap="1rem"
            className={style.skillColumn}
          >
            <h2 className={style.categoryTitle}>{skillCategory.category}</h2>
            <ul className={style.skillList}>
              <Flex direction="row" gap="1rem">
                {skillCategory.technologies.map((tech) => (
                  <li key={tech.name}>
                    <a
                      href={tech.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={style.skillLink}
                    >
                      <Flex direction="column" horizontal="center" gap="1rem">
                        <img
                          src={tech.image}
                          alt={`${tech.name} logo`}
                          className={style[`${tech.className}`] || style.images}
                        />
                        <span className={style.skillName}>{tech.name}</span>
                      </Flex>
                    </a>
                  </li>
                ))}
              </Flex>
            </ul>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default Skills;
