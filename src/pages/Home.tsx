
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".scroll-animate");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center bg-gradient-to-br from-industryspan-navy to-blue-900 text-white overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('/lovable-uploads/f26e6cf3-8698-4a5d-84e9-3931b68e34f7.png')`
          }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Linking <span className="text-industryspan-green">Local</span> Business
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 animate-slide-in-left">
            to <span className="text-industryspan-green">Global</span> Success
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-slide-in-right">
            Your Glocal Partner
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button 
              asChild
              size="lg"
              className="bg-industryspan-green hover:bg-green-600 text-white px-8 py-4 text-lg"
            >
              <a href="mailto:info@amolpalve.com">Book Free Consultation</a>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-industryspan-navy px-8 py-4 text-lg"
            >
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn
              </a>
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white opacity-70" />
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl font-bold text-industryspan-navy mb-4">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We help small and mid-sized businesses in chemical, mechanical, and industrial sectors expand globally through strategic consulting and digital visibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Technical Sales Consulting",
                description: "Strategic guidance for complex B2B sales in industrial markets",
                icon: "🎯"
              },
              {
                title: "Digital Visibility",
                description: "LinkedIn optimization and podcast strategies for thought leadership",
                icon: "📢"
              },
              {
                title: "Global Market Strategy",
                description: "Cross-cultural coaching and international business development",
                icon: "🌍"
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="scroll-animate bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-industryspan-navy mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 scroll-animate">
            <Button asChild className="bg-industryspan-green hover:bg-green-600 text-white">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-industryspan-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate">
              <h2 className="text-4xl font-bold text-industryspan-navy mb-6">
                Meet Amol Palve
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                With years of experience in technical sales and international business development, 
                Amol helps companies navigate complex global markets and build sustainable growth strategies.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <span className="font-semibold text-industryspan-navy mr-2">TEDx Speaker:</span>
                  <span className="text-gray-600">TEDxEindhoven</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold text-industryspan-navy mr-2">Leadership:</span>
                  <span className="text-gray-600">Toastmasters International</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold text-industryspan-navy mr-2">Location:</span>
                  <span className="text-gray-600">Eindhoven, Netherlands</span>
                </div>
              </div>
              <Button asChild className="bg-industryspan-green hover:bg-green-600 text-white">
                <Link to="/bio">Learn More</Link>
              </Button>
            </div>
            <div className="scroll-animate">
              <img 
                src="/lovable-uploads/20d0b752-d4f1-443e-b8cd-a5974064be91.png"
                alt="Amol Palve"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-industryspan-green text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 scroll-animate">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Go Global?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how IndustrySpan Consulting can help your business expand internationally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              variant="secondary"
              size="lg"
              className="bg-white text-industryspan-green hover:bg-gray-100 px-8 py-4 text-lg"
            >
              <a href="mailto:info@amolpalve.com">Schedule Consultation</a>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-industryspan-green px-8 py-4 text-lg"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
