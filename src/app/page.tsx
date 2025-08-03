"use client";

import React from "react";
import Layout from "@/components/Layout";
import DashboardFilters from "@/components/DashboardFilters";
import SpotlightCarousel from "@/components/SpotlightCarousel";
import AnimatedStatsCard from "@/components/AnimatedStatsCard";
import QuickActions from "@/components/QuickActions";
import RecentActivity from "@/components/RecentActivity";
import VoiceQA from "@/components/VoiceQA";

export default function HomePage() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <DashboardFilters />
            <SpotlightCarousel />
            <QuickActions />
          </div>
          <div className="lg:w-80">
            <AnimatedStatsCard />
            <RecentActivity />
          </div>
        </div>
        <VoiceQA />
      </div>
    </Layout>
  );
}
