
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
      <section className="bg-gradient-to-r from-industryspan-navy to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center scroll-animate">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive consulting solutions to help your business expand globally 
              and succeed in international markets.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="scroll-animate hover:shadow-lg transition-all duration-300 hover:scale-105 border-none shadow-md"
              >
                <CardHeader className="text-center">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <CardTitle className="text-xl text-industryspan-navy">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="text-industryspan-green mr-2">✓</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-industryspan-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl font-bold text-industryspan-navy mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">
              A structured approach to achieving your global expansion goals
            </p>
          </div>

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
              <div key={index} className="scroll-animate text-center">
                <div className="bg-industryspan-green text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-industryspan-navy mb-2">
                  {phase.title}
                </h3>
                <p className="text-gray-600">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-industryspan-green text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 scroll-animate">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss which services would be most beneficial for your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-white text-industryspan-green hover:bg-gray-100 border-none"
            >
              <a href="mailto:info@amolpalve.com">Schedule Consultation</a>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-industryspan-green"
            >
              <a href="https://wa.me/31631185610" target="_blank" rel="noopener noreferrer">
                WhatsApp Chat
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
