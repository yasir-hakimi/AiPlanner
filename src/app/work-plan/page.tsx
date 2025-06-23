import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { BrainCircuit, Lightbulb, Rocket } from 'lucide-react';

const workPlan = [
  { day: 'Monday', time: '☀️ Morning', activity: 'Deep Work: Project A - Phase 1 (90 mins)' },
  { day: '', time: '🌤️ Afternoon', activity: 'Respond to High-Priority Emails (60 mins) & Team Sync' },
  { day: '', time: '🌙 Evening', activity: 'Plan Tuesday & Disconnect' },
  { day: 'Tuesday', time: '☀️ Morning', activity: 'Deep Work: Project B - Research (90 mins)' },
  { day: '', time: '🌤️ Afternoon', activity: 'Client Call (60 mins) & Follow-ups' },
  { day: '', time: '🌙 Evening', activity: 'Professional Development: Read industry blog (45 mins)' },
  { day: 'Wednesday', time: '☀️ Morning', activity: 'Review Project A Progress & Block for focused work (120 mins)' },
  { day: '', time: '🌤️ Afternoon', activity: 'Inbox Zero & Administrative Tasks (60 mins)' },
  { day: '', time: '🌙 Evening', activity: 'Networking or Relax' },
  { day: 'Thursday', time: '☀️ Morning', activity: 'Deep Work: Project B - Outline (90 mins)' },
  { day: '', time: '🌤️ Afternoon', activity: 'Cross-functional Meeting (60 mins) & Prep for Friday' },
  { day: '', time: '🌙 Evening', activity: 'Review weekly goals' },
  { day: 'Friday', time: '☀️ Morning', activity: 'Wrap-up loose ends & Finalize Project A deliverables (120 mins)' },
  { day: '', time: '🌤️ Afternoon', activity: 'Weekly review & plan for next week' },
  { day: '', time: '🌙 Evening', activity: 'Celebrate wins & relax' },
];

export default function WorkPlanPage() {
    const params = new URLSearchParams();
    params.set('topic', 'Work');
    params.set('tasks', 'Deep work on Project A, Respond to emails, Team meeting, Plan next day\'s tasks, Professional development');
    params.set('duration', 'Weekly');
    params.set('availableTime', '8 hours/day');
    params.set('goals', 'Finish Project A, Clear inbox daily, Improve team collaboration');
    const customizeHref = `/generate?${params.toString()}`;

  return (
    <div className="min-h-screen bg-[#111] text-white font-body">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            <BrainCircuit className="inline-block w-10 h-10 mr-4 text-accent" />
            Work Plan: Boost Your Productivity
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Organize your work for maximum impact and efficiency.
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
                    {workPlan.map((item, index) => (
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
                  <li className="flex items-start">💡<span className="ml-2">Prioritize your top 3 tasks for the day (MITs).</span></li>
                  <li className="flex items-start">💡<span className="ml-2">Block out focus time on your calendar to avoid interruptions.</span></li>
                  <li className="flex items-start">💡<span className="ml-2">Take short breaks to recharge and maintain focus.</span></li>
                  <li className="flex items-start">💡<span className="ml-2">End your day by planning the next one for a smooth start.</span></li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#1C1C1C] border-gray-800 shadow-lg flex flex-col justify-center items-center p-6">
              <blockquote className="text-center">
                <Rocket className="w-12 h-12 mx-auto mb-4 text-accent" />
                <p className="text-2xl font-bold text-white italic">
                  “The key is not to prioritize what's on your schedule, but to schedule your priorities.”
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
