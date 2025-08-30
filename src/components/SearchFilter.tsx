import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { getCategories } from '@/utils/fontConverter';

interface SearchFilterProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const SearchFilter = ({ 
  searchQuery, 
  onSearchChange, 
  selectedCategory, 
  onCategoryChange 
}: SearchFilterProps) => {
  const categories = getCategories();

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      {/* Search Input */}
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          type="text"
          placeholder="Search font styles..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 gradient-card border-border/50 focus:shadow-glow transition-smooth"
        />
      </div>

      {/* Category Filter */}
      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gradient-card border-border/50 transition-smooth">
              <Filter className="w-4 h-4 mr-2" />
              {selectedCategory || 'All Categories'}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="gradient-card border-border/50">
            <DropdownMenuItem onClick={() => onCategoryChange('')}>
              All Categories
            </DropdownMenuItem>
            {categories.map((category) => (
              <DropdownMenuItem
                key={category}
                onClick={() => onCategoryChange(category)}
              >
                {category}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Active Filter Badge */}
        {selectedCategory && (
          <Badge 
            variant="secondary" 
            className="cursor-pointer transition-smooth hover:bg-destructive hover:text-destructive-foreground"
            onClick={() => onCategoryChange('')}
          >
            {selectedCategory} ×
          </Badge>
        )}
      </div>
    </div>
  );
};

export default SearchFilter;