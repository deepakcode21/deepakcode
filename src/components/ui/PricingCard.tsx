import React from 'react';
import { motion } from 'framer-motion';
import Card from './Card';
import Button from './Button';
import { CheckCircle } from 'lucide-react';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: PricingFeature[];
  popular?: boolean;
  buttonText?: string;
  onButtonClick?: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  popular = false,
  buttonText = "Hire Me",
  onButtonClick,
}) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card 
        variant="neuro" 
        className={`p-6 md:p-8 h-full flex flex-col relative overflow-visible ${
          popular ? 'border-2 border-primary-500 shadow-lg z-10 scale-105' : ''
        }`}
      >
        {popular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </div>
        )}
        
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold">{price}</span>
          {price !== 'Custom' && <span className="text-gray-500 dark:text-gray-400">/project</span>}
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
        
        <div className="flex-grow">
          <ul className="space-y-3 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle 
                  size={18} 
                  className={feature.included 
                    ? "text-success-500 mr-2 mt-0.5" 
                    : "text-gray-300 dark:text-gray-600 mr-2 mt-0.5"
                  } 
                />
                <span className={feature.included 
                  ? "text-gray-700 dark:text-gray-300" 
                  : "text-gray-400 dark:text-gray-500 line-through"
                }>
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
        
        <Button 
          variant={popular ? "primary" : "outline"} 
          fullWidth 
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </Card>
    </motion.div>
  );
};

export default PricingCard;