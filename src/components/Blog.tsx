import React from 'react';
import BlogPost from './BlogPost';

const blogPosts = [
  {
    title: "Why AssuredGig is Revolutionizing the Freelance Industry",
    date: "April 22, 2024",
    excerpt: "Discover how AssuredGig is transforming the way freelancers and clients connect, ensuring quality and reliability in every interaction.",
    slug: "revolutionizing-freelance-industry"
  },
  {
    title: "The Future of Work: AssuredGig's Vision for 2024",
    date: "April 20, 2024",
    excerpt: "Learn about AssuredGig's innovative approach to talent management and how we're shaping the future of work in the digital age.",
    slug: "future-of-work-2024"
  },
  {
    title: "Building Trust in Freelancing: The AssuredGig Way",
    date: "April 18, 2024",
    excerpt: "Explore how AssuredGig is building a trusted ecosystem for freelancers and clients through our unique verification and quality assurance processes.",
    slug: "building-trust-freelancing"
  }
];

const Blog: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Latest from <span className="text-gradient">AssuredGig</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPost
              key={index}
              title={post.title}
              date={post.date}
              excerpt={post.excerpt}
              slug={post.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog; 