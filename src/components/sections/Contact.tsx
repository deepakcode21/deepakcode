import React, { useState } from "react";
import Section from "../ui/Section";
import Card from "../ui/Card";
import Button from "../ui/Button";
import {
  Send,
  Calendar,
  Github,
  Linkedin,
  Twitter,
  MapPin,
  Instagram,
  Mail,
} from "lucide-react";

import emailjs from "@emailjs/browser";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

// EmailJS environment variables (should be in your .env file)
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_EMAILJS_SERVICE_ID: string;
      REACT_APP_EMAILJS_TEMPLATE_ID: string;
      REACT_APP_EMAILJS_PUBLIC_KEY: string;
    }
  }
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    try {
      await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  {
    from_name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message,
  },
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
);


      setFormStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset status after 3 seconds
      setTimeout(() => setFormStatus("idle"), 3000);
    } catch (error) {
      console.error("Email sending failed:", error);
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 3000);
    }
  };

  return (
    <Section
      id="contact"
      title="Let's Connect"
      subtitle="Have a project in mind? Let's discuss how I can help bring your vision to life"
      className="bg-skill-bg"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card variant="neuro" className="p-6 md:p-8">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="name"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 bg-white dark:bg-dark-700 px-1"
                  >
                    Your Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="email"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 bg-white dark:bg-dark-700 px-1"
                  >
                    Email Address
                  </label>
                </div>
              </div>

              <div className="relative mb-6">
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all appearance-none"
                >
                  <option value="" disabled>
                    Select a subject
                  </option>
                  <option value="Project Inquiry">Project Inquiry</option>
                  <option value="Job Opportunity">Job Opportunity</option>
                  <option value="Collaboration">Collaboration</option>
                  <option value="Other">Other</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>

              <div className="relative mb-6">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all peer"
                  placeholder=" "
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 bg-white dark:bg-dark-700 px-1"
                >
                  Your Message
                </label>
              </div>

              <Button
                type="submit"
                variant="primary"
                fullWidth
                icon={<Send size={18} />}
                disabled={formStatus === "submitting"}
              >
                {formStatus === "idle" && "Send Message"}
                {formStatus === "submitting" && "Sending..."}
                {formStatus === "success" && "Message Sent!"}
                {formStatus === "error" && "Error! Try Again"}
              </Button>
            </form>
          </Card>
        </div>

        {/* Contact Info */}
        <div>
          <Card variant="glass" className="p-6 md:p-8 mb-6">
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>

            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <MapPin className="text-primary-500 mt-1 mr-3" size={20} />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-600 dark:hover:text-primary-500 dark:text-gray-300">
                    New Delhi, Delhi-NCR, India
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Calendar className="text-primary-500 mt-1 mr-3" size={20} />
                <div>
                  <h4 className="font-medium">Availability</h4>
                  <p className="text-gray-600 dark:hover:text-primary-500 dark:text-gray-300">
                    Monday - Friday, 9am - 6pm IST
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="text-primary-500 mt-1 mr-3" size={20} />
                <div>
                  <h4 className="font-medium">Email Address</h4>
                  <p className="text-gray-600 dark:hover:text-primary-500 dark:text-gray-300">
                    deepakcode21@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <h4 className="font-medium mb-3">Connect with me</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/deepakcode21"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 dark:bg-dark-700 rounded-full text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/deepakcode21/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 dark:bg-dark-700 rounded-full text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://x.com/deepakcode21"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 dark:bg-dark-700 rounded-full text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.instagram.com/deepakmax09/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 dark:bg-dark-700 rounded-full text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
