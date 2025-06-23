"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { SamplePlanCard } from '@/components/sample-plan-card';
import { ArrowUp, Menu } from 'lucide-react';

export default function HomePage() {
  const samplePlans = [
    {
      emoji: '📘',
      title: 'Study Smart',
      description: 'Structured study time for focused, productive blocks.',
      imageUrl: 'https://placehold.co/600x400',
      imageHint: 'student studying',
      href: '/study-plan',
    },
    {
      emoji: '🏋️',
      title: 'Fitness Fuel',
      description: 'Transform your fitness with energizing, strength-building sessions.',
      imageUrl: 'https://placehold.co/600x400',
      imageHint: 'man gym',
      href: '/fitness-plan',
    },
    {
      emoji: '🧠',
      title: 'Work Like a Pro',
      description: 'Organize productive time into clear, impact-focused tasks.',
      imageUrl: 'https://placehold.co/600x400',
      imageHint: 'person working laptop',
      href: '/work-plan',
    },
    {
      emoji: '📘',
      title: 'Academic Ace',
      description: 'A focused plan to excel in your coursework and exams.',
      imageUrl: 'https://placehold.co/600x400',
      imageHint: 'person studying desk',
      href: '/study-plan',
    },
    {
      emoji: '🏋️',
      title: 'Gym Domination',
      description: 'A plan to maximize your gains and energize your workouts.',
      imageUrl: 'https://placehold.co/600x400',
      imageHint: 'gym workout',
      href: '/fitness-plan',
    },
    {
      emoji: '🧠',
      title: 'Productivity Power-Up',
      description: 'Streamline your workflow and achieve your professional goals.',
      imageUrl: 'https://placehold.co/600x400',
      imageHint: 'professional office',
      href: '/work-plan',
    },
  ];

  const AiPlannerIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block mr-2">
      <path d="M12 2.5C12 2.5 6.5 4.49396 6.5 10.5C6.5 16.506 12 21.5 12 21.5C12 21.5 17.5 16.506 17.5 10.5C17.5 4.49396 12 2.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
      <path d="M12 12.5C13.1046 12.5 14 11.6046 14 10.5C14 9.39543 13.1046 8.5 12 8.5C10.8954 8.5 10 9.39543 10 10.5C10 11.6046 10.8954 12.5 12 12.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  );

  const SparkleIcon = () => (
     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
      <path d="M12 4.75L13.9393 10.0607L19.25 12L13.9393 13.9393L12 19.25L10.0607 13.9393L4.75 12L10.0607 10.0607L12 4.75Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  );

  return (
    <div className="bg-[#111] text-white font-body">
      {/* Header */}
      <header className="py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50 bg-[#111]/80 backdrop-blur-sm">
        <Link href="/" className="text-xl font-bold flex items-center">
          <AiPlannerIcon />
          AI PLANNER
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#" className="hover:text-gray-300 transition-colors">Explore</Link>
          <Button asChild className="bg-accent hover:bg-accent/90 rounded-full font-semibold">
            <Link href="/generate">
              <SparkleIcon />
              Try for Free
            </Link>
          </Button>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="w-6 h-6" />
        </Button>
      </header>

      {/* Hero */}
      <main className="text-center pt-20 pb-24 md:pt-32 md:pb-40 px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Plan Smarter</span>
        </h1>
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mt-2">
          Live Better
        </h2>
        <div className="mt-12">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 rounded-full px-8 py-6 text-lg font-semibold">
            <Link href="/generate">
              <SparkleIcon />
              Make a Plan
            </Link>
          </Button>
        </div>
      </main>

      {/* Sample Plans */}
      <section className="py-20 px-6 md:px-12 bg-black/20">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Explore Sample Plans</h2>
          <p className="text-gray-400 mt-2">10+ Templates</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {samplePlans.map((plan, index) => {
              const card = (
                <SamplePlanCard
                  emoji={plan.emoji}
                  title={plan.title}
                  description={plan.description}
                  imageUrl={plan.imageUrl}
                  imageHint={plan.imageHint}
                />
              );
              if (plan.href) {
                return (
                  <Link href={plan.href} key={index} className="no-underline">
                    {card}
                  </Link>
                );
              }
              return <div key={index}>{card}</div>;
            })}
          </div>
          <div className="text-center mt-16">
              <Button variant="outline" className="rounded-full border-gray-600 hover:bg-gray-800 hover:text-white px-6">See More +</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1C1C1C] text-gray-400 py-12 px-6 md:px-12">
        <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold text-white mb-4 text-sm tracking-widest uppercase">INFO</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contacts</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 text-sm tracking-widest uppercase">LANGUAGES</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white transition-colors">ENG</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">ESP</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">SWE</Link></li>
            </ul>
          </div>
          <div className="md:col-span-2">
             <h4 className="font-bold text-white mb-4 text-sm tracking-widest uppercase">Technologies</h4>
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white">Ai PLANNER</span>
              <span className="ml-4 text-sm text-gray-500">Near-field communication</span>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; 2024 AI PLANNER. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white">Privacy</Link>
            <Link href="#" className="hover:text-white">Terms</Link>
          </div>
          <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="mt-8 md:mt-0 w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors">
            <ArrowUp className="w-5 h-5"/>
            <span className="sr-only">Scroll to top</span>
          </button>
        </div>
      </footer>
    </div>
  );
}
