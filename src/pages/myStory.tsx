import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import FlightIcon from "@mui/icons-material/Flight";
import FavoriteIcon from "@mui/icons-material/Favorite";

const storyTimeline = [
  {
    icon: <FavoriteIcon className="text-[#00adb5] text-3xl" />,
    title: "Early Life",
    content: (
      <>
        I am <span className="font-semibold text-[#00adb5]">Dinesh Kumar V</span> (also known as Vinoth), born on <span className="font-semibold">June 30, 2002</span> in Thottikuppam, Tamil Nadu. From a young age, I was curious, creative, and always eager to learn new things.
      </>
    ),
  },
  {
    icon: <SchoolIcon className="text-[#00adb5] text-3xl" />,
    title: "Schooling",
    content: (
      <>
        I completed my schooling from LKG to 12th standard at Senthil Matric Hr. Sec. School, Periyavavadi. In 12th grade, I chose the <span className="font-semibold">Bio-Maths</span> stream, which gave me a strong foundation in both science and mathematics.
      </>
    ),
  },
  {
    icon: <SchoolIcon className="text-[#00adb5] text-3xl" />,
    title: "Undergraduate Journey",
    content: (
      <>
        I pursued my <span className="font-semibold">B.Tech in Information Technology</span> at Paavai Engineering College, Namakkal (2019-2023). This phase of my life sparked my passion for coding, technology, and problem-solving.
      </>
    ),
  },
  {
    icon: <SchoolIcon className="text-[#00adb5] text-3xl" />,
    title: "Postgraduate Studies",
    content: (
      <>
        Currently, I am completing my <span className="font-semibold">Master’s degree at College of Engineering, Guindy (Anna University)</span>, Chennai (2023-2025). Here, I am deepening my knowledge in advanced computing and AI/ML.
      </>
    ),
  },
  {
    icon: <WorkIcon className="text-[#00adb5] text-3xl" />,
    title: "Professional Journey",
    content: (
      <>
        I joined <span className="font-semibold">Finforz</span> as an intern in the role of AI/ML Engineer and worked for four months. Later, I transitioned to a full-time role as an <span className="font-semibold">Associate Software Developer</span>, where I continue to grow and contribute to impactful projects.
      </>
    ),
  },
  {
    icon: <EmojiEventsIcon className="text-[#00adb5] text-3xl" />,
    title: "Achievements",
    content: (
      <>
        <ul className="list-disc list-inside text-left">
          <li>Successfully completed multiple academic and industry projects in AI/ML and web development.</li>
          <li>Recognized for innovative solutions and teamwork during my internship at Finforz.</li>
          <li>Consistently maintained top academic performance throughout my studies.</li>
        </ul>
      </>
    ),
  },
  {
    icon: <FlightIcon className="text-[#00adb5] text-3xl" />,
    title: "Hobbies & Travel",
    content: (
      <>
        I love exploring new places, learning about different cultures, and capturing moments through photography. In my free time, I enjoy sketching, listening to music, and working on side projects that challenge my creativity.
      </>
    ),
  },
];

const MyStory = () => (
  <section
    id="my-story"
    className="py-16 px-6 md:px-12 bg-gradient-to-r from-[#393e46] via-[#222831] to-[#00adb5] min-h-[60vh] flex flex-col items-center"
  >
    <h2 className="text-3xl md:text-4xl font-bold text-[#e0f7fa] mb-10 flex items-center gap-3">
      <FavoriteIcon className="text-[#00adb5] text-3xl" />
      My Story
    </h2>
    <div className="relative max-w-4xl w-full mx-auto">
      <div className="absolute left-1/2 top-0 h-full border-l-2 border-dotted border-[#00adb5] z-0 transform -translate-x-1/2" />
      <div className="flex flex-col gap-12">
        {storyTimeline.map((item, idx) => (
          <div
            key={idx}
            className={`relative flex items-center w-full ${
              idx % 2 === 0
                ? "justify-start"
                : "justify-end"
            }`}
          >
            <div className={`w-1/2 ${idx % 2 === 0 ? "pr-8" : "pl-8"}`}>
              <div className={`bg-white/80 rounded-xl shadow-lg p-6 flex items-start gap-4 hover:shadow-2xl transition z-10`}>
                <div>{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-[#222831] mb-1">
                    {item.title}
                  </h3>
                  <div className="text-[#393e46] text-base">{item.content}</div>
                </div>
              </div>
            </div>
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="w-5 h-5 rounded-full bg-[#00adb5] border-4 border-white shadow-md"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MyStory;
