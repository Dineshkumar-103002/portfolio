import SchoolIcon from '@mui/icons-material/School';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import PersonIcon from '@mui/icons-material/Person';

const aboutCards = [
  {
    icon: <PersonIcon className="text-[#00adb5] text-4xl mb-2" />,
    title: "About Myself",
    description: (
      <>
        Hello! I’m <span className="font-semibold text-[#00adb5]">Dinesh Kumar V</span>, proudly from <span className="font-semibold">Thottikuppam, Virudhachalam, Cuddalore, Tamil Nadu</span>. I’m a creative thinker and a passionate technologist who believes in the power of code to bring ideas to life. My journey is fueled by curiosity, continuous learning, and a commitment to excellence.
      </>
    ),
  },
  {
    icon: <SchoolIcon className="text-[#00adb5] text-4xl mb-2" />,
    title: "Studies",
    description: (
      <>
        I hold a <span className="font-semibold text-[#00adb5]">Master’s degree in Information Technology</span> and have completed advanced coursework in <span className="font-semibold">AI/ML</span> and <span className="font-semibold">Web Development</span>. With a strong foundation in coding, design, and web development, my academic experience has equipped me to build robust, user-centric digital solutions and fostered a passion for continuous learning.
      </>
    ),
  },
  {
    icon: <WorkOutlineIcon className="text-[#00adb5] text-4xl mb-2" />,
    title: "Profession",
    description: (
      <>
        I am currently working as an <span className="font-semibold text-[#00adb5]">Associate Software Developer</span> at <span className="font-semibold text-[#00adb5]">Finforz Technology</span>, where I contribute to building robust digital solutions. Previously, I completed a 4-month internship in AI/ML at Finforz Technology, gaining hands-on experience in developing intelligent applications and deepening my expertise in cutting-edge technologies.
      </>
    ),
  },
];

const About = () => (
  <section
    id="about"
    className="py-16 px-6 md:px-12 bg-gradient-to-r from-[#393e46] via-[#222831] to-[#00adb5] min-h-[60vh] flex flex-col items-center"
  >
    <h2 className="text-3xl md:text-4xl font-bold text-[#ffffff] tracking-tight mb-10 flex items-center gap-3">
      About Me
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
      {aboutCards.map((card, idx) => (
        <div
          key={idx}
          className="bg-white/80 rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition"
        >
          {card.icon}
          <h3 className="text-xl font-semibold text-[#222831] mb-2">{card.title}</h3>
          <p className="text-[#393e46] text-base">{card.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default About;
