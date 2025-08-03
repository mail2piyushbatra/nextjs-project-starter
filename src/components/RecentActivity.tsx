"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ActivityItem {
  id: string;
  type: "test" | "trick" | "solution" | "upload" | "prediction" | "note";
  title: string;
  description: string;
  timestamp: string;
  user?: string;
  status: "completed" | "in-progress" | "failed";
}

export default function RecentActivity() {
  const [activities, setActivities] = useState<ActivityItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Mock activity data
  const mockActivities: ActivityItem[] = [
    {
      id: "1",
      type: "test",
      title: "JEE Physics Mock Test",
      description: "Completed mechanics chapter test with 85% accuracy",
      timestamp: "2 minutes ago",
      user: "Student",
      status: "completed"
    },
    {
      id: "2",
      type: "trick",
      title: "Memory Trick Generated",
      description: "Created mnemonic for periodic table elements",
      timestamp: "15 minutes ago",
      user: "AI System",
      status: "completed"
    },
    {
      id: "3",
      type: "solution",
      title: "Calculus Problem Solved",
      description: "Step-by-step solution for integration by parts",
      timestamp: "32 minutes ago",
      user: "Teacher",
      status: "completed"
    },
    {
      id: "4",
      type: "upload",
      title: "Question Bank Updated",
      description: "Added 50 new NEET biology questions",
      timestamp: "1 hour ago",
      user: "Admin",
      status: "completed"
    },
    {
      id: "5",
      type: "prediction",
      title: "College Prediction Analysis",
      description: "Generated admission probability report",
      timestamp: "2 hours ago",
      user: "Student",
      status: "completed"
    },
    {
      id: "6",
      type: "note",
      title: "Study Notes Created",
      description: "Comprehensive notes for organic chemistry",
      timestamp: "3 hours ago",
      user: "AI System",
      status: "in-progress"
    },
    {
      id: "7",
      type: "test",
      title: "CUET Practice Test",
      description: "General awareness section attempted",
      timestamp: "4 hours ago",
      user: "Student",
      status: "failed"
    }
  ];

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setActivities(mockActivities);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "test":
        return "📝";
      case "trick":
        return "🧠";
      case "solution":
        return "💡";
      case "upload":
        return "📤";
      case "prediction":
        return "🎯";
      case "note":
        return "📚";
      default:
        return "📋";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge variant="default" className="text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Completed</Badge>;
      case "in-progress":
        return <Badge variant="secondary" className="text-xs bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">In Progress</Badge>;
      case "failed":
        return <Badge variant="destructive" className="text-xs">Failed</Badge>;
      default:
        return null;
    }
  };

  const refreshActivities = () => {
    setIsLoading(true);
    setTimeout(() => {
      // Simulate new activity
      const newActivity: ActivityItem = {
        id: Date.now().toString(),
        type: "trick",
        title: "New Memory Trick",
        description: "Generated trick for chemical bonding concepts",
        timestamp: "Just now",
        user: "AI System",
        status: "completed"
      };
      setActivities([newActivity, ...activities.slice(0, 6)]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Card className="h-fit">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={refreshActivities}
            disabled={isLoading}
            className="text-xs"
          >
            {isLoading ? "Loading..." : "Refresh"}
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        {isLoading ? (
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-start space-x-3 animate-pulse">
                <div className="w-8 h-8 bg-muted rounded-full"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                  <div className="h-3 bg-muted rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        ) : activities.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground text-sm">No recent activity</p>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={refreshActivities}
              className="mt-2 text-xs"
            >
              Check for Updates
            </Button>
          </div>
        ) : (
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3 pb-3 border-b border-border/50 last:border-b-0">
                <div className="flex-shrink-0 w-8 h-8 bg-muted rounded-full flex items-center justify-center text-sm">
                  {getActivityIcon(activity.type)}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-medium truncate">
                      {activity.title}
                    </h4>
                    {getStatusBadge(activity.status)}
                  </div>
                  
                  <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                    {activity.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{activity.timestamp}</span>
                    {activity.user && (
                      <span className="bg-muted px-2 py-1 rounded">
                        {activity.user}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-4 pt-3 border-t border-border/50">
          <Button variant="ghost" size="sm" className="w-full text-xs">
            View All Activity →
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
