
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = `Inquiry from ${formData.name} - ${formData.company}`;
    const body = `Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:info@amolpalve.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening email client...",
      description: "Your default email client should open with the message pre-filled.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-industryspan-navy to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center scroll-animate">
            <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Ready to expand your business globally? Let's start a conversation about 
              your goals and how IndustrySpan Consulting can help you achieve them.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="scroll-animate">
              <h2 className="text-3xl font-bold text-industryspan-navy mb-8">
                Let's Connect
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Whether you're looking to expand into new markets, optimize your sales process, 
                or build strategic partnerships, we're here to help. Reach out through any of 
                the channels below.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-industryspan-green text-white p-3 rounded-lg mr-4">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-industryspan-navy mb-1">Email</h3>
                    <a 
                      href="mailto:info@amolpalve.com" 
                      className="text-industryspan-green hover:underline"
                    >
                      info@amolpalve.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-industryspan-green text-white p-3 rounded-lg mr-4">
                    <span className="text-xl">💬</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-industryspan-navy mb-1">WhatsApp</h3>
                    <a 
                      href="https://wa.me/31631185610" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-industryspan-green hover:underline"
                    >
                      +31 631185610
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-industryspan-green text-white p-3 rounded-lg mr-4">
                    <span className="text-xl">🔗</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-industryspan-navy mb-1">LinkedIn</h3>
                    <a 
                      href="https://www.linkedin.com/in/amol-palve/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-industryspan-green hover:underline"
                    >
                      Connect with Amol Palve
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-industryspan-green text-white p-3 rounded-lg mr-4">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-industryspan-navy mb-1">Location</h3>
                    <p className="text-gray-600">Eindhoven, Netherlands</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-industryspan-light-gray rounded-lg">
                <h3 className="font-semibold text-industryspan-navy mb-3">Quick Response Guarantee</h3>
                <p className="text-gray-600">
                  We typically respond to all inquiries within 24 hours. For urgent matters, 
                  please use WhatsApp for the fastest response.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="scroll-animate">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-industryspan-navy">
                    Send us a Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you soon.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="mt-1"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="mt-1"
                        placeholder="Tell us about your business goals, challenges, or how we can help..."
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-industryspan-green hover:bg-green-600 text-white"
                      size="lg"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services CTA */}
      <section className="py-20 bg-industryspan-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl font-bold text-industryspan-navy mb-4">
              How We Can Help You
            </h2>
            <p className="text-xl text-gray-600">
              Explore our services and see how we can support your global expansion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Free Consultation",
                description: "30-minute discovery call to understand your challenges and goals",
                icon: "🎯"
              },
              {
                title: "Custom Strategy",
                description: "Tailored go-to-market plan for your specific industry and target markets",
                icon: "📋"
              },
              {
                title: "Ongoing Support",
                description: "Continuous guidance throughout your international expansion journey",
                icon: "🤝"
              }
            ].map((service, index) => (
              <div key={index} className="scroll-animate text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-industryspan-navy mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-industryspan-green text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 scroll-animate">
          <h2 className="text-4xl font-bold mb-6">Ready to Go Global?</h2>
          <p className="text-xl mb-8 opacity-90">
            Take the first step towards international success. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              variant="secondary"
              size="lg"
              className="bg-white text-industryspan-green hover:bg-gray-100"
            >
              <a href="mailto:info@amolpalve.com">Book Free Call</a>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-industryspan-green transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
              <a href="https://wa.me/31631185610" target="_blank" rel="noopener noreferrer">
                WhatsApp Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
