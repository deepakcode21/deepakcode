import React from "react";
import { motion } from "framer-motion";
import Section from "../ui/Section";
import Testimonial from "../ui/Testimonial";
import Card from "../ui/Card";
import { Award, Trophy, Star } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Testimonials: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      quote:
        "Deepak's expertise in the MERN stack is exceptional. He delivered our project ahead of schedule and exceeded our expectations in terms of functionality and design.",
      author: "Rahul Sharma",
      role: "Product Manager",
    },
    {
      quote:
        "Working with ArrowMax was a game-changer for our startup. His technical skills and problem-solving abilities helped us launch our MVP in record time.",
      author: "Vikash Jain",
      role: "Startup Founder",
    },
    {
      quote:
        "Deepak is not just a developer; he's a solution provider. He took time to understand our business needs and delivered a web application that perfectly fits our workflow.",
      author: "Vishal Kumar",
      role: "Business Owner",
    },
  ];

  const achievements = [
    {
      title: "Projects Completed",
      value: 25,
      icon: <Trophy className="text-accent-500" />,
    },
    {
      title: "Client Satisfaction",
      value: 100,
      suffix: "%",
      icon: <Star className="text-warning-500" />,
    },
    {
      title: "Active Client",
      value: 10,
      suffix: "+",
      icon: <Award className="text-primary-500" />,
    },
  ];

  const badges = [
    "Google Solution Challenge '25 Participant",
    "IEEE Paper Pending",
    "Freelance Rating ★★★★★",
  ];

  return (
    <Section
      id="testimonials"
      title="Testimonials & Achievements"
      subtitle="What clients say about my work and key milestones in my journey"
      className="bg-white dark:bg-dark-800"
    >
      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Testimonial
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
            />
          </motion.div>
        ))}
      </div>

      {/* Achievements */}
      <div className="mb-12" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} variant="neuro" className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h3 className="text-lg font-semibold mb-2">
                  {achievement.title}
                </h3>
                <div className="text-4xl font-bold">
                  {inView ? (
                    <CountUp
                      end={achievement.value}
                      duration={2.5}
                      suffix={achievement.suffix || ""}
                    />
                  ) : (
                    <>0{achievement.suffix || ""}</>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap justify-center gap-4">
        {badges.map((badge, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full font-medium text-sm">
              {badge}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
