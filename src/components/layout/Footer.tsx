import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Rocket, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-dark-800 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="text-2xl font-bold cursor-pointer flex items-center mb-4"
            >
              <span className="text-primary-600 dark:text-primary-400">
                Arrow
              </span>
              <span>Max</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Expert Full Stack development specializing in Backend Services,
              Cloud Services & Cyber Security. Available for freelance work and
              bringing your ideas to life.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/deepakcode21"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/deepakcode21/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://x.com/deepakcode21"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.instagram.com/deepakmax09/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About", "Skills", "Projects", "Blog", "Pricing"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      to={link.toLowerCase()}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer"
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-400">
                New Delhi, Delhi-NCR, India
              </li>
              <li>
                <a
                  href="mailto:hello@arrowmax.dev"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  deepakcode21@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-dark-600 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-center md:text-left mb-4 md:mb-0">
            © 2025 Deepak Code | Crafted with MERN | Freelancing & ❤️
          </p>
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            className="flex justify-center"
          >
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="p-2 bg-primary-600 hover:bg-primary-700 text-white rounded-full cursor-pointer"
              aria-label="Back to top"
            >
              <Rocket size={20} />
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
