import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <section className="py-20 bg-gradient-ocean relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="wave-section h-full w-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Got a <span className="text-primary-light">Question</span> for Luca's Crew?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            We're here to help you on your leadership journey. 
            Reach out and let's start a conversation.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-hero backdrop-blur-sm bg-white/95">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select onValueChange={(value) => setFormData({...formData, subject: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="What can we help you with?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="leadership-coaching">Leadership Coaching</SelectItem>
                      <SelectItem value="team-training">Team Training</SelectItem>
                      <SelectItem value="speaking-engagement">Speaking Engagement</SelectItem>
                      <SelectItem value="consultation">Consultation</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your leadership challenges or goals..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full shadow-soft">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Character decoration */}
        <div className="absolute bottom-0 right-10 w-20 h-20 bg-primary/20 rounded-full animate-bounce-slow"></div>
      </div>
    </section>
  );
};

export default ContactSection;