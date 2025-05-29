
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const Bio = () => {
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
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-industryspan-navy to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate">
              <h1 className="text-5xl font-bold mb-6">Amol Palve</h1>
              <p className="text-xl mb-4 text-industryspan-green">
                Founder & Principal Consultant
              </p>
              <p className="text-lg opacity-90 mb-8">
                "Bridging cultures, connecting markets, and helping businesses achieve global success 
                through strategic thinking and authentic relationships."
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  variant="secondary"
                  className="bg-industryspan-green hover:bg-green-600 text-white"
                >
                  <a href="https://www.linkedin.com/in/amol-palve/" target="_blank" rel="noopener noreferrer">
                    Connect on LinkedIn
                  </a>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-industryspan-navy"
                >
                  <a href="mailto:info@amolpalve.com">Get in Touch</a>
                </Button>
              </div>
            </div>
            <div className="scroll-animate text-center">
              <img 
                src="/lovable-uploads/20d0b752-d4f1-443e-b8cd-a5974064be91.png"
                alt="Amol Palve"
                className="w-80 h-80 rounded-full mx-auto object-cover shadow-2xl border-4 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Speaking Image Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-animate">
            <img 
              src="/lovable-uploads/37d5f87c-b340-4877-8bd1-311f6fcc4fbd.png"
              alt="Amol Palve Speaking"
              className="w-full rounded-lg shadow-lg mb-8"
            />
            <div className="text-center">
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Amol speaking at industry events, sharing insights on global business strategy 
                and technical sales excellence with audiences worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Content */}
      <section className="py-20 bg-industryspan-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-animate">
            <h2 className="text-4xl font-bold text-industryspan-navy mb-8 text-center">
              Professional Journey
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p>
                Amol Palve is a seasoned business consultant and entrepreneur with over 15 years of experience 
                in international business development, technical sales, and cross-cultural communication. 
                Based in Eindhoven, Netherlands, he has helped dozens of companies successfully expand 
                into global markets.
              </p>
              
              <p>
                His expertise spans multiple industries, with particular strength in chemical, mechanical, 
                and industrial sectors. Amol's unique "glocal" approach combines global strategic thinking 
                with deep local market knowledge, enabling businesses to navigate complex international 
                landscapes successfully.
              </p>
              
              <p>
                As a TEDx speaker and active member of Toastmasters International, Amol is passionate 
                about the power of effective communication in business. He believes that authentic 
                storytelling and cultural intelligence are key differentiators in today's global marketplace.
              </p>
              
              <p>
                Through IndustrySpan Consulting, Amol provides comprehensive support for companies 
                looking to expand internationally, from initial market research to long-term 
                partnership development and digital brand building.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl font-bold text-industryspan-navy mb-4">Areas of Expertise</h2>
            <p className="text-xl text-gray-600">
              Deep knowledge across multiple business disciplines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "International Sales",
                skills: ["B2B Sales Strategy", "Technical Sales", "Complex Sales Cycles", "Pipeline Management"],
                icon: "💼"
              },
              {
                title: "Cultural Intelligence",
                skills: ["Cross-cultural Communication", "International Negotiations", "Cultural Adaptation", "Global Mindset"],
                icon: "🌍"
              },
              {
                title: "Digital Strategy",
                skills: ["LinkedIn Optimization", "Personal Branding", "Content Marketing", "Thought Leadership"],
                icon: "📱"
              },
              {
                title: "Public Speaking",
                skills: ["TEDx Speaking", "Conference Presentations", "Workshop Facilitation", "Storytelling"],
                icon: "🎤"
              },
              {
                title: "Leadership",
                skills: ["Team Development", "Strategic Planning", "Change Management", "Mentoring"],
                icon: "👥"
              },
              {
                title: "Industry Knowledge",
                skills: ["Chemical Industry", "Manufacturing", "Industrial Equipment", "B2B Services"],
                icon: "🏭"
              }
            ].map((area, index) => (
              <div key={index} className="scroll-animate bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-semibold text-industryspan-navy mb-4">
                  {area.title}
                </h3>
                <ul className="space-y-2">
                  {area.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center">
                      <span className="text-industryspan-green mr-2">•</span>
                      <span className="text-gray-600">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-industryspan-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl font-bold mb-4">Recognition & Achievements</h2>
            <p className="text-xl opacity-90">
              Milestones in professional development and community contribution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "TEDx Speaker",
                organization: "TEDxEindhoven",
                description: "Delivered compelling talks on business strategy and global thinking"
              },
              {
                title: "Leadership Role",
                organization: "Toastmasters International",
                description: "Active leader in developing communication and leadership skills"
              },
              {
                title: "Industry Expert",
                organization: "Various Conferences",
                description: "Regular speaker at international business and industrial conferences"
              },
              {
                title: "Successful Exits",
                organization: "50+ Companies",
                description: "Helped over 50 companies successfully expand into new markets"
              },
              {
                title: "Global Reach",
                organization: "25+ Countries",
                description: "Business development experience across five continents"
              },
              {
                title: "Thought Leader",
                organization: "Industry Publications",
                description: "Regular contributor to business and industry publications"
              }
            ].map((achievement, index) => (
              <div key={index} className="scroll-animate text-center p-6">
                <div className="bg-industryspan-green w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                <p className="text-industryspan-green font-medium mb-2">{achievement.organization}</p>
                <p className="text-gray-300">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-industryspan-green text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 scroll-animate">
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl mb-8 opacity-90">
            Interested in working together or learning more about global business strategies?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              variant="secondary"
              size="lg"
              className="bg-white text-industryspan-green hover:bg-gray-100"
            >
              <a href="mailto:info@amolpalve.com">Send Email</a>
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
      </section>
    </div>
  );
};

export default Bio;
