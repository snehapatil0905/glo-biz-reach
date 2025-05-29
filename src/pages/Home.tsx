
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

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
          className="absolute inset-0 bg-cover bg-center opacity-20 transition-opacity duration-1000"
          style={{
            backgroundImage: `url('/lovable-uploads/f26e6cf3-8698-4a5d-84e9-3931b68e34f7.png')`
          }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <AnimateOnScroll animation="fade-in-down">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Linking <span className="text-industryspan-green">Local</span> Business
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="slide-in-left" delay={300}>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              to <span className="text-industryspan-green ">Global</span> Success
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="slide-in-right" delay={600}>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Your Glocal Partner
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scale-in" delay={900}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-industryspan-green hover:bg-green-600 text-white px-8 py-4 text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
              >
                <a href="mailto:info@amolpalve.com">Book Free Consultation</a>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-industryspan-green transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <a href="https://www.linkedin.com/in/amol-palve/" target="_blank" rel="noopener noreferrer">
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
        
        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white opacity-70 hover:opacity-100 transition-opacity duration-300 animate-float" />
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-industryspan-navy mb-4">
                What We Do
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We help small and mid-sized businesses in chemical, mechanical, and industrial sectors expand globally through strategic consulting and digital visibility.
              </p>
            </div>
          </AnimateOnScroll>

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
              <AnimateOnScroll 
                key={index}
                animation="scale-in"
                delay={index * 200}
              >
                <div className="bg-gray-50 p-8 rounded-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group cursor-pointer">
                  <div className="text-4xl mb-4 group-hover:animate-float">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-industryspan-navy mb-4 group-hover:text-industryspan-green transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll animation="fade-in-up" delay={600}>
            <div className="text-center mt-12">
              <Button 
                asChild 
                className="bg-industryspan-green hover:bg-green-600 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
              >
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-industryspan-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll animation="slide-in-left">
              <div>
                <h2 className="text-4xl font-bold text-industryspan-navy mb-6">
                  Meet Amol Palve
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  With years of experience in technical sales and international business development, 
                  Amol helps companies navigate complex global markets and build sustainable growth strategies.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    { label: "TEDx Speaker:", value: "TEDxEindhoven" },
                    { label: "Leadership:", value: "Toastmasters International" },
                    { label: "Location:", value: "Eindhoven, Netherlands" }
                  ].map((item, index) => (
                    <AnimateOnScroll key={index} animation="fade-in-up" delay={index * 100}>
                      <div className="flex items-center group">
                        <span className="font-semibold text-industryspan-navy mr-2 group-hover:text-industryspan-green transition-colors duration-300">{item.label}</span>
                        <span className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{item.value}</span>
                      </div>
                    </AnimateOnScroll>
                  ))}
                </div>
                <Button 
                  asChild 
                  className="bg-industryspan-green hover:bg-green-600 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
                >
                  <Link to="/bio">Learn More</Link>
                </Button>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="slide-in-right">
              <div className="group">
                <img 
                  src="/lovable-uploads/20d0b752-d4f1-443e-b8cd-a5974064be91.png"
                  alt="Amol Palve"
                  className="rounded-lg shadow-lg w-full transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-industryspan-green text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-industryspan-green opacity-50"></div>
        <AnimateOnScroll animation="scale-in">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Go Global?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how IndustrySpan Consulting can help your business expand internationally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-white text-industryspan-green hover:bg-gray-100 border-none px-8 py-4 text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <a href="mailto:info@amolpalve.com">Schedule Consultation</a>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-industryspan-green px-8 py-4 text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
};

export default Home;
