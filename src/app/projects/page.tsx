import { Metadata } from 'next';
import ProjectsGrid from '@/components/ProjectsGrid';
import { personalInfo } from '@/data/personal';

export const metadata: Metadata = {
  title: `Projects - ${personalInfo.name}`,
  description: 'A comprehensive showcase of my software development projects, including full-stack applications, system architectures, and innovative solutions.',
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-20">
      <ProjectsGrid />
    </div>
  );
}
