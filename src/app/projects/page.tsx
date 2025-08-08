'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Project 1',
    description: 'Description of your first project',
    image: '/images/project1.jpg',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourusername/project1',
    demo: 'https://project1-demo.com',
    category: 'web',
  },
  // Add more projects
];

const categories = ['all', 'web', 'mobile', 'ai', 'other'];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'all' || project.category === activeCategory
  );

  return (
    <section className="min-h-screen bg-background py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-heading text-4xl sm:text-5xl font-bold mb-12">Some Things I’ve Built</h1>
        {/* Category Filter */}
        <div className="flex gap-4 mb-12 overflow-x-auto pb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full capitalize font-mono border transition-colors ${
                activeCategory === category
                  ? 'bg-accent text-background border-accent'
                  : 'bg-transparent text-accent border-accent hover:bg-accent hover:text-background'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-[#112240] rounded-lg overflow-hidden shadow-lg border border-[#233554] hover:scale-[1.02] hover:shadow-2xl transition-transform"
            >
              <div className="relative h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:opacity-80 transition-opacity"
                />
              </div>
              <div className="p-6">
                <h3 className="text-heading text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-body mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-[#233554] text-accent px-2 py-1 rounded font-mono text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent hover:underline"
                  >
                    <FaGithub />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent hover:underline"
                  >
                    <FaExternalLinkAlt />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
