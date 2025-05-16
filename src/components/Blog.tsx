import React from 'react';


const blogPosts = [
  {
    title: "Harsh reality of AssuredGig!",
    url: "https://www.linkedin.com/posts/assuredgig_assuredgig-activity-7324007313021804544-akjB?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEMnK3ABnftpaczf1MgWlTY4M2kF-DpciX8",
    description: `I still remember that night.\nMy heart was heavy.\nI had worked for weeks — only to realize… it was all fake.\nNo one cared.\nNo platform helped.\nI felt stupid. Ashamed.`
  },
  {
    title: "Stop doing freelancing!!",
    url: "https://www.linkedin.com/posts/assuredgig_assuredgig-activity-7323221823943327744-6VJa?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEMnK3ABnftpaczf1MgWlTY4M2kF-DpciX8",
    description: `Freelancing sounds great, right? Work from anywhere, be your own boss, have full freedom. But what happens when you do the job` 
  },
  {
    title: "BE MEDIOCRE!",
    url: "https://www.linkedin.com/posts/assuredgig_assuredgig-activity-7326208076858941441-ZRdj?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEMnK3ABnftpaczf1MgWlTY4M2kF-DpciX8",
    description: `Be mediocre—if you want to overthink every rupee you spend.\nBe mediocre—if growth isn't your priority.\nBut if you crave freedom, flexibility, and real growth, then 2025 is your year.\n\n🚨 Traditional Jobs Are Changing`
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
            <div
              key={index}
              className="flex flex-col justify-between h-full bg-dark-200 rounded-2xl shadow-lg p-8 border border-primary-400/10 hover:shadow-primary-400/30 hover:border-primary-400/30 transition-all duration-200"
            >
              <div>
                <h3 className="text-2xl font-bold text-primary-400 mb-4">{post.title}</h3>
                <p className="text-gray-300 text-base whitespace-pre-line mb-6">{post.description}</p>
              </div>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-auto px-6 py-2 rounded-lg bg-primary-400 text-dark font-semibold shadow hover:bg-primary-300 transition-all duration-200"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog; 