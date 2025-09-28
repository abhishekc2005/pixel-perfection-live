import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Luca</h3>
            <p className="text-secondary-foreground/80">
              Empowering leaders to create waves of positive change in their organizations.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="p-2 hover:bg-white/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="ghost" className="p-2 hover:bg-white/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="ghost" className="p-2 hover:bg-white/10">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="ghost" className="p-2 hover:bg-white/10">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li><a href="#" className="hover:text-white transition-colors">Leadership Coaching</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Team Training</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Speaking Engagements</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Consultation</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Resources</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li><a href="#" className="hover:text-white transition-colors">Leadership Minutes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Downloads</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>hello@lucaleadership.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Leadership Ave<br />Success City, SC 12345</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-secondary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-foreground/80">
            © 2024 Luca Leadership. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-secondary-foreground/80 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-secondary-foreground/80 hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-secondary-foreground/80 hover:text-white transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;