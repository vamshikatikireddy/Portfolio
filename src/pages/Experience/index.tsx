import style from "./style.module.css";
import { Flex } from "../../components/functional";
import wiproImage from "../../assets/wiproLogo.png";
import { experienceDescription, companyDetails } from "../../mock";

interface ExperienceProps {
  experienceDescription: {
    title: string;
    description: string;
  }[];

  companyDetails: {
    companyName: string;
    position: string;
    duration: string;
    location: string;
    description: string;
  }[];
}
const Experience = () => {
  const jobDescription = experienceDescription || ({} as ExperienceProps);
  const companyInfo = companyDetails || ({} as ExperienceProps);

  return (
    <div className={style.container}>
      <Flex direction="column">
        <Flex direction="column" gap="1rem" className={style.experienceContent}>
          <Flex direction="column">
            <h1 className={style.title}>Experience</h1>
          </Flex>
          <Flex direction="row" gap="1rem">
            <Flex direction="column">
              {companyInfo.map((company, index) => (
                <Flex key={index} direction="column">
                  <h1 className={style.companyDetails}>
                    <strong>Company</strong> : {company.companyName}
                  </h1>
                  <h1 className={style.companyDetails}>
                    <strong>Position</strong> : {company.position}
                  </h1>
                  <h1 className={style.companyDetails}>
                    <strong>Duration</strong> : {company.duration}
                  </h1>
                  <h1 className={style.companyDetails}>
                    <strong>Location</strong> : {company.location}
                  </h1>
                </Flex>
              ))}
              <h1 className={style.companyDetails}>
                <strong>Description</strong> :
              </h1>

              <div className={style.descriptionContainer}>
                {companyInfo.description}

                <p>{companyInfo.description}</p>

                <ul>
                  {Object.entries(jobDescription).map(
                    ([section, index], sectionIndex) => (
                      <li key={sectionIndex}>
                        <strong>{section}</strong>
                        <ul>
                          {index.map((point: string, pointIndex: number) => (
                            <li key={pointIndex}>{point}</li>
                          ))}
                        </ul>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </Flex>
            <Flex direction="column" className={style.collegeImage}>
              {/* Add descriptive alt text for accessibility */}
              <img src={wiproImage} alt="Wipro company logo" />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default Experience;
