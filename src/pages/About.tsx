
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

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
      <section className="bg-gradient-to-r from-industryspan-navy to-blue-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-industryspan-navy/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateOnScroll animation="fade-in-down">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">About IndustrySpan</h1>
              <p className="text-xl max-w-3xl mx-auto">
                We bridge the gap between local expertise and global opportunities, 
                helping industrial businesses expand their reach worldwide.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll animation="slide-in-left">
              <div>
                <h2 className="text-4xl font-bold text-industryspan-navy mb-6">Our Mission</h2>
                <div className="space-y-6">
                  <AnimateOnScroll animation="fade-in-up" delay={200}>
                    <p className="text-lg text-gray-600">
                      IndustrySpan Consulting was founded with a clear vision: to help small and mid-sized 
                      businesses in the chemical, mechanical, and industrial sectors successfully expand 
                      into global markets.
                    </p>
                  </AnimateOnScroll>
                  <AnimateOnScroll animation="fade-in-up" delay={400}>
                    <p className="text-lg text-gray-600">
                      We understand the unique challenges these industries face when going international - 
                      from complex technical requirements to cultural differences and regulatory compliance.
                    </p>
                  </AnimateOnScroll>
                  <AnimateOnScroll animation="fade-in-up" delay={600}>
                    <p className="text-lg text-gray-600">
                      Our "glocal" approach combines global strategy with local market knowledge, 
                      ensuring sustainable growth and long-term success.
                    </p>
                  </AnimateOnScroll>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="slide-in-right">
              <div className="group">
                <img 
                  src="/lovable-uploads/f26e6cf3-8698-4a5d-84e9-3931b68e34f7.png"
                  alt="IndustrySpan Mission"
                  className="rounded-lg shadow-lg transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-industryspan-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-industryspan-navy mb-4">Our Values</h2>
              <p className="text-xl text-gray-600">
                The principles that guide everything we do
              </p>
            </div>
          </AnimateOnScroll>

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
              <AnimateOnScroll 
                key={index}
                animation="scale-in"
                delay={index * 200}
              >
                <div className="text-center p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group cursor-pointer">
                  <div className="text-5xl mb-4 group-hover:animate-float">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-industryspan-navy mb-4 group-hover:text-industryspan-green transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {value.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-industryspan-navy mb-4">Leadership</h2>
              <p className="text-xl text-gray-600">
                Meet the founder driving our mission forward
              </p>
            </div>
          </AnimateOnScroll>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimateOnScroll animation="slide-in-left">
                <div className="text-center lg:text-left group">
                  <img 
                    src="/lovable-uploads/20d0b752-d4f1-443e-b8cd-a5974064be91.png"
                    alt="Amol Palve"
                    className="w-64 h-64 rounded-full mx-auto lg:mx-0 mb-6 object-cover shadow-lg transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl"
                  />
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="slide-in-right">
                <div>
                  <h3 className="text-3xl font-bold text-industryspan-navy mb-4">Amol Palve</h3>
                  <p className="text-xl text-industryspan-green mb-4">Founder & Principal Consultant</p>
                  <p className="text-gray-600 mb-6">
                    Amol brings extensive experience in technical sales, international business development, 
                    and cross-cultural communication. As a TEDx speaker and Toastmasters leader, 
                    he combines technical expertise with exceptional communication skills.
                  </p>
                  <div className="space-y-2 mb-6">
                    {[
                      "TEDxEindhoven Speaker",
                      "Toastmasters International Leader",
                      "Industrial Sales Expert"
                    ].map((achievement, index) => (
                      <AnimateOnScroll key={index} animation="fade-in-up" delay={index * 100}>
                        <div className="flex items-center group cursor-pointer">
                          <span className="font-semibold text-industryspan-navy mr-2 group-hover:text-industryspan-green transition-colors duration-300">✓</span>
                          <span className="group-hover:text-industryspan-green transition-colors duration-300">{achievement}</span>
                        </div>
                      </AnimateOnScroll>
                    ))}
                  </div>
                  <Button 
                    asChild 
                    className="bg-industryspan-green hover:bg-green-600 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
                  >
                    <Link to="/bio">Full Biography</Link>
                  </Button>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-industryspan-green text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-industryspan-green opacity-50"></div>
        <AnimateOnScroll animation="scale-in">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-4xl font-bold mb-6">Ready to Expand Globally?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how our expertise can help your business succeed in international markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-white text-industryspan-green hover:bg-gray-100 border-none transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <a href="mailto:info@amolpalve.com">Start Conversation</a>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-industryspan-green transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
};

export default About;
