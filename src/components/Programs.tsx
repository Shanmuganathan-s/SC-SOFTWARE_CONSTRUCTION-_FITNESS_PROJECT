
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dumbbell, Activity, Heart, Trophy } from "lucide-react";

const programData = [
  {
    id: 1,
    title: "Mass Builder",
    icon: <Dumbbell className="h-10 w-10 text-fitness-primary mb-4" />,
    description: "Focused on hypertrophy and progressive overload to maximize muscle growth.",
    features: ["5-day split", "60-min workouts", "Meal plan included"],
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    popular: true
  },
  {
    id: 2,
    title: "Shred & Cuts",
    icon: <Trophy className="h-10 w-10 text-fitness-primary mb-4" />,
    description: "High-intensity workouts designed to burn fat while preserving lean muscle mass.",
    features: ["6-day split", "45-min workouts", "Cardio integration"],
    image: "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    popular: false
  },
  {
    id: 3,
    title: "Strength Focus",
    icon: <Heart className="h-10 w-10 text-fitness-primary mb-4" />,
    description: "Builds foundational strength and power with compound movements.",
    features: ["4-day split", "75-min workouts", "Performance tracking"],
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80",
    popular: false
  },
  {
    id: 4,
    title: "Functional Fitness",
    icon: <Activity className="h-10 w-10 text-fitness-primary mb-4" />,
    description: "Combines strength, mobility and conditioning for overall functional improvement.",
    features: ["5-day split", "50-min workouts", "Technique videos"],
    image: "https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80",
    popular: false
  }
];

const Programs = () => {
  return (
    <section id="programs" className="py-20 relative bg-fitness-dark overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-fitness-primary/5 filter blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-fitness-accent/5 filter blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Training Programs<span className="fitness-gradient-text"> For Men</span>
          </h2>
          <p className="text-gray-300">
            Choose the program that matches your goals. Each program is designed specifically for men's physiology 
            and includes detailed workouts, nutrition guidance, and progress tracking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programData.map((program, index) => (
            <div 
              key={program.id} 
              className={`animate-fade-in animation-delay-${index * 200}`}
            >
              <Card className="bg-card border border-gray-800 hover:border-fitness-primary/50 transition-all duration-300 h-full relative overflow-hidden group">
                {program.popular && (
                  <div className="absolute top-4 right-4 z-10 bg-fitness-primary text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse-glow">
                    Popular
                  </div>
                )}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent"></div>
                </div>
                <CardContent className="relative z-10 pt-6">
                  <div className="flex justify-center">
                    {program.icon}
                  </div>
                  <h3 className="text-xl font-bold text-center mb-3 mt-2">{program.title}</h3>
                  <p className="text-gray-400 text-center text-sm mb-4">{program.description}</p>
                  
                  <ul className="mb-6 space-y-2">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-300 text-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-fitness-primary mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${program.popular ? 'bg-fitness-primary hover:bg-fitness-secondary' : 'bg-muted hover:bg-muted/80'} transition-all duration-300`}
                  >
                    View Program
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-gray-700 text-gray-300 hover:border-fitness-primary hover:text-white transition-all duration-300">
            View All Programs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
