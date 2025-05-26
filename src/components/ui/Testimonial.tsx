import React from 'react';
import { motion } from 'framer-motion';
import Card from './Card';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  image?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  role,
  image,
}) => {
  return (
    <Card variant="glass" className="p-6">
      <div className="flex flex-col h-full">
        <div className="mb-6 text-2xl text-primary-500">"</div>
        <p className="flex-grow italic text-gray-700 dark:text-gray-300 mb-6">{quote}</p>
        <div className="flex items-center">
          {image ? (
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
              <img src={image} alt={author} className="w-full h-full object-cover" />
            </div>
          ) : (
            <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
              <span className="text-primary-700 dark:text-primary-300 font-bold text-lg">
                {author.charAt(0)}
              </span>
            </div>
          )}
          <div>
            <div className="font-semibold">{author}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{role}</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Testimonial;