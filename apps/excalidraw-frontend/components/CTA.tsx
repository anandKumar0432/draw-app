import { ArrowRight, Github, Star } from "lucide-react";
import { Button } from "@repo/ui/button";

export const CTA = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10">
      <div className="container mx-auto max-w-4xl text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Ready to start creating?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of creators who trust our platform for their visual communication needs.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="text-lg px-8 py-6 group">
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 group">
            <Github className="mr-2 h-5 w-5" />
            View on GitHub
          </Button>
        </div>
        
        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground pt-8">
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>Loved by 10k+ creators</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-border"></div>
          <div>No credit card required</div>
          <div className="hidden sm:block w-px h-4 bg-border"></div>
          <div>Start drawing in seconds</div>
        </div>
      </div>
    </section>
  );
};