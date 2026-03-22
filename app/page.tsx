import { Badge } from "./components/ui/badge";

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

        <div style={{ marginBottom: "30px" }}>
          <h3>GoHighLevel Lead Automation System</h3>
          <p>
            Built automated lead workflows inside GoHighLevel including lead capture,
            tagging, pipeline movement, and automated SMS/email follow-ups to ensure
            no leads were lost and sales teams received real-time updates.
          </p>
          <p style={{ color: "#94a3b8" }}>
            Tech: GoHighLevel, Zapier, Webhooks
          </p>
        </div>

        <div style={{ marginBottom: "30px" }}>
          <h3>SEO Automation System</h3>
          <p>
            Built a Django-based platform to automate keyword research and content workflows.
            Reduced manual SEO research tasks through automated data collection and filtering.
          </p>
          <p style={{ color: "#94a3b8" }}>
            Tech: Python, Django, APIs
          </p>
        </div>

        <div style={{ marginBottom: "30px" }}>
          <h3>Permit Data Scraper</h3>
          <p>
            Developed a scheduled scraping bot to extract and process public permit data weekly,
            with structured exports and logging for reliability.
          </p>
          <p style={{ color: "#94a3b8" }}>
            Tech: Selenium, Python, Scheduling
          </p>
        </div>

        <div style={{ marginBottom: "30px" }}>
          <h3>CRM Integration System</h3>
          <p>
            Automated lead synchronization between GoHighLevel, HubSpot, and Airtable,
            reducing manual data entry and improving reporting accuracy.
          </p>
          <p style={{ color: "#94a3b8" }}>
            Tech: Python, APIs, Zapier, Make
          </p>
        </div>

        <div>
          <h3>Automation Bots (Telegram & Discord)</h3>
          <p>
            Developed AI-integrated bots with automated workflows using webhooks and APIs.
          </p>
          <p style={{ color: "#94a3b8" }}>
            Tech: Python, APIs, Webhooks
          </p>
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
