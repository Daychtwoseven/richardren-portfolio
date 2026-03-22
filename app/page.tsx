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
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)" }}>
      {/* HEADER */}
      <header style={{
        borderBottom: "1px solid rgba(51, 65, 85, 0.5)",
        backdropFilter: "blur(10px)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
          <h1 style={{ fontSize: "24px", fontWeight: "700", margin: 0, background: "linear-gradient(135deg, #38bdf8, #0ea5e9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Richardren Escol
          </h1>
        </div>
      </header>

      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "80px 20px" }}>

      {/* HERO */}
      <section style={{ marginBottom: "100px", textAlign: "center" }}>
        <h1 style={{ fontSize: "56px", fontWeight: "800", marginBottom: "15px", background: "linear-gradient(135deg, #f1f5f9, #e2e8f0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Technical Virtual Assistant
        </h1>
        <p style={{ fontSize: "20px", color: "#38bdf8", marginBottom: "30px", fontWeight: "500" }}>
          Automation & CRM Support Specialist
        </p>
        <p style={{ marginTop: "20px", lineHeight: "1.8", fontSize: "16px", color: "#cbd5e1", maxWidth: "600px", margin: "0 auto", marginBottom: "20px" }}>
          I help businesses maintain and improve backend systems through workflow automation,
          CRM integrations, and data processing. I specialize in building reliable systems
          that reduce manual work and improve operational efficiency.
        </p>
        <div style={{ display: "inline-block", backgroundColor: "rgba(6, 182, 212, 0.1)", padding: "12px 24px", borderRadius: "12px", border: "1px solid #06b6d4", marginTop: "20px" }}>
          <p style={{ margin: 0, color: "#38bdf8", fontWeight: "600" }}>
            Available for full-time remote roles (40 hrs/week)
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ marginBottom: "100px" }}>
        <h2 style={{ fontSize: "36px", fontWeight: "700", marginBottom: "40px", textAlign: "center" }}>Core Services</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}>
          {[
            "CRM setup & automation (HubSpot, GHL, Airtable)",
            "Zapier / Make workflow automation",
            "Lead capture → CRM → Email integrations",
            "Web scraping & scheduled data extraction",
            "API integrations & webhook handling",
            "Automation monitoring & debugging",
          ].map((service, idx) => (
            <div key={idx} style={{
              backgroundColor: "rgba(30, 41, 59, 0.8)",
              border: "1px solid #334155",
              borderRadius: "12px",
              padding: "20px",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}>
              <p style={{ margin: 0, color: "#e2e8f0", lineHeight: "1.6", fontSize: "15px" }}>
                {service}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section style={{ marginBottom: "100px" }}>
        <h2 style={{ fontSize: "36px", fontWeight: "700", marginBottom: "40px", textAlign: "center" }}>Featured Projects</h2>
        <div style={{ marginTop: "20px" }}>
          <ProjectCarousel projects={projectsData} />
        </div>
      </section>
      {/* SKILLS */}
      <section style={{ marginBottom: "100px" }}>
        <h2 style={{ fontSize: "36px", fontWeight: "700", marginBottom: "40px", textAlign: "center" }}>Technical Skills</h2>

        <div style={{ marginTop: "30px" }}>
          <div style={{ marginBottom: "40px" }}>
            <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "15px", color: "#38bdf8", textTransform: "uppercase", letterSpacing: "1px" }}>Languages</h3>
            <div>
              <Badge>Python</Badge>
              <Badge>JavaScript</Badge>
              <Badge>HTML</Badge>
            </div>
          </div>

          <div style={{ marginBottom: "40px" }}>
            <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "15px", color: "#38bdf8", textTransform: "uppercase", letterSpacing: "1px" }}>Frameworks</h3>
            <div>
              <Badge>Django</Badge>
              <Badge>DRF</Badge>
              <Badge>FastAPI</Badge>
              <Badge>Flask</Badge>
            </div>
          </div>

          <div style={{ marginBottom: "40px" }}>
            <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "15px", color: "#38bdf8", textTransform: "uppercase", letterSpacing: "1px" }}>Automation</h3>
            <div>
              <Badge>Zapier</Badge>
              <Badge>Make</Badge>
              <Badge>n8n</Badge>
            </div>
          </div>

          <div style={{ marginBottom: "40px" }}>
            <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "15px", color: "#38bdf8", textTransform: "uppercase", letterSpacing: "1px" }}>Data & Scraping</h3>
            <div>
              <Badge>Selenium</Badge>
              <Badge>BeautifulSoup</Badge>
              <Badge>Scrapy</Badge>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "15px", color: "#38bdf8", textTransform: "uppercase", letterSpacing: "1px" }}>Tools & DevOps</h3>
            <div>
              <Badge>Git</Badge>
              <Badge>CI/CD</Badge>
              <Badge>Docker</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* AI & DEVELOPMENT PLATFORMS */}
      <section style={{ marginBottom: "100px" }}>
        <h2 style={{ fontSize: "36px", fontWeight: "700", marginBottom: "40px", textAlign: "center" }}>AI & Development Platforms</h2>

        <div style={{ marginTop: "30px" }}>
          <div style={{ marginBottom: "40px" }}>
            <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "15px", color: "#38bdf8", textTransform: "uppercase", letterSpacing: "1px" }}>AI Assistants</h3>
            <div>
              <Badge>Claude</Badge>
              <Badge>ChatGPT</Badge>
              <Badge>Gemini</Badge>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "15px", color: "#38bdf8", textTransform: "uppercase", letterSpacing: "1px" }}>AI Development Tools</h3>
            <div>
              <Badge>Lovable</Badge>
              <Badge>Replit</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section style={{ marginBottom: "100px" }}>
        <h2 style={{ fontSize: "36px", fontWeight: "700", marginBottom: "40px", textAlign: "center" }}>Education</h2>
        <div style={{ textAlign: "center", backgroundColor: "rgba(30, 41, 59, 0.6)", border: "1px solid #334155", borderRadius: "12px", padding: "30px" }}>
          <p style={{ margin: 0, fontSize: "18px", fontWeight: "600", color: "#e2e8f0" }}>BSIT – ACLC College of Butuan</p>
          <p style={{ margin: "10px 0 0 0", color: "#94a3b8", fontSize: "14px" }}>Bachelor of Science in Information Technology</p>
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "36px", fontWeight: "700", marginBottom: "40px", textAlign: "center" }}>Get In Touch</h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
        }}>
          <a href="mailto:chardrichescol@gmail.com" style={{
            backgroundColor: "rgba(30, 41, 59, 0.8)",
            border: "1px solid #334155",
            borderRadius: "12px",
            padding: "24px",
            textDecoration: "none",
            transition: "all 0.3s ease",
            textAlign: "center",
          }} onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(6, 182, 212, 0.1)";
            e.currentTarget.style.borderColor = "#06b6d4";
          }} onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(30, 41, 59, 0.8)";
            e.currentTarget.style.borderColor = "#334155";
          }}>
            <p style={{ margin: 0, color: "#38bdf8", fontSize: "14px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>Email</p>
            <p style={{ margin: 0, color: "#e2e8f0", fontSize: "15px" }}>chardrichescol@gmail.com</p>
          </a>
          <a href="https://www.linkedin.com/in/richardren-escol-9076651a8/" target="_blank" rel="noopener noreferrer" style={{
            backgroundColor: "rgba(30, 41, 59, 0.8)",
            border: "1px solid #334155",
            borderRadius: "12px",
            padding: "24px",
            textDecoration: "none",
            transition: "all 0.3s ease",
            textAlign: "center",
          }} onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(6, 182, 212, 0.1)";
            e.currentTarget.style.borderColor = "#06b6d4";
          }} onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(30, 41, 59, 0.8)";
            e.currentTarget.style.borderColor = "#334155";
          }}>
            <p style={{ margin: 0, color: "#38bdf8", fontSize: "14px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>LinkedIn</p>
            <p style={{ margin: 0, color: "#e2e8f0", fontSize: "14px" }}>richardren-escol</p>
          </a>
        </div>
      </section>

      </main>

      {/* FOOTER */}
      <footer style={{
        borderTop: "1px solid rgba(51, 65, 85, 0.5)",
        backgroundColor: "rgba(15, 23, 42, 0.8)",
        padding: "40px 20px",
        textAlign: "center",
      }}>
        <p style={{ color: "#64748b", fontSize: "14px", margin: 0 }}>
          © 2026 Richardren Escol. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
