import React from "react";
import { motion } from "framer-motion";
import Section from "../ui/Section";
import SkillCard from "../ui/SkillCard";
import { staggerChildren } from "../../hooks/useScrollAnimation";
import {
  Database,
  Server,
  Code2,
  Cloud,
  Lock,
  Smartphone,
  Cpu,
  Binary,
  Network,
  Shield,
} from "lucide-react";

const Skills: React.FC = () => {
  const categories = [
    {
      title: "Database Tech",
      icon: <Database size={20} />,
      items: [
        {
          title: "MongoDB",
          percentage: 95,
          icon: <Database />,
          services: ["Atlas", "Sharding", "Aggregation"],
          color: "primary",
        },
        {
          title: "PostgreSQL",
          percentage: 90,
          icon: <Database />,
          services: ["Partitioning", "PL/pgSQL", "Replication"],
          color: "secondary",
        },
        {
          title: "Redis",
          percentage: 88,
          icon: <Database />,
          services: ["Caching", "Pub/Sub", "Cluster"],
          color: "accent",
        },
        {
          title: "MySQL",
          percentage: 85,
          icon: <Database />,
          services: ["Optimization", "Indexing", "Triggers"],
          color: "primary",
        },
        {
          title: "Firebase",
          percentage: 82,
          icon: <Database />,
          services: ["Firestore", "Realtime DB", "Auth"],
          color: "secondary",
        },
      ],
    },
    {
      title: "Backend",
      icon: <Server size={20} />,
      items: [
        {
          title: "Node.js",
          percentage: 98,
          icon: <Code2 />,
          services: ["NestJS", "GraphQL", "WebSockets"],
          color: "accent",
        },
        {
          title: "Spring Boot",
          percentage: 92,
          icon: <Cpu />,
          services: ["Security", "JPA", "Microservices"],
          color: "primary",
        },
        {
          title: "FastAPI",
          percentage: 90,
          icon: <Binary />,
          services: ["ASGI", "OpenAPI", "OAuth"],
          color: "secondary",
        },
        {
          title: "Django",
          percentage: 88,
          icon: <Code2 />,
          services: ["ORM", "DRF", "MVT"],
          color: "accent",
        },
      ],
    },
    {
      title: "Frontend",
      icon: <Smartphone size={20} />,
      items: [
        {
          title: "React",
          percentage: 98,
          icon: <Code2 />,
          services: ["Next.js", "Redux", "Hooks"],
          color: "primary",
        },
        {
          title: "Angular",
          percentage: 95,
          icon: <Network />,
          services: ["RxJS", "NgRx", "IVY"],
          color: "secondary",
        },
        {
          title: "Vue",
          percentage: 90,
          icon: <Code2 />,
          services: ["Nuxt", "Vuex", "Composition"],
          color: "accent",
        },
        {
          title: "Flutter",
          percentage: 85,
          icon: <Smartphone />,
          services: ["BLoC", "Widgets", "Animations"],
          color: "primary",
        },
      ],
    },
    {
      title: "DevOps",
      icon: <Cloud size={20} />,
      items: [
        {
          title: "AWS",
          percentage: 92,
          icon: <Cloud />,
          services: ["EC2", "Lambda", "S3"],
          color: "secondary",
        },
        {
          title: "Docker",
          percentage: 95,
          icon: <Cloud />,
          services: ["Containers", "Swarm", "Compose"],
          color: "accent",
        },
        {
          title: "Kubernetes",
          percentage: 88,
          icon: <Cloud />,
          services: ["Helm", "CRD", "Operators"],
          color: "primary",
        },
        {
          title: "GitLab CI",
          percentage: 90,
          icon: <Cloud />,
          services: ["Pipelines", "Runners", "CD"],
          color: "secondary",
        },
      ],
    },
    {
      title: "Security",
      icon: <Shield size={20} />,
      items: [
        {
          title: "Pen Testing",
          percentage: 90,
          icon: <Lock />,
          services: ["OWASP", "Nmap", "Metasploit"],
          color: "accent",
        },
        {
          title: "JWT Auth",
          percentage: 95,
          icon: <Lock />,
          services: ["OAuth2", "OpenID", "Sessions"],
          color: "primary",
        },
        {
          title: "Security Audits",
          percentage: 88,
          icon: <Shield />,
          services: ["Vulnerability", "Compliance"],
          color: "secondary",
        },
      ],
    },
  ];

  return (
    <Section
      id="skills"
      title="Skills & Services"
      subtitle="My technical expertise and professional services offered"
      className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="space-y-8">
        {categories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="group relative"
          >
            <div className="flex items-center gap-3 mb-4 px-2">
              <span className={`text-${category.items[0].color}-500`}>
                {category.icon}
              </span>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {category.title}
              </h3>
            </div>

            <motion.div
              variants={staggerChildren}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 px-2"
            >
              {category.items.map((item, itemIndex) => (
                <motion.div
                  key={itemIndex}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.3,
                        delay: itemIndex * 0.05,
                      },
                    },
                  }}
                >
                  <SkillCard
                    icon={item.icon}
                    title={item.title}
                    percentage={item.percentage}
                    services={item.services}
                    color={item.color}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
