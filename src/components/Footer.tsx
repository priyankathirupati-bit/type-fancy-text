import { Heart, Github, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'Github', icon: Github, href: 'https://github.com' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' }
  ];

  return (
    <footer className="gradient-card border-t border-border/50 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="flex items-center space-x-2 text-muted-foreground">
            <span>© 2024 FancyFonts. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>for text lovers</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-smooth p-2 rounded-lg hover:bg-accent/50"
                  aria-label={link.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Additional Links */}
        <div className="mt-6 pt-6 border-t border-border/20 text-center">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#privacy" className="hover:text-foreground transition-smooth">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-foreground transition-smooth">
              Terms of Service
            </a>
            <a href="#support" className="hover:text-foreground transition-smooth">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;