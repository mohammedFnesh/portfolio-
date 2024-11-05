import React from 'react';
import {
  Brain,
  Github,
  Linkedin,
  Mail,
  Terminal,
  Zap,
  Code2,
  Plus,
  Coffee,
} from 'lucide-react';
import { AddProject } from './pages/AddProject';
import { ProjectCard } from './components/ProjectCard';

function Portfolio() {
  const projects = [
    {
      title: 'Neural Network Visualization',
      description:
        'Interactive 3D visualization of neural networks in real-time',
      fullDescription:
        'A sophisticated visualization tool that brings neural networks to life in your browser. Built with Three.js and TensorFlow.js, this project allows users to:\n\nExplore neural network architectures in an interactive 3D space\nVisualize data flow and activation patterns in real-time\nCustomize network parameters and observe their effects\nExport and share network configurations\n\nThe visualization uses WebGL for hardware-accelerated graphics and implements custom shaders for optimal performance.',
      image:
        'https://images.unsplash.com/photo-1501526029524-a8ea952b15be?auto=format&fit=crop&w=800&q=80',
      tags: ['TensorFlow.js', 'Three.js', 'React'],
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/example/neural-viz',
    },
    {
      title: 'AI-Powered Analytics Platform',
      description: 'Enterprise-grade analytics with predictive capabilities',
      fullDescription:
        'A comprehensive analytics platform that leverages machine learning to provide predictive insights. Key features include:\n\nReal-time data processing and analysis\nAdvanced anomaly detection using custom ML models\nAutomated report generation with natural language summaries\nScalable architecture supporting millions of data points\n\nThe platform uses FastAPI for high-performance API endpoints and PostgreSQL for reliable data storage, with a React-based dashboard for intuitive data visualization.',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      tags: ['Python', 'FastAPI', 'PostgreSQL'],
      demoUrl: 'https://analytics.example.com',
      githubUrl: 'https://github.com/example/ai-analytics',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-6 py-16 md:py-32">
        <div className="flex flex-col items-center text-center">
          <Brain className="w-16 h-16 mb-6 text-blue-400 animate-pulse" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            AI Engineer & ML Specialist
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            Crafting intelligent solutions at the intersection of artificial
            intelligence and software engineering
          </p>
          <div className="flex space-x-4">
            <a
              href="#contact"
              className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="border border-blue-400 hover:bg-blue-400/10 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="bg-gray-800/50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Technical Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Terminal className="w-8 h-8 text-blue-400" />,
                title: 'Machine Learning',
                skills: [
                  'TensorFlow',
                  'PyTorch',
                  'Scikit-learn',
                  'Deep Learning',
                ],
              },
              {
                icon: <Code2 className="w-8 h-8 text-blue-400" />,
                title: 'Development',
                skills: ['Python', 'JavaScript', 'React', 'FastAPI'],
              },
              {
                icon: <Zap className="w-8 h-8 text-blue-400" />,
                title: 'MLOps',
                skills: ['Docker', 'Kubernetes', 'CI/CD', 'Model Deployment'],
              },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-xl hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold ml-3">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="text-gray-300">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <a
              href="/add-project"
              className="inline-flex items-center bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg font-semibold transition-colors"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add Project
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-800/50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Interested in AI solutions or collaboration? Let's discuss how we
            can work together.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/mhhfnesh"
              className="hover:text-blue-400 transition-colors"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammed-al-fnesh-6373031b1/"
              className="hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a
              href="mailto:mhhfnesh@gmail.com"
              className="hover:text-blue-400 transition-colors"
            >
              <Mail className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400">
        <div className="flex items-center justify-center space-x-2">
          <Coffee className="w-4 h-4" />
          <span>Built with passion and code</span>
        </div>
      </footer>
    </div>
  );
}

function App() {
  const path = window.location.pathname;

  if (path === '/add-project') {
    return <AddProject />;
  }

  return <Portfolio />;
}

export default App;
