import Hero from '@/components/Hero';
import InsightsPreview from '@/components/InsightsPreview';
import PlaybooksPreview from '@/components/PlaybooksPreview';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Hero />
      <InsightsPreview />
      <PlaybooksPreview />
    </div>
  );
}