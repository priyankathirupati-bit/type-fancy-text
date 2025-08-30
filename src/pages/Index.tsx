import { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FontCard from '@/components/FontCard';
import SearchFilter from '@/components/SearchFilter';
import { getFontStyles, convertText, searchStyles, filterStylesByCategory } from '@/utils/fontConverter';

const Index = () => {
  const [inputText, setInputText] = useState('Hello World!');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  
  const allFontStyles = getFontStyles();
  
  // Filter font styles based on search and category
  const filteredStyles = (() => {
    let styles = allFontStyles;
    
    if (searchQuery) {
      styles = searchStyles(searchQuery);
    }
    
    if (selectedCategory) {
      styles = styles.filter(style => style.category === selectedCategory);
    }
    
    return styles;
  })();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <main className="pt-16">
        <section id="home" className="relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 gradient-primary opacity-10"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-primary mr-3 animate-glow" />
                <h1 className="text-4xl md:text-6xl font-display text-gradient">
                  Fancy Font Generator
                </h1>
                <Sparkles className="w-8 h-8 text-primary ml-3 animate-glow" />
              </div>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Transform your text with stylish Unicode fonts. Type, convert, and copy beautiful text instantly!
              </p>
            </div>

            {/* Text Input */}
            <Card className="max-w-4xl mx-auto mb-12 gradient-card border-border/50 shadow-elegant">
              <CardHeader>
                <CardTitle className="text-center text-2xl font-display text-gradient">
                  Type Your Text Below
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Start typing to see the magic happen..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="min-h-[120px] text-lg gradient-card border-border/50 focus:shadow-glow transition-smooth resize-none"
                />
              </CardContent>
            </Card>

            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto mb-8">
              <SearchFilter
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </div>

            {/* Results Count */}
            <div className="max-w-4xl mx-auto mb-6">
              <p className="text-muted-foreground text-center">
                Showing {filteredStyles.length} font style{filteredStyles.length !== 1 ? 's' : ''}
                {searchQuery && ` for "${searchQuery}"`}
                {selectedCategory && ` in ${selectedCategory}`}
              </p>
            </div>

            {/* Font Grid */}
            <div className="max-w-6xl mx-auto">
              {filteredStyles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredStyles.map((fontStyle) => (
                    <FontCard
                      key={fontStyle.id}
                      fontStyle={fontStyle}
                      convertedText={convertText(inputText, fontStyle.id)}
                    />
                  ))}
                </div>
              ) : (
                <Card className="max-w-md mx-auto gradient-card border-border/50">
                  <CardContent className="p-8 text-center">
                    <p className="text-muted-foreground mb-4">No font styles found</p>
                    <p className="text-sm text-muted-foreground">
                      Try adjusting your search query or category filter
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 gradient-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display text-gradient mb-8">
                About Fancy Fonts
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="gradient-card border-border/50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-display text-gradient mb-4">Unicode Magic</h3>
                    <p className="text-muted-foreground">
                      Our generator uses Unicode characters to create stylish text that works everywhere - 
                      social media, messaging apps, and websites.
                    </p>
                  </CardContent>
                </Card>
                <Card className="gradient-card border-border/50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-display text-gradient mb-4">Easy to Use</h3>
                    <p className="text-muted-foreground">
                      Simply type your text, choose from dozens of styles, and copy with one click. 
                      No downloads or installations required.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display text-gradient mb-8">
                Get in Touch
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Have suggestions for new font styles or found a bug? We'd love to hear from you!
              </p>
              <Card className="gradient-card border-border/50">
                <CardContent className="p-8">
                  <p className="text-muted-foreground">
                    Email us at: <span className="text-primary font-medium">hello@fancyfonts.com</span>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
