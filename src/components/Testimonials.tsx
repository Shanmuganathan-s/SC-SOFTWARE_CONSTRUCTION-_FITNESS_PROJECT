
import React, { useState } from "react";
import { Card } from "@/components/ui/card";

const testimonialData = [
  {
    id: 1,
    name: "Alex Rodriguez",
    age: 32,
    program: "Mass Builder",
    quote: "I've tried many programs before but none gave me the results that ALPHA FIT did. Added 15lbs of muscle in just 3 months!",
    imageBefore: "https://images.unsplash.com/photo-1570691079236-4bca6c45d440?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    imageAfter: "https://images.unsplash.com/photo-1568383245557-419813847456?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    age: 28,
    program: "Shred & Cuts",
    quote: "The Shred program helped me drop from 22% to 12% body fat while maintaining all my muscle mass. Game changer!",
    imageBefore: "https://images.unsplash.com/photo-1583500178009-e54addf7e038?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    imageAfter: "https://images.unsplash.com/photo-1585401586870-16c19eb31b11?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    rating: 5
  },
  {
    id: 3,
    name: "James Wilson",
    age: 35,
    program: "Strength Focus",
    quote: "At 35, I thought my strength gains were over. After 6 months on the Strength Focus program, I'm lifting heavier than I did at 25!",
    imageBefore: "https://images.unsplash.com/photo-1568380280665-4c9d3f14a14c?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    imageAfter: "https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    rating: 4
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-fitness-dark to-fitness-dark/95 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80')] opacity-5 bg-fixed"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Real <span className="fitness-gradient-text">Results</span>
          </h2>
          <p className="text-gray-300">
            Don't just take our word for it. See the transformations our members have achieved with 
            dedication and our expertly designed programs.
          </p>
        </div>

        {/* Desktop Testimonials */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {testimonialData.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="bg-card border border-gray-800 overflow-hidden hover:border-fitness-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative h-80">
                <div className="absolute inset-0 flex">
                  <div className="w-1/2 relative overflow-hidden">
                    <div className="absolute top-2 left-2 text-xs bg-black/50 text-white px-2 py-1 rounded z-10">BEFORE</div>
                    <img 
                      src={testimonial.imageBefore} 
                      alt={`${testimonial.name} Before`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-1/2 relative overflow-hidden">
                    <div className="absolute top-2 right-2 text-xs bg-fitness-primary/80 text-white px-2 py-1 rounded z-10">AFTER</div>
                    <img 
                      src={testimonial.imageAfter} 
                      alt={`${testimonial.name} After`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}, {testimonial.age}</h3>
                    <p className="text-fitness-primary text-sm">{testimonial.program} Program</p>
                  </div>
                  <div className="flex">
                    {Array(testimonial.rating).fill(0).map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-fitness-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Mobile Testimonials Carousel */}
        <div className="lg:hidden">
          <Card className="bg-card border border-gray-800 overflow-hidden mx-auto max-w-sm animate-fade-in">
            <div className="relative h-80">
              <div className="absolute inset-0 flex">
                <div className="w-1/2 relative overflow-hidden">
                  <div className="absolute top-2 left-2 text-xs bg-black/50 text-white px-2 py-1 rounded z-10">BEFORE</div>
                  <img 
                    src={testimonialData[activeIndex].imageBefore} 
                    alt={`${testimonialData[activeIndex].name} Before`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-1/2 relative overflow-hidden">
                  <div className="absolute top-2 right-2 text-xs bg-fitness-primary/80 text-white px-2 py-1 rounded z-10">AFTER</div>
                  <img 
                    src={testimonialData[activeIndex].imageAfter} 
                    alt={`${testimonialData[activeIndex].name} After`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-bold text-lg">{testimonialData[activeIndex].name}, {testimonialData[activeIndex].age}</h3>
                  <p className="text-fitness-primary text-sm">{testimonialData[activeIndex].program} Program</p>
                </div>
                <div className="flex">
                  {Array(testimonialData[activeIndex].rating).fill(0).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-fitness-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-300 italic">"{testimonialData[activeIndex].quote}"</p>
            </div>
          </Card>
          
          {/* Mobile Carousel Controls */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonialData.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "bg-fitness-primary scale-125" : "bg-gray-600"
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
