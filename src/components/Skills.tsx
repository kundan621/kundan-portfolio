"use client";

import { motion } from 'framer-motion';
import { Code, Database, Cloud, Settings, Cpu, Globe } from 'lucide-react';
import { skills, techStack } from '@/data/skills';

const Skills = () => {
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'frontend':
        return <Globe className="w-6 h-6" />;
      case 'backend':
        return <Cpu className="w-6 h-6" />;
      case 'database':
        return <Database className="w-6 h-6" />;
      case 'messaging & cloud':
        return <Cloud className="w-6 h-6" />;
      case 'tools & others':
        return <Settings className="w-6 h-6" />;
      default:
        return <Code className="w-6 h-6" />;
    }
  };

  const getSkillLevel = (skill: string) => {
    if (techStack.primary.includes(skill)) return 95;
    if (techStack.secondary.includes(skill)) return 85;
    if (techStack.learning.includes(skill)) return 70;
    return 80;
  };

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to build exceptional software solutions.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-primary">
                  {getCategoryIcon(category.category)}
                </div>
                <h3 className="text-lg font-semibold">{category.category}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm font-medium">{skill}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${getSkillLevel(skill)}%` }}
                          transition={{ duration: 1, delay: (index * 0.1) + (skillIndex * 0.05) }}
                          viewport={{ once: true }}
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        />
                      </div>
                      <span className="text-xs text-muted-foreground w-8">
                        {getSkillLevel(skill)}%
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-background border border-border rounded-lg p-8"
        >
          <h3 className="text-xl font-bold text-center mb-8">Technology Stack</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Primary Stack */}
            <div>
              <h4 className="font-semibold mb-4 text-primary">Primary Stack</h4>
              <div className="flex flex-wrap gap-2">
                {techStack.primary.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="px-3 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Secondary Stack */}
            <div>
              <h4 className="font-semibold mb-4 text-muted-foreground">Secondary Stack</h4>
              <div className="flex flex-wrap gap-2">
                {techStack.secondary.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="px-3 py-2 bg-muted text-muted-foreground border border-border rounded-lg text-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Learning */}
            <div>
              <h4 className="font-semibold mb-4 text-amber-600 dark:text-amber-400">Currently Learning</h4>
              <div className="flex flex-wrap gap-2">
                {techStack.learning.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="px-3 py-2 bg-amber-100 dark:bg-amber-900/20 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800 rounded-lg text-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
