import React from "react";
import { motion } from "framer-motion";
import Section from "../ui/Section";
import PricingCard from "../ui/PricingCard";

const Pricing: React.FC = () => {
  const pricingPlans = [
    {
      title: "Basic",
      price: "$300",
      description:
        "Perfect for small businesses needing a simple web presence.",
      features: [
        { text: "Single Page Website", included: true },
        { text: "Responsive Design", included: true },
        { text: "3 Content Sections", included: true },
        { text: "Contact Form", included: true },
        { text: "SEO Optimization", included: true },
        { text: "Social Media Integration", included: true },
        { text: "E-commerce Functionality", included: false },
        { text: "Custom Backend Development", included: false },
      ],
      popular: false,
    },
    {
      title: "Pro",
      price: "$500",
      description:
        "Ideal for growing businesses needing more features and functionality.",
      features: [
        { text: "Multi-page Website", included: true },
        { text: "Responsive Design", included: true },
        { text: "10 Content Sections", included: true },
        { text: "Advanced Contact Form", included: true },
        { text: "SEO Optimization", included: true },
        { text: "Social Media Integration", included: true },
        { text: "Basic E-commerce (up to 20 products)", included: true },
        { text: "Custom Backend Development", included: false },
      ],
      popular: true,
    },
    {
      title: "Enterprise",
      price: "Custom",
      description:
        "For established businesses needing complex, custom solutions.",
      features: [
        { text: "Custom Web Application", included: true },
        { text: "Responsive Design", included: true },
        { text: "Unlimited Content Sections", included: true },
        { text: "Advanced Forms & User Accounts", included: true },
        { text: "Advanced SEO Strategy", included: true },
        { text: "Social Media Integration", included: true },
        { text: "Full E-commerce Functionality", included: true },
        { text: "Custom Backend Development", included: true },
      ],
      popular: false,
    },
  ];

  return (
    <Section
      id="pricing"
      title="Pricing & Packages"
      subtitle="Transparent pricing options tailored to your project needs"
      className="bg-white dark:bg-dark-800"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <PricingCard
              title={plan.title}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              popular={plan.popular}
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-xl font-bold mb-4">Need Something Custom?</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Every project is unique, and I'm happy to create a custom solution
          tailored to your specific needs. Contact me for a personalized quote
          based on your project requirements.
        </p>
        <div className="flex justify-center">
          <motion.a
            href="#contact"
            className="inline-block px-6 py-3 bg-secondary-600 hover:bg-secondary-700 text-white font-medium rounded-lg transition-colors shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get a Custom Quote
          </motion.a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
