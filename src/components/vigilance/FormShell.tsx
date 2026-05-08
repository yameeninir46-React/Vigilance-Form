import { Shield, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useVigilanceForm } from "@/context/VigilanceFormContext";

const STEP_TITLES: Record<number, string> = {
  1: "Basic Information & Consumer Details",
  2: "Officer Details",
  3: "Site Inspection Report (SIR)",
  4: "Document Attachments",
  5: "BP Checked & Detected",
  6: "Offence / Irregularity Details",
  7: "Provisional Billing",
  8: "Final Billing",
  9: "Assessment of Loss",
  10: "Consumer Statement",
  11: "Payment & EMI Details",
  12: "Billing Timeline & Summary",
};

export const FormShell = ({ children }: { children: React.ReactNode }) => {
  const { currentStep, setCurrentStep, totalSteps } = useVigilanceForm();
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-background p-4 md:p-8 antialiased font-mono flex items-start justify-center">
      <Card className="w-full max-w-4xl shadow-md border-border">
        <CardHeader className="text-center space-y-3 pb-2">
          <div className="flex items-center justify-center gap-3">
            <Shield className="h-8 w-8 text-primary" />
            <CardTitle className="text-xl md:text-2xl font-bold tracking-tight text-foreground uppercase">
              Daily Vigilance Checking Report
            </CardTitle>
          </div>
          <p className="text-sm text-muted-foreground">सत्यमेव जयते</p>

          {/* Progress */}
          <div className="space-y-2 pt-2">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Page {currentStep} of {totalSteps}</span>
              <span>{STEP_TITLES[currentStep]}</span>
            </div>
            <Progress value={progress} className="h-2" />
            {/* Step dots */}
            <div className="flex justify-between px-1 pt-1">
              {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
                <button
                  key={step}
                  onClick={() => setCurrentStep(step)}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${
                    step === currentStep
                      ? "bg-primary scale-125"
                      : step < currentStep
                      ? "bg-primary/60"
                      : "bg-muted-foreground/30"
                  }`}
                  title={`Page ${step}: ${STEP_TITLES[step]}`}
                />
              ))}
            </div>
          </div>
          <div className="h-px bg-border w-full" />
        </CardHeader>

        <CardContent>
          <div className="space-y-8">
            {children}

            {/* Navigation */}
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <Button
                type="button"
                variant="outline"
                onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                disabled={currentStep === 1}
                className="gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
              <span className="text-sm text-muted-foreground font-semibold">
                P{currentStep}
              </span>
              <Button
                type="button"
                onClick={() => setCurrentStep(Math.min(totalSteps, currentStep + 1))}
                disabled={currentStep === totalSteps}
                className="gap-2 px-8"
              >
                Next
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
