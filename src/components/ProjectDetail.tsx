"use client";

import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar, Tag, Users, Award } from 'lucide-react';
import Link from 'next/link';
import { Project } from '@/data/projects';

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail = ({ project }: ProjectDetailProps) => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to Projects</span>
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex items-center space-x-2 mb-4">
            <Tag size={16} className="text-primary" />
            <span className="text-primary font-medium">{project.category}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {project.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                <ExternalLink size={16} />
                <span>View Live Demo</span>
              </a>
            )}
            
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 border border-border px-6 py-3 rounded-lg hover:bg-muted transition-colors"
              >
                <Github size={16} />
                <span>View Source Code</span>
              </a>
            )}
          </div>
        </motion.div>

        {/* Project Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-muted border border-border rounded-lg p-16 text-center">
            <div className="w-24 h-24 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl font-bold text-primary">
                {project.title.split(' ').map(word => word[0]).join('')}
              </span>
            </div>
            <p className="text-muted-foreground">Project Screenshot / Demo</p>
            <p className="text-sm text-muted-foreground mt-2">
              Add your project screenshots to showcase the interface and functionality
            </p>
          </div>
        </motion.div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {project.longDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </section>

            {/* Key Features */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Modern, responsive design",
                  "Scalable architecture",
                  "Performance optimized",
                  "Security focused",
                  "Cross-platform compatibility",
                  "Real-time functionality"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Challenges & Solutions */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Challenges & Solutions</h2>
              <div className="space-y-6">
                <div className="bg-background border border-border rounded-lg p-6">
                  <h3 className="font-semibold mb-2 flex items-center space-x-2">
                    <Award size={16} className="text-amber-500" />
                    <span>Technical Challenge</span>
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Describe the main technical challenges faced during development and how they were overcome.
                  </p>
                </div>
                
                <div className="bg-background border border-border rounded-lg p-6">
                  <h3 className="font-semibold mb-2 flex items-center space-x-2">
                    <Users size={16} className="text-blue-500" />
                    <span>Team Collaboration</span>
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Highlight collaboration aspects, code reviews, and team coordination strategies used.
                  </p>
                </div>
              </div>
            </section>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Technologies */}
            <section className="bg-background border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Project Info */}
            <section className="bg-background border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-4">Project Information</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-sm text-muted-foreground">Category</span>
                  <p className="font-medium">{project.category}</p>
                </div>
                
                <div>
                  <span className="text-sm text-muted-foreground">Status</span>
                  <p className="font-medium">
                    {project.featured ? 'Featured Project' : 'Completed'}
                  </p>
                </div>
                
                {project.githubUrl && (
                  <div>
                    <span className="text-sm text-muted-foreground">Repository</span>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      View on GitHub
                    </a>
                  </div>
                )}
                
                {project.liveUrl && (
                  <div>
                    <span className="text-sm text-muted-foreground">Live Demo</span>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      Visit Website
                    </a>
                  </div>
                )}
              </div>
            </section>

            {/* Related Projects */}
            <section className="bg-background border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-4">More Projects</h3>
              <Link
                href="/projects"
                className="text-primary hover:text-primary/80 transition-colors text-sm"
              >
                View all projects →
              </Link>
            </section>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
