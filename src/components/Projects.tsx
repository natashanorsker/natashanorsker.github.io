
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categoryColor = 'text-[#6a5080]';

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

const tabTriggerClass = "font-body text-[11px] text-[#6a5080] data-[state=active]:bg-bde-violet data-[state=active]:text-bde-void";

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-bde-void">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="flex items-center mb-4">
              <div className="h-1 w-12 bg-bde-green mr-4"></div>
              <span className="eyebrow text-bde-green">case_studies</span>
              <div className="h-1 w-12 bg-bde-green ml-4"></div>
            </div>
          </div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="font-display font-normal text-bde-violet-soft/[0.55] max-w-2xl mx-auto text-[14px] leading-body">
            Explore some of my recent work and see how I've helped clients overcome challenges and achieve their goals.
          </p>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-10">
            <TabsList className="bg-bde-deep/30 backdrop-blur-sm">
              <TabsTrigger value="all" className={tabTriggerClass}>All</TabsTrigger>
              <TabsTrigger value="client-work" className={tabTriggerClass}>Client Work</TabsTrigger>
              <TabsTrigger value="workshops-strategy" className={tabTriggerClass}>Workshops & Strategy</TabsTrigger>
              <TabsTrigger value="public-speaking" className={tabTriggerClass}>Public Speaking</TabsTrigger>
              <TabsTrigger value="nominations-awards" className={tabTriggerClass}>Nominations & Awards</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="client-work">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter(project => project.category === 'client-work')
                .map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="workshops-strategy">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter(project => project.category === 'workshops-strategy')
                .map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="public-speaking">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter(project => project.category === 'public-speaking')
                .map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="nominations-awards">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter(project => project.category === 'nominations-awards')
                .map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
        
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
    <div className="group overflow-hidden rounded-xl bg-bde-deep border border-bde-violet/10 hover:shadow-lg hover:shadow-bde-violet/[0.12] transition-all">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="p-6">
        <div className="mb-3">
          <span className={`text-[10px] ${categoryColor} font-ui tracking-eyebrow`}>
            {project.category.replace('-', ' ')}
          </span>
        </div>
        
        <h3 className="font-heading font-medium text-base text-bde-frost mb-2">{project.name}</h3>
        <p className="font-display font-normal text-bde-violet-soft/[0.55] text-[13px] leading-relaxed mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="font-ui bg-bde-violet/[0.15] text-bde-violet-dark text-[10px] px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
