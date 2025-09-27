import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import leadershipBook from "@/assets/leadership-book.png";

const StorySection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-accent to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Where <span className="gradient-text">Luca's story</span> began
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every great leader has an origin story. Discover the pivotal moments 
            that shaped Luca's leadership philosophy.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-card hover:shadow-hero transition-all duration-500 group">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold">
                      The Foundation of Leadership
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      It all started with a simple observation: great teams aren't built 
                      by accident. They're crafted through intentional leadership, 
                      trust-building, and a shared vision for success.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      This realization led to the development of proven methodologies 
                      that have transformed thousands of teams worldwide.
                    </p>
                  </div>

                  <div className="pt-4">
                    <Button variant="outline" size="lg" className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      Read the Full Story
                    </Button>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="relative">
                    <img 
                      src={leadershipBook} 
                      alt="Give Second Teams Leadership Book" 
                      className="w-full max-w-xs h-auto animate-float drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-secondary/30 rounded-full blur-lg"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quote section */}
        <div className="mt-16 text-center">
          <blockquote className="text-2xl md:text-3xl font-medium text-foreground max-w-3xl mx-auto italic">
            "Leadership isn't about being in charge. It's about taking care of those in your charge."
          </blockquote>
          <p className="text-muted-foreground mt-4 text-lg">— Luca, Founder</p>
        </div>
      </div>
    </section>
  );
};

export default StorySection;