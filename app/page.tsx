'use client';

import React from 'react';

// Utility to combine Tailwind classes
const cn = (...classes: (string | false | null | undefined)[]) =>
  classes.filter(Boolean).join(' ');

// Reusable Button component
const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> &
    React.AnchorHTMLAttributes<HTMLAnchorElement> & {
      variant?: 'default' | 'outline';
      href?: string;
    }
>(({ className, variant = 'default', href, ...props }, ref) => {
  const base =
    'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2';
  const variants = {
    default: 'bg-black text-white hover:bg-gray-800',
    outline: 'border border-gray-300 bg-white text-black hover:bg-gray-100',
  };
  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <a
        href={href}
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={classes}
        {...props}
      />
    );
  }

  return (
    <button ref={ref} className={classes} {...props} />
  );
});
Button.displayName = 'Button';

// Simple Card layout
const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-2xl border bg-white shadow-md p-6">{children}</div>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12 text-gray-800">
      <section className="max-w-4xl mx-auto text-center">
        <img
          src="/profile.png"
          alt="Chad Escol"
          className="mx-auto mb-4 w-32 h-32 rounded-full object-cover border shadow-md"
        />
        <h1 className="text-4xl font-bold mb-2">Hi, I'm Chad Escol 👋</h1>
        <p className="text-lg text-gray-600 mb-6">
          Full-Stack Developer | Web Automation & Scraping Expert | Python & Django Enthusiast
        </p>
        <Button variant="default" href="mailto:chardrichescol@gmail.com">
          Contact Me
        </Button>
      </section>

      <section className="max-w-5xl mx-auto grid gap-6 mt-12 md:grid-cols-2">
        <Card>
          <h2 className="text-xl font-semibold mb-2">💻 Skills</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
            <li>Python (Django, DRF, FastAPI, Flask)</li>
            <li>Web Scraping (Selenium, BS4, Scrapy)</li>
            <li>Automation (Zapier, Make, n8n)</li>
            <li>jQuery, JavaScript, HTML, htmx</li>
            <li>API Integrations, CRMs, CI/CD, Git</li>
          </ul>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold mb-2">📁 Projects</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
            <li>
              <strong>SEO AI System</strong> – Django-based platform for automating keyword research and content generation.
            </li>
            <li>
              <strong>Permit Scraper</strong> – Data extraction bot with export and weekly automation.
            </li>
            <li>
              <strong>CRM Integrations</strong> – Sync leads between GHL, HubSpot, Airtable.
            </li>
            <li>
              <strong>Scraper Dashboard</strong> – Django + Airtable integration for managing scraped data.
            </li>
            <li>
              <strong>Google/News/Lead Bots</strong> – Automated bots for search, news and lead generation.
            </li>
            <li>
              <strong>Telegram & Discord Bots</strong> – Created LLM-integrated bots using Zapier & OpenAI APIs.
            </li>
          </ul>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold mb-2">🎓 Education & Certifications</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
            <li>BSIT – ACLC College of Butuan</li>
            <li>Python Django Dev to Deployment</li>
            <li>Selenium WebDriver + Frameworks</li>
            <li>50 Projects: HTML, CSS, JavaScript</li>
            <li>CI/CD, Docker, GitLab, Jenkins</li>
          </ul>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold mb-2">📫 Let's Connect</h2>
          <p className="text-sm text-gray-700 mb-3">
            Open to freelance & full-time work. Let’s build something awesome together.
          </p>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" href="mailto:chardrichescol@gmail.com">
              Email
            </Button>
            <Button
              variant="outline"
              href="https://github.com/daychtwoseven"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
            <Button
              variant="outline"
              href="https://www.linkedin.com/in/richardren-escol-9076651a8/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Button>
          </div>
        </Card>
      </section>
    </main>
  );
}
