import { Heart, Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>and</span>
            <Code2 className="h-4 w-4 text-primary" />
            <span>by Sakshi Bidwe</span>
          </div>
          
          <div className="text-muted-foreground text-sm">
            © 2024 Sakshi Babasaheb Bidwe. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;