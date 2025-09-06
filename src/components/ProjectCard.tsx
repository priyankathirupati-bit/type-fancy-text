import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}

const ProjectCard = ({ title, description, technologies, liveUrl, githubUrl, image }: ProjectCardProps) => {
  return (
    <Card className="gradient-card border-border/50 hover:shadow-glow transition-smooth group">
      {image && (
        <div className="aspect-video overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-gradient">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2">
          {liveUrl && (
            <Button size="sm" className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </Button>
          )}
          {githubUrl && (
            <Button size="sm" variant="outline" className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              Code
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;