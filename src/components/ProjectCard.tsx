import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, Github } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export function ProjectCard({
  title,
  description,
  fullDescription,
  image,
  tags,
  demoUrl,
  githubUrl
}: ProjectProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-gray-800/50 rounded-xl overflow-hidden hover:shadow-xl transition-all">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <div className="flex gap-2">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
                title="Live Demo"
              >
                <ExternalLink size={20} />
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
                title="View Source"
              >
                <Github size={20} />
              </a>
            )}
          </div>
        </div>
        
        <p className="text-gray-300 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="border-t border-gray-700 pt-4 mt-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors w-full"
          >
            <span>{isExpanded ? 'Show Less' : 'Learn More'}</span>
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          
          {isExpanded && (
            <div className="mt-4 text-gray-300 space-y-4">
              {fullDescription.split('\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}