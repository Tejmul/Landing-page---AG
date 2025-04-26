import React from 'react';
import { motion } from 'framer-motion';

interface BlogPostProps {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, date, excerpt, slug }) => {
  return (
    <motion.article 
      className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800/70 transition-colors duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold mb-2 text-white">
        <a href={`/blog/${slug}`} className="hover:text-primary-400 transition-colors duration-200">
          {title}
        </a>
      </h2>
      <time className="text-sm text-gray-400 mb-3 block">{date}</time>
      <p className="text-gray-300 mb-4">{excerpt}</p>
      <a 
        href={`/blog/${slug}`}
        className="text-primary-400 hover:text-primary-300 transition-colors duration-200 inline-flex items-center"
      >
        Read more
        <svg 
          className="w-4 h-4 ml-2" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
    </motion.article>
  );
};

export default BlogPost; 