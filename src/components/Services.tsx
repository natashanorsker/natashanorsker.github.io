
import { BarChart2, Cpu, Code, Sparkles, Mic, ClipboardList } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Freelance Data Scientist",
    icon: BarChart2,
    description: "Machine learning expertise – embedded in your team. I work as an integrated part of your team, contributing as a data scientist with an ML engineering perspective. From building models to deploying them, I bring hands-on AI experience and thrive in cross-functional environments – remote or in-house, local or global.",
    features: ["End-to-end ML and AI workflows: modelling, evaluation, deployment", "Experience collaborating with engineers, analysts, designers & PMs", "Builds robust, testable code with best practices in MLOps and DevOps"],
  },
  {
    title: "AI Use Case Validation & Discovery",
    icon: Sparkles,
    description: "Clarify where AI adds value – and how to get started. I help businesses translate AI curiosity into concrete opportunities. Through structured workshops and technical insight, I uncover the use cases worth building – and help avoid those that aren't.",
    features: ["Identify valuable, data-driven AI use cases", "Assess feasibility from both business and tech angles", "Deliver a prioritized shortlist of validated AI use cases and actionable next steps"],
  },
  {
    title: "Public Speaking & Keynotes",
    icon: Mic,
    description: "Inspiring, engaging talks on AI, innovation, and real-world impact. I speak at conferences, company events, and podcasts about how AI works in the real world – and why it matters. My talks combine technical depth with energy, clarity, and a no-nonsense approach that cuts through the hype.",
    features: ["Experience speaking to audiences from 20 to 650+, across diverse industries and roles", "Topics include: applied AI, generative models, women in tech, and digital innovation", "Talks tailored to your audience – from engineers to executive leadership"],
  },
  {
    title: "Workshops & Training",
    icon: ClipboardList,
    description: "Practical, engaging learning sessions for teams and leaders. I design and facilitate workshops that help teams understand, explore, and apply AI in their own context. Whether you're getting started or looking to deepen your internal capabilities, I create space for learning, discussion, and momentum.",
    features: ["Hands-on workshops tailored to your team's goals, level, and industry", "Formats from 2-hour sessions to full-day deep dives", "Ideal for product teams, tech departments, leadership groups, or cross-functional audiences"],
  },
  {
    title: "End-to-End AI Solutions",
    icon: Cpu,
    description: "From idea to production. I take on complete AI projects – from initial scoping and model development to deployment and handover. Whether you're building your first AI solution or scaling an existing one, I bring a structured, technically grounded approach that delivers.",
    features: ["Full-cycle development: scoping, modelling, evaluation, and tuning", "Deployment-ready code built with MLOps best practices", "Clear documentation, smooth handover, and optional support"],
  },
  {
    title: "Full-Stack Development",
    icon: Code,
    description: "Web, APIs, and deployment – built for real-world use. I design and build full-stack applications that support data and AI workflows. From custom websites to internal tools and API services, I deliver fast, scalable, and maintainable solutions that get things running.",
    features: ["Frontend and backend development for web-based tools", "API design and integration for ML models and data services", "Deployment and delivery pipelines (cloud-based or custom)"],
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
            From idea to implementation – I help businesses explore, validate, and build AI through workshops, strategic guidance, and hands-on development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              id={`service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="bg-brand-teal/40 border-brand-teal/30 backdrop-blur-sm text-brand-light hover:shadow-lg hover:shadow-brand-green/5 transition-all"
              style={{ scrollMarginTop: '100px' }}
            >
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
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex">
                      <div className="h-1 w-1 rounded-full bg-brand-green mr-2 flex-shrink-0 mt-1.5"></div>
                      <span className="text-sm text-brand-light/80 break-words">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              {/* Removed CardFooter with Learn More button */}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
