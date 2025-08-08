export default function ResumePage() {
  return (
    <section className="max-w-3xl mx-auto py-24 px-6 bg-background min-h-screen">
      <h1 className="text-heading text-4xl sm:text-5xl font-bold mb-8">Chandra Konduru</h1>
      <p className="text-body text-lg mb-8">
        Highly qualified Java Lead Developer offering 8 years of progressive experience. Expert at designing, developing, testing and maintaining a wide range of new and existing Java and Spring based applications with a deep understanding of Agile methodologies.
      </p>

      {/* Experience Section */}
      <div className="mb-12">
        <h2 className="text-accent font-mono text-2xl mb-4">Experience</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-heading text-lg font-bold">Java Lead Developer <span className="text-accent font-mono">@ ExampleCorp</span></h3>
            <span className="text-subheading text-sm font-mono">Jan 2023 – Present</span>
            <ul className="list-disc list-inside text-body mt-2 space-y-1">
              <li>Lead design and development of scalable Java/Spring applications.</li>
              <li>Mentored junior developers and led Agile ceremonies.</li>
              <li>Collaborated with cross-functional teams to deliver high-quality products.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-heading text-lg font-bold">Senior Java Developer <span className="text-accent font-mono">@ WebStudio</span></h3>
            <span className="text-subheading text-sm font-mono">Jun 2020 – Dec 2022</span>
            <ul className="list-disc list-inside text-body mt-2 space-y-1">
              <li>Developed and maintained enterprise Java applications.</li>
              <li>Implemented RESTful APIs and microservices.</li>
              <li>Worked closely with QA and DevOps for CI/CD and testing.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="mb-12">
        <h2 className="text-accent font-mono text-2xl mb-4">Education</h2>
        <div>
          <h3 className="text-heading text-lg font-bold">Bachelor of Technology in Computer Science</h3>
          <span className="text-subheading text-sm font-mono">XYZ University, 2012 – 2016</span>
        </div>
      </div>

      {/* Skills & Technologies Section */}
      <div className="mb-12">
        <h2 className="text-accent font-mono text-2xl mb-4">Skills & Technologies</h2>
        <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-body font-mono text-sm">
          <li>Java</li>
          <li>Spring / Spring Boot</li>
          <li>REST APIs</li>
          <li>Microservices</li>
          <li>SQL / Oracle / MySQL</li>
          <li>Hibernate / JPA</li>
          <li>JUnit / Mockito</li>
          <li>Git / Maven</li>
          <li>Docker</li>
          <li>Agile / Scrum</li>
        </ul>
      </div>

      {/* Download Resume Button */}
      <div className="mt-10 text-center">
        <a
          href="/resume.pdf"
          download
          className="inline-block border border-accent text-accent px-8 py-4 rounded hover:bg-accent hover:text-background font-mono transition-colors"
        >
          Download PDF Resume
        </a>
      </div>
    </section>
  );
}
