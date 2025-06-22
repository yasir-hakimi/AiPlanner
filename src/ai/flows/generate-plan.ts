'use server';

/**
 * @fileOverview AI-powered plan generator flow.
 *
 * - generatePlan - A function that generates a motivational, well-structured plan based on user inputs.
 * - GeneratePlanInput - The input type for the generatePlan function.
 * - GeneratePlanOutput - The return type for the generatePlan function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePlanInputSchema = z.object({
  topic: z.string().describe('The topic of the plan (e.g., Study, Fitness, Work, Life Tasks).'),
  tasks: z.string().describe('A list of tasks to be included in the plan, separated by commas.'),
  availableTime: z.string().describe('The amount of time available for the plan (e.g., 2 hours per day).'),
  duration: z.string().describe('The duration of the plan (Daily/Weekly/Monthly/Yearly).'),
  goals: z.string().optional().describe('Optional goals to be achieved with the plan.'),
});
export type GeneratePlanInput = z.infer<typeof GeneratePlanInputSchema>;

const GeneratePlanOutputSchema = z.object({
  plan: z.string().describe('A motivational and well-structured plan.'),
});
export type GeneratePlanOutput = z.infer<typeof GeneratePlanOutputSchema>;

export async function generatePlan(input: GeneratePlanInput): Promise<GeneratePlanOutput> {
  return generatePlanFlow(input);
}

const generatePlanPrompt = ai.definePrompt({
  name: 'generatePlanPrompt',
  input: {schema: GeneratePlanInputSchema},
  output: {schema: GeneratePlanOutputSchema},
  prompt: `You are an AI assistant specialized in generating motivational and well-structured plans.

  Based on the following information, create a plan:

  Topic: {{{topic}}}
  Tasks: {{{tasks}}}
  Available Time: {{{availableTime}}}
  Duration: {{{duration}}}
  Goals: {{{goals}}}

  The plan should be well-structured and include:
  - A clear schedule with time slots.
  - Specific tasks for each time slot.
  - Motivational tips and encouragement.
  - Use emojis (📅, ☀️, 🌤️, 🌙, ⏰, 💡) to enhance the plan's structure and readability.
  `,
});

const generatePlanFlow = ai.defineFlow(
  {
    name: 'generatePlanFlow',
    inputSchema: GeneratePlanInputSchema,
    outputSchema: GeneratePlanOutputSchema,
  },
  async input => {
    const {output} = await generatePlanPrompt(input);
    return output!;
  }
);
