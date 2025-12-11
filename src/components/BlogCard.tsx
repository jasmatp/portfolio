import React, { useState } from 'react';
import { BlogPost, BlogPostProps } from './types/types';

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <div className="group bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300">
      <div className="overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center text-sm text-[#4a9fd8] space-x-4 mb-2">
          <div className="flex items-center space-x-1">
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-7l-4 4v-4H5a2 2 0 0 1-2-2V5Z" />
            </svg>
            <span>{post.category}</span>
          </div>
          <div className="flex items-center space-x-1">
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4Zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4Z" />
            </svg>
            <span>{post.author}</span>
          </div>
          <div className="flex items-center space-x-1">
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21 6h-2v9H5v2a1 1 0 0 0 1 1h11l4 4V7a1 1 0 0 0-1-1Z" />
            </svg>
            <span>{post.commentsCount}</span>
          </div>
        </div>

        {/* Title with animated underline on hover */}
        <div className="relative w-fit mx-auto sm:mx-0">
          <h3 className="text-gray-900 font-semibold text-lg group-hover:text-[#4a9fd8] transition-colors duration-300">
            {post.title}
          </h3>
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#4a9fd8] transition-all duration-500 group-hover:w-full"></span>
        </div>
      </div>
    </div>
  );
};

const RecentBlog: React.FC<BlogPostProps> = ({blogPostData}) => {
  const [startIndex, setStartIndex] = useState(0);

  const totalPosts = blogPostData.length;
  const visibleCount = 3;

  const prev = () => {
    setStartIndex((prev) =>
      prev === 0 ? totalPosts - visibleCount : prev - visibleCount
    );
  };

  const next = () => {
    setStartIndex((prev) =>
      prev + visibleCount >= totalPosts ? 0 : prev + visibleCount
    );
  };

  // get visible posts
  const visiblePosts = [];
  for (let i = 0; i < visibleCount; i++) {
    visiblePosts.push(blogPostData[(startIndex + i) % totalPosts]);
  }

  return (
    <section className="bg-[#f5f4f4] py-16 px-6 w-full mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-2xl tracking-widest text-[#4a9fd8] mb-2">GET UPDATES</p>
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-gray-900">Recent Blog</h2>
        </div>

        <div className="flex space-x-4">
          <button
            onClick={prev}
            aria-label="Previous posts"
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-red-600 hover:border-red-600 transition"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Next posts"
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-red-600 hover:border-red-600 transition"
          >
            ›
          </button>
        </div>
      </div>

      {/* Show 3 blog cards in a row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {visiblePosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default RecentBlog;
