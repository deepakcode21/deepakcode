import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import BlogCard from '../ui/BlogCard';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: "Building a UPI-OBS Widget for Streamers",
      excerpt: "Learn how to create a custom widget for OBS that integrates with UPI payment systems for real-time donation tracking during livestreams.",
      date: "April 10, 2025",
      readTime: "8 min read",
      image: "https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["React", "UPI", "OBS", "WebSockets"]
    },
    {
      title: "Creating a Mood-Based Music Player with Spotify API",
      excerpt: "Discover how to build a music player that analyzes user mood through facial recognition and suggests playlists accordingly using Spotify's API.",
      date: "March 15, 2025",
      readTime: "12 min read",
      image: "https://images.pexels.com/photos/4071887/pexels-photo-4071887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["React", "Machine Learning", "Spotify API"]
    },
    {
      title: "Developing a P2P File Sharing System with WebRTC",
      excerpt: "A step-by-step guide to building a peer-to-peer file sharing application using WebRTC, with no server required for the actual file transfers.",
      date: "February 28, 2025",
      readTime: "10 min read",
      image: "https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["WebRTC", "JavaScript", "P2P"]
    },
    {
      title: "Freelancing Tips: How to Price Your Web Development Services",
      excerpt: "Learn effective strategies for pricing your freelance web development services to maximize both client satisfaction and your income.",
      date: "January 20, 2025",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["Freelancing", "Business", "Web Development"]
    }
  ];

  return (
    <Section
      id="blog"
      title="Blog & Insights"
      subtitle="Technical articles, tutorials, and freelancing tips from my experience"
      className="bg-skill-bg"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <BlogCard
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              readTime={post.readTime}
              image={post.image}
              tags={post.tags}
            />
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <motion.a
          href="#"
          className="inline-block px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors shadow-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View All Articles
        </motion.a>
      </div>
    </Section>
  );
};

export default Blog;