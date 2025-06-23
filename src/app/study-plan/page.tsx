import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { BookOpen, Lightbulb, Rocket } from 'lucide-react';

const studyPlan = [
  { day: 'Monday', time: '☀️ Morning', activity: 'Read Chapter 1: Core Concepts (60 mins)' },
  { day: '', time: '🌤️ Afternoon', activity: 'Review Notes & Create Flashcards (90 mins)' },
  { day: '', time: '🌙 Evening', activity: 'Practice Problems from Chapter 1 (60 mins)' },
  { day: 'Tuesday', time: '☀️ Morning', activity: 'Read Chapter 2: Advanced Topics (60 mins)' },
  { day: '', time: '🌤️ Afternoon', activity: 'Group Study Session (90 mins)' },
  { day: '', time: '🌙 Evening', activity: 'Review Chapter 1 Flashcards (30 mins)' },
  { day: 'Wednesday', time: '☀️ Morning', activity: 'Active Recall Practice for Ch 1 & 2 (45 mins)' },
  { day: '', time: '🌤️ Afternoon', activity: 'Work on Assignment (90 mins)' },
  { day: '', time: '🌙 Evening', activity: 'Relax & Read related articles (60 mins)' },
  { day: 'Thursday', time: '☀️ Morning', activity: 'Read Chapter 3: Case Studies (60 mins)' },
  { day: '', time: '🌤️ Afternoon', activity: 'Summarize Chapters 1-3 (90 mins)' },
  { day: '', time: '🌙 Evening', activity: 'Practice Problems from Chapter 2 (60 mins)' },
  { day: 'Friday', time: '☀️ Morning', activity: 'Take a Mock Test (90 mins)' },
  { day: '', time: '🌤️ Afternoon', activity: 'Review Mock Test Results & Identify Weak Areas' },
  { day: '', time: '🌙 Evening', activity: 'Light review & relax' },
  { day: 'Saturday', time: '☀️ Morning', activity: 'Deep Dive into Weak Areas (120 mins)' },
  { day: '', time: '🌤️ Afternoon', activity: 'Rest & Hobbies' },
  { day: '', time: '🌙 Evening', activity: 'Plan for the week ahead' },
  { day: 'Sunday', time: '☀️ Morning', activity: 'Full Rest Day' },
  { day: '', time: '🌤️ Afternoon', activity: 'Light review of all topics (60 mins)' },
  { day: '', time: '🌙 Evening', activity: 'Relax and Unwind' },
];

export default function StudyPlanPage() {
    const params = new URLSearchParams();
    params.set('topic', 'Study');
    params.set('tasks', 'Read textbook, Review notes, Practice problems, Take mock tests, Revise');
    params.set('duration', 'Weekly');
    params.set('availableTime', '3 hours/day');
    params.set('goals', 'Score an A on the exam, Understand core concepts');
    const customizeHref = `/generate?${params.toString()}`;

  return (
    <div className="min-h-screen bg-[#111] text-white font-body">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            <BookOpen className="inline-block w-10 h-10 mr-4 text-accent" />
            Study Plan: Ace Your Exams
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            A structured plan for focused learning and effective revision.
          </p>
        </header>

        <main className="flex flex-col gap-12">
          <Card className="bg-[#1C1C1C] border-gray-800 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">Weekly Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-700 hover:bg-[#2a2a2a]">
                      <TableHead className="w-[120px] text-white font-semibold">Day</TableHead>
                      <TableHead className="w-[150px] text-white font-semibold">Time of Day</TableHead>
                      <TableHead className="text-white font-semibold">Activity</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {studyPlan.map((item, index) => (
                      <TableRow key={index} className="border-gray-800 hover:bg-[#2a2a2a]">
                        <TableCell className="font-medium text-white">{item.day}</TableCell>
                        <TableCell className="text-gray-300">{item.time}</TableCell>
                        <TableCell className="text-gray-300">⏰ {item.activity}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-[#1C1C1C] border-gray-800 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white flex items-center">
                  <Lightbulb className="w-6 h-6 mr-3 text-accent" />
                  Tips for Success
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">💡<span className="ml-2">Use the Pomodoro Technique for focused 25-minute intervals.</span></li>
                  <li className="flex items-start">💡<span className="ml-2">Explain concepts to someone else to test your understanding.</span></li>
                  <li className="flex items-start">💡<span className="ml-2">Stay organized and keep your study space tidy.</span></li>
                  <li className="flex items-start">💡<span className="ml-2">Get enough sleep; it's crucial for memory consolidation.</span></li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#1C1C1C] border-gray-800 shadow-lg flex flex-col justify-center items-center p-6">
              <blockquote className="text-center">
                <Rocket className="w-12 h-12 mx-auto mb-4 text-accent" />
                <p className="text-2xl font-bold text-white italic">
                  “The expert in anything was once a beginner. Keep learning.”
                </p>
              </blockquote>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 rounded-full px-10 py-7 text-xl font-semibold">
                <Link href={customizeHref}>
                    ✏️ Customize & Make This Plan
                </Link>
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
}
