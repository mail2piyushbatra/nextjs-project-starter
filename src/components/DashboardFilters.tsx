"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function DashboardFilters() {
  const [exam, setExam] = useState("CBSE");
  const [classLevel, setClassLevel] = useState("All");

  const examOptions = [
    { value: "CBSE", label: "CBSE" },
    { value: "NEET", label: "NEET" },
    { value: "JEE", label: "JEE" },
    { value: "CUET", label: "CUET" },
  ];

  const classOptions = [
    { value: "All", label: "All Classes" },
    { value: "11", label: "Class 11" },
    { value: "12", label: "Class 12" },
  ];

  return (
    <Card className="mb-6">
      <CardContent className="p-4">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <h3 className="font-semibold text-lg">Dashboard Filters</h3>
          <div className="flex flex-col sm:flex-row gap-4 flex-1">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-muted-foreground">
                Exam Type
              </label>
              <Select value={exam} onValueChange={setExam}>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Select exam" />
                </SelectTrigger>
                <SelectContent>
                  {examOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-muted-foreground">
                Class Level
              </label>
              <Select value={classLevel} onValueChange={setClassLevel}>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Select class" />
                </SelectTrigger>
                <SelectContent>
                  {classOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="text-sm text-muted-foreground">
            Showing content for <span className="font-medium">{exam}</span> - <span className="font-medium">{classLevel}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
