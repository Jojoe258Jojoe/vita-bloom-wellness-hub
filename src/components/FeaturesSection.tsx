
import { CheckCircle, Heart, PieChart, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: "Health Tracking",
    description: "Monitor vital signs including heart rate, blood pressure, weight, and more."
  },
  {
    icon: <PieChart className="h-8 w-8 text-primary" />,
    title: "Visual Insights",
    description: "Interactive charts and graphs to visualize your health data and spot trends."
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: "Health Assessment",
    description: "Get a personalized health score and recommendations based on your data."
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "Historical Records",
    description: "Access your complete health history and see how you've improved over time."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 lg:py-24 bg-accent/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Features designed for your health</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            VitaBloom provides powerful tools to help you understand and improve your health with ease.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/80">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
