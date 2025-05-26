import React from "react";
import Card from "./Card";
import { Calendar, Clock } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  onClick?: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  excerpt,
  date,
  readTime,
  image,
  tags,
  onClick,
}) => {
  return (
    <Card variant="default" className="overflow-hidden h-full" hoverEffect>
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium px-2.5 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {excerpt}
        </p>

        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
          <Calendar size={16} className="mr-1" />
          <span className="mr-4">{date}</span>
          <Clock size={16} className="mr-1" />
          <span>{readTime}</span>
        </div>

        <button
          onClick={onClick}
          className="text-primary-600 dark:text-primary-400 font-medium hover:underline focus:outline-none"
        >
          Read More
        </button>
      </div>
    </Card>
  );
};

export default BlogCard;
