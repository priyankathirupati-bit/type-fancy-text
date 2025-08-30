import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FontStyle } from '@/utils/fontConverter';

interface FontCardProps {
  fontStyle: FontStyle;
  convertedText: string;
}

const FontCard = ({ fontStyle, convertedText }: FontCardProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(convertedText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <Card className="gradient-card border-border/50 transition-smooth hover:shadow-glow hover:scale-[1.02] animate-scale-in">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <h3 className="font-medium text-foreground">{fontStyle.name}</h3>
            <Badge variant="secondary" className="text-xs">
              {fontStyle.category}
            </Badge>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            className="text-muted-foreground hover:text-foreground transition-smooth"
            disabled={!convertedText.trim()}
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-500" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </Button>
        </div>
        
        <div className="bg-background/50 rounded-lg p-3 border border-border/30">
          <p 
            className="text-foreground break-all min-h-[1.5rem] select-all cursor-text"
            style={{ fontFamily: 'inherit', fontSize: 'inherit' }}
            title="Click to select all text"
          >
            {convertedText || 'Type something to see the magic...'}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default FontCard;