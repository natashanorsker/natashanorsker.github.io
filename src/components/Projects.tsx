
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projects = [
  {
    category: "client-work",
    name: "Customer Segmentation Analysis",
    description: "Advanced clustering algorithms to segment customers based on purchase behavior and demographics.",
    tags: ["Python", "Machine Learning", "K-means", "Data Visualization"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  {
    category: "workshops-strategy",
    name: "Predictive Maintenance System",
    description: "AI-powered system to predict equipment failures before they occur, reducing downtime and maintenance costs.",
    tags: ["TensorFlow", "Time Series Analysis", "IoT", "Cloud Computing"],
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=2070&auto=format&fit=crop"
  },
  {
    category: "client-work",
    name: "Real-time Analytics Dashboard",
    description: "Interactive web application for monitoring and analyzing business metrics in real-time.",
    tags: ["React", "D3.js", "Node.js", "WebSockets"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  {
    category: "public-speaking",
    name: "AI Ethics Conference Keynote",
    description: "Delivered keynote address on responsible AI development and implementation at international tech conference.",
    tags: ["AI Ethics", "Public Speaking", "Technology Policy", "Thought Leadership"],
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop"
  },
  {
    category: "nominations-awards",
    name: "Women in Tech Leadership Award",
    description: "Recognized for contributions to advancing women's representation and leadership in the AI and data science fields.",
    tags: ["Women in Tech", "Leadership", "Diversity in AI", "Industry Recognition"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop"
  },
  {
    category: "workshops-strategy",
    name: "Data Strategy Workshop Series",
    description: "Designed and facilitated workshop series helping enterprise clients develop comprehensive data and AI strategies.",
    tags: ["Strategic Planning", "Workshop Facilitation", "Change Management", "Data Governance"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-brand-dark">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="flex items-center mb-4">
              <div className="h-1 w-12 bg-brand-green mr-4"></div>
              <span className="text-brand-green font-medium">Case Studies</span>
              <div className="h-1 w-12 bg-brand-green ml-4"></div>
            </div>
          </div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-brand-light/70 max-w-2xl mx-auto text-lg">
            Explore some of my recent work and see how I've helped clients overcome challenges and achieve their goals.
          </p>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-10">
            <TabsList className="bg-brand-teal/30 backdrop-blur-sm">
              <TabsTrigger value="all" className="text-sm">All</TabsTrigger>
              <TabsTrigger value="client-work" className="text-sm">Client Work</TabsTrigger>
              <TabsTrigger value="workshops-strategy" className="text-sm">Workshops & Strategy</TabsTrigger>
              <TabsTrigger value="public-speaking" className="text-sm">Public Speaking</TabsTrigger>
              <TabsTrigger value="nominations-awards" className="text-sm">Nominations & Awards</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="data-science">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter(project => project.category === 'data-science')
                .map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="ai">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter(project => project.category === 'ai')
                .map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="development">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter(project => project.category === 'development')
                .map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="border-brand-green text-brand-green hover:bg-brand-green/10">
            View All Projects
            <ArrowRight className="ml-2" size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

interface ProjectProps {
  project: {
    category: string;
    name: string;
    description: string;
    tags: string[];
    image: string;
  };
}

const ProjectCard = ({ project }: ProjectProps) => {
  return (
    <div className="group overflow-hidden rounded-xl bg-brand-teal/30 border border-brand-teal/20 hover:shadow-lg hover:shadow-brand-green/5 transition-all">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs text-brand-green font-mono uppercase tracking-wider">
            {project.category.replace('-', ' ')}
          </span>
          <div className="flex items-center">
            <span className="text-brand-light/50 text-xs">View Details</span>
            <ArrowRight size={12} className="ml-1 text-brand-green" />
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-brand-light mb-2">{project.name}</h3>
        <p className="text-brand-light/70 text-sm mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="bg-brand-teal/50 text-brand-light/80 text-xs px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
