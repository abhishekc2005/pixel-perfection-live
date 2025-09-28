import { Card, CardContent } from "@/components/ui/card";
import teamCharacters from "@/assets/team-characters.png";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Luca",
      role: "Leadership Coach",
      description: "Passionate about developing next-generation leaders"
    },
    {
      name: "Marcus",
      role: "Strategy Expert", 
      description: "Specializes in organizational transformation"
    },
    {
      name: "Sarah",
      role: "Team Dynamics",
      description: "Expert in building high-performing teams"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Luca</span> & his <span className="gradient-text">Crew</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the passionate team dedicated to transforming leadership 
            across organizations worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 bg-gradient-ocean rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                      {member.name[0]}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{member.name}</h3>
                    <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <img 
                src={teamCharacters} 
                alt="Luca and his team characters" 
                className="w-full max-w-md h-auto animate-float"
              />
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-40 h-8 bg-primary/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;