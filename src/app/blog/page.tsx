'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const posts = [
  {
    id: 1,
    title: 'Getting Started with Next.js 13',
    excerpt:
      'Learn how to build modern web applications with Next.js 13 and its new app directory feature.',
    date: '2023-12-01',
    category: 'Web Development',
    readTime: '5 min read',
  },
  // Add more blog posts
];

const categories = ['All', 'Web Development', 'AI', 'Career', 'Tutorial'];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts =
    activeCategory === 'All'
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  return (
    <section className="min-h-screen bg-background py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-heading text-4xl sm:text-5xl font-bold mb-12">Blog & Articles</h1>
        {/* Category Filter */}
        <div className="flex gap-4 mb-12 overflow-x-auto pb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap font-mono border transition-colors ${
                activeCategory === category
                  ? 'bg-accent text-background border-accent'
                  : 'bg-transparent text-accent border-accent hover:bg-accent hover:text-background'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-[#112240] rounded-lg overflow-hidden shadow-lg border border-[#233554] hover:scale-[1.02] hover:shadow-2xl transition-transform"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-mono text-accent bg-[#233554] px-2 py-1 rounded">{post.category}</span>
                  <span className="text-xs text-subheading font-mono">{post.readTime}</span>
                </div>
                <h2 className="text-heading text-xl font-bold mb-2">{post.title}</h2>
                <p className="text-body mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-subheading font-mono">{post.date}</span>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-accent hover:underline font-mono"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
