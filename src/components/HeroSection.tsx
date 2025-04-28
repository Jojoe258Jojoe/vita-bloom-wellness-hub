
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-50/70 to-green-100/70 parallax-section -z-10" />

      <div className="container mx-auto px-4 py-24 lg:py-32 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block p-2 px-4 bg-green-100 rounded-full text-green-700 font-medium text-sm mb-4">
              ✨ Your health journey starts here
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Take control of your{" "}
              <span className="text-primary">health</span> today
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-lg">
              Track your vital signs, manage medications, and get personalized insights to help you live your healthiest life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup">
                <Button size="lg" className="text-base font-medium">
                  Start Tracking
                </Button>
              </Link>
              <Link to="/#features">
                <Button size="lg" variant="outline" className="text-base font-medium">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden glass-card animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-br from-green-200/20 to-green-400/20" />
            <img
              src="/placeholder.svg"
              alt="Health Dashboard Preview"
              className="object-cover w-full h-full opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
