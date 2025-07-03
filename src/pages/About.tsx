
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const milestones = [
    { year: "1998", event: "Sharrouf Bros founded in Lebanon" },
    { year: "2003", event: "Became authorized SCM dealer" },
    { year: "2008", event: "Opened Rachaya service center" },
    { year: "2015", event: "Expanded to full Middle East coverage" },
    { year: "2020", event: "Achieved SCM Premium Partner status" },
    { year: "2024", event: "25+ years of excellence continues" },
  ];

  const team = [
    {
      name: "Ahmad Sharrouf",
      position: "Founder & CEO",
      description: "25+ years of experience in woodworking machinery industry",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop"
    },
    {
      name: "Michel Sharrouf",
      position: "Technical Director", 
      description: "SCM-certified technician with extensive European training",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
    },
    {
      name: "Samir Khoury",
      position: "Sales Manager",
      description: "15+ years helping customers find the perfect machinery solutions",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop"
    },
    {
      name: "Fatima Al-Hassan",
      position: "Service Coordinator",
      description: "Expert in parts management and customer service excellence",
      image: "https://images.unsplash.com/photo-1494790108755-2616c35e5c8e?w=300&h=300&fit=crop"
    },
  ];

  const values = [
    {
      title: "Italian Quality",
      description: "We believe in the superior engineering and craftsmanship that Italian machinery represents",
      icon: "🇮🇹"
    },
    {
      title: "Local Expertise",
      description: "Deep understanding of Middle Eastern market needs and business culture",
      icon: "🏛️"
    },
    {
      title: "Customer Success",
      description: "Your success is our success - we're committed to your long-term productivity",
      icon: "🤝"
    },
    {
      title: "Innovation",
      description: "Staying at the forefront of woodworking technology and industry trends",
      icon: "💡"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-industrial-gradient text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Sharrouf Bros</h1>
          <p className="text-xl max-w-3xl mx-auto">
            For over 25 years, we've been the trusted bridge between Italian woodworking excellence 
            and Middle Eastern craftsmanship, delivering premium SCM machinery solutions.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">Our Story</Badge>
              <h2 className="text-4xl font-bold text-industrial-dark mb-6">
                A Legacy of Excellence
              </h2>
              <div className="space-y-6 text-industrial-gray text-lg">
                <p>
                  Founded in 1998 by the Sharrouf brothers, our company began with a simple vision: 
                  to bring the finest Italian woodworking machinery to the Middle East, backed by 
                  unparalleled service and support.
                </p>
                <p>
                  What started as a small operation in Beirut has grown into the region's leading 
                  SCM authorized dealer, serving customers across Lebanon, Syria, Jordan, and beyond. 
                  Our success is built on three pillars: genuine Italian quality, local expertise, 
                  and unwavering commitment to customer success.
                </p>
                <p>
                  Today, with over 500 machines sold and countless satisfied customers, we continue 
                  to uphold our founding principles while embracing the latest technology and 
                  innovation in woodworking machinery.
                </p>
              </div>
            </div>
            <div>
              <Card className="machinery-shadow">
                <CardContent className="p-0">
                  <img 
                    src="https://images.unsplash.com/photo-1606142969519-89f70c1b5b53?w=600&h=400&fit=crop" 
                    alt="Sharrouf Bros facility"
                    className="w-full h-80 object-cover rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-industrial-dark mb-6">Our Journey</h2>
            <p className="text-xl text-industrial-gray max-w-3xl mx-auto">
              Key milestones in our 25+ year journey of excellence
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-1 bg-industrial-blue"></div>
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="machinery-shadow">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-industrial-blue mb-2">{milestone.year}</div>
                        <p className="text-industrial-gray">{milestone.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-industrial-blue rounded-full border-4 border-white"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-industrial-dark mb-6">Meet Our Team</h2>
            <p className="text-xl text-industrial-gray max-w-3xl mx-auto">
              The passionate professionals behind our success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="machinery-shadow hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
                <CardContent className="p-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-industrial-dark mb-2">{member.name}</h3>
                  <Badge variant="secondary" className="mb-4">{member.position}</Badge>
                  <p className="text-industrial-gray text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-industrial-dark text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SCM Partnership */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="machinery-shadow border-0">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-italian-green via-white to-italian-red h-64 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-industrial-dark mb-2">SCM</div>
                      <div className="text-lg text-industrial-gray">Premium Partner</div>
                      <div className="w-16 h-1 bg-industrial-blue mx-auto mt-4"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-industrial-dark mb-6">
                Proud SCM Premium Partner
              </h2>
              <div className="space-y-4 text-industrial-gray text-lg">
                <p>
                  Our partnership with SCM Group goes beyond just being an authorized dealer. 
                  We've achieved Premium Partner status, recognizing our commitment to excellence 
                  in sales, service, and customer satisfaction.
                </p>
                <p>
                  This prestigious status means our technicians receive direct training in Italy, 
                  we maintain the highest inventory standards, and we have direct access to SCM's 
                  engineering and technical support teams.
                </p>
                <p>
                  When you choose Sharrouf Bros, you're not just buying machinery - you're gaining 
                  access to the full power of SCM's global network and expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
