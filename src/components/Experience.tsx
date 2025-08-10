"use client";

import { motion } from 'framer-motion';
import { Building, Calendar, MapPin, Award } from 'lucide-react';
import { experiences, education } from '@/data/experience';

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-0.5"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-3 md:left-1/2 w-3 h-3 bg-primary rounded-full transform md:-translate-x-1.5 z-10">
                <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-25"></div>
              </div>

              {/* Content */}
              <div className="ml-10 md:ml-0">
                <div className="bg-background border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-1">{exp.position}</h3>
                    <div className="flex items-center space-x-2 text-primary font-medium">
                      <Building size={16} />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-1">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4">{exp.description}</p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="font-semibold mb-3 flex items-center space-x-2">
                      <Award size={16} />
                      <span>Key Achievements</span>
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">Education</h3>
          <div className="max-w-2xl mx-auto">
            <div className="bg-background border border-border rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h4 className="text-lg font-bold">{education.degree}</h4>
                  <p className="text-primary font-medium">{education.field}</p>
                  <p className="text-muted-foreground">{education.institution}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">{education.period}</div>
                  <div className="text-lg font-bold text-primary">CGPA: {education.gpa}</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
