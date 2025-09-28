import { Button } from "@/components/ui/button";
import lucaSurfing from "@/assets/luca-surfing.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="wave-section h-full w-full"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between relative z-10">
        <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0">
          <div className="space-y-6 max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Ride the <span className="gradient-text">Wave of</span>
              <br />
              <span className="gradient-text">Leadership</span> with Luca.
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-xl">
              Join Luca's journey to unlock your leadership potential and 
              create waves of positive change in your organization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4 shadow-soft hover:shadow-hero transition-all duration-300">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
        
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative">
            <img 
              src={lucaSurfing} 
              alt="Luca surfing on leadership wave" 
              className="w-full max-w-lg h-auto animate-float drop-shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-pulse"></div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-10 w-20 h-20 bg-secondary/20 rounded-full animate-bounce-slow"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-primary-light/20 rounded-full animate-float"></div>
    </section>
  );
};

export default Hero;