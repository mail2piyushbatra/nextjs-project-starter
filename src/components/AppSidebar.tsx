"use client";

import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";

interface AppSidebarProps {
  role: "admin" | "teacher" | "student";
}

export function AppSidebar({ role }: AppSidebarProps) {
  const powerToolsItems = [
    { title: "PYQs (Past Year Questions)", url: "/pyqs" },
    { title: "MCQs (Chapter-wise)", url: "/mcqs" },
    { title: "Trick Generator", url: "/trick-generator" },
    { title: "Solution Generator", url: "/solution-generator" },
    ...(role === "teacher" || role === "admin" ? [{ title: "Question Upload", url: "/question-upload" }] : []),
    { title: "Test Engine V2 (Beta)", url: "/test-engine" },
    ...(role === "admin" ? [{ title: "Admin Analytics", url: "/admin-analytics" }] : []),
    { title: "LLM Orchestrator", url: "/llm-orchestrator" },
    { title: "AI Trick Validator", url: "/ai-trick-validator" },
    { title: "Diagram Detector", url: "/diagram-detector" },
  ];

  const testChapterItems = [
    { title: "Test Wise (MCQ/PYQ)", url: "/test-wise" },
    { title: "Chapter Wise (MCQ/PYQ)", url: "/chapter-wise" },
    { title: "Mock Tests", url: "/mock-tests" },
    { title: "Sample Papers", url: "/sample-papers" },
    { title: "CUET Practice", url: "/cuet-practice" },
    { title: "CBSE Practice", url: "/cbse-practice" },
  ];

  const dreamCollegeItems = [
    { title: "College Predictor", url: "/college-predictor" },
    { title: "Cutoff Trends", url: "/cutoff-trends" },
    { title: "Bulk College Report", url: "/bulk-college-report" },
  ];

  const secretWeaponItems = [
    { title: "Student Management", url: "/student-management" },
    { title: "Notes Generator", url: "/notes-generator" },
    { title: "DPP/Test Generator", url: "/dpp-test-generator" },
  ];

  const aiWingmanItems = [
    { title: "24/7 Study Buddy (Jarvis)", url: "/study-buddy" },
    { title: "Voice Q&A", url: "/voice-qa" },
  ];

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="text-lg font-semibold text-sidebar-foreground">
          A2 Platform
        </div>
        <div className="text-sm text-sidebar-foreground/70 capitalize">
          {role} Dashboard
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Power Tools</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {powerToolsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Test & Chapter Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {testChapterItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Dream College GPS</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {dreamCollegeItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Secret Weapon Vault</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {secretWeaponItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Your AI Wingman</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {aiWingmanItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <div className="text-xs text-sidebar-foreground/50">
          AI-Powered Learning Platform
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
