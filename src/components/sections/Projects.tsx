import React, { useState } from "react";
import Masonry from "react-responsive-masonry";
import Section from "../ui/Section";
import ProjectCard from "../ui/ProjectCard";
import Modal from "../ui/Modal";
import Button from "../ui/Button";
import { Github, ExternalLink, Monitor, Code, FileText } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  clientTestimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  techStack: string[];
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Sorting Visualizer",
      description:
        "Interactive tool to visualize various sorting algorithms in action.",
      fullDescription:
        "An educational web application that helps users understand how different sorting algorithms work through interactive visualizations. Users can adjust the speed, array size, and choose from algorithms like Bubble Sort, Quick Sort, Merge Sort, and more.",
      image: "./shortxtool.png",
      tags: ["React", "Algorithms", "Animation", "Educational"],
      githubUrl: "https://github.com/deepakcode21/Sorting-Algorithm-Visualizer",
      liveUrl: "https://sortxtools.netlify.app/",
      techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    },
    {
      id: 2,
      title: "SnapHive",
      description:
        "SnapHive connects users with verified professionals for service booking.",
      fullDescription:
        "SnapHive is a modern, scalable, and user-friendly platform that seamlessly connects users with verified professionals for hassle-free service booking. Whether you’re a customer seeking services, a professional managing bookings, or an admin overseeing operations, SnapHive has got you covered!",
      image: "./snaphive.png",
      tags: ["MERN", "Services", "Bookings", "Full Stack"],
      githubUrl: "https://github.com/deepakcode21/snaphive-services",
      liveUrl: "https://snaphive-service.vercel.app/",
      techStack: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "Cloudinary",
        "Razorpay",
      ],
    },
    {
      id: 3,
      title: "AutoML Studio",
      description:
        "Auto-ML Studio is a no-code tool to build, train, and visualize machine learning models.",
      fullDescription:
        "AutoML Studio is a no-code automated machine learning platform that democratizes machine learning by letting non-experts build and evaluate predictive models through an intuitive web interface.",
      image:
        "https://github.com/user-attachments/assets/4679827a-e009-4c15-8dfe-d886e392cc6b",
      tags: ["React", "Fast Api", "Real-time", "Machin Learning"],
      githubUrl: "https://github.com/deepakcode21/AutoML-Studio",
      liveUrl: "https://auto-ml-studio-phi.vercel.app/",
      techStack: [
        "React",
        "Fast Api",
        "Uvicorn",
        "Liner Regression",
        "Random Forest",
        "Decision Tree",
      ],
    },
    {
      id: 4,
      title: "SecureVault",
      description:
        "SecureVault is allows users to encrypt and decrypt any file using a custom key.",
      fullDescription:
        "A lightweight and secure web application that allows users to encrypt and decrypt any file using a custom key. All operations are done client-side (in browser) or securely handled on the backend, ensuring your sensitive data remains protected.",
      image: "./secureVault.png",
      tags: ["MERN", "Security", "AES-256-CBC", "Cryptography"],
      githubUrl: "https://github.com/deepakcode21/file-cryptography-encryption",
      liveUrl: "https://demo-store.arrowmax.dev",
      techStack: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "AES-256-CBC",
        "Cryptography",
      ],
    },
    {
      id: 5,
      title: "ZapUrl",
      description:
        "ZapURL is a simple tool to shorten long URLs for easy sharing.",
      fullDescription:
        "ZapURL is a simple URL shortener built with the MERN stack. It provides a user-friendly interface where users can input a long URL and instantly receive a shortened link for easy sharing.",
      image: "./zapUrl.png",
      tags: ["React", "Short Url", "Software Engineering", "Node"],
      githubUrl: "https://github.com/deepakcode21/zapurl",
      liveUrl: "https://zapurl-three.vercel.app/",
      techStack: ["React", "MongoDB", "Node", "Express", "Tailwind CSS"],
    },
    {
      id: 6,
      title: "Speechify",
      description:
        "Speechify is a real-time text-to-speech (TTS) and speech-to-text (STT) conversion tool.",
      fullDescription:
        "Speechify is a powerful real-time text-to-speech (TTS) and speech-to-text (STT) conversion tool built using the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to seamlessly convert text into speech and speech into text with a clean and intuitive interface.",
      image: "./speechify.png",
      tags: ["React", "Speech", "Real-Time", "Language Support"],
      githubUrl: "https://github.com/deepakcode21/speechify",
      liveUrl: "https://speechify-chi.vercel.app/",
      techStack: ["React", "Node", "Express", "MongoDB", "Language Support"],
    },
  ];

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <Section
      id="projects"
      title="Featured Projects & Client Work"
      subtitle="A showcase of my best work and client projects"
      className="bg-white dark:bg-dark-800"
    >
      <Masonry columnsCount={3} gutter="24px" className="mb-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            tags={project.tags}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
            onClick={() => openProjectModal(project)}
          />
        ))}
      </Masonry>

      {/* Project Modal */}
      {selectedProject && (
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}
          size="xl"
        >
          <div className="p-6">
            <div className="mb-6">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />

              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium px-2.5 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {selectedProject.fullDescription}
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Code size={20} className="mr-2 text-primary-500" />
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 dark:bg-dark-600 text-gray-800 dark:text-gray-200 text-xs font-medium px-2.5 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {selectedProject.clientTestimonial && (
              <div className="mb-6 p-4 border-l-4 border-primary-500 bg-primary-50 dark:bg-primary-900/20 rounded">
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <FileText size={20} className="mr-2 text-primary-500" />
                  Client Testimonial
                </h3>
                <p className="italic text-gray-600 dark:text-gray-300 mb-2">
                  "{selectedProject.clientTestimonial.quote}"
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  — {selectedProject.clientTestimonial.author},{" "}
                  {selectedProject.clientTestimonial.role}
                </p>
              </div>
            )}

            <div className="flex flex-wrap gap-4">
              {selectedProject.liveUrl && (
                <Button
                  variant="primary"
                  icon={<ExternalLink size={18} />}
                  onClick={() => window.open(selectedProject.liveUrl, "_blank")}
                >
                  View Live Site
                </Button>
              )}

              {selectedProject.githubUrl && (
                <Button
                  variant="outline"
                  icon={<Github size={18} />}
                  onClick={() =>
                    window.open(selectedProject.githubUrl, "_blank")
                  }
                >
                  View Code
                </Button>
              )}

              <Button
                variant="ghost"
                icon={<Monitor size={18} />}
                onClick={() => window.open("#playground", "_self")}
              >
                Try Demo
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </Section>
  );
};

export default Projects;
