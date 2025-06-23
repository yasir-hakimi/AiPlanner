import Image from 'next/image';

interface SamplePlanCardProps {
  emoji: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
}

export function SamplePlanCard({ emoji, title, description, imageUrl, imageHint }: SamplePlanCardProps) {
  return (
    <div className="bg-[#1C1C1C] rounded-lg overflow-hidden group cursor-pointer border border-transparent hover:border-accent transition-all duration-300">
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          style={{objectFit: 'cover'}}
          className="group-hover:scale-105 transition-transform duration-300"
          data-ai-hint={imageHint}
        />
      </div>
      <div className="p-4 md:p-6">
        <h3 className="text-lg font-bold flex items-center text-white">
          <span className="mr-3 text-xl">{emoji}</span> {title}
        </h3>
        <p className="text-gray-400 mt-2 text-sm">{description}</p>
      </div>
    </div>
  );
}
