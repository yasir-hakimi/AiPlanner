import { Loader2 } from "lucide-react";

export function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center py-8">
      <Loader2 className="h-12 w-12 animate-spin text-primary" />
    </div>
  );
}
