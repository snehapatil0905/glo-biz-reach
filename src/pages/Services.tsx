
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const Services = () => {
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

  const services = [
    {
      title: "GTM & International Business Strategy",
      description: "Comprehensive go-to-market strategies for global expansion",
      features: [
        "Market research and analysis",
        "Competitive landscape assessment",
        "Entry strategy development",
        "Risk mitigation planning"
      ],
      icon: "🎯"
    },
    {
      title: "Technical Sales Consulting",
      description: "Specialized guidance for complex B2B technical sales",
      features: [
        "Sales process optimization",
        "Technical documentation review",
        "Customer needs analysis",
        "Proposal development"
      ],
      icon: "⚙️"
    },
    {
      title: "Digital Personal Branding",
      description: "LinkedIn optimization and podcast strategies for thought leadership",
      features: [
        "LinkedIn profile optimization",
        "Content strategy development",
        "Podcast planning and execution",
        "Digital presence enhancement"
      ],
      icon: "📢"
    },
    {
      title: "Cross-cultural B2B Coaching",
      description: "Navigate cultural differences in international business",
      features: [
        "Cultural intelligence training",
        "Communication style adaptation",
        "Negotiation strategy coaching",
        "Relationship building guidance"
      ],
      icon: "🌍"
    },
    {
      title: "Public Speaking & Leadership Training",
      description: "Develop presentation skills and leadership capabilities",
      features: [
        "Presentation skills development",
        "Storytelling techniques",
        "Confidence building",
        "Leadership communication"
      ],
      icon: "🎤"
    },
    {
      title: "Strategic Partnership Development",
      description: "Identify and develop key strategic partnerships",
      features: [
        "Partner identification",
        "Due diligence support",
        "Negotiation facilitation",
        "Partnership structuring"
      ],
      icon: "🤝"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-industryspan-navy to-blue-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-industryspan-navy/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateOnScroll animation="fade-in-down">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-xl max-w-3xl mx-auto">
                Comprehensive consulting solutions to help your business expand globally 
                and succeed in international markets.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimateOnScroll 
                key={index}
                animation="scale-in"
                delay={index * 150}
              >
                <Card className="hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 border-none shadow-md group cursor-pointer h-full">
                  <CardHeader className="text-center">
                    <div className="text-5xl mb-4 group-hover:animate-float transition-transform duration-300">{service.icon}</div>
                    <CardTitle className="text-xl text-industryspan-navy group-hover:text-industryspan-green transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center opacity-0 animate-fade-in" style={{animationDelay: `${(index * 150) + (featureIndex * 100)}ms`}}>
                          <span className="text-industryspan-green mr-2 group-hover:animate-pulse">✓</span>
                          <span className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-industryspan-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-industryspan-navy mb-4">Our Process</h2>
              <p className="text-xl text-gray-600">
                A structured approach to achieving your global expansion goals
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your business, goals, and challenges"
              },
              {
                step: "02",
                title: "Strategy",
                description: "Developing a customized roadmap for success"
              },
              {
                step: "03",
                title: "Implementation",
                description: "Executing the plan with ongoing support"
              },
              {
                step: "04",
                title: "Optimization",
                description: "Continuous improvement and scaling"
              }
            ].map((phase, index) => (
              <AnimateOnScroll 
                key={index}
                animation="scale-in"
                delay={index * 200}
              >
                <div className="text-center group cursor-pointer">
                  <div className="bg-industryspan-green text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-green-500/25">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-semibold text-industryspan-navy mb-2 group-hover:text-industryspan-green transition-colors duration-300">
                    {phase.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {phase.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-industryspan-green text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-industryspan-green opacity-50"></div>
        <AnimateOnScroll animation="scale-in">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss which services would be most beneficial for your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-white text-industryspan-green hover:bg-gray-100 border-none transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <a href="mailto:info@amolpalve.com">Schedule Consultation</a>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-industryspan-green transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <a href="https://wa.me/31631185610" target="_blank" rel="noopener noreferrer">
                  WhatsApp Chat
                </a>
              </Button>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
};

export default Services;
