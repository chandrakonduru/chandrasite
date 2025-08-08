import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-[#233554]">
      <div className="max-w-5xl mx-auto py-10 px-4">
        <div className="flex justify-center gap-8 mb-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:scale-110 transition-transform"
          >
            <span className="sr-only">GitHub</span>
            <FaGithub className="h-7 w-7" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:scale-110 transition-transform"
          >
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin className="h-7 w-7" />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:scale-110 transition-transform"
          >
            <span className="sr-only">Twitter</span>
            <FaTwitter className="h-7 w-7" />
          </a>
        </div>
        <div className="text-center">
          <p className="text-subheading text-xs font-mono">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
