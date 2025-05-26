import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  percentage?: number;
  services: string[];
  // or more strictly:
  color?: "primary" | "secondary" | "accent" | string;
}

const SkillCard: React.FC<SkillCardProps> = ({
  icon,
  title,
  percentage,
  services,
  color = "primary",
}) => {
  const colorClasses = {
    primary: "border-primary-500/20 hover:border-primary-500/40",
    secondary: "border-secondary-500/20 hover:border-secondary-500/40",
    accent: "border-accent-500/20 hover:border-accent-500/40",
  }[color];

  const textColor = {
    primary: "text-primary-500",
    secondary: "text-secondary-500",
    accent: "text-accent-500",
  }[color];

  return (
    <Card
      variant="neuro"
      className={`p-3 h-full border ${colorClasses} transition-all group`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-2 mb-3">
          <div
            className={`p-2 rounded-md ${textColor} bg-gradient-to-br from-${color}-500/10 to-transparent`}
          >
            {React.cloneElement(icon as React.ReactElement, { size: 18 })}
          </div>
          <h3 className={`text-sm font-semibold ${textColor}`}>{title}</h3>
        </div>

        {percentage !== undefined && (
          <div className="mb-2">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-500 dark:text-gray-400">Skill</span>
              <span className={`font-medium ${textColor}`}>{percentage}%</span>
            </div>
            <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className={`h-full ${textColor} bg-current`}
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
            </div>
          </div>
        )}

        <div className="mt-auto">
          <div className="flex flex-wrap gap-1.5">
            {services.map((service, index) => (
              <span
                key={index}
                className={`px-1.5 py-0.5 rounded-md text-xs font-medium ${textColor!.replace(
                  "500",
                  "400/80"
                )} bg-${color}-500/10`}
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SkillCard;
