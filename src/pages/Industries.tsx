
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Industries = () => {
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

  const industries = [
    {
      title: "Chemical Industry",
      description: "Specialized consulting for chemical manufacturers and suppliers",
      challenges: [
        "Complex regulatory compliance",
        "Technical product specifications",
        "Supply chain optimization",
        "International safety standards"
      ],
      solutions: [
        "Regulatory navigation support",
        "Technical documentation review",
        "Market entry strategies",
        "Partnership development"
      ],
      icon: "🧪"
    },
    {
      title: "Industrial Equipment",
      description: "Supporting machinery and equipment manufacturers",
      challenges: [
        "Long sales cycles",
        "Complex technical requirements",
        "After-sales service needs",
        "Cultural communication barriers"
      ],
      solutions: [
        "Sales process optimization",
        "Technical proposal development",
        "Service strategy planning",
        "Cross-cultural training"
      ],
      icon: "⚙️"
    },
    {
      title: "Engineering & Manufacturing",
      description: "Growth strategies for engineering firms and manufacturers",
      challenges: [
        "Project-based sales model",
        "Technical expertise communication",
        "Quality assurance standards",
        "Local partnership requirements"
      ],
      solutions: [
        "Project sales methodology",
        "Technical storytelling",
        "Quality certification guidance",
        "Local partner identification"
      ],
      icon: "🔧"
    },
    {
      title: "B2B Services",
      description: "Business-to-business service providers looking to expand",
      challenges: [
        "Service standardization",
        "Remote delivery models",
        "Trust building across cultures",
        "Pricing strategy adaptation"
      ],
      solutions: [
        "Service methodology development",
        "Digital delivery optimization",
        "Relationship building strategies",
        "Market-specific pricing models"
      ],
      icon: "🏢"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-industryspan-navy to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center scroll-animate">
            <h1 className="text-5xl font-bold mb-6">Industries We Serve</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Deep expertise in technical industries with complex B2B sales cycles 
              and international expansion challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {industries.map((industry, index) => (
              <Card 
                key={index}
                className="scroll-animate hover:shadow-lg transition-all duration-300 border-none shadow-md"
              >
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{industry.icon}</div>
                    <div>
                      <CardTitle className="text-2xl text-industryspan-navy">
                        {industry.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {industry.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-industryspan-navy mb-3">Common Challenges</h4>
                      <ul className="space-y-2">
                        {industry.challenges.map((challenge, challengeIndex) => (
                          <li key={challengeIndex} className="flex items-start">
                            <span className="text-red-500 mr-2 mt-1">●</span>
                            <span className="text-gray-600 text-sm">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-industryspan-navy mb-3">Our Solutions</h4>
                      <ul className="space-y-2">
                        {industry.solutions.map((solution, solutionIndex) => (
                          <li key={solutionIndex} className="flex items-start">
                            <span className="text-industryspan-green mr-2 mt-1">✓</span>
                            <span className="text-gray-600 text-sm">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-industryspan-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl font-bold text-industryspan-navy mb-4">
              Why Industrial Companies Choose Us
            </h2>
            <p className="text-xl text-gray-600">
              Deep understanding of technical markets and proven results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                metric: "15+",
                label: "Years Experience",
                description: "In technical sales and industrial markets"
              },
              {
                metric: "50+",
                label: "Companies Helped",
                description: "Successfully expand internationally"
              },
              {
                metric: "25+",
                label: "Countries",
                description: "Market entry experience across continents"
              }
            ].map((stat, index) => (
              <div key={index} className="scroll-animate text-center p-8 bg-white rounded-lg shadow-md">
                <div className="text-4xl font-bold text-industryspan-green mb-2">
                  {stat.metric}
                </div>
                <div className="text-xl font-semibold text-industryspan-navy mb-2">
                  {stat.label}
                </div>
                <p className="text-gray-600">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl font-bold text-industryspan-navy mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">
              Real results from our industrial clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="scroll-animate bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-industryspan-navy mb-4">
                Chemical Manufacturer - European Expansion
              </h3>
              <p className="text-gray-600 mb-4">
                "IndustrySpan helped us navigate complex EU regulations and establish 
                key partnerships. Our European revenue grew 200% in 18 months."
              </p>
              <div className="text-sm text-industryspan-green font-medium">
                Read Full Case Study →
              </div>
            </div>

            <div className="scroll-animate bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-industryspan-navy mb-4">
                Equipment Manufacturer - Asian Markets
              </h3>
              <p className="text-gray-600 mb-4">
                "The cross-cultural coaching was invaluable. We closed our largest 
                deal in Japan within 6 months of engagement."
              </p>
              <div className="text-sm text-industryspan-green font-medium">
                Read Full Case Study →
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-industryspan-green text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 scroll-animate">
          <h2 className="text-4xl font-bold mb-6">Is Your Industry Next?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our industrial expertise can help your business expand globally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              variant="secondary"
              size="lg"
              className="bg-white text-industryspan-green hover:bg-gray-100"
            >
              <a href="mailto:info@amolpalve.com">Industry Consultation</a>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-industryspan-green transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
             >
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
