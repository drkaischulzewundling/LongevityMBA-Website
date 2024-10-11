import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">About LongevityMBA</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="mb-4">
            LongevityMBA is dedicated to bringing you the latest and most actionable insights from the world of longevity and health science research. Our mission is to make complex scientific findings accessible and practical for everyone interested in optimizing their health and extending their lifespan.
          </p>
          <p className="mb-4">
            Founded by a team of scientists, health professionals, and tech enthusiasts, LongevityMBA bridges the gap between cutting-edge research and everyday life. We believe that everyone should have access to the most current and reliable information about health and longevity.
          </p>
          <p>
            Our team carefully curates and summarizes research from top universities and institutions worldwide, ensuring that you receive only the most credible and impactful information. We transform dense scientific papers into concise, easy-to-understand insights that you can apply to your daily life.
          </p>
        </div>
        <div className="relative h-64 md:h-auto">
          <Image
            src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Scientific research"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Providing accurate, up-to-date information from reputable sources</li>
          <li>Making complex scientific concepts accessible to everyone</li>
          <li>Offering practical, actionable advice based on the latest research</li>
          <li>Maintaining the highest standards of integrity and transparency</li>
          <li>Continuously updating our knowledge base as new research emerges</li>
        </ul>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
        <p>
          By subscribing to LongevityMBA, you're not just gaining access to valuable information – you're joining a community of like-minded individuals committed to living longer, healthier lives. Together, we can unlock the secrets of longevity and make informed decisions about our health and well-being.
        </p>
      </div>
    </div>
  );
}