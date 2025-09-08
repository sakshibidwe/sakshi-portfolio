import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Smartphone, Bot } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Vidhan_Verse",
      description: "An innovative Flutter application integrated with Gemini AI to simplify learning of the Indian Constitution for citizens. Features interactive content, AI-powered explanations, and user-friendly navigation to make constitutional knowledge accessible to everyone.",
      technologies: ["Flutter", "Gemini AI", "Dart", "Firebase", "Material Design"],
      icon: <Smartphone className="h-8 w-8" />,
      highlights: [
        "AI-powered constitutional learning",
        "Interactive user interface",
        "Cross-platform mobile app",
        "Real-time AI assistance"
      ],
      gradient: "bg-gradient-primary"
    },
    {
      title: "Movie Recommendation System",
      description: "A sophisticated machine learning project that implements content-based filtering to recommend movies based on user preferences. Built using Python with advanced ML algorithms and comprehensive data analysis techniques.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "SQL", "Matplotlib"],
      icon: <Bot className="h-8 w-8" />,
      highlights: [
        "Content-based filtering algorithm",
        "Data preprocessing & analysis",
        "User preference modeling",
        "Scalable recommendation engine"
      ],
      gradient: "bg-gradient-accent"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient-primary mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing innovative solutions built with cutting-edge technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group hover:shadow-large transition-all duration-500 hover:scale-105 overflow-hidden"
            >
              <CardHeader className="relative">
                <div className={`absolute inset-0 ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <CardTitle className="flex items-center gap-3 relative z-10">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {project.icon}
                  </div>
                  <span className="text-xl">{project.title}</span>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Key Highlights */}
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge 
                        key={idx}
                        variant="secondary"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </Button>
                  <Button variant="gradient" size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Projects CTA */}
        <div className="text-center mt-16">
          <Card className="inline-block p-8 shadow-soft">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">More Projects Coming Soon</h3>
              <p className="text-muted-foreground mb-4">
                Currently working on exciting new projects in AI and web development
              </p>
              <Button variant="outline">
                <Github className="h-4 w-4 mr-2" />
                View All on GitHub
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;