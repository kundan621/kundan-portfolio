import { Metadata } from 'next';
import ResumeView from '@/components/ResumeView';
import { personalInfo } from '@/data/personal';

export const metadata: Metadata = {
  title: `Resume - ${personalInfo.name}`,
  description: `Professional resume of ${personalInfo.name}, ${personalInfo.title} with 7+ years of experience in software development.`,
};

export default function ResumePage() {
  return (
    <div className="min-h-screen pt-20">
      <ResumeView />
    </div>
  );
}
