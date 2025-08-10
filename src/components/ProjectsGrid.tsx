"use client";

import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowLeft, Calendar, Tag } from 'lucide-react';
import Link from 'next/link';
import { projects } from '@/data/projects';

const ProjectsGrid = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4">All Projects</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          A comprehensive showcase of my software development projects, ranging from enterprise-scale 
          applications to innovative side projects and open-source contributions.
        </p>
      </motion.div>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8 flex items-center space-x-2">
            <span>Featured Projects</span>
            <div className="w-8 h-0.5 bg-primary"></div>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-background border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Project Image Placeholder */}
                <div className="h-48 bg-muted border-b border-border flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl font-bold text-primary">
                        {project.title.split(' ').map(word => word[0]).join('')}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">Project Screenshot</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-primary font-medium flex items-center space-x-1">
                        <Tag size={14} />
                        <span>{project.category}</span>
                      </span>
                    </div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>

                  <p className="text-muted-foreground mb-4 text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 text-xs text-muted-foreground">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-2">
                    <Link
                      href={`/projects/${project.id}`}
                      className="flex-1 text-center bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm hover:bg-primary/90 transition-colors"
                    >
                      View Details
                    </Link>
                    
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border border-border rounded-lg hover:bg-muted transition-colors"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border border-border rounded-lg hover:bg-muted transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      {/* All Projects */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold mb-8 flex items-center space-x-2">
          <span>All Projects</span>
          <div className="w-8 h-0.5 bg-primary"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
              className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-primary font-medium flex items-center space-x-1">
                      <Tag size={12} />
                      <span>{project.category}</span>
                    </span>
                    {project.featured && (
                      <span className="text-xs bg-amber-100 dark:bg-amber-900/20 text-amber-800 dark:text-amber-300 px-2 py-1 rounded">
                        Featured
                      </span>
                    )}
                  </div>
                  <h4 className="text-lg font-bold">{project.title}</h4>
                </div>
                
                <p className="text-sm text-muted-foreground">{project.description}</p>

                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs text-muted-foreground">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex space-x-2">
                  <Link
                    href={`/projects/${project.id}`}
                    className="flex-1 text-center bg-primary text-primary-foreground px-3 py-2 rounded text-sm hover:bg-primary/90 transition-colors"
                  >
                    Details
                  </Link>
                  
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-border rounded hover:bg-muted transition-colors"
                    >
                      <Github size={16} />
                    </a>
                  )}
                  
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-border rounded hover:bg-muted transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default ProjectsGrid;
