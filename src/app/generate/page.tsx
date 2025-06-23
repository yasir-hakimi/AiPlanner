"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlanForm } from "@/components/plan-form";
import { PlanDisplay } from "@/components/plan-display";
import { LoadingSpinner } from "@/components/loading-spinner";
import { ThemeToggle } from "@/components/theme-toggle";
import { generatePlan, type GeneratePlanInput } from "@/ai/flows/generate-plan";
import { useToast } from "@/hooks/use-toast";

export default function GeneratePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [plan, setPlan] = useState<string | null>(null);
  const { toast } = useToast();

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
            <PlanForm onGenerate={handleGeneratePlan} isLoading={isLoading} />
          </CardContent>
        </Card>
        {isLoading && <LoadingSpinner />}
        {plan && <PlanDisplay plan={plan} />}
      </main>
    </div>
  );
}
