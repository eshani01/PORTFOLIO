import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] text-center px-4">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
        Hi, I'm <span className="text-blue-600">Eshani</span>
      </h1>
      
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10">
        A Computer Science Engineering student learning Full-Stack Developer specializing in Node.js, Express, PostgreSQL, and React. Also exploring cybersec.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <Link 
          href="/projects" 
          className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          View My Work <ArrowRight size={20} />
        </Link>
        <Link 
          href="/contact" 
          className="flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-300 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
        >
          Contact Me
        </Link>
      </div>

      <div className="flex gap-6 text-gray-500">
        <a href="https://github.com/eshani01" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
          <FaGithub size={28} />
        </a>
        <a href="https://linkedin.com/in/eshani01" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
          <FaLinkedin size={28} />
        </a>
      </div>
    </div>
  );
}