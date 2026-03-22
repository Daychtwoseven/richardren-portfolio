import { Badge } from "./components/ui/badge";
import { ProjectCarousel } from "./components/ui/carousel";

const projectsData = [
  {
    title: "GoHighLevel Lead Automation System",
    description:
      "Built automated lead workflows inside GoHighLevel including lead capture, tagging, pipeline movement, and automated SMS/email follow-ups to ensure no leads were lost and sales teams received real-time updates.",
    tech: "GoHighLevel, Zapier, Webhooks",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
  },
  {
    title: "SEO Automation System",
    description:
      "Built a Django-based platform to automate keyword research and content workflows. Reduced manual SEO research tasks through automated data collection and filtering.",
    tech: "Python, Django, APIs",
    image: "https://images.unsplash.com/photo-1523289333684-401256c280d0?w=600&h=400&fit=crop",
  },
  {
    title: "Permit Data Scraper",
    description:
      "Developed a scheduled scraping bot to extract and process public permit data weekly, with structured exports and logging for reliability.",
    tech: "Selenium, Python, Scheduling",
    image: "https://images.unsplash.com/photo-1516321318423-f06fe4e504d0?w=600&h=400&fit=crop",
  },
  {
    title: "CRM Integration System",
    description:
      "Automated lead synchronization between GoHighLevel, HubSpot, and Airtable, reducing manual data entry and improving reporting accuracy.",
    tech: "Python, APIs, Zapier, Make",
    image: "https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=600&h=400&fit=crop",
  },
  {
    title: "Automation Bots (Telegram & Discord)",
    description:
      "Developed AI-integrated bots with automated workflows using webhooks and APIs.",
    tech: "Python, APIs, Webhooks",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
  },
  {
    title: "FastAPI REST API Gateway",
    description:
      "Built a high-performance REST API gateway using FastAPI with automated request routing, rate limiting, and real-time monitoring. Integrated CI/CD pipelines and deployed with Docker for seamless scalability.",
    tech: "FastAPI, Python, Docker, CI/CD",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
  },
  {
    title: "E-commerce Product Aggregator",
    description:
      "Developed a web scraper using BeautifulSoup to aggregate product data from multiple e-commerce platforms. Implemented automated price tracking and competitor analysis with scheduled data exports.",
    tech: "Python, BeautifulSoup, APIs",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
  },
  {
    title: "Django DRF Backend API",
    description:
      "Created a full-featured REST API backend using Django and Django REST Framework with authentication, pagination, and advanced filtering. Deployed with Git and automated testing pipelines.",
    tech: "Django, DRF, Python, Git",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
  },
  {
    title: "n8n Workflow Automation Platform",
    description:
      "Designed and deployed complex n8n workflows connecting 20+ services including payment processors, email systems, and cloud storage. Reduced operational overhead by 60% through intelligent automation.",
    tech: "n8n, Webhooks, APIs",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    title: "Real Estate Listing Intelligence System",
    description:
      "Built a containerized web scraping solution using Selenium and BeautifulSoup to monitor real estate listings in real-time. Deployed across multiple servers using Docker for reliability and scalability.",
    tech: "Selenium, Python, BeautifulSoup, Docker",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
  },
];

export default function Home() {
  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 20px" }}>

      {/* HERO */}
      <section style={{ marginBottom: "60px" }}>
        <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
          Richardren Escol
        </h1>
        <h2 style={{ fontWeight: "normal", color: "#94a3b8" }}>
          Technical Virtual Assistant | Automation & CRM Support Specialist
        </h2>
        <p style={{ marginTop: "20px", lineHeight: "1.7" }}>
          I help businesses maintain and improve backend systems through workflow automation,
          CRM integrations, and data processing. I specialize in building reliable systems
          that reduce manual work and improve operational efficiency.
        </p>
        <p style={{ marginTop: "10px", color: "#38bdf8" }}>
          Available for full-time remote roles (40 hrs/week)
        </p>
      </section>

      {/* SERVICES */}
      <section style={{ marginBottom: "60px" }}>
        <h2>Core Services</h2>

        <ul style={{ lineHeight: "1.8", paddingLeft: "20px" }}>
          <li>CRM setup & automation (HubSpot, GHL, Airtable)</li>
          <li>Zapier / Make workflow automation</li>
          <li>Lead capture → CRM → Email integrations</li>
          <li>Web scraping & scheduled data extraction</li>
          <li>API integrations & webhook handling</li>
          <li>Automation monitoring & debugging</li>
        </ul>
      </section>

      {/* PROJECTS */}
      <section style={{ marginBottom: "60px" }}>
        <h2>Projects</h2>
        <div style={{ marginTop: "20px" }}>
          <ProjectCarousel projects={projectsData} />
        </div>
      </section>
      {/* SKILLS */}
      <section style={{ marginBottom: "60px" }}>
        <h2>Technical Skills</h2>

        <div style={{ marginTop: "20px" }}>
          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "10px", color: "#e2e8f0" }}>Languages</h3>
            <div>
              <Badge>Python</Badge>
              <Badge>JavaScript</Badge>
              <Badge>HTML</Badge>
            </div>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "10px", color: "#e2e8f0" }}>Frameworks</h3>
            <div>
              <Badge>Django</Badge>
              <Badge>DRF</Badge>
              <Badge>FastAPI</Badge>
              <Badge>Flask</Badge>
            </div>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "10px", color: "#e2e8f0" }}>Automation</h3>
            <div>
              <Badge>Zapier</Badge>
              <Badge>Make</Badge>
              <Badge>n8n</Badge>
            </div>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "10px", color: "#e2e8f0" }}>Data</h3>
            <div>
              <Badge>Selenium</Badge>
              <Badge>BeautifulSoup</Badge>
              <Badge>Scrapy</Badge>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "10px", color: "#e2e8f0" }}>Tools</h3>
            <div>
              <Badge>Git</Badge>
              <Badge>CI/CD</Badge>
              <Badge>Docker</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* AI & DEVELOPMENT PLATFORMS */}
      <section style={{ marginBottom: "60px" }}>
        <h2>AI & Development Platforms</h2>

        <div style={{ marginTop: "20px" }}>
          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "10px", color: "#e2e8f0" }}>AI Assistants</h3>
            <div>
              <Badge>Claude</Badge>
              <Badge>ChatGPT</Badge>
              <Badge>Gemini</Badge>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "10px", color: "#e2e8f0" }}>AI Development Tools</h3>
            <div>
              <Badge>Lovable</Badge>
              <Badge>Replit</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section style={{ marginBottom: "60px" }}>
        <h2>Education</h2>
        <p>BSIT – ACLC College of Butuan</p>
      </section>

      {/* CONTACT */}
      <section>
        <h2>Contact</h2>
        <p>Email: chardrichescol@gmail.com</p>
        <p>LinkedIn: https://www.linkedin.com/in/richardren-escol-9076651a8/</p>
      </section>

    </main>
  );
}
