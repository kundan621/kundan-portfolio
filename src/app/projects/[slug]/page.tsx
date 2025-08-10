import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProjectDetail from '@/components/ProjectDetail';
import { projects } from '@/data/projects';
import { personalInfo } from '@/data/personal';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.id === params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} - ${personalInfo.name}`,
    description: project.description,
    keywords: [...project.technologies, 'project', 'software development'],
  };
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.id === params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
