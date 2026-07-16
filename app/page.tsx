'use client';

import { Badge } from "./components/ui/badge";
import { ProjectCarousel } from "./components/ui/carousel";

const WHATSAPP_NUMBER = "+639356207449";
const WHATSAPP_URL = "https://wa.me/639356207449";
const LINKEDIN_URL = "https://www.linkedin.com/in/richardren-escol-9076651a8/";

const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
];

const projectsData = [
  {
    title: "Iron Gate Real Estate CRM",
    description:
      "Built a full-stack real estate CRM for contacts and property leads with admin/staff roles, configurable permissions, pipeline stages, lead assignment, activity tracking (cold calling, texting, door knocking, emailing), Gold/Silver/Bronze lead ratings, and a deal board.",
    tech: "Django, DRF, React, JWT, SQLite",
    image: "/projects/irongate-crm.png",
  },
  {
    title: "Summit County Preforeclosure App",
    description:
      "Built a web app and scraper for Summit County, Ohio foreclosure cases from the Clerk of Courts. Automates case discovery, complaint PDF download, AI address extraction, and displays searchable cases (case number, file date, plaintiff, address) with View Details.",
    tech: "Python, Flask, Selenium, Claude AI, SQLite",
    image: "/projects/summit-county-preforeclosure.png",
  },
  {
    title: "YouTube Channel Email Scraper",
    description:
      "Built an automated pipeline to scrape and extract publicly available contact emails from YouTube channels at scale. Implemented filtering, deduplication, and structured CSV exports to support outreach and lead generation workflows.",
    tech: "Python, Selenium, BeautifulSoup, APIs",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop",
  },
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
  {
    title: "CRM System with Lovable",
    description:
      "Developed a comprehensive Customer Relationship Management system using Lovable's no-code platform with Supabase as the backend. Features include lead management, contact tracking, deal pipeline, and automated follow-ups.",
    tech: "Lovable, Supabase, No-Code",
    image: "https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=600&h=400&fit=crop",
  },
  {
    title: "Point of Sale System with Lovable",
    description:
      "Created a modern Point of Sale system using Lovable's development platform integrated with Supabase database. Includes inventory management, sales tracking, receipt generation, and real-time analytics.",
    tech: "Lovable, Supabase, No-Code",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
  },
  {
    title: "Automated Web Scraper on Replit",
    description:
      "Built an automated web scraping solution deployed on Replit platform with data storage in Supabase. Scheduled scraping tasks for data collection, processing, and automated reporting with real-time dashboard updates.",
    tech: "Replit, Supabase, Python, Web Scraping",
    image: "https://images.unsplash.com/photo-1516321318423-f06fe4e504d0?w=600&h=400&fit=crop",
  },
];

const stats = [
  { label: "Projects Delivered", value: "15+" },
  { label: "Years Experience", value: "3+" },
  { label: "Clients Served", value: "10+" },
  { label: "Success Rate", value: "100%" },
];

const services = [
  { icon: "💻", title: "Full Stack Web Development", desc: "Django HRMS & Automated SEO platform" },
  { icon: "🔄", title: "CRM Automation", desc: "HubSpot, GoHighLevel, Airtable setup" },
  { icon: "⚡", title: "Workflow Automation", desc: "Zapier, Make, n8n integration" },
  { icon: "📊", title: "Data Extraction", desc: "Web scraping & scheduled extraction" },
  { icon: "🔌", title: "API Integration", desc: "Webhooks & custom integrations" },
  { icon: "🛡️", title: "System Monitoring", desc: "Automation debugging & optimization" },
];

const skillGroups = [
  { label: "Languages", icon: "💬", skills: ["Python", "JavaScript", "HTML"] },
  { label: "Frameworks & Backends", icon: "🏗️", skills: ["Django", "DRF", "FastAPI", "Flask"] },
  { label: "Automation Platforms", icon: "🤖", skills: ["Zapier", "Make", "n8n"] },
  { label: "Data & Scraping", icon: "📈", skills: ["Selenium", "BeautifulSoup", "Scrapy"] },
  { label: "DevOps & Tools", icon: "⚙️", skills: ["Git", "CI/CD", "Docker"] },
  { label: "AI & Development", icon: "✨", skills: ["Claude", "ChatGPT", "Gemini", "Cursor", "Lovable", "Replit"] },
];

function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function LinkedInIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-mesh">
      <div className="pointer-events-none fixed inset-0 grid-bg opacity-50" />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/5 glass">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-5 py-4">
          <a href="#" className="font-[family-name:var(--font-display)] text-lg font-bold text-gradient-accent tracking-tight">
            Richardren Escol
          </a>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <nav className="hidden items-center gap-6 md:flex">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-slate-400 transition-colors hover:text-cyan-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-3 sm:gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#25d366] transition-colors hover:text-[#25d366]/80"
              >
                <WhatsAppIcon />
                <span className="hidden sm:inline">{WHATSAPP_NUMBER}</span>
                <span className="sm:hidden">WhatsApp</span>
              </a>
              <span className="text-slate-700">|</span>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 transition-colors hover:text-cyan-300"
              >
                <LinkedInIcon />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-5xl px-5">

        {/* Hero */}
        <section className="flex flex-col items-center py-24 text-center md:py-32">
          <span className="section-label animate-fade-up mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Technical Solutions Expert
          </span>

          <h1 className="animate-fade-up animate-fade-up-delay-1 mb-6 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-bold leading-tight tracking-tight text-gradient sm:text-5xl md:text-6xl">
            Automation &amp; Backend Systems
          </h1>

          <p className="animate-fade-up animate-fade-up-delay-2 max-w-2xl text-lg leading-relaxed text-slate-400">
            I transform businesses through intelligent automation, CRM integrations, and scalable backend systems — building reliable solutions that eliminate manual work and drive operational efficiency.
          </p>
        </section>

        {/* Stats */}
        <section className="mb-28 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass glass-hover rounded-2xl p-6 text-center transition-all duration-300"
            >
              <p className="mb-1 font-[family-name:var(--font-display)] text-3xl font-bold text-gradient-accent">
                {stat.value}
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </section>

        {/* Projects */}
        <section id="projects" className="mb-28 scroll-mt-24">
          <div className="mb-10">
            <span className="section-label mb-4">Portfolio</span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold text-white md:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-2 text-slate-400">Explore some of my most impactful work</p>
          </div>
          <ProjectCarousel projects={projectsData} />
        </section>

        {/* Services */}
        <section id="services" className="mb-28 scroll-mt-24">
          <div className="mb-10">
            <span className="section-label mb-4">Services</span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold text-white md:text-4xl">
              What I Offer
            </h2>
            <p className="mt-2 text-slate-400">Specialized services tailored to your business needs</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="glass glass-hover group rounded-2xl p-7 transition-all duration-300"
              >
                <span className="mb-4 block text-3xl transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </span>
                <h3 className="mb-2 font-[family-name:var(--font-display)] text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mb-28 scroll-mt-24">
          <div className="mb-10">
            <span className="section-label mb-4">Expertise</span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold text-white md:text-4xl">
              Technical Expertise
            </h2>
            <p className="mt-2 text-slate-400">Technologies and tools I master</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {skillGroups.map((group, idx) => (
              <div key={idx} className="glass rounded-2xl p-6">
                <h3 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-400">
                  <span>{group.icon}</span>
                  {group.label}
                </h3>
                <div className="flex flex-wrap">
                  {group.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <div className="mb-10">
            <span className="section-label mb-4">Background</span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold text-white md:text-4xl">
              Education
            </h2>
          </div>
          <div className="glass rounded-2xl p-10 text-center">
            <p className="mb-2 text-2xl">🎓</p>
            <p className="mb-1 font-[family-name:var(--font-display)] text-xl font-bold text-white">BSIT</p>
            <p className="mb-1 font-medium text-cyan-400">Bachelor of Science in Information Technology</p>
            <p className="text-slate-400">ACLC College of Butuan</p>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 glass">
        <div className="mx-auto max-w-5xl px-5 py-10 text-center">
          <p className="text-sm text-slate-500">
            © 2026 Richardren Escol. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
