
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dumbbell, User, LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSignOut = async () => {
    try {
      const { error } = await signOut();
      if (error) {
        toast.error(error.message || "Failed to sign out");
      } else {
        toast.success("Signed out successfully");
        navigate("/");
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
      console.error(error);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-fitness-dark/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a 
          href="/" 
          className="flex items-center space-x-2 animate-fade-in"
        >
          <Dumbbell className="h-8 w-8 text-fitness-primary" />
          <span className="text-xl font-bold fitness-gradient-text">ALPHA FIT</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 animate-fade-in">
          <a href="/#programs" className="text-gray-300 hover:text-fitness-primary transition-colors duration-300">
            Programs
          </a>
          <a href="/#testimonials" className="text-gray-300 hover:text-fitness-primary transition-colors duration-300">
            Results
          </a>
          <a href="/#newsletter" className="text-gray-300 hover:text-fitness-primary transition-colors duration-300">
            Join
          </a>
          <div className="flex items-center space-x-3">
            {user ? (
              <>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-gray-300 hover:text-fitness-primary flex items-center gap-2 border border-gray-700 hover:border-fitness-primary transition-all duration-300"
                  onClick={() => navigate('/dashboard')}
                >
                  <User size={16} />
                  Dashboard
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-gray-300 hover:text-fitness-primary flex items-center gap-2 border border-gray-700 hover:border-fitness-primary transition-all duration-300"
                  onClick={handleSignOut}
                >
                  <LogOut size={16} />
                  Sign out
                </Button>
              </>
            ) : (
              <>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-gray-300 hover:text-fitness-primary border border-gray-700 hover:border-fitness-primary transition-all duration-300"
                  onClick={() => navigate('/auth')}
                >
                  Log in
                </Button>
                <Button 
                  className="bg-fitness-primary hover:bg-fitness-secondary text-white transition-all duration-300"
                  onClick={() => navigate('/auth?tab=signup')}
                >
                  Sign up
                </Button>
              </>
            )}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-300 focus:outline-none animate-fade-in"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-fitness-dark/95 backdrop-blur-sm animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="/#programs" 
              className="text-gray-300 hover:text-fitness-primary py-2 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Programs
            </a>
            <a 
              href="/#testimonials" 
              className="text-gray-300 hover:text-fitness-primary py-2 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Results
            </a>
            <a 
              href="/#newsletter" 
              className="text-gray-300 hover:text-fitness-primary py-2 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join
            </a>
            <div className="flex flex-col space-y-2 pt-2 border-t border-gray-700">
              {user ? (
                <>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="justify-start text-gray-300 hover:text-fitness-primary flex items-center gap-2 transition-all duration-300"
                    onClick={() => {
                      navigate('/dashboard');
                      setMobileMenuOpen(false);
                    }}
                  >
                    <User size={16} />
                    Dashboard
                  </Button>
                  <Button 
                    variant="ghost"
                    size="sm" 
                    className="justify-start text-gray-300 hover:text-fitness-primary flex items-center gap-2 transition-all duration-300"
                    onClick={() => {
                      handleSignOut();
                      setMobileMenuOpen(false);
                    }}
                  >
                    <LogOut size={16} />
                    Sign out
                  </Button>
                </>
              ) : (
                <>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="justify-start text-gray-300 hover:text-fitness-primary transition-all duration-300"
                    onClick={() => {
                      navigate('/auth');
                      setMobileMenuOpen(false);
                    }}
                  >
                    Log in
                  </Button>
                  <Button 
                    className="bg-fitness-primary hover:bg-fitness-secondary text-white transition-all duration-300"
                    onClick={() => {
                      navigate('/auth?tab=signup');
                      setMobileMenuOpen(false);
                    }}
                  >
                    Sign up
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
