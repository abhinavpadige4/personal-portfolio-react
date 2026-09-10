import { FaUserGraduate, FaBriefcase, FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa'

export default function About() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">
          About Me
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <FaUserGraduate className="h-8 w-8 text-primary-500 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold mb-2">Education</h2>
                <p className="text-gray-700">
                  Bachelor of Technology in Computer Science Engineering<br />
                  XYZ University • 2020 - 2024
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <FaBriefcase className="h-8 w-8 text-primary-500 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold mb-2">Experience</h2>
                <p className="text-gray-700">
                  Software Developer Intern<br />
                  ABC Tech Solutions • Summer 2023<br />
                  • Developed responsive web applications using React and Node.js<br />
                  • Collaborated with cross-functional teams to deliver features<br />
                  • Optimized application performance by 30% through code refactoring
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <FaEnvelope className="h-8 w-8 text-primary-500 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold mb-2">Contact Info</h2>
                <p className="text-gray-700">
                  Email: abhinav.padige@example.com<br />
                  Phone: +1 (555) 123-4567<br />
                  Location: San Francisco, CA
                </p>
              </div>
            </div>
          </div>
          
          {/* Skills Preview */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-medium mb-2">Frontend</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>React.js</li>
                  <li>Vue.js</li>
                  <li>HTML5 & CSS3</li>
                  <li>Tailwind CSS</li>
                  <li>Bootstrap</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-medium mb-2">Backend</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>Python/Django</li>
                  <li>REST APIs</li>
                  <li>Database Design</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-medium mb-2">Tools & DevOps</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>Git & GitHub</li>
                  <li>Docker</li>
                  <li>AWS</li>
                  <li>Jest & Testing</li>
                  <li>VS Code</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-medium mb-2">Databases</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                  <li>MySQL</li>
                  <li>Redis</li>
                  <li>SQLite</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Resume Section */}
        <div className="mt-16 text-center">
          <a 
            href="#"
            className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-medium px-8 py-3 rounded-lg transform transition-all duration-300 hover:scale-105"
            aria-label="Download Resume"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  )
}