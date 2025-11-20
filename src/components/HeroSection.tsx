import { Button } from '@/components/ui/button';
import { ArrowDown, Download, ExternalLink } from 'lucide-react';
import profileImageUrl from '@/assets/sakshi-profile.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-hero flex items-center relative overflow-hidden">
      {/* Background Elements & Patterns */}
      <div className="absolute inset-0">
        {/* Animated Geometric Shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full animate-float blur-sm"></div>
        <div className="absolute top-1/3 right-20 w-32 h-32 bg-primary-light/20 rounded-full animate-float blur-sm" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-accent-light/20 rounded-full animate-float blur-sm" style={{ animationDelay: '2s' }}></div>
        
        {/* Professional Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="w-full h-full" style={{ 
            backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Gradient Overlays */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Professional Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full border border-primary-foreground/20 animate-fade-in-up">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-primary-foreground/80 text-sm font-medium">Available for Opportunities</span>
            </div>

            {/* Enhanced Typography */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-lg font-medium text-primary-foreground/80 mb-3 tracking-wide uppercase">
                Computer Science Engineer
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
                <span className="block">Sakshi</span>
                <span className="block">
                  <span className="text-gradient-accent">Bidwe</span>
                </span>
              </h1>
              
              {/* Professional Tagline */}
              <div className="space-y-2 mb-8">
                <h3 className="text-xl md:text-2xl text-primary-foreground/90 font-semibold">
                  Software Developer • AI Enthusiast • Problem Solver
                </h3>
                <div className="w-20 h-1 bg-gradient-accent mx-auto lg:mx-0 rounded-full"></div>
              </div>
              
              <p className="text-lg text-primary-foreground/80 max-w-2xl leading-relaxed">
                Transforming ideas into innovative solutions through 
                <span className="font-semibold text-primary-foreground"> cutting-edge technology</span>, 
                <span className="font-semibold text-primary-foreground"> data-driven insights</span>, and 
                <span className="font-semibold text-primary-foreground"> artificial intelligence</span>. 
                Ready to make an impact in the tech industry.
              </p>
            </div>

            {/* Enhanced Call-to-Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Explore My Work
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur-sm group"
              >
                <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                Download Resume
              </Button>
            </div>

            {/* Professional Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-foreground">2+</div>
                <div className="text-primary-foreground/60 text-sm">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-foreground">5+</div>
                <div className="text-primary-foreground/60 text-sm">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-foreground">Final Year</div>
                <div className="text-primary-foreground/60 text-sm">B.E. Student</div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="flex justify-center lg:justify-start pt-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <button
                onClick={() => scrollToSection('about')}
                className="group flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-all duration-300"
              >
                <span className="text-sm font-medium">Discover More</span>
                <ArrowDown className="h-5 w-5 animate-bounce group-hover:translate-y-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Enhanced Profile Section */}
          <div className="flex justify-center animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative group">
              {/* Professional Frame */}
              <div className="relative">
                {/* Animated Ring */}
                <div className="absolute -inset-6 bg-gradient-accent rounded-full opacity-20 blur-xl animate-pulse group-hover:opacity-30 transition-opacity duration-500"></div>
                
                {/* Professional Border */}
                <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-large border-4 border-primary-foreground/30 group-hover:border-primary-foreground/50 transition-all duration-500 group-hover:scale-105">
                  <img
                    src={profileImageUrl}
                    alt="Sakshi Babasaheb Bidwe - Computer Science Student"
                    className="w-full h-full object-cover scale-125 group-hover:scale-130 transition-transform duration-700"
                    style={{ objectPosition: '50% 15%' }}
                  />
                  {/* Professional Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent group-hover:from-primary/30 transition-all duration-500"></div>
                </div>
                
                {/* Professional Floating Elements */}
                <div className="absolute top-4 right-4 w-4 h-4 bg-green-400 rounded-full border-2 border-primary-foreground animate-pulse shadow-lg"></div>
                <div className="absolute bottom-8 -right-2 px-3 py-1 bg-primary-foreground/95 backdrop-blur-sm rounded-full shadow-lg">
                  <span className="text-xs font-semibold text-primary">CS Engineer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
