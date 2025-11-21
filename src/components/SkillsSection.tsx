import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Database, Brain, BarChart3, Wrench } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Programming Languages",
      skills: [ "Java","Python","SQL","JavaScript"],
      color: "bg-primary/10 text-primary"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Data Structures & Algorithms",
      skills: ["Arrays", "Linked Lists", "Stacks", "Queues","Trees", "Graphs", "Heaps","Searching", "Sorting"],
      color: "bg-accent/10 text-accent"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Databases",
      skills: ["SQL","MySQL","PostgreSQL", "NoSQL", "MongoDB","Firebase"],
      color: "bg-primary-light/10 text-primary-dark"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Version Control",
      skills: ["Git & GitHub","Branching","pull requests","merge conflicts"],
      color: "bg-secondary/20 text-secondary-foreground"
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Frameworks",
      skills: ["Frontend: React, Angular, Flutter (for mobile)","Backend: Node.js, Django, Spring Boot"],
      color: "bg-muted text-muted-foreground"
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Web Development Basics",
      skills: ["HTML","CSS","JavaScript","API understanding (REST)"],
      color: "bg-muted text-muted-foreground"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient-primary mb-4">Technical Skills</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for modern software development and AI
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 group"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <span className="text-lg">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skill Highlights */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <p className="text-muted-foreground">Programming Languages</p>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-accent mb-2">4+</div>
              <p className="text-muted-foreground">Developed Applications</p>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-primary-dark mb-2">10+</div>
              <p className="text-muted-foreground">Technical Tools</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;