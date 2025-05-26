import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'glass' | 'neuro';
  className?: string;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className = '',
  hoverEffect = false,
}) => {
  const baseStyles = 'rounded-lg overflow-hidden';
  
  const variantStyles = {
    default: 'bg-white dark:bg-dark-700 shadow-md',
    glass: 'backdrop-blur-md bg-glass-light dark:bg-glass-dark border border-gray-200 dark:border-dark-500 shadow-glass',
    neuro: 'bg-gray-100 dark:bg-dark-800 shadow-neuro-light dark:shadow-neuro-dark',
  };

  return (
    <motion.div
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      whileHover={hoverEffect ? { y: -5, transition: { duration: 0.2 } } : undefined}
    >
      {children}
    </motion.div>
  );
};

export default Card;