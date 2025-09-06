import { Card, CardContent } from '@/components/ui/card';

interface StatsCardProps {
  number: string;
  label: string;
  icon: string;
}

const StatsCard = ({ number, label, icon }: StatsCardProps) => {
  return (
    <Card className="gradient-card border-border/50 hover:shadow-glow transition-smooth text-center">
      <CardContent className="p-6">
        <div className="text-2xl mb-2">{icon}</div>
        <div className="text-3xl font-display text-gradient mb-2">{number}</div>
        <div className="text-muted-foreground text-sm">{label}</div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;