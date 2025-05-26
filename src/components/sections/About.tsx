import React, { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Briefcase } from "lucide-react";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import Section from "../ui/Section";
import {
  useScrollAnimation,
  fadeInLeft,
  fadeInRight,
} from "../../hooks/useScrollAnimation";

const About: React.FC = () => {
  const [isRatesModalOpen, setIsRatesModalOpen] = useState(false);
  const { ref, controls } = useScrollAnimation();

  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Get to know me better and what drives my passion for web development"
      className="bg-white dark:bg-dark-800"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image with 3D Rotation */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeInLeft}
          className="relative perspective-800"
        >
          <motion.div
            className="relative w-full max-w-md mx-auto h-[400px] rounded-xl overflow-hidden shadow-xl"
            whileHover={{ rotateY: 5, rotateX: 5 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/new2.jpg"
              alt="Deepak 'Code'"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div initial="hidden" animate={controls} variants={fadeInRight}>
          <h3 className="text-2xl font-bold mb-4">
            Hey there! I'm {" "}
            <span className="text-primary-600 dark:text-primary-400">
              Deepak
            </span>
          </h3>

          <p className="text-gray-600 dark:text-gray-300 mb-4">
            I’m a passionate Software Development Engineer (SDE) with a strong
            focus on building scalable, intuitive, and high-impact web
            applications. My journey as an SDE began during my college years,
            and ever since, I’ve been deeply committed to refining my skills and
            delivering solutions that blend performance with user-centric
            design. I take pride in writing clean, maintainable code and
            building systems that are both reliable and efficient.
          </p>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Outside of development, I actively participate in Open Source
            Projects, where I thrive on solving real-world problems under
            pressure. When I’m not coding, you’ll often find me spending time
            with my cats, or working on freelance projects that push me to grow
            both technically and creatively. I’m driven by the challenge of
            turning ideas into impactful digital experiences that users truly
            love.
          </p>

          <div className="flex flex-wrap gap-6 mb-8">
            <div>
              <h4 className="font-semibold mb-1">Experience</h4>
              <p className="text-gray-600 dark:text-gray-300">1+ Years</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Projects</h4>
              <p className="text-gray-600 dark:text-gray-300">25+ Completed</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Clients</h4>
              <p className="text-gray-600 dark:text-gray-300">
                10+ Happy Clients
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="/Deepak-CV.pdf" download>
              <Button variant="primary" icon={<FileText size={18} />}>
                Download Résumé
              </Button>
            </a>

            <Button
              variant="outline"
              icon={<Briefcase size={18} />}
              onClick={() => setIsRatesModalOpen(true)}
            >
              See My Rates
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Rates Modal */}
      <Modal
        isOpen={isRatesModalOpen}
        onClose={() => setIsRatesModalOpen(false)}
        title="My Services & Rates"
        size="lg"
      >
        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">How I Work</h3>
            <p className="text-gray-600 dark:text-gray-300">
              I offer flexible engagement models tailored to your project needs.
              Whether you need a complete project from scratch, help with an
              existing application, or ongoing development support, I've got you
              covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 dark:border-dark-600 rounded-lg p-4">
              <h4 className="font-semibold text-lg mb-2">Project-Based Work</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Fixed price for defined scope and deliverables.
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                <li>Clear milestones and timeline</li>
                <li>Regular progress updates</li>
                <li>Includes 2 rounds of revisions</li>
                <li>Full project documentation</li>
              </ul>
            </div>

            <div className="border border-gray-200 dark:border-dark-600 rounded-lg p-4">
              <h4 className="font-semibold text-lg mb-2">
                Hourly Consultation
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                $10-25/hour depending on complexity.
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                <li>Code reviews and architecture guidance</li>
                <li>Debugging and problem-solving</li>
                <li>Performance optimization</li>
                <li>Technical consulting</li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-gray-600 dark:text-gray-300">
              For detailed pricing on your specific project, please reach out
              through the contact form. I'll be happy to provide a personalized
              quote based on your requirements.
            </p>
          </div>
        </div>
      </Modal>
    </Section>
  );
};

export default About;
