
import { Database, Cpu, Code, ChartBar, Globe, Lightbulb } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Data Science",
    icon: Database,
    description: "Transform raw data into actionable insights with advanced analytics, machine learning models, and statistical analysis.",
    features: ["Predictive analytics", "Statistical modeling", "Data visualization"],
  },
  {
    title: "AI Engineering",
    icon: Cpu,
    description: "Build intelligent solutions using cutting-edge artificial intelligence and machine learning technologies.",
    features: ["Machine learning pipelines", "Neural networks", "NLP solutions"],
  },
  {
    title: "Development",
    icon: Code,
    description: "Custom software development with a focus on scalable, efficient, and maintainable code tailored to your needs.",
    features: ["Web applications", "Data pipelines", "API development"],
  },
  {
    title: "Analytics",
    icon: ChartBar,
    description: "Comprehensive data analysis to uncover patterns, trends, and correlations that drive strategic business decisions.",
    features: ["Business intelligence", "KPI dashboards", "Trend analysis"],
  },
  {
    title: "Cloud Solutions",
    icon: Globe,
    description: "Design and implementation of cloud-based architectures for scalable and reliable data processing.",
    features: ["Cloud migration", "Serverless architecture", "Infrastructure as code"],
  },
  {
    title: "Strategy Consulting",
    icon: Lightbulb,
    description: "Strategic guidance on leveraging data and AI to achieve business objectives and competitive advantages.",
    features: ["Data strategy", "AI roadmap", "Digital transformation"],
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-brand-dark">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="flex items-center mb-4">
              <div className="h-1 w-12 bg-brand-green mr-4"></div>
              <span className="text-brand-green font-medium">What I Do</span>
              <div className="h-1 w-12 bg-brand-green ml-4"></div>
            </div>
          </div>
          <h2 className="section-title">Services & Expertise</h2>
          <p className="text-brand-light/70 max-w-2xl mx-auto text-lg">
            Specialized data and technology services to help businesses harness the full potential of their data assets.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-brand-teal/40 border-brand-teal/30 backdrop-blur-sm text-brand-light hover:shadow-lg hover:shadow-brand-green/5 transition-all">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="p-3 bg-brand-green/20 rounded-lg">
                    <service.icon className="text-brand-green" size={24} />
                  </div>
                  <span className="text-brand-green text-sm font-mono">0{index + 1}</span>
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                <CardDescription className="text-brand-light/70">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="h-1 w-1 rounded-full bg-brand-green mr-2"></div>
                      <span className="text-sm text-brand-light/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-brand-green hover:bg-brand-green/10 w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
