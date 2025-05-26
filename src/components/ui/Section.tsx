import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp } from '../../hooks/useScrollAnimation';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  children,
  className = '',
  titleClassName = '',
}) => {
  const { ref, controls } = useScrollAnimation();

  return (
    <section
      id={id}
      className={`py-16 md:py-24 px-4 md:px-6 ${className}`}
    >
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl md:text-4xl font-bold font-heading mb-4 ${titleClassName}`}>
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
};

export default Section;