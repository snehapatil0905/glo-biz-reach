
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkles, Target, Globe, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { ParallaxBackground } from "@/components/ui/parallax-background";
import { FloatingElements } from "@/components/ui/floating-elements";

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
    <div className="min-h-screen overflow-hidden">
      {/* Enhanced Hero Section */}
      <ParallaxBackground 
        backgroundImage="/lovable-uploads/f26e6cf3-8698-4a5d-84e9-3931b68e34f7.png"
        speed={0.3}
        className="relative h-screen flex items-center justify-center bg-gradient-to-br from-industryspan-navy via-blue-900 to-indigo-900 text-white"
      >
        <FloatingElements />
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-industryspan-navy/80 via-transparent to-blue-900/80 animate-gradient-x"></div>
        
        {/* Hero content */}
        <div className="relative z-20 text-center max-w-5xl mx-auto px-4">
          <AnimateOnScroll animation="zoom-in" duration="slow">
            <div className="mb-6 inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 animate-shimmer-border">
              <Sparkles className="w-4 h-4 mr-2 text-industryspan-green animate-pulse" />
              <span className="text-sm font-medium">Your Glocal Partner</span>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-in-down" delay={200}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-industryspan-green to-blue-200 bg-clip-text text-transparent animate-text-glow">
              Linking <span className="">
                Local
                <div className="absolute -inset-1 bg-gradient-to-r from-industryspan-green to-blue-500 blur opacity-30 animate-pulse-glow"></div>
              </span> Business
            </h1>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="slide-in-left" delay={400}>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-industryspan-green via-blue-400 to-white bg-clip-text text-transparent">
              to <span> Global </span> Success
            </h2>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="blur-in" delay={600}>
            <p className="text-2xl md:text-3xl mb-12 opacity-90 font-light tracking-wide">
              Transforming Visions into <span className="text-industryspan-green font-semibold animate-pulse-gentle">Global Realities</span>
            </p>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="scale-in" delay={800}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Button 
                asChild
                size="lg"
                className="group bg-gradient-to-r from-industryspan-green to-green-600 hover:from-green-600 hover:to-industryspan-green text-white px-10 py-6 text-xl font-semibold rounded-full transform transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-green-500/40 animate-shimmer"
              >
                <a href="mailto:info@amolpalve.com" className="relative overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    <Target className="w-5 h-5 mr-2 group-hover:animate-spin" />
                    Book Free Consultation
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </a>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="group border-3 border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-industryspan-green hover:border-white px-10 py-6 text-xl font-semibold rounded-full transform transition-all duration-500 hover:scale-110 hover:shadow-2xl"
              >
                <a href="https://www.linkedin.com/in/amol-palve/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Globe className="w-5 h-5 mr-2 group-hover:animate-spin" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="float-in" delay={1000}>
            <div className="flex justify-center space-x-8 text-sm opacity-80">
              <div className="flex items-center animate-fade-in-up">
                <div className="w-2 h-2 bg-industryspan-green rounded-full mr-2 animate-pulse"></div>
                TEDx Speaker
              </div>
              <div className="flex items-center animate-fade-in-up" style={{animationDelay: '200ms'}}>
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                Global Consultant
              </div>
              <div className="flex items-center animate-fade-in-up" style={{animationDelay: '400ms'}}>
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                Industry Expert
              </div>
            </div>
          </AnimateOnScroll>
        </div>
        
        {/* Enhanced scroll indicator */}
        <AnimateOnScroll animation="float-in" delay={1200}>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center animate-bounce-gentle">
              <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scroll-dot"></div>
              </div>
              <ChevronDown className="h-6 w-6 text-white/70 mt-2 animate-float" />
            </div>
          </div>
        </AnimateOnScroll>
      </ParallaxBackground>

      {/* Enhanced Services Preview */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-transparent to-green-50/50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateOnScroll animation="zoom-in" duration="slow">
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-industryspan-green/10 to-blue-500/10 rounded-full border border-industryspan-green/20 mb-6 animate-shimmer-border">
                <TrendingUp className="w-5 h-5 mr-2 text-industryspan-green" />
                <span className="text-industryspan-green font-semibold">What We Deliver</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-industryspan-navy mb-6 bg-gradient-to-r from-industryspan-navy to-blue-600 bg-clip-text text-transparent">
                Transformative Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We help small and mid-sized businesses in chemical, mechanical, and industrial sectors 
                <span className="text-industryspan-green font-semibold"> expand globally </span>
                through strategic consulting and digital visibility.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Technical Sales Consulting",
                description: "Strategic guidance for complex B2B sales in industrial markets with proven methodologies",
                icon: "🎯",
                color: "from-blue-500/20 to-indigo-500/20",
                delay: 0
              },
              {
                title: "Digital Visibility",
                description: "LinkedIn optimization and podcast strategies for thought leadership and brand authority",
                icon: "📢",
                color: "from-industryspan-green/20 to-emerald-500/20",
                delay: 200
              },
              {
                title: "Global Market Strategy",
                description: "Cross-cultural coaching and international business development with local insights",
                icon: "🌍",
                color: "from-purple-500/20 to-pink-500/20",
                delay: 400
              }
            ].map((service, index) => (
              <AnimateOnScroll 
                key={index}
                animation="scale-in"
                delay={service.delay}
                duration="slow"
              >
                <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-105 hover:-translate-y-4 cursor-pointer border border-gray-100 overflow-hidden">
                  {/* Animated background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="text-5xl mb-6 group-hover:animate-bounce-gentle transition-all duration-500 group-hover:scale-110">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-industryspan-navy mb-6 group-hover:text-white transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-500 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/30 transition-all duration-500"></div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll animation="fade-in-up" delay={600}>
            <div className="text-center mt-16">
              <Button 
                asChild 
                className="group bg-gradient-to-r from-industryspan-green to-green-600 hover:from-green-600 hover:to-industryspan-green text-white px-8 py-4 text-lg font-semibold rounded-full transform transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-green-500/30"
              >
                <Link to="/services" className="flex items-center">
                  <span>Explore All Services</span>
                  <ChevronDown className="w-5 h-5 ml-2 rotate-[-90deg] group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Enhanced About Preview */}
      <ParallaxBackground speed={0.2} className="py-24 bg-gradient-to-br from-industryspan-light-gray to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll animation="slide-in-left" duration="slow">
              <div className="space-y-8">
                <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-industryspan-green/20 animate-shimmer-border">
                  <div className="w-3 h-3 bg-industryspan-green rounded-full mr-3 animate-pulse"></div>
                  <span className="text-industryspan-green font-semibold">Meet Your Partner</span>
                </div>
                
                <h2 className="text-5xl md:text-6xl font-bold text-industryspan-navy mb-8 bg-gradient-to-r from-industryspan-navy to-blue-600 bg-clip-text text-transparent">
                  Amol Palve
                </h2>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  With years of experience in technical sales and international business development, 
                  Amol helps companies navigate complex global markets and build 
                  <span className="text-industryspan-green font-semibold"> sustainable growth strategies</span>.
                </p>
                
                <div className="space-y-6">
                  {[
                    { label: "TEDx Speaker:", value: "TEDxEindhoven", icon: "🎤" },
                    { label: "Leadership:", value: "Toastmasters International", icon: "🏆" },
                    { label: "Location:", value: "Eindhoven, Netherlands", icon: "📍" }
                  ].map((item, index) => (
                    <AnimateOnScroll key={index} animation="fade-in-up" delay={index * 150}>
                      <div className="flex items-center group p-4 bg-white/60 backdrop-blur-sm rounded-xl hover:bg-white/80 transition-all duration-300 hover:scale-105">
                        <span className="text-2xl mr-4 group-hover:animate-bounce-gentle">{item.icon}</span>
                        <div>
                          <span className="font-bold text-industryspan-navy group-hover:text-industryspan-green transition-colors duration-300 text-lg">{item.label}</span>
                          <span className="text-gray-600 ml-2 text-lg">{item.value}</span>
                        </div>
                      </div>
                    </AnimateOnScroll>
                  ))}
                </div>
                
                <Button 
                  asChild 
                  className="group bg-gradient-to-r from-industryspan-green to-green-600 hover:from-green-600 hover:to-industryspan-green text-white px-8 py-4 text-lg font-semibold rounded-full transform transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-green-500/30 mt-8"
                >
                  <Link to="/bio" className="flex items-center">
                    <span>Discover More</span>
                    <ChevronDown className="w-5 h-5 ml-2 rotate-[-90deg] group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="slide-in-right" duration="slow">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-industryspan-green via-blue-500 to-purple-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-gradient-x"></div>
                <img 
                  src="/lovable-uploads/20d0b752-d4f1-443e-b8cd-a5974064be91.png"
                  alt="Amol Palve"
                  className="relative rounded-2xl shadow-2xl w-full transform transition-all duration-700 group-hover:scale-105 group-hover:rotate-1"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </ParallaxBackground>

      {/* Enhanced CTA Section */}
      <section className="relative py-24 bg-gradient-to-r from-industryspan-green via-green-600 to-emerald-600 text-white overflow-hidden">
        <FloatingElements />
        
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 via-transparent to-emerald-600/80 animate-gradient-x"></div>
        
        <AnimateOnScroll animation="zoom-in" duration="slow">
          <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="mb-8">
              <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent animate-text-glow">
                Ready to Go Global?
              </h2>
              <p className="text-2xl mb-12 opacity-90 leading-relaxed font-light">
                Let's discuss how IndustrySpan Consulting can help your business 
                <span className="font-semibold"> expand internationally</span> with proven strategies.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                asChild
                size="lg"
                className="group bg-white text-industryspan-green hover:bg-gray-100 border-none px-10 py-6 text-xl font-semibold rounded-full transform transition-all duration-500 hover:scale-110 hover:shadow-2xl"
              >
                <a href="mailto:info@amolpalve.com" className="flex items-center">
                  <Target className="w-6 h-6 mr-2 group-hover:animate-spin" />
                  <span>Schedule Consultation</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-full"></div>
                </a>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="group border-3 border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-industryspan-green px-10 py-6 text-xl font-semibold rounded-full transform transition-all duration-500 hover:scale-110 hover:shadow-2xl"
              >
                <Link to="/contact" className="flex items-center">
                  <Globe className="w-6 h-6 mr-2 group-hover:animate-spin" />
                  <span>Contact Us</span>
                </Link>
              </Button>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
};

export default Home;
