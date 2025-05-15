
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Dumbbell } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 md:pt-32 pb-20 md:pb-28 relative overflow-hidden">
      {/* Background overlay with gradient */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577221084712-45b0445d2b00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-40">
        <div className="absolute inset-0 bg-gradient-to-t from-fitness-dark via-fitness-dark/90 to-fitness-dark/60"></div>
      </div>

      {/* Hero content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 inline-flex items-center justify-center px-3 py-1 rounded-full border border-fitness-primary/30 bg-fitness-primary/10 animate-fade-in">
            <Dumbbell className="h-4 w-4 text-fitness-primary mr-2" />
            <span className="text-sm font-medium text-fitness-primary">Transform Your Body</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in animation-delay-200">
            <span className="block">Build Your</span>
            <span className="fitness-gradient-text">Ultimate Physique</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mb-10 animate-fade-in animation-delay-400">
            Expert-crafted workouts designed specifically for men who want to build strength, 
            increase muscle mass, and achieve their ideal body composition.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in animation-delay-600">
            <Button size="lg" className="bg-fitness-primary hover:bg-fitness-secondary transition-all duration-300 hover-scale">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-gray-700 text-gray-300 hover:border-fitness-primary hover:text-white transition-all duration-300">
              View Programs
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 text-center">
            <div className="animate-fade-in animation-delay-200">
              <div className="text-3xl md:text-4xl font-bold fitness-gradient-text mb-2">500+</div>
              <div className="text-gray-400">Workouts</div>
            </div>
            <div className="animate-fade-in animation-delay-400">
              <div className="text-3xl md:text-4xl font-bold fitness-gradient-text mb-2">50K+</div>
              <div className="text-gray-400">Members</div>
            </div>
            <div className="hidden md:block animate-fade-in animation-delay-600">
              <div className="text-3xl md:text-4xl font-bold fitness-gradient-text mb-2">98%</div>
              <div className="text-gray-400">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="hidden lg:block absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-fitness-primary/10 filter blur-3xl"></div>
      <div className="hidden lg:block absolute -top-20 -right-20 w-72 h-72 rounded-full bg-fitness-accent/10 filter blur-3xl"></div>
    </section>
  );
};

export default Hero;
