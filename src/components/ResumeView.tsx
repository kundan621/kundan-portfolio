"use client";

import { motion } from 'framer-motion';
import { Download, ArrowLeft, Mail, Phone, MapPin, Github, Linkedin, Youtube, Calendar, Building } from 'lucide-react';
import Link from 'next/link';
import { personalInfo, about } from '@/data/personal';
import { experiences, education, achievements } from '@/data/experience';
import { skills } from '@/data/skills';

const ResumeView = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 flex justify-between items-center"
      >
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Back to Portfolio</span>
        </Link>
        
        <a
          href={personalInfo.resume}
          download
          className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
        >
          <Download size={16} />
          <span>Download PDF</span>
        </a>
      </motion.div>

      {/* Resume Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-background border border-border rounded-lg p-8 md:p-12 space-y-8"
      >
        {/* Header */}
        <header className="text-center border-b border-border pb-8">
          <h1 className="text-4xl font-bold mb-2">{personalInfo.name}</h1>
          <h2 className="text-xl text-primary font-medium mb-4">{personalInfo.title}</h2>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Mail size={14} />
              <span>{personalInfo.email}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Phone size={14} />
              <span>{personalInfo.phone}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin size={14} />
              <span>{personalInfo.location}</span>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4 mt-4">
            <a href={personalInfo.github} className="text-muted-foreground hover:text-foreground">
              <Github size={16} />
            </a>
            <a href={`https://linkedin.com/in/${personalInfo.email.split('@')[0]}`} className="text-muted-foreground hover:text-foreground">
              <Linkedin size={16} />
            </a>
            <a href={`https://youtube.com/@${personalInfo.youtube.toLowerCase()}`} className="text-muted-foreground hover:text-foreground">
              <Youtube size={16} />
            </a>
          </div>
        </header>

        {/* Professional Summary */}
        <section>
          <h3 className="text-xl font-bold mb-4 text-primary">Professional Summary</h3>
          <p className="text-muted-foreground leading-relaxed">{personalInfo.bio}</p>
        </section>

        {/* Experience */}
        <section>
          <h3 className="text-xl font-bold mb-6 text-primary">Professional Experience</h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="border-l-2 border-primary/20 pl-6 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-2 top-1"></div>
                
                <div className="mb-2">
                  <h4 className="text-lg font-semibold">{exp.position}</h4>
                  <div className="flex items-center space-x-2 text-primary font-medium">
                    <Building size={14} />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-1">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-3">{exp.description}</p>
                
                <ul className="space-y-1 mb-3">
                  {exp.achievements.slice(0, 3).map((achievement, achIndex) => (
                    <li key={achIndex} className="text-sm text-muted-foreground flex items-start space-x-2">
                      <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-1">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-muted text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <h3 className="text-xl font-bold mb-6 text-primary">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((category, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-3">{category.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-2 py-1 bg-primary/10 text-primary text-sm rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h3 className="text-xl font-bold mb-4 text-primary">Education</h3>
          <div className="border-l-2 border-primary/20 pl-6 relative">
            <div className="absolute w-3 h-3 bg-primary rounded-full -left-2 top-1"></div>
            <h4 className="text-lg font-semibold">{education.degree}</h4>
            <p className="text-primary font-medium">{education.field}</p>
            <p className="text-muted-foreground">{education.institution}</p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-1">
              <Calendar size={14} />
              <span>{education.period}</span>
              <span>•</span>
              <span>CGPA: {education.gpa}</span>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section>
          <h3 className="text-xl font-bold mb-4 text-primary">Achievements & Awards</h3>
          <div className="space-y-2">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-muted-foreground">{achievement}</span>
              </div>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default ResumeView;
