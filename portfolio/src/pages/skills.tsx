import StorageIcon from "@mui/icons-material/Storage";
import BrushIcon from "@mui/icons-material/Brush";
import DevicesIcon from "@mui/icons-material/Devices";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import SecurityIcon from "@mui/icons-material/Security";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import ReactIcon from "@mui/icons-material/DeveloperMode"; // Use a suitable icon for React
import JavascriptIcon from "@mui/icons-material/Javascript";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import DataObjectIcon from "@mui/icons-material/DataObject";
import BuildIcon from "@mui/icons-material/Build";
import GitHubIcon from "@mui/icons-material/GitHub";

const FigmaIcon = () => (
  <span title="Figma" className="text-4xl mb-2">
    🎨
  </span>
);
const WordPressIcon = () => (
  <span title="WordPress" className="text-4xl mb-2">
    🌐
  </span>
);
const skills = [
  {
    icon: <HtmlIcon className="text-[#00adb5] text-4xl mb-2" />,
    title: "HTML5",
    description:
      "Structuring semantic, accessible, and SEO-friendly web pages.",
  },
  {
    icon: <CssIcon className="text-[#00adb5] text-4xl mb-2" />,
    title: "CSS3",
    description:
      "Styling modern, responsive layouts with advanced CSS features.",
  },
  {
    icon: <ReactIcon className="text-[#00adb5] text-4xl mb-2" />,
    title: "React",
    description:
      "Building scalable, component-driven UIs with React and hooks.",
  },
  {
    icon: <JavascriptIcon className="text-[#00adb5] text-4xl mb-2" />,
    title: "JavaScript",
    description: "Developing dynamic, interactive web applications with ES6+.",
  },
  {
    icon: <StorageRoundedIcon className="text-[#00adb5] text-4xl mb-2" />,
    title: "MongoDB",
    description:
      "Managing NoSQL databases for flexible, scalable data storage.",
  },
  {
    icon: <StorageOutlinedIcon className="text-[#00adb5] text-4xl mb-2" />,
    title: "SQL",
    description:
      "Designing and querying relational databases for robust data solutions.",
  },
  {
    icon: <DataObjectIcon className="text-[#00adb5] text-4xl mb-2" />,
    title: "Python",
    description:
      "Automating tasks and building backend logic with clean Python code.",
  },
  {
    icon: <BrushIcon className="text-[#00adb5] text-4xl mb-2" />,
    title: "Tailwind CSS & Material UI",
    description:
      "Crafting visually appealing, utility-first interfaces and custom UI components.",
  },
  {
    icon: <DevicesIcon className="text-[#00adb5] text-4xl mb-2" />,
    title: "Responsive Design",
    description:
      "Ensuring seamless experiences across desktop, tablet, and mobile devices.",
  },
  {
    icon: (
      <IntegrationInstructionsIcon className="text-[#00adb5] text-4xl mb-2" />
    ),
    title: "UI Component Development",
    description:
      "Designing reusable dropdowns, dialogs, status indicators, and info blocks.",
  },
  {
    icon: <StorageIcon className="text-[#00adb5] text-4xl mb-2" />,
    title: "API Integration",
    description:
      "Connecting frontends to RESTful APIs and handling asynchronous data flows.",
  },

  {
    icon: <FigmaIcon />,
    title: "Figma",
    description:
      "Designing wireframes, prototypes, and UI assets for seamless user experiences.",
  },
  {
    icon: <WordPressIcon />,
    title: "WordPress",
    description:
      "Building and customizing dynamic websites and blogs with WordPress.",
  },
  {
    icon: (
      <IntegrationInstructionsIcon className="text-[#f26b38] text-4xl mb-2" />
    ),
    title: "Postman",
    description:
      "Testing, debugging, and documenting APIs for efficient development workflows.",
  },
  {
    icon: <GitHubIcon className="text-[#333] text-4xl mb-2" />,
    title: "Git",
    description: "Version control and collaboration using Git and GitHub.",
  },
];

const Skills = () => (
  <section
    id="skills"
    className="py-16 px-6 md:px-12 bg-gradient-to-r from-[#393e46] via-[#222831] to-[#00adb5] min-h-[60vh] flex flex-col items-center"
  >
    <h2 className="text-3xl md:text-4xl font-bold text-[#e0f7fa] mb-10">
      Skills
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
      {skills.map((skill, idx) => (
        <div
          key={idx}
          className="bg-white/80 rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition"
        >
          {skill.icon}
          <h3 className="text-xl font-semibold text-[#222831] mb-2">
            {skill.title}
          </h3>
          <p className="text-[#393e46] text-sm">{skill.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
