import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dumbbell, Lightbulb, Rocket } from 'lucide-react';

const fitnessPlan = [
  { day: 'Monday', time: '☀️ Morning', activity: 'Warm-up + Stretch (15 mins)' },
  { day: '', time: '🌤️ Afternoon', activity: 'Strength: Upper Body Workout' },
  { day: '', time: '🌙 Evening', activity: 'Light Walk + Protein Dinner' },
  { day: 'Tuesday', time: '☀️ Morning', activity: 'Jogging (30 mins)' },
  { day: '', time: '🌤️ Afternoon', activity: 'Strength: Lower Body Workout' },
  { day: '', time: '🌙 Evening', activity: 'Rest + Sleep Prep Routine' },
  { day: 'Wednesday', time: '☀️ Morning', activity: 'Active Recovery: Yoga (30 mins)' },
  { day: '', time: '🌤️ Afternoon', activity: 'Cardio: Cycling (45 mins)' },
  { day: '', time: '🌙 Evening', activity: 'Meal Prep for next 2 days' },
  { day: 'Thursday', time: '☀️ Morning', activity: 'Warm-up + Stretch (15 mins)' },
  { day: '', time: '🌤️ Afternoon', activity: 'Strength: Full Body Workout' },
  { day: '', time: '🌙 Evening', activity: 'Foam Rolling + Mobility Work' },
  { day: 'Friday', time: '☀️ Morning', activity: 'HIIT (20 mins)' },
  { day: '', time: '🌤️ Afternoon', activity: 'Accessory Lifts + Core' },
  { day: '', time: '🌙 Evening', activity: 'Social Activity / Active Rest' },
  { day: 'Saturday', time: '☀️ Morning', activity: 'Long Walk or Hike (60+ mins)' },
  { day: '', time: '🌤️ Afternoon', activity: 'Rest & Recovery' },
  { day: '', time: '🌙 Evening', activity: 'Healthy Dinner Out' },
  { day: 'Sunday', time: '☀️ Morning', activity: 'Full Rest Day' },
  { day: '', time: '🌤️ Afternoon', activity: 'Plan for the week ahead' },
  { day: '', time: '🌙 Evening', activity: 'Relax and Unwind' },
];

export default function FitnessPlanPage() {
    const params = new URLSearchParams();
    params.set('topic', 'Fitness');
    params.set('tasks', 'Warm-up, Strength, Cardio, Walk, Diet');
    params.set('duration', 'Weekly');
    params.set('availableTime', '2 hours/day');
    params.set('goals', 'Build strength, stay consistent');
    const customizeHref = `/generate?${params.toString()}`;

  return (
    <div className="min-h-screen bg-[#111] text-white font-body">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            <Dumbbell className="inline-block w-10 h-10 mr-4 text-accent" />
            Fitness Plan: Build Strength & Energy
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Designed to help you stay consistent, energized, and disciplined.
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
                    {fitnessPlan.map((item, index) => (
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
                  <li className="flex items-start">💡<span className="ml-2">Stay hydrated during all sessions.</span></li>
                  <li className="flex items-start">💡<span className="ml-2">Track progress weekly to stay motivated.</span></li>
                  <li className="flex items-start">💡<span className="ml-2">Listen to your body and rest when needed.</span></li>
                  <li className="flex items-start">💡<span className="ml-2">Proper nutrition is as important as the workout.</span></li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#1C1C1C] border-gray-800 shadow-lg flex flex-col justify-center items-center p-6">
              <blockquote className="text-center">
                <Rocket className="w-12 h-12 mx-auto mb-4 text-accent" />
                <p className="text-2xl font-bold text-white italic">
                  “Your only limit is your mind. Start small. Stay consistent. Results will follow.”
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
