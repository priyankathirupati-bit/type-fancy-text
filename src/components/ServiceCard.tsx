import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ServiceCard = ({ title, description, icon: Icon }: ServiceCardProps) => {
  return (
    <Card className="gradient-card border-border/50 hover:shadow-glow transition-smooth group">
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg gradient-primary group-hover:shadow-glow transition-smooth">
            <Icon className="w-6 h-6 text-primary-foreground" />
          </div>
          <CardTitle className="text-gradient">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;