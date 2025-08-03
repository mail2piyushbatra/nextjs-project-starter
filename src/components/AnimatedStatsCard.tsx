 "use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatItem {
  id: string;
  title: string;
  value: number;
  suffix?: string;
  description: string;
  color: string;
}

export default function AnimatedStatsCard() {
  const [animatedValues, setAnimatedValues] = useState<Record<string, number>>({});

  const statsData: StatItem[] = [
    {
      id: "students",
      title: "Active Students",
      value: 2847,
      description: "Students actively learning",
      color: "text-blue-600",
    },
    {
      id: "tests",
      title: "Tests Completed",
      value: 15632,
      description: "Total assessments taken",
      color: "text-green-600",
    },
    {
      id: "questions",
      title: "Questions Solved",
      value: 89456,
      description: "Problems tackled successfully",
      color: "text-purple-600",
    },
    {
      id: "accuracy",
      title: "Average Accuracy",
      value: 87,
      suffix: "%",
      description: "Overall performance rate",
      color: "text-orange-600",
    },
  ];

  useEffect(() => {
    const animateValue = (stat: StatItem) => {
      let start = 0;
      const end = stat.value;
      const duration = 2000; // 2 seconds
      const increment = end / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setAnimatedValues(prev => ({
          ...prev,
          [stat.id]: Math.floor(start)
        }));
      }, 16);

      return timer;
    };

    const timers = statsData.map(stat => animateValue(stat));

    return () => {
      timers.forEach(timer => clearInterval(timer));
    };
  }, []);

  return (
    <div className="space-y-4 mb-6">
      <h3 className="font-semibold text-xl">Platform Statistics</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {statsData.map((stat) => (
          <Card key={stat.id} className="hover:shadow-md transition-shadow duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-baseline space-x-2">
                <span className={`text-3xl font-bold ${stat.color}`}>
                  {animatedValues[stat.id] || 0}
                </span>
                {stat.suffix && (
                  <span className={`text-xl font-semibold ${stat.color}`}>
                    {stat.suffix}
                  </span>
                )}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-dashed">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-sm">AI-Powered Insights</h4>
              <p className="text-xs text-muted-foreground">
                Your learning analytics are being processed
              </p>
            </div>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-75"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-150"></div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
