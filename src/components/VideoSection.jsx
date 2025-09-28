import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";
import tropicalBackground from "@/assets/tropical-background.png";

const VideoSection = () => {
  return (
    <section className="py-20 bg-gradient-wave">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Luca's <span className="text-primary-light">Leadership Minutes</span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Quick, actionable insights to elevate your leadership game in just minutes.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-hero">
            <CardContent className="p-0 relative">
              <div className="relative h-96 md:h-[500px]">
                <img 
                  src={tropicalBackground} 
                  alt="Tropical leadership setting" 
                  className="w-full h-full object-cover"
                />
                
                {/* Video overlay */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Button size="lg" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 border-2 border-white/50 text-white hover:text-white transition-all duration-300 group">
                    <Play className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" />
                    Watch Episode 01
                  </Button>
                </div>

                {/* Episode label */}
                <div className="absolute bottom-6 left-6 bg-black/70 backdrop-blur-sm rounded-lg px-4 py-2">
                  <p className="text-white font-semibold text-lg">Episode 01</p>
                  <p className="text-white/80 text-sm">Foundations of Leadership</p>
                </div>

                {/* Duration badge */}
                <div className="absolute top-6 right-6 bg-primary/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <p className="text-white text-sm font-medium">5 min read</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <Button variant="secondary" size="lg" className="shadow-soft">
              View All Episodes
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;