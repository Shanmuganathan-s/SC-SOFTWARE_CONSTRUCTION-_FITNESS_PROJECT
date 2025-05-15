
import React from "react";
import { Dumbbell, Instagram, Facebook, Twitter, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-fitness-dark/90 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Dumbbell className="h-6 w-6 text-fitness-primary" />
              <span className="text-xl font-bold fitness-gradient-text">ALPHA FIT</span>
            </div>
            <p className="text-gray-400 mb-6">
              The premier fitness platform designed exclusively for men seeking to transform their physique and maximize their potential.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-fitness-primary transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-fitness-primary transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-fitness-primary transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-fitness-primary transition-colors duration-300">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                "Home", 
                "Programs", 
                "Nutrition", 
                "Results",
                "Blog"
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-fitness-primary transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Programs</h3>
            <ul className="space-y-3">
              {[
                "Mass Builder", 
                "Shred & Cuts", 
                "Strength Focus", 
                "Functional Fitness", 
                "Custom Plans"
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-fitness-primary transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <p className="text-gray-400 flex items-center">
                <Mail className="h-5 w-5 mr-2 text-fitness-primary" />
                support@alphafit.com
              </p>
              <p className="text-gray-400">
                1234 Fitness Ave,<br />
                Muscle City, CA 98765
              </p>
              <a 
                href="#"
                className="inline-block text-fitness-primary hover:underline transition-all duration-300"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} ALPHA FIT. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-fitness-primary text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-fitness-primary text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-fitness-primary text-sm transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
