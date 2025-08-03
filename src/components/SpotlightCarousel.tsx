"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

export default function SpotlightCarousel() {
  const spotlightData = [
    {
      id: 1,
      title: "Advanced Physics Tricks for JEE",
      description: "Master complex physics problems with these proven techniques",
      badge: "🔥 Trending",
      badgeVariant: "destructive" as const,
      imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/dfe7bc92-371f-4f22-87ee-1b2befa3d83b.png",
      category: "JEE Physics",
    },
    {
      id: 2,
      title: "NEET Biology Memory Techniques",
      description: "Expert-recommended methods to memorize biological processes",
      badge: "🧠 Expert Pick",
      badgeVariant: "secondary" as const,
      imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6c8ba3b0-9649-4b57-8883-05eb16deef39.png",
      category: "NEET Biology",
    },
    {
      id: 3,
      title: "Chemistry Shortcuts for Quick Solutions",
      description: "Time-saving approaches for organic chemistry problems",
      badge: "⚡ New",
      badgeVariant: "default" as const,
      imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/49f1ee1b-1fff-4eb1-bbd0-53e814332f44.png",
      category: "Chemistry",
    },
    {
      id: 4,
      title: "Mathematics Problem Solving Strategies",
      description: "Systematic approaches to tackle complex mathematical problems",
      badge: "📈 Popular",
      badgeVariant: "outline" as const,
      imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/426b562c-581f-4ace-8f84-d5b12be434e2.png",
      category: "Mathematics",
    },
    {
      id: 5,
      title: "CUET General Test Preparation",
      description: "Comprehensive guide for CUET general test sections",
      badge: "🎯 Featured",
      badgeVariant: "secondary" as const,
      imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/790d583e-497f-4c13-92e6-cb5290e56c74.png",
      category: "CUET",
    },
  ];

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-xl">Spotlight Learning Moments</h3>
        <p className="text-sm text-muted-foreground">Interactive content curated for you</p>
      </div>
      
      <Carousel className="w-full">
        <CarouselContent className="-ml-2 md:-ml-4">
          {spotlightData.map((item) => (
            <CarouselItem key={item.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={item.imageUrl}
                      alt={`${item.title} - Interactive learning content for ${item.category}`}
                      className="w-full h-48 object-cover rounded-t-lg"
                      onError={(e) => {
                        e.currentTarget.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d27b3f14-87b4-46fa-bf2d-7275c0376a6e.png";
                      }}
                    />
                    <div className="absolute top-3 left-3">
                      <Badge variant={item.badgeVariant} className="text-xs font-medium">
                        {item.badge}
                      </Badge>
                    </div>
                    <div className="absolute top-3 right-3">
                      <Badge variant="outline" className="text-xs bg-background/80 backdrop-blur-sm">
                        {item.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h4 className="font-semibold text-lg mb-2 line-clamp-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        Updated recently
                      </span>
                      <button className="text-sm font-medium text-primary hover:underline">
                        Explore →
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
}
