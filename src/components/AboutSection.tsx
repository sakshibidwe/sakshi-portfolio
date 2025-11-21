import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Heart, Users, Lightbulb, Target } from 'lucide-react';
const AboutSection = () => {
  const softSkills = [{
    icon: <Heart className="h-5 w-5" />,
    skill: "Communication",
    description: "Clear and effective interaction"
  }, {
    icon: <Users className="h-5 w-5" />,
    skill: "Teamwork,Team Collaboration",
    description: "Collaborative problem solving"
  }, {
    icon: <Lightbulb className="h-5 w-5" />,
    skill: "Leadership",
    description: "Inspiring and guiding others"
  }, {
    icon: <Target className="h-5 w-5" />,
    skill: "Problem-Solving,Time Management",
    description: "Analytical thinking approach"
  }];
  return <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient-primary mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate computer science student with a drive for innovation and excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">My Journey</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                As a final-year undergraduate student in Computer Science and Engineering,
                I am highly motivated to apply my technical and analytical skills in real-world scenarios.
                My passion lies in the intersection of technology, software development, and artificial intelligence.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I believe in continuous learning and am always eager to take on new challenges 
                that push the boundaries of what's possible with technology. My goal is to contribute 
                to innovative projects that make a meaningful impact.
              </p>
            </div>

            {/* Education */}
            <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <GraduationCap className="h-5 w-5" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-semibold text-lg">Bachelor of Engineering</h4>
                  <p className="text-muted-foreground">Computer Science & Engineering</p>
                  <p className="text-muted-foreground">Deogiri Institute of Engineering and Management Studies</p>
                  <p className="text-sm text-primary font-medium">Final Year • Expected 2026</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Core Strengths</h3>
            <div className="grid gap-4">
              {softSkills.map((item, index) => <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{item.skill}</h4>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;