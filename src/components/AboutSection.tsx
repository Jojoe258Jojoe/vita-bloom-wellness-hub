
import { cn } from "@/lib/utils";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-green-50 parallax-section -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden h-[400px] shadow-xl">
              <img 
                src="/placeholder.svg" 
                alt="About VitaBloom" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-block p-2 px-4 bg-green-100 rounded-full text-green-700 font-medium text-sm">
              About VitaBloom
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">Your personal health companion</h2>
            <p className="text-muted-foreground">
              VitaBloom was created with a simple mission: to make health tracking accessible, insightful, and actionable for everyone.
            </p>
            <div className="space-y-4">
              {[
                "Built by healthcare professionals and technology experts",
                "HIPAA-compliant and secure data protection",
                "Personalized insights based on your unique health profile",
                "Continuous updates with the latest health research"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className={cn("rounded-full p-1 border", "bg-primary/10 border-primary/30")}>
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="3" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
