import { Download, Code2, Cloud, Globe, Smartphone, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import ServiceCard from '@/components/ServiceCard';
import StatsCard from '@/components/StatsCard';

const Index = () => {
  const services = [
    {
      title: "Web Development",
      description: "Full-stack websites using modern frameworks like React, Node.js, and TypeScript with responsive design and optimal performance.",
      icon: Code2
    },
    {
      title: "App Development", 
      description: "Android & iOS solutions with intuitive UI/UX, cross-platform compatibility, and seamless user experiences.",
      icon: Smartphone
    },
    {
      title: "Cloud & Hosting",
      description: "Deployments, security, and server management using AWS, Azure, and modern DevOps practices.",
      icon: Cloud
    }
  ];

  const projects = [
    {
      title: "E-commerce Website",
      description: "Built using React + Node.js, integrated payment gateway with Stripe, inventory management, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "AI-Powered Chatbot",
      description: "Intelligent customer support chatbot with natural language processing and real-time responses.",
      technologies: ["Python", "OpenAI API", "FastAPI", "React", "WebSocket"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Mobile Fitness App",
      description: "Tracks workouts, syncs with wearable devices, social features, and personalized training plans.",
      technologies: ["React Native", "Firebase", "TypeScript", "Redux"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed", icon: "🚀" },
    { number: "15+", label: "Happy Clients", icon: "😊" },
    { number: "95%", label: "Client Satisfaction", icon: "⭐" },
    { number: "3+", label: "Years Experience", icon: "💼" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <main className="pt-16">
        <section id="home" className="relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 gradient-primary opacity-10"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                {/* Left Content */}
                <div className="text-center lg:text-left">
                  <p className="text-lg text-muted-foreground mb-2">Hello, I'm</p>
                  <h1 className="text-5xl md:text-7xl font-display text-gradient mb-4 leading-tight">
                    Jensen
                  </h1>
                  <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium">
                    Software Developer | Full-Stack Engineer
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
                    I'm a passionate Software Developer specializing in web and mobile applications. With expertise in React, Node.js, and Python, I build fast, secure, and user-friendly applications.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Button size="lg" className="gradient-primary hover:shadow-glow transition-smooth">
                      <Download className="w-5 h-5 mr-2" />
                      Download Resume
                    </Button>
                    <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10">
                      View Projects
                    </Button>
                  </div>
                </div>

                {/* Right Content - Profile Image */}
                <div className="flex justify-center lg:justify-end">
                  <div className="relative">
                    <div className="w-80 h-80 rounded-full gradient-primary p-2 shadow-glow">
                      <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                        <div className="text-8xl">👨‍💻</div>
                      </div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full gradient-primary opacity-60 animate-pulse"></div>
                    <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full gradient-secondary opacity-40 animate-pulse delay-1000"></div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat) => (
                  <StatsCard
                    key={stat.label}
                    number={stat.number}
                    label={stat.label}
                    icon={stat.icon}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display text-gradient mb-12 text-center">
                About Me
              </h2>
              <Card className="gradient-card border-border/50 shadow-elegant">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-display text-gradient mb-4">
                        Passionate About Technology
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        I've successfully delivered 50+ projects, maintained 95%+ client satisfaction, 
                        and constantly explore new technologies to grow my skillset. My goal is to create 
                        digital solutions that make a real impact.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          <span className="text-muted-foreground">Frontend: React, TypeScript, Tailwind CSS</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          <span className="text-muted-foreground">Backend: Node.js, Python, PostgreSQL</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          <span className="text-muted-foreground">Cloud: AWS, Docker, Kubernetes</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-64 h-64 rounded-full gradient-primary p-1">
                        <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                          <div className="text-6xl">👨‍💻</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 gradient-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display text-gradient mb-12 text-center">
                What I Do
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {services.map((service) => (
                  <ServiceCard
                    key={service.title}
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display text-gradient mb-12 text-center">
                Featured Projects
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                  <ProjectCard
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    liveUrl={project.liveUrl}
                    githubUrl={project.githubUrl}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 gradient-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display text-gradient mb-8">
                Let's Work Together
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Ready to bring your project to life? Let's discuss how I can help you achieve your goals.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="gradient-card border-border/50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-display text-gradient mb-4">Email Me</h3>
                    <p className="text-muted-foreground mb-4">
                      Drop me a line and I'll get back to you within 24 hours.
                    </p>
                    <p className="text-primary font-medium">jensen.dev@email.com</p>
                  </CardContent>
                </Card>
                <Card className="gradient-card border-border/50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-display text-gradient mb-4">Schedule a Call</h3>
                    <p className="text-muted-foreground mb-4">
                      Let's discuss your project requirements in detail.
                    </p>
                    <Button className="w-full gradient-primary hover:shadow-glow transition-smooth">
                      Book a Meeting
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
