import SecurityIcon from "@mui/icons-material/Security";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import TimelineIcon from "@mui/icons-material/Timeline";
import ChatIcon from "@mui/icons-material/Chat";
import PsychologyIcon from "@mui/icons-material/Psychology";
import RestaurantIcon from "@mui/icons-material/Restaurant";

const projects = [
  {
    icon: <SecurityIcon className="text-[#00adb5] text-4xl mb-2" />,
    title: "Federated Learning-based Intrusion Detection System for VANET using Blockchain",
    description:
      "Developed a secure intrusion detection system for Vehicular Ad-hoc Networks (VANET) leveraging federated learning and blockchain technology to enhance data privacy and network security.",
    tech: ["Federated Learning", "Blockchain", "Python"],
    link: "#",
  },
  {
    icon: <DirectionsCarIcon className="text-[#00adb5] text-4xl mb-2" />,
    title: "Federated Learning-based Intrusion Detection for Securing Autonomous Vehicles",
    description:
      "Implemented a distributed intrusion detection solution to protect autonomous vehicles, utilizing federated learning for collaborative model training without sharing raw data.",
    tech: ["Federated Learning", "Autonomous Vehicles", "Python"],
    link: "#",
  },
  {
    icon: <TimelineIcon className="text-[#00adb5] text-4xl mb-2" />,
    title: "LSTM-based Cryptocurrency Price Prediction",
    description:
      "Built a time series prediction model using LSTM neural networks to forecast cryptocurrency prices, enabling more informed trading decisions.",
    tech: ["LSTM", "Python", "Time Series"],
    link: "#",
  },
  {
    icon: <ChatIcon className="text-[#00adb5] text-4xl mb-2" />,
    title: "Chat Application using MERN Stack",
    description:
      "Developed a real-time chat application with user authentication, leveraging the MERN stack for seamless messaging and modern UI.",
    tech: ["MongoDB", "Express", "React", "Node.js" , "material-ui", "Socket.io", "postman"],
    link: "#", 
  },
  {
    icon: <PsychologyIcon className="text-[#00adb5] text-4xl mb-2" />,
    title: "Brain Stroke Detection using Deep Neural Networks",
    description:
      "Created a predictive model for brain stroke detection using deep neural network algorithms, aiming to assist in early diagnosis and intervention.",
    tech: ["Deep Learning", "Python", "Neural Networks"],
    link: "#", 
  },
  {
    icon: <RestaurantIcon className="text-[#00adb5] text-4xl mb-2" />,
    title: "Restaurant Website using WordPress",
    description:
      "Designed and developed a dynamic restaurant website with engaging UI and easy content management, built on the WordPress platform.",
    tech: ["WordPress", "UI Design", "Web Development"],
    link: "#",
  },
];


const Projects = () => (
  <section
    id="projects"
    className="py-16 px-6 md:px-12 bg-gradient-to-r from-[#393e46] via-[#222831] to-[#00adb5] min-h-[60vh] flex flex-col items-center"
  >
    <h2 className="text-3xl md:text-4xl font-bold text-[#e0f7fa] mb-10">
      Projects
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
      {projects.map((project, idx) => (
        <div
          key={idx}
          className="bg-white/80 rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition"
        >
          {project.icon}
          <h3 className="text-xl font-semibold text-[#222831] mb-2">
            {project.title}
          </h3>
          <p className="text-[#393e46] text-sm mb-3">{project.description}</p>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="bg-[#00adb5]/10 text-[#00adb5] px-2 py-1 rounded text-xs font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-auto px-4 py-2 bg-[#00adb5] text-white rounded-full font-medium hover:bg-[#222831] transition"
          >
            View Project
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
