'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-background pt-24">
      {/* Left-side: Only LinkedIn social link, no section nav */}
      <div className="hidden md:flex flex-col items-end min-w-[180px] mr-12">
        {/* No social icons in the left nav */}
      </div>
      {/* Main content on the right */}
      <main className="flex-1 flex flex-col gap-24">
        {/* Hero Section */}
  <section className="flex flex-col justify-center items-start min-h-[60vh] ml-8" style={{scrollMarginTop: '8rem'}}>
        <h1 className="text-accent text-lg mb-2 font-mono">Hi, my name is</h1>
    <h2 className="text-heading text-5xl sm:text-7xl font-bold mb-4">Chandra Konduru.</h2>
        <h3 className="text-subheading text-4xl sm:text-6xl font-bold mb-6">I build things for the web.</h3>
        <p className="text-body max-w-xl mb-8">
          Highly qualified Java Lead Developer offering 8 years of progressive experience. Expert at designing, developing,
          testing and maintaining wide range of new and existing Java and Spring based applications with a deep
          understanding of Agile methodologies.
        </p>
        <div className="flex gap-6 mb-8">
          {/* No icon in the intro/top right */}
        </div>
        {/* Section nav below intro, left-aligned */}
  <nav className="mt-8 mb-4 flex justify-start">
          <ul className="flex gap-8 font-mono text-accent text-lg">
            <li>
              <a href="#about" className="hover:text-heading transition-colors" onClick={e => {e.preventDefault(); document.getElementById('about')?.scrollIntoView({behavior: 'smooth'});}}>About</a>
            </li>
            <li>
              <a href="#experience" className="hover:text-heading transition-colors" onClick={e => {e.preventDefault(); document.getElementById('experience')?.scrollIntoView({behavior: 'smooth'});}}>Experience</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-heading transition-colors" onClick={e => {e.preventDefault(); window.location.href='/projects';}}>Projects</a>
            </li>
          </ul>
        </nav>
        {/* Social icons below section links */}
  <div className="flex gap-6 mb-8 mt-2">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-accent hover:scale-110 transition-transform">
            <span className="sr-only">GitHub</span>
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-accent hover:scale-110 transition-transform">
            <span className="sr-only">Resume</span>
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-7V3.5L18.5 9H13z"/></svg>
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-accent hover:scale-110 transition-transform">
            <span className="sr-only">LinkedIn</span>
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>
          </a>
        </div>
      </section>

  {/* About Section */}
  <section id="about" className="max-w-3xl mx-auto py-24 px-6 scroll-mt-32" style={{scrollMarginTop: '8rem'}}>
        <h2 className="text-heading text-3xl font-bold mb-6">About Me</h2>
        <p className="text-body mb-4">
          Hello! I’m Your Name, a software engineer based in [Your City]. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.
        </p>
        <p className="text-body mb-4">
          Here are a few technologies I’ve been working with recently:
        </p>
        <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-body font-mono text-sm mb-8">
          <li>JavaScript (ES6+)</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Node.js</li>
          <li>Tailwind CSS</li>
        </ul>
      </section>

  {/* Experience Section */}
  <section id="experience" className="max-w-3xl mx-auto py-24 px-6 scroll-mt-32" style={{scrollMarginTop: '8rem'}}>
  {/* Add a dummy anchor for projects to allow smooth scroll from nav */}
  <span id="projects" className="block h-0"></span>
        <h2 className="text-heading text-3xl font-bold mb-6">Where I’ve Worked</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-accent font-mono text-lg mb-1">Software Engineer @ ExampleCorp</h3>
            <span className="text-subheading text-sm font-mono">Jan 2023 – Present</span>
            <ul className="list-disc list-inside text-body mt-2 space-y-1">
              <li>Developed and maintained web applications using React and Next.js.</li>
              <li>Collaborated with cross-functional teams to deliver high-quality products.</li>
              <li>Implemented responsive design and accessibility best practices.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-accent font-mono text-lg mb-1">Frontend Developer @ WebStudio</h3>
            <span className="text-subheading text-sm font-mono">Jun 2021 – Dec 2022</span>
            <ul className="list-disc list-inside text-body mt-2 space-y-1">
              <li>Built and shipped modern, performant websites for clients in various industries.</li>
              <li>Worked closely with designers to create pixel-perfect UIs.</li>
              <li>Optimized applications for maximum speed and scalability.</li>
            </ul>
          </div>
        </div>
      </section>
      </main>
    </div>
  );
}