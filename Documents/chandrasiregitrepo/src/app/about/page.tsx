import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Personal Introduction */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6">
                Hello! I&#39;m [Your Name], a passionate full-stack developer with expertise in modern web technologies
                and a keen interest in AI and innovation. With [X] years of experience in the tech industry,
               I&#39;ve worked on various challenging projects that have shaped my problem-solving abilities and
                technical skills.
              </p>
              <p className="text-lg mb-6">
                My journey in technology started [brief background]. I&#39;m particularly passionate about [specific areas
                of interest] and love to explore new technologies and frameworks.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              {/* Add your profile image here */}
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Profile Image</span>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Journey */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Professional Journey</h2>
          <div className="space-y-8">
            {[
              {
                period: '2023 - Present',
                role: 'Senior Full Stack Developer',
                company: 'Company Name',
                description: 'Description of your role and achievements',
              },
              // Add more experiences
            ].map((experience, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-4">
                <div className="text-sm text-gray-600">{experience.period}</div>
                <div className="font-bold text-xl">{experience.role}</div>
                <div className="text-lg text-gray-700 mb-2">{experience.company}</div>
                <p>{experience.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Education & Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Add your education and certifications here */}
          </div>
        </section>

        {/* Personal Interests */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Personal Interests</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              Beyond coding, I&#39;m passionate about [your interests]. I believe in continuous learning
              and regularly attend tech conferences and workshops to stay updated with the latest
              trends and technologies.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
