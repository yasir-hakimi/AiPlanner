"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlanForm } from "@/components/plan-form";
import { PlanDisplay } from "@/components/plan-display";
import { LoadingSpinner } from "@/components/loading-spinner";
import { ThemeToggle } from "@/components/theme-toggle";
import { generatePlan, type GeneratePlanInput } from "@/ai/flows/generate-plan";
import { useToast } from "@/hooks/use-toast";

function GeneratePageContent() {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [plan, setPlan] = useState<string | null>(null);
  const { toast } = useToast();

  const [defaultValues, setDefaultValues] = useState<Partial<GeneratePlanInput>>({});

  useEffect(() => {
    const topic = searchParams.get("topic") as GeneratePlanInput['topic'] | null;
    const tasks = searchParams.get("tasks");
    const availableTime = searchParams.get("availableTime");
    const duration = searchParams.get("duration") as GeneratePlanInput['duration'] | null;
    const goals = searchParams.get("goals");

    const newDefaultValues: Partial<GeneratePlanInput> = {};
    if (topic) newDefaultValues.topic = topic;
    if (tasks) newDefaultValues.tasks = tasks;
    if (availableTime) newDefaultValues.availableTime = availableTime;
    if (duration) newDefaultValues.duration = duration;
    if (goals) newDefaultValues.goals = goals;
    
    if (Object.keys(newDefaultValues).length > 0) {
      setDefaultValues(newDefaultValues);
    }
  }, [searchParams]);


  const handleGeneratePlan = async (data: GeneratePlanInput) => {
    setIsLoading(true);
    setPlan(null);
    try {
      const result = await generatePlan(data);
      setPlan(result.plan);
    } catch (error) {
      console.error("Failed to generate plan:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to generate plan. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <header className="w-full max-w-4xl flex justify-between items-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary font-headline">
          PlanWise AI
        </h1>
        <ThemeToggle />
      </header>
      <main className="w-full max-w-4xl flex flex-col gap-8">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline">Create Your Plan</CardTitle>
          </CardHeader>
          <CardContent>
            <PlanForm
              key={JSON.stringify(defaultValues)}
              onGenerate={handleGeneratePlan}
              isLoading={isLoading}
              defaultValues={defaultValues}
            />
          </CardContent>
        </Card>
        {isLoading && <LoadingSpinner />}
        {plan && <PlanDisplay plan={plan} />}
      </main>
    </div>
  );
}


export default function GeneratePage() {
  return (
    <Suspense fallback={<div className="flex justify-center items-center min-h-screen"><LoadingSpinner/></div>}>
      <GeneratePageContent />
    </Suspense>
  )
}
