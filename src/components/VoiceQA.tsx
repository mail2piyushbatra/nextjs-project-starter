"use client";

import React, { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface VoiceSession {
  id: string;
  question: string;
  answer: string;
  timestamp: string;
  method: "voice" | "text";
}

export default function VoiceQA() {
  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [sessions, setSessions] = useState<VoiceSession[]>([]);
  const [currentResponse, setCurrentResponse] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Mock AI responses for different subjects
  const mockResponses = {
    physics: "🔬 Physics Explanation:\n\nThis concept relates to fundamental principles of motion and energy. The key points to remember are:\n\n• Newton's laws govern the motion\n• Energy conservation applies throughout\n• Mathematical relationships can be derived\n\nFor better understanding, try visualizing the problem step by step.",
    
    chemistry: "⚗️ Chemistry Solution:\n\nThis involves chemical bonding and molecular interactions. Here's the breakdown:\n\n• Electron configuration determines properties\n• Periodic trends explain the behavior\n• Reaction mechanisms follow specific pathways\n\nRemember to balance equations and consider thermodynamics.",
    
    biology: "🧬 Biology Concept:\n\nThis biological process involves complex cellular mechanisms:\n\n• Cellular structures have specific functions\n• Metabolic pathways are interconnected\n• Genetic factors influence outcomes\n\nConnect this to real-world examples for better retention.",
    
    mathematics: "📐 Mathematical Solution:\n\nLet's solve this step by step:\n\n• Identify the given information\n• Apply relevant formulas and theorems\n• Simplify expressions systematically\n• Verify the final answer\n\nPractice similar problems to master the concept.",
    
    general: "🤖 AI Assistant Response:\n\nBased on your question, here's a comprehensive explanation:\n\n• Key concepts are interconnected\n• Multiple approaches can be used\n• Practice reinforces understanding\n\nFeel free to ask follow-up questions for clarification!"
  };

  const simulateVoiceRecognition = () => {
    setIsListening(true);
    
    // Simulate voice recognition delay
    setTimeout(() => {
      const sampleQuestions = [
        "Explain the concept of entropy in thermodynamics",
        "How does photosynthesis work in plants?",
        "What is the derivative of x squared plus 2x?",
        "Describe the structure of an atom",
        "How do I solve quadratic equations?"
      ];
      
      const randomQuestion = sampleQuestions[Math.floor(Math.random() * sampleQuestions.length)];
      setInput(randomQuestion);
      setIsListening(false);
      
      if (textareaRef.current) {
        textareaRef.current.focus();
      }
    }, 2000);
  };

  const handleSubmitQuestion = async (method: "voice" | "text" = "text") => {
    if (!input.trim()) return;

    setIsProcessing(true);
    setCurrentResponse("");

    // Determine response type based on question content
    let responseType = "general";
    const question = input.toLowerCase();
    
    if (question.includes("physics") || question.includes("force") || question.includes("energy") || question.includes("motion")) {
      responseType = "physics";
    } else if (question.includes("chemistry") || question.includes("reaction") || question.includes("molecule") || question.includes("atom")) {
      responseType = "chemistry";
    } else if (question.includes("biology") || question.includes("cell") || question.includes("photosynthesis") || question.includes("dna")) {
      responseType = "biology";
    } else if (question.includes("math") || question.includes("equation") || question.includes("derivative") || question.includes("integral")) {
      responseType = "mathematics";
    }

    // Simulate AI processing delay
    setTimeout(() => {
      const response = mockResponses[responseType as keyof typeof mockResponses];
      setCurrentResponse(response);
      
      const newSession: VoiceSession = {
        id: Date.now().toString(),
        question: input,
        answer: response,
        timestamp: new Date().toLocaleTimeString(),
        method: method
      };
      
      setSessions(prev => [newSession, ...prev]);
      setInput("");
      setIsProcessing(false);
    }, 2500);
  };

  const clearSessions = () => {
    setSessions([]);
    setCurrentResponse("");
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold">Voice Q&A Assistant</CardTitle>
          <Badge variant="secondary" className="text-xs">
            🎤 AI-Powered
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">
          Ask questions using voice or text and get instant AI-powered explanations
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        <Tabs defaultValue="ask" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="ask">Ask Question</TabsTrigger>
            <TabsTrigger value="history">History ({sessions.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="ask" className="space-y-4">
            <div className="space-y-3">
              <Textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question here or use voice input..."
                className="min-h-[100px] resize-none"
                disabled={isListening || isProcessing}
              />
              
              <div className="flex flex-col sm:flex-row gap-2">
                <Button
                  onClick={simulateVoiceRecognition}
                  disabled={isListening || isProcessing}
                  variant="outline"
                  className="flex-1"
                >
                  {isListening ? (
                    <>
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-2"></div>
                      Listening...
                    </>
                  ) : (
                    <>🎤 Voice Input</>
                  )}
                </Button>
                
                <Button
                  onClick={() => handleSubmitQuestion("text")}
                  disabled={!input.trim() || isProcessing}
                  className="flex-1"
                >
                  {isProcessing ? (
                    <>
                      <div className="flex space-x-1 mr-2">
                        <div className="w-1 h-1 bg-white rounded-full animate-bounce"></div>
                        <div className="w-1 h-1 bg-white rounded-full animate-bounce delay-75"></div>
                        <div className="w-1 h-1 bg-white rounded-full animate-bounce delay-150"></div>
                      </div>
                      Processing...
                    </>
                  ) : (
                    "Ask Question"
                  )}
                </Button>
              </div>
            </div>

            {currentResponse && (
              <div className="mt-4 p-4 bg-muted/50 rounded-lg border">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-sm">AI Response</h4>
                  <Badge variant="outline" className="text-xs">
                    Just now
                  </Badge>
                </div>
                <pre className="whitespace-pre-wrap text-sm font-mono text-foreground">
                  {currentResponse}
                </pre>
              </div>
            )}
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">Question History</h4>
              {sessions.length > 0 && (
                <Button variant="outline" size="sm" onClick={clearSessions}>
                  Clear History
                </Button>
              )}
            </div>

            {sessions.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground text-sm">
                  No questions asked yet. Start by asking your first question!
                </p>
              </div>
            ) : (
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {sessions.map((session) => (
                  <div key={session.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge variant={session.method === "voice" ? "default" : "secondary"} className="text-xs">
                        {session.method === "voice" ? "🎤 Voice" : "💬 Text"}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {session.timestamp}
                      </span>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-sm mb-1">Question:</h5>
                      <p className="text-sm text-muted-foreground">
                        {session.question}
                      </p>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-sm mb-1">Answer:</h5>
                      <pre className="whitespace-pre-wrap text-xs font-mono bg-muted/30 p-2 rounded">
                        {session.answer}
                      </pre>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
