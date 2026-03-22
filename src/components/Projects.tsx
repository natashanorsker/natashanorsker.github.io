
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categoryColor = 'text-[#6a5080]';

const projects = [
  {
    category: "projects",
    type: "client work",
    name: "AI Content Platform for Pharmaceutical Marketing",
    subtitle: "Anthill · Arcane · 2024–present",
    description: "Embedded AI consultant on Arcane — Anthill's production AI platform for pharmaceutical and life science marketing teams. The platform enables compliant content authoring, multilingual generation across 130+ languages, automated citations from approved medical sources, and AI-assisted email production — all within regulatory guardrails built on AWS Bedrock.",
    quote: "Working across the full content pipeline — prompt engineering for pharmaceutical compliance, multilingual generation, RAG over approved medical documents, and AI image generation with brand-compliant styles. Building systems where the AI understands not just what to write, but what it is and isn't allowed to say in a heavily regulated industry.",
    tags: ["AWS Bedrock", "Pharmaceutical AI", "Prompt Engineering", "RAG", "Multilingual", "Production ML"],
    image: "/images/anthill.png",
    link: { label: "Anthill", url: "https://www.anthill.technology/arcane" }
  },
  {
    category: "projects",
    type: "client work",
    name: "Automated CO₂ Emissions Tracking from Supplier Invoices",
    subtitle: "Todai · 2022–2024",
    description: "Built an end-to-end CO₂ emissions pipeline for a Danish B2B services marketplace — automatically calculating the carbon footprint of every office service purchase across their client base. The system works across the full chain: extracting and classifying product data from unstructured supplier documents, matching those products to emission databases using LLM embeddings, converting to standardised kg-equivalent units, and allocating total CO₂ responsibility back to each company per vendor per month.",
    quote: "The hard part was not calculating emissions — it was the matching. Invoice line items are messy, inconsistent, and written by hundreds of different vendors. Climate databases like Klimadatabasen describe products in precise scientific terms. Getting those two worlds to meet reliably, at scale, across all product categories, is where the real engineering challenge lies. Driven in part by EU regulation that simultaneously makes CO₂ reporting mandatory and technically complex.",
    tags: ["OCR", "LLM Embeddings", "Climate Data", "EU Compliance", "CO₂ Tracking", "NLP"],
    image: "/images/co2_invoice_emission.png"
  },
  {
    category: "projects",
    type: "client work",
    name: "Product Taxonomy & Deduplication for a Global Social Shopping Platform",
    subtitle: "Todai · Social Shopping Client · 2022–2024",
    description: "Worked on the product classification and taxonomy system for a rapidly scaling social shopping platform — users can add any product from any website in the world, meaning an enormous variety of inconsistently structured product data needs to be classified into one unified taxonomy tree. The core challenge: designing a taxonomy comprehensive enough to cover everything people wish for, balanced enough to be useful for data insights, and robust enough to handle products that genuinely belong to multiple categories at once.",
    quote: "Three compounding problems: natural class imbalance — far more people wish for makeup than specialist hardware, so perfect balance is neither achievable nor desirable; products that genuinely fall under multiple taxonomy branches simultaneously; and recognising that the same product appearing on different retailer websites is actually one item, despite completely different titles, images, and pricing. Solved using a combination of ML models and LLMs.",
    tags: ["Taxonomy Classification", "Product Deduplication", "NLP", "LLMs", "E-commerce", "Data Aggregation"],
    image: "/images/taxonomy_tree.png"
  },
  {
    category: "projects",
    type: "client work",
    name: "Insurance-Compliant Product Matching for Contents Claims",
    subtitle: "Todai · InsurTech Client · 2022–2024",
    description: "Built a production ML system for a leading Danish InsurTech company — given any product in the world, the model returns the top three closest matches from a curated product database, ensuring every suggestion complies with the customer's insurance policy rules.",
    quote: "Two compounding challenges made this technically hard. First: the product database spans thousands of product types, each with different attributes, features, and compliance rules — the model had to understand what makes a valid match for a kettle versus a laptop versus a sofa. Second: as a data aggregator, the client ingests product data from sources all over the world — meaning the incoming data was massively inconsistent in structure, format, and completeness. The system had to work reliably across all of it.",
    tags: ["Product Matching", "Insurance Tech", "Semantic Search", "Data Aggregation", "Compliance", "Production ML"],
    image: "/images/scalepoint.png"
  },
  {
    category: "projects",
    type: "research",
    name: "Detecting Online Predatory Behaviour Using Graph Neural Networks",
    subtitle: "DTU · Bachelor Thesis · January 2023 · Grade 12",
    description: "Bachelor thesis investigating whether unsupervised Graph Neural Networks could detect sexual predators on online gaming platforms — without relying on linguistic analysis. Developed in collaboration with Aiba, a company specialising in Author Input Behaviour Analysis, and supervised by DTU and NTNU. Examined social network patterns within a children's online social gaming platform to identify anomalous behaviour indicative of grooming.",
    quote: "Rather than analysing what predators say, the thesis examined how they behave — using graph structure to surface anomalous social network patterns that linguistic models alone would miss. Anomalous users exhibited statistically distinct behaviour in terms of their network connections and interaction patterns.",
    tags: ["Graph Neural Networks", "Child Safety", "Anomaly Detection", "DTU", "Unsupervised ML"],
    image: "/images/bachelor_thesis_2.png",
    link: { label: "research report", url: "/documents/Bachelor_Project.pdf" }
  },
  {
    category: "projects",
    type: "client work",
    name: "Multi-Market Sales Forecasting Model for a Global Retailer",
    subtitle: "eCapacity · 2020–2022",
    description: "Built and maintained a production sales forecasting system for a leading global retailer alongside a small team — used directly by senior decision makers to forecast country and global sales and model the impact of promotions across markets. The project ran from 2020 onward, making it one of the most demanding forecasting environments imaginable: physical stores closing overnight, consumer behaviour diverging completely from historical data, and geopolitical disruption layered on top.",
    quote: "Forecasting drivers included holidays, day of week, product promotions, store closures, and global geopolitical events — built to be robust in conditions where last week's data was no longer a reliable signal for next week's reality. The model had to reason about what it didn't know as much as what it did.",
    tags: ["Time Series", "Sales Forecasting", "Production ML", "Promotion Modelling", "Multi-Market"],
    image: "/images/sales_forecasting.png"
  },
  {
    category: "projects",
    type: "client work",
    name: "Analytics Dashboards for Multi-Market Retailers",
    subtitle: "eCapacity · 2020–2022",
    description: "Designed and maintained analytics dashboards for multiple large multi-market retailers — each with different data sources, different analytics platforms (Adobe Analytics and Google Analytics), different market setups, and different KPI frameworks. The work required translating highly varied technical environments into clear, decision-ready views for stakeholders who needed to act on the numbers, not debug them.",
    quote: "Working across Adobe Analytics and Google Analytics for different companies simultaneously builds a rare cross-platform fluency — you stop thinking in tools and start thinking in questions. What does this business need to know, and what is the cleanest path from raw data to that answer?",
    tags: ["Adobe Analytics", "Google Analytics", "Dashboards", "Multi-Market", "Retail", "Data Strategy"],
    image: "/images/dashboard.png"
  },
  {
    category: "projects",
    type: "client work",
    name: "Visual Search & Product Similarity for a Global Jewellery Brand",
    subtitle: "eCapacity · 2021",
    description: "Built a deep learning model for a leading global jewellery brand's e-commerce catalogue using contrastive learning and an autoencoder architecture — trained from scratch before AI tooling was commonplace. The primary goal was visual search: allowing customers to search by image rather than text. In the process, a second use case emerged — product similarity recommendations without the cold start problem that typically plagues new catalogue items.",
    quote: "A research project investigating whether a model could be trained from product catalogue images alone to understand the visual nuances of jewellery — distinguishing hoop earrings from bangles, rings from pendants. No off-the-shelf AI APIs, no foundation models. A neural network built and trained from the ground up to see jewellery the way a customer does.",
    tags: ["Deep Learning", "Contrastive Learning", "Visual Search", "Recommendation Systems", "E-commerce"],
    image: "/images/fagproject.png",
    link: { label: "research report", url: "/documents/Fagprojekt_Rapport.pdf" }
  },
  {
    category: "workshops-talks",
    type: "published",
    name: "Tænk agentisk",
    subtitle: "AI Agentbogen · Jonathan Løw · September 2025",
    description: "Contributing author in AI Agentbogen — 'Fra hype til handling' by Jonathan Løw, described as Denmark's most important book on AI in 2025. The book equips readers with concrete tools, cases, and insights from top executives and AI experts including voices from Google, Microsoft, and IBM. Wrote the chapter 'Tænk agentisk: Hvordan virksomheder og medarbejdere kan forberede sig på AI-agenter' — a practical guide covering what agentic thinking means, how AI agents combine reasoning, tools, and knowledge to solve tasks, and concrete steps for mapping your own workflows to prepare for agents.",
    quote: "\"Thinking agentically is not just for AI engineers — it's a way of structuring our work so we are ready for the future. The better we understand our own processes, the easier it becomes to hand them over to AI agents.\" — Natasha Norsker, AI Agentbogen",
    tags: ["Published Author", "AI Agents", "AI Agentbogen"],
    image: "/images/ai_agents_book.png",
    link: { label: "AI Agentbogen", url: "https://www.bog-ide.dk/produkt/5929066/jonathan-loew-agentbogen?srsltid=AfmBOopKHFUHJvuTVr9mQ_QASuSSvL2Z7MEtCdn7Ih5p7tC_JIIsAMwe" }
  },
  {
    category: "workshops-talks",
    type: "talk",
    name: "Executive Conversations: Fra Hype til Afkast",
    subtitle: "Computerworld · SAP · SOHO House · January 2025",
    description: "One of four invited speakers at Executive Conversations — a confidential, intimate format gathering 40 senior business leaders to discuss AI from hype to real returns. Contributed perspectives on value chain redesign and how to actually measure where AI gains emerge, alongside a CBS professor, a US affairs analyst, and an AI strategy partner.",
    quote: "\"If you think of AI projects as venture investments, then it's not a bad number that two thirds don't go further. It only becomes a problem if you don't learn enough from them, don't stop them fast enough, or don't define exit criteria upfront. AI work should be managed as a portfolio — many small bets, fast validation, brutal selection, clear scaling of winners.\" — Natasha Norsker",
    tags: ["Executive Audience", "AI Strategy", "Computerworld", "SAP"],
    image: "/images/executive_conversations.png",
    link: { label: "Computerworld", url: "https://computerworldevents.dk/hentprogram/1676" }
  },
  {
    category: "workshops-talks",
    type: "radio",
    name: "Danmark skal afdigitaliseres?",
    subtitle: "Tager jeg fejl · Radio 4 · Denmark",
    description: "Invited expert on Radio 4's debate programme 'Tager jeg fejl' — discussing whether Denmark has gone too far with digitalisation and the consequences for the million Danes who struggle to participate in society as a result. Joined by a Folketing member, a technology critic, and Bent Dalager, digital advisor at the Academy of Technical Sciences and Nordic Head of NewTech at KPMG.",
    quote: "\"Computers have become all-pervasive — and that has pushed a million Danes over the edge, leaving them unable to participate in society. No one asked for digitalisation, but it has been forced upon us to such a degree that you cannot function in Denmark without the latest smartphone and computer.\" — Radio 4, Tager jeg fejl",
    tags: ["Radio 4", "Digitalisation", "Public Debate", "AI & Society"],
    image: "/images/radio_4.png",
    link: { label: "Radio 4", url: "https://radio4.dk/podcasts/tager-jeg-fejl/2-2-anders-kj-rulff-danmark-skal-afdigitaliseres" }
  },
  {
    category: "workshops-talks",
    type: "webinar",
    name: "AI & The New Talent Playbook",
    subtitle: "Connected Women in AI · Webinar Series · May 2025",
    description: "Panelist in Connected Women in AI's webinar series — episode 6 of 8 — exploring how AI is reshaping talent, recruitment, and professional development. Shared how AI tools enable deeper, more focused work without replacing the human judgment and curiosity that define real expertise.",
    quote: "\"AI doesn't give you talent. But I do believe it can help you stay in your talent zone — carving out time for deep work, helping you stay curious, and letting you see ideas from different perspectives.\" — Natasha Norsker",
    tags: ["Connected Women in AI", "AI & Talent", "Webinar"],
    image: "/images/cwai_webinar.png",
    link: { label: "Connected Women in AI", url: "https://www.youtube.com/watch?v=paEXVmvOlh8" }
  },
  {
    category: "workshops-talks",
    type: "press",
    name: "Featured in PROSAbladet",
    subtitle: "PROSA — Forbundet af It-professionelle · 2024",
    description: "Featured in PROSAbladet — PROSA's magazine for Denmark's IT professionals — sharing perspectives on how more women are entering AI and why building interest in tech needs to start from an early age.",
    quote: "\"Natasha Norsker shares how more women are landing within AI — and how there seems to be a new focus on sharpening interest in tech from girlhood onwards.\" — PROSAbladet",
    tags: ["PROSAbladet", "Women in AI", "Tech Education", "Denmark's IT Community"],
    image: "/images/prosa.png",
    link: { label: "PROSAbladet", url: "https://prosabladet.dk/fileadmin/user_upload/Prosa_8OCo2024_final_enkeltsider.pdf" }
  },
  {
    category: "workshops-talks",
    type: "moderator",
    name: "Women in AI: Pioneering the Future of Startups and Innovation",
    subtitle: "TechBBQ · Google Stage · Copenhagen · September 2024",
    description: "Moderator of the panel 'Women in AI: Pioneering the Future of Startups and Innovation' on the Google Stage at TechBBQ Copenhagen — one of the largest startup conferences in the Nordics. Brought together three founders and AI leaders from ARIS Robotics, Aller Media, and Hempel A/S to explore how AI can elevate startups and the role women play in shaping it.",
    quote: "\"Together they explored how AI can elevate the success of startups and the role women play — covering mentorship, bias in AI systems, and how to take your place in a field that's moving fast.\" — Connected Women in AI",
    tags: ["Moderator", "Google Stage", "TechBBQ", "Women in AI", "Startups"],
    image: "/images/techbbg_moderator.jpeg",
    link: { label: "TechBBQ", url: "https://techbbq.dk/" }
  },
  {
    category: "workshops-talks",
    type: "talk",
    name: "Fra Data til Forretningsværdi",
    subtitle: "Computerworld Cloud Festival · Copenhagen · 2024",
    description: "Invited speaker at Computerworld Cloud Festival alongside Jan Damsgaard from Copenhagen Business School — sharing how companies can transform data into valuable business insights, drawing on real project experience.",
    quote: "\"Get insight into how companies can transform data into valuable business insights — learning from real experience and finding new ways to leverage data.\" — Computerworld Cloud Festival",
    tags: ["Talk", "Data Strategy", "Business Value", "Computerworld"],
    image: "/images/cloud_festival.png",
    link: { label: "Computerworld", url: "https://cloud-festival.dk/" }
  },
  {
    category: "workshops-talks",
    type: "talk",
    name: "Operational AI and its Impact on Real Estate",
    subtitle: "ULI Denmark · Gorrissen Federspiel · June 2024",
    description: "Opening speaker at ULI Denmark's session on AI in real estate — presenting the latest AI trends and their relevance to the property industry, followed by use cases from Dr. Nikodem Szumilo (Bartlett Real Estate Institute, UCL) and legal perspectives from David Telyas.",
    quote: "\"One of the best things about specialising in AI is that you can apply the same skills across completely different domains. The same algorithms that work well for lawyers can also be applied in waste sorting, agriculture, and much more — and discovering how use cases transfer from domain to domain is one of the most exciting parts of the work.\" — Natasha Norsker",
    tags: ["Guest Speaker", "Real Estate", "AI Strategy", "ULI Denmark"],
    image: "/images/uli_talk.png"
  },
  {
    category: "workshops-talks",
    type: "podcast",
    name: "Applied AI Nordics — Live Podcast",
    subtitle: "Verbos Podcast · Episode 51 · April 2024",
    description: "Featured guest on Verbos Podcast episode 51, recorded live at Applied AI Nordics 2024 in DR Koncerthuset. Joined by speakers from Podimo, Crayon, and KPMG to discuss applied AI, adoption, and the shift from opportunistic to strategic AI in Danish organisations.",
    quote: "\"We are live at Applied AI Nordics 2024 at DR Koncerthuset — Natasha Norsker shares her framework for getting started with AI: technology, safety, and the user. Not a new framework — but one that's consistently overlooked when organisations chase the technology before understanding the problem.\" — Verbos Podcast",
    tags: ["Podcast", "Applied AI", "AI Adoption", "DR Koncerthuset"],
    image: "/images/verbos_podcast_2.png",
    link: { label: "Verbos Podcast", url: "https://www.youtube.com/watch?v=apj6UKm55qA" }
  },
  {
    category: "workshops-talks",
    type: "keynote",
    name: "Let's Get Practical on AI",
    subtitle: "Applied AI Nordics · Copenhagen · April 2024",
    description: "Closing keynote at Applied AI Nordics 2024 — the largest applied AI conference in the Nordics, organized by Todai. Spoke to an audience of 600+ AI professionals on a practical framework for building AI responsibly: technology, safety, and the user. The same stage where, not long before, she had been sitting in the audience.",
    quote: "\"Thank you to Natasha Norsker for her in-depth session 'Let's Get Practical on AI' — the perfect ending to a content-rich day, full of learning and new perspectives.\" — Applied AI Nordics",
    tags: ["Closing Keynote", "600+ Audience", "Applied AI", "AI Strategy"],
    image: "/images/applied_ai_nordics.png",
    link: { label: "Applied AI Nordics", url: "https://appliedainordics.dk/2024" }
  },
  {
    category: "workshops-talks",
    type: "workshop",
    name: "AI Value Creation for Board Members",
    subtitle: "Bestyrelseskvinder · Copenhagen · 2023",
    description: "Invited alongside Barbara Myhre Isaksen to lead a session for Bestyrelseskvinder — a monthly peer network for board-level women. Guided members through three decisive ways to create value with AI, using Gartner's model as a foundation.",
    quote: "\"Using Gartner's model as a foundation, they guided Bestyrelseskvinder's members through three decisive ways to create value with AI: Deploy — changes that ease everyday workloads; Reshape — improving heavy, time-consuming processes; Invent — new business models created with and by AI.\" — Bestyrelseskvinder",
    tags: ["Workshop", "Board Level", "AI Strategy"],
    image: "/images/bestyrelseskvinder.png"
  },
  {
    category: "workshops-talks",
    type: "podcast",
    name: "AI før og efter ChatGPT",
    subtitle: "Verbos Podcast · Episode 40 · 2023",
    description: "Guest on Verbos Podcast — discussing the evolution of AI before and after ChatGPT, what it is like to work as an AI consultant, Graph Neural Networks, and the story behind founding Women in AI Denmark.",
    quote: "\"Natasha er Co-founder af Women in AI Denmark og Data Scientist i Todai. Vi taler om AI før og efter ChatGPT, arbejdet som AI konsulent, graf neurale netværk og meget mere.\" — Verbos Podcast",
    tags: ["Podcast", "Applied AI", "Graph Neural Networks", "Women in AI Denmark"],
    image: "/images/verbos_podcast.png",
    link: { label: "Verbos Podcast", url: "https://www.youtube.com/watch?v=CgdPyYNdffM" }
  },
  {
    category: "workshops-talks",
    type: "panel",
    name: "Conversations Unscripted",
    subtitle: "Microsoft · Denmark · 2023",
    description: "Invited to join Microsoft's Conversations Unscripted — a cross-industry initiative bringing together leaders from Microsoft, Deloitte, and IT-Branchen to discuss how to drive inclusive and diverse technological progress within AI in Denmark.",
    quote: "\"Dedicated to empowering women and fostering open conversations about equality, personal development, and leadership — addressing gender disparities in policy-making and the technology industry across Europe.\" — Microsoft Conversations Unscripted",
    tags: ["Panel", "Diversity in Tech", "Microsoft", "Women in AI"],
    image: "/images/conversations_unscripted.png",
    link: { label: "Conversations Unscripted", url: "https://www.sj-k.dk/project/microsoft-conversations-unscripted" }
  },
  {
    category: "workshops-talks",
    type: "panel",
    name: "Supertrends: AI & Machine Learning",
    subtitle: "Datacenter Changemakers · Copenhagen · 2023",
    description: "Panelist at the 8th annual Datacenter Forum Copenhagen — a live talk show attended by 300+ datacenter professionals. Joined by David Rapoport, Lars Tvede, and host Liselotte Lyngsø to discuss how AI and ML are reshaping datacenter operations and digital infrastructure.",
    quote: "\"From ChatGPT to DALL-E, AI and machine learning are evolving at a rapid pace — impacting data centers both in operations and in the ever-growing IT loads that AI applications require and generate.\" — Datacenter Forum Copenhagen",
    tags: ["Panel", "AI & ML", "300+ Attendees", "Datacenter Forum"],
    image: "/images/datacenter_forum.jpg",
    link: { label: "Datacenter Forum Copenhagen", url: "https://www.datacenter-forum.com/events/copenhagen/2023" }
  },
  {
    category: "recognition",
    type: "nomination",
    name: "Developer of the Year",
    subtitle: "Nordic Women in Tech Awards · 2023",
    description: "Nominated while serving as first data scientist at Todai — delivering end-to-end ML projects across recommendation systems, document intelligence, and generative AI as the team grew from 3 to 20+ people.",
    quote: "\"Awarded to an individual who has made a meaningful and lasting contribution to software development — achieving outstanding projects and developing creative solutions to problems solved with code.\" — Nordic Women in Tech Awards",
    tags: ["End-to-End ML", "Recommendation Systems", "Generative AI"],
    image: "/images/developer.jpg",
    link: { label: "Nordic Women in Tech", url: "https://nordicwomenintechawards.com/about-us/" }
  },
  {
    category: "recognition",
    type: "title",
    name: "Role Model of the Year",
    subtitle: "Nordic Women in Tech Awards · 2023",
    description: "Given the Role Model of the Year title by Nordic Women in Tech Awards — recognising the work behind founding Women in AI Denmark and advocating for greater visibility and representation for women in tech.",
    quote: "Nordic Women in Tech Awards has celebrated over 2,600 female role models across 11,000+ members since 2019 — run entirely by volunteers and one of the fastest growing changemaker communities in the Nordics.",
    tags: ["Nordic Women in Tech", "Women in AI Denmark", "Diversity in Tech"],
    image: "/images/nwita2023.png",
    link: { label: "nwita", url: "https://nordicwomenintechawards.com/about-us/" }
  },
  {
    category: "recognition",
    type: "finalist",
    name: "Rising Star",
    subtitle: "Nordic Women in Tech Awards · 2024",
    description: "Selected as Denmark's finalist — one of five chosen across the Nordic countries, representing up-and-coming tech professionals showing exceptional creativity and ability.",
    quote: "\"As Founder of Women in AI Denmark and AI Consultant at Todai, Natasha is breaking down barriers and paving the way for women in tech. From developing groundbreaking AI solutions to creating a community of female experts, her influence is shaping the future of AI in Denmark. Her mission? To elevate women's voices in the field — and she's doing just that.\" — Nordic Women in Tech Awards",
    tags: ["Denmark's Finalist", "1 of 5 Nordic", "Women in AI Denmark", "AI Consultant"],
    image: "/images/rising-star.jpg",
    link: { label: "nwita", url: "https://nordicwomenintechawards.com/about-us/" }
  },
  {
    category: "recognition",
    type: "award",
    name: "Agnes & Betzy Prisen",
    subtitle: "IDA — Ingeniørforeningen i Danmark",
    description: "The Agnes & Betzy Prize has been awarded by IDA since 1997 — marking the 100th anniversary of the first two female Danish engineers graduating. Each year, one person is selected who has combined strong technical skills with a meaningful contribution to diversity or knowledge sharing in engineering.",
    quote: "Founded Women in AI Denmark to create a space where women working with AI could meet, connect, learn, and grow together — ensuring they are seen, heard, and supported in a field where they are still underrepresented. Alongside voluntary work on DTU's AI and mathematics study council and serving as a volunteer mentor for students pursuing careers in AI.",
    tags: ["IDA", "Technical Excellence", "Diversity in Engineering", "Community Building"],
    image: "/images/agnes-betzy.jpg",
    link: { label: "IDA", url: "https://ida.dk/diversity-in-tech-and-science/tidligere-modtagere-af-agnes-betzy-prisen" }
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
              <TabsTrigger value="projects" className={tabTriggerClass}>Projects</TabsTrigger>
              <TabsTrigger value="workshops-talks" className={tabTriggerClass}>Workshops & Talks</TabsTrigger>
              <TabsTrigger value="recognition" className={tabTriggerClass}>Recognition</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="projects">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter(project => project.category === 'projects')
                .map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="workshops-talks">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter(project => project.category === 'workshops-talks')
                .map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="recognition">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter(project => project.category === 'recognition')
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
    type?: string;
    name: string;
    subtitle?: string;
    description: string;
    quote?: string;
    tags: string[];
    image?: string;
    link?: { label: string; url: string };
  };
}

const ProjectCard = ({ project }: ProjectProps) => {
  const label = project.type ?? project.category.replace(/-/g, ' ');
  const pillClass = project.type
    ? 'bg-bde-green/10 text-bde-green border border-bde-green/20 rounded-full px-2.5 py-0.5'
    : categoryColor;

  return (
    <div className="group overflow-hidden rounded-xl bg-bde-deep border border-bde-violet/10 hover:shadow-lg hover:shadow-bde-violet/[0.12] transition-all">
      {project.image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.name} 
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="mb-3 flex items-center justify-between">
          <span className={`text-[10px] font-ui tracking-eyebrow inline-flex items-center gap-1.5 ${pillClass}`}>
            {project.type && <span className="w-1.5 h-1.5 rounded-full bg-bde-green" />}
            {label}
          </span>
          {project.link && (
            <a
              href={project.link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-ui text-[10px] text-bde-violet-muted hover:text-bde-green transition-colors"
            >
              {project.link.label} →
            </a>
          )}
        </div>
        
        <h3 className="font-heading font-medium text-xl text-bde-frost mb-1">{project.name}</h3>
        {project.subtitle && (
          <p className="font-display font-normal text-bde-green text-[13px] mb-4">{project.subtitle}</p>
        )}
        <p className="font-display font-normal text-bde-violet-soft/[0.55] text-[13px] leading-relaxed mb-4">{project.description}</p>
        
        {project.quote && (
          <blockquote className="border-l-2 border-bde-violet/20 bg-bde-violet/[0.06] rounded-r-lg pl-4 pr-4 py-3 mb-4">
            <p className="font-display font-normal text-bde-frost/70 text-[13px] leading-relaxed">{project.quote}</p>
          </blockquote>
        )}
        
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
