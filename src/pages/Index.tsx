
import { Mail, Phone, Linkedin, ExternalLink, MapPin, Calendar, Users, Target, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const projects = [
    {
      title: "Agalia (Healthcare SaaS)",
      description: "A nursing and staffing management platform for healthcare facilities in the U.S.",
      achievement: "Streamlined delivery cycles by 20% by enhancing collaboration between QA, product, and design teams.",
      technologies: ["Sprint Planning", "UAT", "Stakeholder Management"],
      icon: Users
    },
    {
      title: "Oklahoma University EdTech App",
      description: "An exam-prep app for firefighter students to practice through flashcards, audio, and tests.",
      achievement: "Delivered MVP within 8 weeks while maintaining 100% requirement traceability.",
      technologies: ["Jira", "Release Management", "Academic Coordination"],
      icon: Target
    },
    {
      title: "Blueverse (Automation Platform)",
      description: "A multi-region app for automated car/bike cleaning services.",
      achievement: "Enabled PMO-level reporting structure that improved SLA visibility by 30%.",
      technologies: ["PMO Reporting", "Milestone Tracking", "Process Management"],
      icon: TrendingUp
    },
    {
      title: "Bitetime (Catering Marketplace)",
      description: "A U.S.-based catering service platform to manage vendor events and real-time bookings.",
      achievement: "Helped reduce onboarding cycle for new vendors by 25% through better process mapping.",
      technologies: ["Project Charter", "UAT Documentation", "Process Mapping"],
      icon: Award
    }
  ];

  const skills = [
    "Project Coordination", "PMO Operations", "Agile & Scrum Practices",
    "Sprint Documentation", "Client & Team Onboarding", "Utilization Tracking",
    "Jira", "MS Excel", "Google Sheets Automation", "UAT & Risk Logs",
    "Stakeholder Communication", "SOP Repository Management", "SLA Reporting"
  ];

  const achievements = [
    "Delivered 10+ successful client-facing software products across US markets",
    "Reduced delivery cycle times by 15–20% via workflow automation and reporting alignment",
    "Ensured 100% onboarding compliance and tool access readiness for new team members",
    "Created PMO dashboards that improved visibility into resource utilization and SLA adherence"
  ];

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
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl text-slate-800">Project Coordinator</CardTitle>
                    <CardDescription className="text-lg font-medium text-blue-600">
                      Nickelfox Technologies
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">Dec 2023 – Present</span>
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
                      Appinventiv Technologies
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
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <project.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg text-slate-800">{project.title}</CardTitle>
                      <CardDescription className="mt-2">{project.description}</CardDescription>
                    </div>
                  </div>
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
                <Badge key={index} className="py-2 px-4 text-sm bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors">
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
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
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
                <p className="text-blue-600 font-medium">Chandigarh University</p>
                <p className="text-slate-600">2023 – Present | CGPA: 9.0 / 10 (90%)</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Master of Business Administration (MBA)</h3>
                <p className="text-blue-600 font-medium">Narsee Monjee Institute of Management Studies</p>
                <p className="text-slate-600">2021 – 2023 | CGPA: 8.3 / 10 (83%)</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Bachelor of Business Administration (BBA)</h3>
                <p className="text-blue-600 font-medium">GGSIPU – Delhi Metropolitan Education</p>
                <p className="text-slate-600">2018 – 2021 | CGPA: 7.9 / 10 (79%)</p>
              </CardContent>
            </Card>

            <Separator className="my-8" />

            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Certifications</h3>
              <div className="space-y-2">
                <Badge className="mr-4 py-2 px-4 bg-green-100 text-green-800">
                  Google Project Management Certificate – Coursera
                </Badge>
                <Badge className="py-2 px-4 bg-green-100 text-green-800">
                  Agile with Atlassian Jira – Coursera
                </Badge>
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
              
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700" asChild>
                <a href="https://linkedin.com/in/ankitsingh00" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn Profile
                </a>
              </Button>
              
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700" asChild>
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
          <p>&copy; 2024 Ankit Singh. All rights reserved.</p>
          <p className="mt-2 text-sm">Project Coordinator | PMO | New Delhi, India</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
