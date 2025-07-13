'use client';
import { motion } from 'framer-motion';

const skills = {
  frontend: [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Next.js', level: 80 },
    { name: 'Tailwind CSS', level: 85 },
    // Add more frontend skills
  ],
  backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'SQL', level: 75 },
    { name: 'MongoDB', level: 70 },
    // Add more backend skills
  ],
  tools: [
    { name: 'Git', level: 90 },
    { name: 'Docker', level: 75 },
    { name: 'AWS', level: 70 },
    { name: 'CI/CD', level: 80 },
    // Add more tools
  ],
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-12">Technical Skills</h1>

        {/* Frontend Skills */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Frontend Development</h2>
          <div className="space-y-6">
            {skills.frontend.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <motion.div
                    className="h-full bg-blue-600 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Backend Skills */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Backend Development</h2>
          <div className="space-y-6">
            {skills.backend.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <motion.div
                    className="h-full bg-green-600 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tools & Technologies */}
        <section>
          <h2 className="text-2xl font-semibold mb-8">Tools & Technologies</h2>
          <div className="space-y-6">
            {skills.tools.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <motion.div
                    className="h-full bg-purple-600 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
