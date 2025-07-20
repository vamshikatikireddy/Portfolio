// A better data structure for your skills
import {
  javascript,
  typescript,
  htmlcss,
  react,
  nextjs,
  redux,
  tailwind,
  mui,
  vite,
} from "../assets";
const skillsData = [
  {
    category: "Languages & Markup",
    technologies: [
      {
        name: "JavaScript",
        image: javascript,
        link: "https://www.javascript.com/",
      },
      {
        name: "TypeScript",
        image: typescript,
        link: "https://www.typescriptlang.org/",
      },
      {
        name: "HTML/CSS",
        image: htmlcss,
        link: "https://www.w3.org/TR/html5/",
      },
    ],
  },
  {
    category: "Frameworks & Libraries",
    technologies: [
      { name: "React.js", image: react, link: "https://reactjs.org/" },
      { name: "Next.js", image: nextjs, link: "https://nextjs.org/" },
      {
        name: "Redux Toolkit",
        image: redux,
        link: "https://redux-toolkit.js.org/",
      },
      {
        name: "Tailwind CSS",
        image: tailwind,
        link: "https://tailwindcss.com/",
      },
      {
        name: "Material-UI",
        image: mui,
        link: "https://mui.com/",
        className: "mui",
      },
    ],
  },
  {
    category: "Tools & Platforms",
    technologies: [
      { name: "Vite", image: vite, link: "https://vitejs.dev/" },
      // You can add more tools here like Git, Vercel, etc.
    ],
  },
];

export default skillsData;
