import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import lesliePhoto from "@/assets/leslie-photo.png";

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="gradient-text">Leslie</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                With over 15 years of experience in organizational development, 
                Leslie brings a unique perspective to leadership training and 
                team transformation.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  Led transformation initiatives for Fortune 500 companies
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  Certified executive coach with proven track record
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  Author of "The Leadership Wave" methodology
                </p>
              </div>
            </div>

            <div className="pt-6">
              <Button size="lg" className="shadow-soft">
                Learn More About Leslie
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Card className="overflow-hidden shadow-card hover:shadow-hero transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={lesliePhoto} 
                    alt="Leslie - Leadership Expert" 
                    className="w-full h-auto object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;