
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dumbbell, CheckCircle } from "lucide-react";

const Newsletter = () => {
  return (
    <section id="newsletter" className="py-20 bg-fitness-dark relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-fitness-dark/60 via-fitness-dark to-fitness-dark/80"></div>
      
      {/* Background image with overlay */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1544033527-b192daee1f5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Decorative elements */}
      <div className="hidden lg:block absolute top-20 -left-20 w-64 h-64 rounded-full bg-fitness-primary/10 filter blur-3xl"></div>
      <div className="hidden lg:block absolute bottom-20 -right-20 w-64 h-64 rounded-full bg-fitness-accent/10 filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="mb-6 inline-flex items-center justify-center px-3 py-1 rounded-full border border-fitness-primary/30 bg-fitness-primary/10 animate-fade-in">
              <Dumbbell className="h-4 w-4 text-fitness-primary mr-2" />
              <span className="text-sm font-medium text-fitness-primary">Join The Community</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in animation-delay-200">
              Start Your Fitness Journey <span className="fitness-gradient-text">Today</span>
            </h2>
            <p className="text-gray-300 animate-fade-in animation-delay-400">
              Subscribe to get exclusive access to workout tips, nutrition advice, and special offers. 
              Take the first step towards becoming the best version of yourself.
            </p>
          </div>

          <div className="bg-card p-8 md:p-10 rounded-lg border border-gray-800 shadow-xl animate-fade-in animation-delay-600">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-bold mb-4">Sign Up Benefits</h3>
                <ul className="space-y-3">
                  {[
                    "Personalized fitness assessment",
                    "Custom workout plans",
                    "Nutrition guidance",
                    "Weekly motivation emails",
                    "Access to exclusive content"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-fitness-primary mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Subscribe Now</h3>
                <form className="space-y-4">
                  <div>
                    <Input 
                      type="text" 
                      placeholder="Full Name" 
                      className="w-full bg-muted border-gray-700 focus:border-fitness-primary transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full bg-muted border-gray-700 focus:border-fitness-primary transition-colors duration-300"
                    />
                  </div>
                  <div className="pt-2">
                    <Button className="w-full bg-fitness-primary hover:bg-fitness-secondary hover-scale transition-all duration-300">
                      Get Started
                    </Button>
                  </div>
                  <p className="text-gray-500 text-xs text-center mt-4">
                    By signing up, you agree to our Terms and Privacy Policy.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
