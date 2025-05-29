
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
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
          <div className="text-center scroll-animate">
            <h1 className="text-5xl font-bold mb-6">About IndustrySpan</h1>
            <p className="text-xl max-w-3xl mx-auto">
              We bridge the gap between local expertise and global opportunities, 
              helping industrial businesses expand their reach worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate">
              <h2 className="text-4xl font-bold text-industryspan-navy mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                IndustrySpan Consulting was founded with a clear vision: to help small and mid-sized 
                businesses in the chemical, mechanical, and industrial sectors successfully expand 
                into global markets.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We understand the unique challenges these industries face when going international - 
                from complex technical requirements to cultural differences and regulatory compliance.
              </p>
              <p className="text-lg text-gray-600">
                Our "glocal" approach combines global strategy with local market knowledge, 
                ensuring sustainable growth and long-term success.
              </p>
            </div>
            <div className="scroll-animate">
              <img 
                src="/lovable-uploads/f26e6cf3-8698-4a5d-84e9-3931b68e34f7.png"
                alt="IndustrySpan Mission"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-industryspan-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl font-bold text-industryspan-navy mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Technical Excellence",
                description: "Deep understanding of industrial processes and technical requirements",
                icon: "⚙️"
              },
              {
                title: "Cultural Intelligence",
                description: "Bridging cultural gaps to facilitate successful international partnerships",
                icon: "🌍"
              },
              {
                title: "Sustainable Growth",
                description: "Building long-term strategies that ensure lasting success in global markets",
                icon: "📈"
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="scroll-animate text-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-industryspan-navy mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl font-bold text-industryspan-navy mb-4">Leadership</h2>
            <p className="text-xl text-gray-600">
              Meet the founder driving our mission forward
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center scroll-animate">
              <div className="text-center lg:text-left">
                <img 
                  src="/lovable-uploads/20d0b752-d4f1-443e-b8cd-a5974064be91.png"
                  alt="Amol Palve"
                  className="w-64 h-64 rounded-full mx-auto lg:mx-0 mb-6 object-cover shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-industryspan-navy mb-4">Amol Palve</h3>
                <p className="text-xl text-industryspan-green mb-4">Founder & Principal Consultant</p>
                <p className="text-gray-600 mb-6">
                  Amol brings extensive experience in technical sales, international business development, 
                  and cross-cultural communication. As a TEDx speaker and Toastmasters leader, 
                  he combines technical expertise with exceptional communication skills.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center">
                    <span className="font-semibold text-industryspan-navy mr-2">✓</span>
                    <span>TEDxEindhoven Speaker</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold text-industryspan-navy mr-2">✓</span>
                    <span>Toastmasters International Leader</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold text-industryspan-navy mr-2">✓</span>
                    <span>Industrial Sales Expert</span>
                  </div>
                </div>
                <Button asChild className="bg-industryspan-green hover:bg-green-600 text-white">
                  <Link to="/bio">Full Biography</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-industryspan-green text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 scroll-animate">
          <h2 className="text-4xl font-bold mb-6">Ready to Expand Globally?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our expertise can help your business succeed in international markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              variant="secondary"
              size="lg"
              className="bg-white text-industryspan-green hover:bg-gray-100"
            >
              <a href="mailto:info@amolpalve.com">Start Conversation</a>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-industryspan-green"
            >
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
