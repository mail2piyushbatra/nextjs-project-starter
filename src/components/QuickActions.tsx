"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface QuickAction {
  id: string;
  title: string;
  description: string;
  category: string;
  status: "active" | "beta" | "new";
  mockResponse: string;
}

export default function QuickActions() {
  const [selectedAction, setSelectedAction] = useState<QuickAction | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<string>("");

  const quickActions: QuickAction[] = [
    {
      id: "trick-generator",
      title: "Trick Generator",
      description: "Generate memory tricks and shortcuts for complex topics",
      category: "AI Tools",
      status: "active",
      mockResponse: "🧠 Memory Trick Generated!\n\nFor remembering the order of electromagnetic spectrum:\n'Radio Waves Make Infrared Visible Under X-ray Gamma'\n\nR - Radio waves\nM - Microwaves\nI - Infrared\nV - Visible light\nU - Ultraviolet\nX - X-rays\nG - Gamma rays\n\nThis mnemonic helps you remember the increasing frequency order!"
    },
    {
      id: "solution-generator",
      title: "Solution Generator",
      description: "Get step-by-step solutions for complex problems",
      category: "AI Tools",
      status: "active",
      mockResponse: "📝 Solution Generated!\n\nProblem: Find the derivative of f(x) = x³ + 2x² - 5x + 3\n\nStep-by-step solution:\n1. Apply power rule to each term\n2. d/dx(x³) = 3x²\n3. d/dx(2x²) = 4x\n4. d/dx(-5x) = -5\n5. d/dx(3) = 0\n\nFinal Answer: f'(x) = 3x² + 4x - 5"
    },
    {
      id: "college-predictor",
      title: "College Predictor",
      description: "Predict college admissions based on your performance",
      category: "Career Guidance",
      status: "active",
      mockResponse: "🎯 College Prediction Results!\n\nBased on your mock scores:\n\n🟢 High Probability (80-95%):\n• IIT Delhi - Computer Science\n• IIT Bombay - Electrical Engineering\n• BITS Pilani - Electronics\n\n🟡 Moderate Probability (50-79%):\n• IIT Kanpur - Mechanical\n• NIT Trichy - Computer Science\n\n🔴 Reach Colleges (20-49%):\n• IIT Madras - Aerospace\n• IIIT Hyderabad - CSE"
    },
    {
      id: "test-creator",
      title: "Test Creator",
      description: "Create custom tests and practice papers",
      category: "Assessment",
      status: "beta",
      mockResponse: "📋 Custom Test Created!\n\nTest Details:\n• Subject: Physics - Mechanics\n• Questions: 25 MCQs\n• Duration: 60 minutes\n• Difficulty: Mixed (Easy: 8, Medium: 12, Hard: 5)\n\nTopics Covered:\n✓ Newton's Laws of Motion\n✓ Work, Energy & Power\n✓ Rotational Motion\n✓ Gravitation\n\nTest ID: TEST_PHY_001\nAccess Code: MECH2024"
    },
    {
      id: "notes-generator",
      title: "Notes Generator",
      description: "Generate comprehensive study notes from topics",
      category: "Study Material",
      status: "new",
      mockResponse: "📚 Study Notes Generated!\n\nTopic: Photosynthesis\n\n🌱 Key Points:\n• Light-dependent reactions occur in thylakoids\n• Calvin cycle happens in stroma\n• Overall equation: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂\n\n🔬 Important Concepts:\n• Chlorophyll a & b absorption spectra\n• ATP and NADPH production\n• Carbon fixation process\n\n💡 Memory Tips:\n'Light Reactions Light up Thylakoids'\n'Calvin Cycles in Stroma Storage'"
    },
    {
      id: "voice-qa",
      title: "Voice Q&A",
      description: "Ask questions using voice and get instant answers",
      category: "AI Assistant",
      status: "beta",
      mockResponse: "🎤 Voice Query Processed!\n\nYour Question: 'Explain the concept of entropy in thermodynamics'\n\n🔊 AI Response:\nEntropy is a measure of disorder or randomness in a system. In thermodynamics:\n\n• It always increases in isolated systems (2nd Law)\n• Represents energy unavailable for work\n• Measured in J/K (Joules per Kelvin)\n• Formula: ΔS = Q/T (for reversible processes)\n\nExample: Ice melting increases entropy as ordered crystal structure becomes disordered liquid."
    }
  ];

  const handleActionClick = async (action: QuickAction) => {
    setSelectedAction(action);
    setIsProcessing(true);
    setResult("");

    // Simulate AI processing delay
    setTimeout(() => {
      setResult(action.mockResponse);
      setIsProcessing(false);
    }, 2000);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "beta":
        return <Badge variant="secondary" className="text-xs">Beta</Badge>;
      case "new":
        return <Badge variant="default" className="text-xs">New</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-xl">Quick Actions</h3>
        <p className="text-sm text-muted-foreground">AI-powered tools at your fingertips</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {quickActions.map((action) => (
          <Dialog key={action.id}>
            <DialogTrigger asChild>
              <Card className="cursor-pointer hover:shadow-md transition-all duration-300 hover:scale-105">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base font-semibold">
                      {action.title}
                    </CardTitle>
                    {getStatusBadge(action.status)}
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-3">
                    {action.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {action.category}
                    </Badge>
                    <Button 
                      size="sm" 
                      onClick={() => handleActionClick(action)}
                      className="text-xs"
                    >
                      Launch
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </DialogTrigger>
            
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  {selectedAction?.title}
                  {selectedAction && getStatusBadge(selectedAction.status)}
                </DialogTitle>
                <DialogDescription>
                  {selectedAction?.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-4">
                {isProcessing ? (
                  <div className="flex items-center justify-center py-8">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
                        <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce delay-75"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce delay-150"></div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        AI is processing your request...
                      </p>
                    </div>
                  </div>
                ) : result ? (
                  <div className="bg-muted/50 rounded-lg p-4">
                    <pre className="whitespace-pre-wrap text-sm font-mono">
                      {result}
                    </pre>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">
                      Click "Launch" to start using this AI tool
                    </p>
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
