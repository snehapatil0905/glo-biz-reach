
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Blog = () => {
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

  const blogPosts = [
    {
      title: "Crafting the Perfect Crude Basket",
      excerpt: "Understanding the complexities of crude oil trading and how to build optimal trading portfolios in today's volatile market.",
      category: "Technical Analysis",
      readTime: "8 min read",
      date: "March 15, 2025",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400"
    },
    {
      title: "The TEDx Approach to Business Storytelling",
      excerpt: "How to craft compelling narratives that resonate with international audiences and drive business results.",
      category: "Communication",
      readTime: "6 min read",
      date: "March 10, 2025",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400"
    },
    {
      title: "Cross-Cultural Negotiations: A Practical Guide",
      excerpt: "Navigate cultural differences in international business negotiations with proven strategies and real-world examples.",
      category: "Global Strategy",
      readTime: "10 min read",
      date: "March 5, 2025",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400"
    },
    {
      title: "Digital Transformation in Industrial Sales",
      excerpt: "How traditional industrial companies can leverage digital tools to accelerate their sales processes and global reach.",
      category: "Digital Strategy",
      readTime: "7 min read",
      date: "February 28, 2025",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400"
    },
    {
      title: "Building Strategic Partnerships in Europe",
      excerpt: "A step-by-step guide to identifying and developing strategic partnerships for market entry in European markets.",
      category: "Partnership",
      readTime: "9 min read",
      date: "February 22, 2025",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400"
    },
    {
      title: "LinkedIn Strategy for B2B Leaders",
      excerpt: "Maximize your professional presence on LinkedIn with strategies that actually generate business results.",
      category: "Personal Branding",
      readTime: "5 min read",
      date: "February 18, 2025",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400"
    }
  ];

  const categories = ["All", "Technical Analysis", "Communication", "Global Strategy", "Digital Strategy", "Partnership", "Personal Branding"];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-industryspan-navy to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center scroll-animate">
            <h1 className="text-5xl font-bold mb-6">Insights & Expertise</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Strategic insights, practical advice, and thought leadership on global business 
              expansion, technical sales, and cross-cultural communication.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 scroll-animate">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "bg-industryspan-green hover:bg-green-600" : "hover:bg-industryspan-green hover:text-white"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-industryspan-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-animate">
            <div className="text-center mb-8">
              <span className="bg-industryspan-green text-white px-4 py-2 rounded-full text-sm font-medium">
                Featured Article
              </span>
            </div>
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <img 
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-64 lg:h-full object-cover rounded-l-lg"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <span className="bg-industryspan-green text-white px-3 py-1 rounded-full text-xs font-medium mr-3">
                      {blogPosts[0].category}
                    </span>
                    <span className="text-gray-500 text-sm">{blogPosts[0].readTime}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-industryspan-navy mb-4">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6 text-lg">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{blogPosts[0].date}</span>
                    <Button className="bg-industryspan-green hover:bg-green-600">
                      Read Full Article
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl font-bold text-industryspan-navy mb-4">Latest Articles</h2>
            <p className="text-xl text-gray-600">
              Practical insights for global business success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <Card 
                key={index}
                className="scroll-animate hover:shadow-lg transition-all duration-300 hover:scale-105 border-none shadow-md"
              >
                <div className="relative">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-industryspan-green text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-500 text-sm">{post.date}</span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl text-industryspan-navy hover:text-industryspan-green transition-colors duration-200">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="outline" 
                    className="w-full hover:bg-industryspan-green hover:text-white border-industryspan-green text-industryspan-green"
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-industryspan-navy text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 scroll-animate">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 opacity-90">
            Get the latest insights on global business strategy and technical sales 
            delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <Button className="bg-industryspan-green hover:bg-green-600 px-8">
              Subscribe
            </Button>
          </div>
          <p className="text-sm opacity-70 mt-4">
            No spam, unsubscribe anytime. Read our privacy policy.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-industryspan-green text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 scroll-animate">
          <h2 className="text-4xl font-bold mb-6">Ready to Apply These Insights?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how these strategies can be applied to your specific business challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              variant="secondary"
              size="lg"
              className="bg-white text-industryspan-green hover:bg-gray-100"
            >
              <a href="mailto:info@amolpalve.com">Discuss Strategy</a>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-industryspan-green"
            >
              <Link to="/contact">Schedule Call</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
