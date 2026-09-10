import { Link } from 'react-router-dom'
import './Layout.css'

export default function Layout({ children }) {
  return (
    <>
      <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-primary-600">AP</span>
              </Link>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link to="/" className="hover:text-primary-600 transition-colors">Home</Link>
                  <Link to="/about" className="hover:text-primary-600 transition-colors">About</Link>
                  <Link to="/projects" className="hover:text-primary-600 transition-colors">Projects</Link>
                  <Link to="/skills" className="hover:text-primary-600 transition-colors">Skills</Link>
                  <Link to="/contact" className="hover:text-primary-600 transition-colors">Contact</Link>
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <button 
                className="bg-primary-50 hover:bg-primary-100 text-primary-600 font-medium px-4 py-2 rounded-md transition-colors"
                aria-label="Download resume"
              >
                Resume
              </button>
            </div>
            <div className="md:hidden">
              <button 
                className="p-2 rounded-md hover:bg-gray-100"
                aria-label="Toggle navigation menu"
              >
                {/* Hamburger icon */}
                <span className="block h-0.5 w-4 bg-gray-600 mb-1.5"></span>
                <span className="block h-0.5 w-4 bg-gray-600 mb-1.5"></span>
                <span className="block h-0.5 w-4 bg-gray-600"></span>
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="bg-gray-900 text-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-4">
              © {new Date().getFullYear()} Abhinav Padige. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
                LinkedIn
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="GitHub">
                GitHub
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}