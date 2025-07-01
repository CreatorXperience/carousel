import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const projects = [
  {
    title: "Hotel Cabins",
    description:
      "An inhouse hotel management app for staff to manage checkin and checkout and cabin availability",
    github: "https://github.com/afolabi-ola/hotel-cabin-react",
  },
  {
    title: "Super Pizza",
    description: "An Interactive food ordering app.",
    github: "https://github.com/afolabi-ola/Super-Pizza-React",
  },
  {
    title: "Slack Bolts",
    description: "Slack Bolt Oauth Backend app.",
    github: "https://github.com/afolabi-ola/Slack_bolt",
  },
];

const resumeData = {
  name: "Afolabi Quadri",
  title: "Software Engineer | Typescript, Node.js",
  location: "Ojo, Lagos, Nigeria",
  email: "afolabiquadri28@gmail.com",
  linkedin: "https://www.linkedin.com/in/quadri-afolabi-6238312a6",
  summary: `Results-oriented and highly motivated frontend developer with over 3 years of experience delivering highly functional products. Skilled in integrating backend services with frontend interfaces and rapidly adapting to software development frameworks. Demonstrates excellent problem-solving abilities and a proven track record of collaborating effectively with cross-functional teams to achieve optimal results.`,
  experience: [
    {
      role: "Frontend Engineer",
      company: "Florintech Institute",
      year: "Decemeber 2023 - present",
      description: `Working as a frontend engineer , Optimizing website performances and codes and developing responsive and accessible product`,
    },
    {
      role: "Frontend Engineer",
      company: "BridgeKode technologies",
      year: "November 2023 -  2024",
      description: `Work as frontend engineer and designing an implementing new features and functionality, and increase website retention by 60%`,
    },
    {
      role: "FullStack developer",
      company: "Velox Grid",
      year: "February 2024 - 2025",
      description:
        "Work as a fullstack developer and collaborate with cross platform engineers and designers to develop full fledged saas application ",
    },
  ],
  education: [
    {
      degree: "BSc Computer Science",
      school: "Lagos State University",
      year: "2022 - present",
    },
    {
      degree: "Web Development",
      school: "Udemy",
      year: "2021",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "HTML",
    "CSS",
    "Jest",
    "Docker",
    "Kubernetes",
    "MongoDB",
    "Websockets",
  ],
};

const ResumeWebsite = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
      <motion.h1
        className="text-4xl font-bold mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {resumeData.name}
      </motion.h1>
      <p className="text-lg mb-4">
        {resumeData.title} - {resumeData.location}
      </p>
      <a
        href={resumeData.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-blue-400 mb-6"
      >
        <Linkedin className="mr-2 h-5 w-5" /> LinkedIn Profile
      </a>

      <a
        href={
          "https://drive.google.com/file/d/1DbJwgHfvJufnM4-96sOz0G1ClBMqbuiF/view?usp=drivesdk"
        }
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-blue-400 mb-6"
      >
        View my Resume
      </a>
      <motion.section className="max-w-3xl w-full">
        <h2 className="text-2xl font-semibold mb-2">Summary</h2>
        <p className="text-gray-300 mb-4">{resumeData.summary}</p>
        <h2 className="text-2xl font-semibold mb-2">Experience</h2>
        {resumeData.experience.map((job, index) => (
          <div key={index} className="mb-3">
            <h3 className="text-xl font-bold">
              {job.role} @ {job.company}
            </h3>
            <p className="text-sm text-gray-400 mb-1">{job.year}</p>
            <p className="text-gray-300">{job.description}</p>
          </div>
        ))}
        <h2 className="text-2xl font-semibold mt-4 mb-2">Education</h2>
        {resumeData.education.map((edu, index) => (
          <div key={index} className="mb-3">
            <h3 className="text-xl font-bold">{edu.degree}</h3>
            <p className="text-sm text-gray-400">
              {edu.school} | {edu.year}
            </p>
          </div>
        ))}
        <h2 className="text-2xl font-semibold mt-4 mb-2">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {resumeData.skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-700 rounded-full px-3 py-1 text-sm"
            >
              {skill}
            </span>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mt-4 mb-2">Projects</h2>
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              background: "#1f2937",
              borderRadius: "1rem",
              padding: "1rem",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              marginTop: "8px",
              marginBottom: "8px",
            }}
          >
            <h2
              style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                marginBottom: "0.5rem",
              }}
            >
              {project.title}
            </h2>
            <p
              style={{
                fontSize: "0.875rem",
                marginBottom: "1rem",
                color: "#d1d5db",
              }}
            >
              {project.description}
            </p>
            <button
              style={{
                padding: "0.5rem 1rem",
                border: "1px solid #4b5563",
                borderRadius: "0.5rem",
                background: "transparent",
                color: "white",
                cursor: "pointer",
              }}
              onClick={() => window.open(project.github, "_blank")}
            >
              View on GitHub
            </button>
          </div>
        ))}
      </motion.section>
    </div>
  );
};

export default ResumeWebsite;
