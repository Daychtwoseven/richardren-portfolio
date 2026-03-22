'use client';

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
    <div style={{ 
      minHeight: "100vh", 
      background: "linear-gradient(135deg, #0a0e27 0%, #16213e 50%, #0f3460 100%)",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Animated background elements */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        opacity: 0.1,
        backgroundImage: "radial-gradient(circle at 20% 50%, #00d4ff 0%, transparent 50%), radial-gradient(circle at 80% 80%, #0066cc 0%, transparent 50%)",
        pointerEvents: "none",
      }}></div>

      {/* HEADER */}
      <header style={{
        borderBottom: "1px solid rgba(51, 65, 85, 0.3)",
        backdropFilter: "blur(15px)",
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "rgba(10, 14, 39, 0.7)",
      }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "20px" }}>
          <h1 style={{ fontSize: "24px", fontWeight: "800", margin: 0, background: "linear-gradient(135deg, #00d4ff, #0099ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", letterSpacing: "-0.5px" }}>
            Richardren Escol
          </h1>
        </div>
      </header>

      <main style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 20px", position: "relative", zIndex: 1 }}>

      {/* HERO */}
      <section style={{ paddingTop: "120px", paddingBottom: "80px", textAlign: "center" }}>
        <div style={{ marginBottom: "30px" }}>
          <span style={{ display: "inline-block", fontSize: "12px", fontWeight: "700", color: "#00d4ff", textTransform: "uppercase", letterSpacing: "2px", backgroundColor: "rgba(0, 212, 255, 0.1)", padding: "8px 16px", borderRadius: "20px", border: "1px solid rgba(0, 212, 255, 0.3)" }}>
            🚀 Technical Solutions Expert
          </span>
        </div>
        <h1 style={{ fontSize: "64px", fontWeight: "900", marginBottom: "20px", background: "linear-gradient(135deg, #ffffff, #e0f2ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: "1.2", letterSpacing: "-1px" }}>
          Automation & Backend Systems
        </h1>
        <p style={{ fontSize: "18px", color: "#cbd5e1", marginBottom: "40px", maxWidth: "700px", margin: "0 auto 40px", lineHeight: "1.8" }}>
          I transform businesses through intelligent automation, CRM integrations, and scalable backend systems. Building reliable solutions that eliminate manual work and drive operational efficiency.
        </p>
        <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="mailto:chardrichescol@gmail.com" style={{
            backgroundColor: "linear-gradient(135deg, #00d4ff, #0099ff)",
            color: "#ffffff",
            padding: "16px 40px",
            borderRadius: "10px",
            border: "none",
            fontSize: "16px",
            fontWeight: "700",
            cursor: "pointer",
            textDecoration: "none",
            transition: "all 0.3s ease",
            display: "inline-block",
            boxShadow: "0 10px 30px rgba(0, 212, 255, 0.3)",
          }} onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 15px 40px rgba(0, 212, 255, 0.5)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }} onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 212, 255, 0.3)";
            e.currentTarget.style.transform = "translateY(0)";
          }}>
            Let's Work Together
          </a>
          <a href="https://www.linkedin.com/in/richardren-escol-9076651a8/" target="_blank" rel="noopener noreferrer" style={{
            backgroundColor: "rgba(0, 212, 255, 0.1)",
            color: "#00d4ff",
            padding: "16px 40px",
            borderRadius: "10px",
            border: "2px solid rgba(0, 212, 255, 0.3)",
            fontSize: "16px",
            fontWeight: "700",
            cursor: "pointer",
            textDecoration: "none",
            transition: "all 0.3s ease",
            display: "inline-block",
          }} onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(0, 212, 255, 0.2)";
            e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.6)";
          }} onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(0, 212, 255, 0.1)";
            e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.3)";
          }}>
            View LinkedIn
          </a>
        </div>
      </section>

      {/* STATS */}
      <section style={{ marginBottom: "100px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
        {[
          { label: "Projects Delivered", value: "15+" },
          { label: "Years Experience", value: "3+" },
          { label: "Clients Served", value: "10+" },
          { label: "Success Rate", value: "100%" },
        ].map((stat, idx) => (
          <div key={idx} style={{
            backgroundColor: "rgba(30, 41, 59, 0.5)",
            border: "1px solid rgba(0, 212, 255, 0.2)",
            borderRadius: "12px",
            padding: "30px 20px",
            textAlign: "center",
            backdropFilter: "blur(10px)",
            transition: "all 0.3s ease",
          }}>
            <p style={{ margin: "0 0 10px 0", fontSize: "32px", fontWeight: "800", background: "linear-gradient(135deg, #00d4ff, #0099ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{stat.value}</p>
            <p style={{ margin: 0, color: "#94a3b8", fontSize: "14px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px" }}>{stat.label}</p>
          </div>
        ))}
      </section>

      {/* FEATURED PROJECTS */}
      <section style={{ marginBottom: "120px" }}>
        <div style={{ marginBottom: "60px" }}>
          <h2 style={{ fontSize: "42px", fontWeight: "900", marginBottom: "15px", background: "linear-gradient(135deg, #ffffff, #e0f2ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Featured Projects</h2>
          <p style={{ color: "#94a3b8", fontSize: "16px", margin: 0 }}>Explore some of my most impactful work</p>
        </div>
        <div style={{ marginTop: "40px" }}>
          <ProjectCarousel projects={projectsData} />
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ marginBottom: "120px" }}>
        <div style={{ marginBottom: "60px" }}>
          <h2 style={{ fontSize: "42px", fontWeight: "900", marginBottom: "15px", background: "linear-gradient(135deg, #ffffff, #e0f2ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>What I Offer</h2>
          <p style={{ color: "#94a3b8", fontSize: "16px", margin: 0 }}>Specialized services tailored to your business needs</p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
        }}>
          {[
            { emoji: "💻", title: "Full Stack Web Development", desc: "Django HRMS & Automated SEO platform" },
            { emoji: "🔄", title: "CRM Automation", desc: "HubSpot, GoHighLevel, Airtable setup" },
            { emoji: "⚡", title: "Workflow Automation", desc: "Zapier, Make, n8n integration" },
            { emoji: "📊", title: "Data Extraction", desc: "Web scraping & scheduled extraction" },
            { emoji: "🔌", title: "API Integration", desc: "Webhooks & custom integrations" },
            { emoji: "🛡️", title: "System Monitoring", desc: "Automation debugging & optimization" },
          ].map((service, idx) => (
            <div key={idx} style={{
              backgroundColor: "rgba(30, 41, 59, 0.5)",
              border: "1px solid rgba(0, 212, 255, 0.2)",
              borderRadius: "16px",
              padding: "32px",
              transition: "all 0.3s ease",
              backdropFilter: "blur(10px)",
              cursor: "pointer",
            }} onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(30, 41, 59, 0.8)";
              e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.5)";
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 212, 255, 0.1)";
            }} onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(30, 41, 59, 0.5)";
              e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.2)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 0 0 rgba(0, 212, 255, 0)";
            }}>
              <p style={{ fontSize: "32px", margin: "0 0 15px 0" }}>{service.emoji}</p>
              <h3 style={{ margin: "0 0 10px 0", fontSize: "18px", fontWeight: "700", color: "#e2e8f0" }}>{service.title}</h3>
              <p style={{ margin: 0, color: "#94a3b8", fontSize: "14px", lineHeight: "1.6" }}>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section style={{ marginBottom: "120px" }}>
        <div style={{ marginBottom: "60px" }}>
          <h2 style={{ fontSize: "42px", fontWeight: "900", marginBottom: "15px", background: "linear-gradient(135deg, #ffffff, #e0f2ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Technical Expertise</h2>
          <p style={{ color: "#94a3b8", fontSize: "16px", margin: 0 }}>Technologies and tools I master</p>
        </div>

        <div style={{ marginTop: "40px" }}>
          <div style={{ marginBottom: "50px" }}>
            <h3 style={{ fontSize: "16px", fontWeight: "700", marginBottom: "20px", color: "#00d4ff", textTransform: "uppercase", letterSpacing: "2px" }}>💬 Languages</h3>
            <div>
              <Badge>Python</Badge>
              <Badge>JavaScript</Badge>
              <Badge>HTML</Badge>
            </div>
          </div>

          <div style={{ marginBottom: "50px" }}>
            <h3 style={{ fontSize: "16px", fontWeight: "700", marginBottom: "20px", color: "#00d4ff", textTransform: "uppercase", letterSpacing: "2px" }}>🏗️ Frameworks & Backends</h3>
            <div>
              <Badge>Django</Badge>
              <Badge>DRF</Badge>
              <Badge>FastAPI</Badge>
              <Badge>Flask</Badge>
            </div>
          </div>

          <div style={{ marginBottom: "50px" }}>
            <h3 style={{ fontSize: "16px", fontWeight: "700", marginBottom: "20px", color: "#00d4ff", textTransform: "uppercase", letterSpacing: "2px" }}>🤖 Automation Platforms</h3>
            <div>
              <Badge>Zapier</Badge>
              <Badge>Make</Badge>
              <Badge>n8n</Badge>
            </div>
          </div>

          <div style={{ marginBottom: "50px" }}>
            <h3 style={{ fontSize: "16px", fontWeight: "700", marginBottom: "20px", color: "#00d4ff", textTransform: "uppercase", letterSpacing: "2px" }}>📈 Data & Scraping</h3>
            <div>
              <Badge>Selenium</Badge>
              <Badge>BeautifulSoup</Badge>
              <Badge>Scrapy</Badge>
            </div>
          </div>

          <div style={{ marginBottom: "50px" }}>
            <h3 style={{ fontSize: "16px", fontWeight: "700", marginBottom: "20px", color: "#00d4ff", textTransform: "uppercase", letterSpacing: "2px" }}>⚙️ DevOps & Tools</h3>
            <div>
              <Badge>Git</Badge>
              <Badge>CI/CD</Badge>
              <Badge>Docker</Badge>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: "16px", fontWeight: "700", marginBottom: "20px", color: "#00d4ff", textTransform: "uppercase", letterSpacing: "2px" }}>🤖 AI & Development</h3>
            <div>
              <Badge>Claude</Badge>
              <Badge>ChatGPT</Badge>
              <Badge>Gemini</Badge>
              <Badge>Lovable</Badge>
              <Badge>Replit</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section style={{ marginBottom: "120px" }}>
        <div style={{ marginBottom: "60px" }}>
          <h2 style={{ fontSize: "42px", fontWeight: "900", marginBottom: "15px", background: "linear-gradient(135deg, #ffffff, #e0f2ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Education</h2>
        </div>
        <div style={{ 
          backgroundColor: "rgba(30, 41, 59, 0.6)", 
          border: "2px solid rgba(0, 212, 255, 0.3)", 
          borderRadius: "16px", 
          padding: "40px",
          textAlign: "center",
          backdropFilter: "blur(10px)",
        }}>
          <p style={{ margin: 0, fontSize: "24px", fontWeight: "700", color: "#e2e8f0", marginBottom: "10px" }}>🎓 BSIT</p>
          <p style={{ margin: 0, fontSize: "18px", fontWeight: "600", color: "#00d4ff", marginBottom: "5px" }}>Bachelor of Science in Information Technology</p>
          <p style={{ margin: 0, color: "#94a3b8", fontSize: "16px" }}>ACLC College of Butuan</p>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section style={{ marginBottom: "40px", padding: "60px 40px", backgroundColor: "rgba(0, 212, 255, 0.05)", border: "2px solid rgba(0, 212, 255, 0.2)", borderRadius: "16px", textAlign: "center", backdropFilter: "blur(10px)" }}>
        <h2 style={{ fontSize: "36px", fontWeight: "800", marginBottom: "20px", color: "#e2e8f0" }}>Ready to Transform Your Business?</h2>
        <p style={{ fontSize: "16px", color: "#cbd5e1", marginBottom: "40px", maxWidth: "500px", margin: "0 auto 40px" }}>Let's discuss how I can automate your workflows and improve your operations.</p>
        <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="mailto:chardrichescol@gmail.com" style={{
            backgroundColor: "linear-gradient(135deg, #00d4ff, #0099ff)",
            color: "#ffffff",
            padding: "14px 35px",
            borderRadius: "8px",
            border: "none",
            fontSize: "16px",
            fontWeight: "700",
            cursor: "pointer",
            textDecoration: "none",
            transition: "all 0.3s ease",
            display: "inline-block",
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
          }}>
            Send Email
          </a>
          <a href="https://www.linkedin.com/in/richardren-escol-9076651a8/" target="_blank" rel="noopener noreferrer" style={{
            backgroundColor: "rgba(0, 212, 255, 0.1)",
            color: "#00d4ff",
            padding: "14px 35px",
            borderRadius: "8px",
            border: "2px solid rgba(0, 212, 255, 0.4)",
            fontSize: "16px",
            fontWeight: "700",
            cursor: "pointer",
            textDecoration: "none",
            transition: "all 0.3s ease",
            display: "inline-block",
          }} onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(0, 212, 255, 0.15)";
          }} onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(0, 212, 255, 0.1)";
          }}>
            Connect on LinkedIn
          </a>
        </div>
      </section>

      </main>

      {/* FOOTER */}
      <footer style={{
        borderTop: "1px solid rgba(51, 65, 85, 0.3)",
        backgroundColor: "rgba(10, 14, 39, 0.9)",
        backdropFilter: "blur(10px)",
        padding: "40px 20px",
        textAlign: "center",
        position: "relative",
        zIndex: 1,
      }}>
        <p style={{ color: "#64748b", fontSize: "14px", margin: 0, fontWeight: "600" }}>
          © 2026 Richardren Escol. Crafted with precision. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
