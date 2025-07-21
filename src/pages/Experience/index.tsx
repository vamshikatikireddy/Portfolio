import style from "./style.module.css";
import { Flex } from "../../components/functional";
import { companyDetails, wiproImage } from "../../mock";

// --- 1. Define accurate TypeScript interfaces for your data ---
type Description = Record<string, string[]>;

interface Company {
  companyName: string;
  position: string;
  duration: string;
  location: string;
  description: Description;
  image: string;
}

const Experience = () => {
  // --- 2. Correctly initialize your data with a safe fallback ---
  const companies: Company[] = companyDetails || [];

  // --- 3. Create a config array to avoid repetitive JSX ---
  const companyDetailItems = [
    { label: "Company", key: "companyName" as const },
    { label: "Position", key: "position" as const },
    { label: "Duration", key: "duration" as const },
    { label: "Location", key: "location" as const },
    { label: "Image", key: "image" as const },
  ];

  return (
    <div className={style.container}>
      <Flex direction="row" gap="2rem">
        <Flex direction="column" gap="1rem" className={style.experienceContent}>
          <h1 className={style.title}>Experience</h1>

          {/* --- 4. Main loop over each company in your data --- */}
          {companies.map((company) => (
            <Flex
              key={company.companyName}
              direction="column"
              className={style.companySection}
            >
              {/* Loop over the config array to render company details */}
              {companyDetailItems.map((item) => (
                <h1 key={item.key} className={style.companyDetails}>
                  <strong>{item.label}</strong> : {company[item.key]}
                </h1>
              ))}

              {/* --- 5. Description section is now INSIDE the company loop --- */}
              <h1 className={style.companyDetails}>
                <strong>Description</strong> :
              </h1>
              <div className={style.descriptionContainer}>
                <ul>
                  {/* --- 6. Correctly map over the nested description object for THIS company --- */}
                  {Object.entries(company.description).map(
                    ([section, points]) => (
                      <li key={section}>
                        <strong>{section}</strong>
                        <ul>
                          {points.map((point, index) => (
                            <li key={index}>{point}</li>
                          ))}
                        </ul>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </Flex>
          ))}
        </Flex>

        <Flex direction="column" className={style.collegeImage}>
          {companies.map((company) =>
            company.image == "wiproImage" ? (
              <img src={wiproImage} alt="Work experience graphic" />
            ) : null
          )}
        </Flex>
      </Flex>
    </div>
  );
};

export default Experience;
