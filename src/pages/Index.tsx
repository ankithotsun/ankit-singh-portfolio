
import React from "react";
import { Mail, Phone, Linkedin, ExternalLink, MapPin, Calendar, Users, Target, Award, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const { toast } = useToast();
  
  const projects = [
    {
      title: "LG CNS (Digital Transformation & Cloud Integration)",
      description: "A South Korean global IT, AI, and cloud services provider focused on digital transformation solutions.",
      achievement: "Delivered financial and milestone forecasts that improved billing accuracy by 25% and enhanced stakeholder adoption of sprint metrics.",
      technologies: ["Sprint Planning", "Risk Management", "Financial Forecasting", "Resource Utilization"],
      icon: Award,
      link: "https://lgcns.com"
    },
    {
      title: "Agalia (Healthcare SaaS)",
      description: "A nursing and staffing management platform for healthcare facilities in the U.S.",
      achievement: "Streamlined delivery cycles by 20% by enhancing collaboration between QA, product, and design teams.",
      technologies: ["Sprint Planning", "UAT", "Stakeholder Management"],
      icon: Users,
      link: "https://facility.goagalia.com/"
    },
    {
      title: "Oklahoma University EdTech App",
      description: "An exam-prep app for firefighter students to practice through flashcards, audio, and tests.",
      achievement: "Delivered MVP within 8 weeks while maintaining 100% requirement traceability.",
      technologies: ["Jira", "Release Management", "Academic Coordination"],
      icon: Target,
      link:"https://www.ifsta.org/shop/product-categories/ifsta-apps"
    },
    {
      title: "IvyCap Ventures (Investor Engagement Platform)",
      description: "A portfolio and investor reporting system for a leading Indian VC firm.",
      achievement: "Reduced reporting turnaround by ~25% by maintaining risk registers and optimizing backlog prioritization.",
      technologies: ["Risk Management", "Jira Backlog Grooming", "Reporting Dashboards"],
      icon: TrendingUp,
      link: "https://ivycapventures.com/"
    },
    {
      title: "Blueverse (Automation Platform)",
      description: "A multi-region app for automated car/bike cleaning services.",
      achievement: "Enabled PMO-level reporting structure that improved SLA visibility by 30%.",
      technologies: ["PMO Reporting", "Milestone Tracking", "Process Management"],
      icon: TrendingUp,
      link: "https://blueverseindia.com/"
    },
    {
      title: "Bitetime (Catering Marketplace)",
      description: "A U.S.-based catering service platform to manage vendor events and real-time bookings.",
      achievement: "Helped reduce onboarding cycle for new vendors by 25% through better process mapping.",
      technologies: ["Project Charter", "UAT Documentation", "Process Mapping"],
      icon: Award,
      link: "https://bitetime.com/"
    },
    {
      title: "CEEW (Research & Policy Platforms)",
      description: "Digital platforms and microsites to publish research and policy event content.",
      achievement: "Ensured 100% compliance with publishing deadlines by implementing SOPs and managing sprint deliveries.",
      technologies: ["Requirement Gathering", "Sprint Planning", "SOP Documentation"],
      icon: Target,
      link: "https://www.ceew.in/"
    },
    {
      title: "Divoom (E-commerce & Companion App)",
      description: "A global audio brand's e-commerce and mobile app for pixel-art Bluetooth devices.",
      achievement: "Reduced post-release defects by 18% by driving UAT cycles and aligning releases with product launches.",
      technologies: ["Sprint Planning", "UAT", "Release Coordination"],
      icon: Users,
      link: "https://divoom.com/"
    }
  ];

  const skills = [
    "Project Coordination", "PMO Operations", "Agile & Scrum Practices",
    "Sprint Documentation", "Client & Team Onboarding", "Utilization Tracking",
    "Jira", "MS Excel", "Google Sheets & Excel Automation", "UAT & Risk Logs",
    "Stakeholder Communication", "SOP Repository Management", "SLA Reporting",
    "Risk & Compliance Management", "Budgeting & Revenue Forecasting",
    "Resource Allocation & Team Utilization", "Backlog Grooming & Prioritization",
    "Financial & Milestone Reporting", "Cross-Functional Team Leadership",
    "AI-Driven Project Analytics"
  ];

  const skillTrivia = {
    "Project Coordination": "🎯 Fun fact: The Great Wall of China was the world's largest project coordination effort - spanning 13,000+ miles!",
    "PMO Operations": "📊 Did you know? NASA's PMO managed 400,000+ contractors for the Apollo program!",
    "Agile & Scrum Practices": "🏃‍♂️ Scrum comes from rugby - where teams work together to move the ball forward!",
    "Sprint Documentation": "📝 Sprint documentation is like a recipe - clear instructions prevent project disasters!",
    "Client & Team Onboarding": "👥 Onboarding is like a first date - first impressions last forever!",
    "Utilization Tracking": "📈 Companies with good utilization tracking are 30% more profitable!",
    "Jira": "🦘 Jira was named after 'Gojira' (Godzilla) - because it's powerful enough to handle any project!",
    "MS Excel": "📊 Excel has 1,048,576 rows - enough to track every project ever!",
    "Google Sheets & Excel Automation": "🤖 Automation saves 6 hours per week - that's 312 hours per year!",
    "UAT & Risk Logs": "🛡️ UAT catches 85% of bugs before they reach users!",
    "Stakeholder Communication": "🗣️ 90% of project success depends on effective communication!",
    "SOP Repository Management": "📚 SOPs are like a company's DNA - they define how things get done!",
    "SLA Reporting": "⏰ SLAs are promises with deadlines - keeping them builds trust!",
    "Risk & Compliance Management": "⚠️ Risk management is like playing chess - always think 3 moves ahead!",
    "Budgeting & Revenue Forecasting": "💰 Accurate forecasting is like having a crystal ball for business!",
    "Resource Allocation & Team Utilization": "🎯 Right person, right time, right task = project success!",
    "Backlog Grooming & Prioritization": "🧹 A well-groomed backlog is like a clean kitchen - everything runs smoothly!",
    "Financial & Milestone Reporting": "📊 Numbers tell stories - good reporting turns data into decisions!",
    "Cross-Functional Team Leadership": "🤝 Leading diverse teams is like conducting an orchestra - harmony creates magic!",
    "AI-Driven Project Analytics": "🤖 AI predicts project success with 95% accuracy - the future is now!"
  };

  const handleSkillClick = (skill: string) => {
    toast({
      title: skill,
      description: skillTrivia[skill as keyof typeof skillTrivia] || "Skill mastered!",
      duration: 3000,
    });
  };

  const achievements = [
    "Delivered 10+ successful client-facing software products across US markets",
    "Reduced delivery cycle times by 15–20% via workflow automation and reporting alignment",
    "Ensured 100% onboarding compliance and tool access readiness for new team members",
    "Created PMO dashboards that improved visibility into resource utilization and SLA adherence",
    "Managed 45+ engineers across delivery operations with 100% compliance rate",
    "Improved billing accuracy by 25% through financial forecasting and milestone tracking"
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 4 >= projects.length ? 0 : prev + 4));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 4 < 0 ? Math.max(0, projects.length - 4) : prev - 4));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-slate-800">Ankit Singh</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#experience" className="text-slate-600 hover:text-blue-600 transition-colors">Experience</a>
              <a href="#projects" className="text-slate-600 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-slate-800 mb-6 animate-fade-in">
              Ankit Singh
            </h1>
            <h2 className="text-2xl text-blue-600 font-semibold mb-6">
              Project Coordinator | PMO
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Detail-oriented and process-driven Project Coordinator with 3 years of experience in software delivery, 
              Agile facilitation, and structured process management. Proven track record of leading 10+ client-facing 
              projects and supporting cross-functional teams across healthcare, education, and services domains.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button variant="outline" className="flex items-center gap-2" asChild>
                <a href="tel:+919910123644">
                  <Phone className="w-4 h-4" />
                  +91 9910123644
                </a>
              </Button>
              <Button variant="outline" className="flex items-center gap-2" asChild>
                <a href="mailto:ankitsingh.2602000@gmail.com">
                  <Mail className="w-4 h-4" />
                  ankitsingh.2602000@gmail.com
                </a>
              </Button>
              <Button variant="outline" className="flex items-center gap-2" asChild>
                <a href="https://linkedin.com/in/ankitsingh00" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" className="flex items-center gap-2" asChild>
                <a href="https://ankitsinghpm.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  Portfolio
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-2 text-slate-600">
              <MapPin className="w-4 h-4" />
              <span>New Delhi, India</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
            Professional Experience
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="border-l-4 border-l-purple-500">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl text-slate-800">Project Coordinator</CardTitle>
                    <CardDescription className="text-lg font-medium text-purple-600">
                      <a href="https://encora.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        Encora Digital LLP
                      </a>
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">Aug 2025 – Present</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4 italic">
                  A global digital engineering services and innovation partner specializing in cloud-first, data-first, AI-first solutions.
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li>• Managing a team of 45+ engineers across delivery operations, ensuring compliance.</li>
                  <li>• Preparing detailed tempo charts, invoice generation, account management reports, item journals, burndowns, and budget/revenue forecasts.</li>
                  <li>• Ensuring alignment between financial tracking and project deliverables and facilitating cross-functional team readiness.</li>
                  <li>• Managed risk logs, compliance artifacts, and resource utilization tracking to ensure seamless project delivery.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl text-slate-800">Project Coordinator</CardTitle>
                    <CardDescription className="text-lg font-medium text-blue-600">
                      <a href="https://nickelfox.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        Nickelfox Technologies
                      </a>
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">Dec 2023 – Aug 2025</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4 italic">
                  A technology solutions company delivering scalable digital products and consulting services.
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li>• Led 10+ client-facing projects with cross-functional teams across SaaS, edtech, and service industries.</li>
                  <li>• Oversaw delivery activities including sprint facilitation, ticket management, UAT coordination, and milestone reporting.</li>
                  <li>• Maintained compliance on documentation, financial summaries, and team onboarding records.</li>
                  <li>• Interfaced with client-side PMO units for alignment on performance reports, risk flags, and legal/billing milestones.</li>
                  <li>• Conducted PMO-level monitoring on deliverables quality, SOP versioning, and asset access management.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl text-slate-800">Process/Project Coordinator</CardTitle>
                    <CardDescription className="text-lg font-medium text-green-600">
                      <a href="https://appinventiv.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        Appinventiv Technologies
                      </a>
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">Jun 2022 – Dec 2023</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4 italic">
                  A digital transformation agency specializing in mobile and web solutions.
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li>• Focused on internal process coordination, documentation control, and workflow optimization across multiple teams.</li>
                  <li>• Owned project workflows, backlog management, sprint planning, and communication bridges between internal units.</li>
                  <li>• Managed reporting templates, SOP maintenance, and sprint retrospection insights.</li>
                  <li>• Created automated dashboards for leadership to track resource utilization and delivery health.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
            Key Projects
          </h2>
          
          <div className="relative max-w-6xl mx-auto">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white border border-slate-200 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Previous projects"
            >
              <ChevronLeft className="w-6 h-6 text-slate-600" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white border border-slate-200 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Next projects"
            >
              <ChevronRight className="w-6 h-6 text-slate-600" />
            </button>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8 px-12">
              {projects.slice(currentSlide, currentSlide + 4).map((project, index) => (
                <Card key={currentSlide + index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <project.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg text-slate-800">{project.title}</CardTitle>
                          <CardDescription className="mt-2">{project.description}</CardDescription>
                        </div>
                      </div>
                    </a>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
                        <p className="text-sm text-green-800 font-medium">Achievement:</p>
                        <p className="text-sm text-green-700 mt-1">{project.achievement}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(projects.length / 4) }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i * 4)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    i === Math.floor(currentSlide / 4) 
                      ? 'bg-blue-600 scale-125' 
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
            Skills & Expertise
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <Badge 
                  key={index} 
                  className="py-2 px-4 text-sm bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors cursor-pointer"
                  onClick={() => handleSkillClick(skill)}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
            Key Achievements
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {achievements.slice(0, 3).map((achievement, index) => (
                <Card key={index} className="border-l-4 border-l-yellow-400">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Award className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                      <p className="text-slate-700">{achievement}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {achievements.slice(3, 5).map((achievement, index) => (
                <Card key={index + 3} className="border-l-4 border-l-yellow-400">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Award className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                      <p className="text-slate-700">{achievement}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
            Education & Certifications
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Master of Computer Applications (MCA)</h3>
                <p className="text-blue-600 font-medium">
                  <a href="https://www.cuchd.in/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Chandigarh University
                  </a>
                </p>
                <p className="text-slate-600">2024 – Present | CGPA: 9.0 / 10 (90%)</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Master of Business Administration (MBA)</h3>
                <p className="text-blue-600 font-medium">
                  <a href="https://www.nmims.edu/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Narsee Monjee Institute of Management Studies
                  </a>
                </p>
                <p className="text-slate-600">2021 – 2023 | CGPA: 8.3 / 10 (83%)</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Bachelor of Business Administration (BBA)</h3>
                <p className="text-blue-600 font-medium">
                  <a href="https://dme.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    GGSIPU – Delhi Metropolitan Education
                  </a>
                </p>
                <p className="text-slate-600">2018 – 2021 | CGPA: 7.9 / 10 (79%)</p>
              </CardContent>
            </Card>

            <Separator className="my-8" />

            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Certifications</h3>
              <div className="space-y-2">
                <Button 
                  variant="outline" 
                  className="mr-4 py-2 px-4 bg-green-100 text-green-800 border-green-300 hover:bg-green-200 hover:border-green-400 transition-colors"
                  asChild
                >
                  <a href="https://drive.google.com/drive/u/0/folders/1HXRJF3mNiz7YOdhwNEGPpvi3LTJ-l47x" target="_blank" rel="noopener noreferrer">
                    Google Project Management Certificate – Coursera
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  className="py-2 px-4 bg-green-100 text-green-800 border-green-300 hover:bg-green-200 hover:border-green-400 transition-colors"
                  asChild
                >
                  <a href="https://drive.google.com/drive/u/0/folders/1HXRJF3mNiz7YOdhwNEGPpvi3LTJ-l47x" target="_blank" rel="noopener noreferrer">
                    Agile with Atlassian Jira – Coursera
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Let's Connect
          </h2>
          
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-slate-300 mb-8">
              Ready to discuss project management opportunities or collaboration? 
              I'm always open to new challenges and connections.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                <a href="mailto:ankitsingh.2602000@gmail.com" className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Send Email
                </a>
              </Button>
              
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-800 hover:bg-slate-700 hover:text-white" asChild>
                <a href="https://linkedin.com/in/ankitsingh00" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn Profile
                </a>
              </Button>
              
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-800 hover:bg-slate-700 hover:text-white" asChild>
                <a href="tel:+919910123644" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 Ankit Singh. All rights reserved.</p>
          <p className="mt-2 text-sm">Project Coordinator | PMO | New Delhi, India</p>
        </div>
      </footer>
      <Toaster />
    </div>
  );
};

export default Index;
