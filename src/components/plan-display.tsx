import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

interface PlanDisplayProps {
  plan: string;
}

export function PlanDisplay({ plan }: PlanDisplayProps) {
  return (
    <Card className="shadow-lg animate-in fade-in-50 duration-500">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline">
          <Sparkles className="text-accent" />
          Your Personalized Plan
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="whitespace-pre-wrap font-body text-card-foreground leading-relaxed">
          {plan}
        </p>
      </CardContent>
    </Card>
  );
}
