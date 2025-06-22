"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import type { GeneratePlanInput } from "@/ai/flows/generate-plan";

const formSchema = z.object({
  topic: z.enum(["Study", "Fitness", "Work", "Life Tasks"], { required_error: "Please select a topic." }),
  tasks: z.string().min(1, "Please enter at least one task."),
  availableTime: z.string().min(1, "Please specify available time."),
  duration: z.enum(["Daily", "Weekly", "Monthly", "Yearly"], { required_error: "Please select a duration." }),
  goals: z.string().optional(),
});

interface PlanFormProps {
  onGenerate: (data: GeneratePlanInput) => void;
  isLoading: boolean;
}

export function PlanForm({ onGenerate, isLoading }: PlanFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tasks: "",
      availableTime: "",
      goals: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    onGenerate(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="topic"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Planning Topic</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Study">Study</SelectItem>
                    <SelectItem value="Fitness">Fitness</SelectItem>
                    <SelectItem value="Work">Work</SelectItem>
                    <SelectItem value="Life Tasks">Life Tasks</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="duration"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Duration</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a duration" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Daily">Daily</SelectItem>
                    <SelectItem value="Weekly">Weekly</SelectItem>
                    <SelectItem value="Monthly">Monthly</SelectItem>
                    <SelectItem value="Yearly">Yearly</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="tasks"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tasks (comma-separated)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="e.g., Read chapter 5, Go for a run, Finish the report"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="availableTime"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Available Time</FormLabel>
              <FormControl>
                <Input placeholder="e.g., 2 hours per day, Weekends" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="goals"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Optional Goals</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="e.g., Score an A on the exam, Run a 5k, Get a promotion"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isLoading} className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            "Generate Plan"
          )}
        </Button>
      </form>
    </Form>
  );
}
