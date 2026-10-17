import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Github, Linkedin, Mail, Phone, MapPin, Play, X, ArrowRight, Bot, Workflow, Plug, Database, Sparkles, Search, PenTool, Rocket, ShieldCheck,
} from "lucide-react";
import voice from "@/assets/videos/AI_Enterprise_Voice_Agent_Commercial_60s.mp4.asset.json";
import youtube from "@/assets/videos/autopilot_promo_60s.mp4.asset.json";
import insta from "@/assets/videos/instagram-auto-reply-walkthrough.mov.asset.json";
import whatsapp from "@/assets/videos/whatsapp-automation-with-music.mov.asset.json";
import social from "@/assets/videos/ai-social-media-bot-demo-v2.mov.asset.json";
import property from "@/assets/videos/Smart_Property_Consolidation_System.mp4.asset.json";
import chatbot from "@/assets/videos/AI_Chatbot_Development_Project_1_1.mp4.asset.json";

const TITLE = "Amna Aurangzaib — AI Automation Engineer Portfolio";
const DESC = "AI agents, Python, APIs and SaaS business automation projects by Amna Aurangzaib, with live demo videos.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const EMAIL = "amnahadia34@gmail.com";
const PHONE = "+92 322 6184767";
const GITHUB = "https://github.com/amnahadia34-dotcom";
const LINKEDIN = "https://www.linkedin.com/in/amna-aurangzaib-051bb364/";

type Project = {
  name: string; what: string; features: string[]; tech: string[]; business: string; video: string; github?: string;
};

const projects: Project[] = [
  {
    name: "AI Enterprise Voice Agent",
    what: "A conversational voice agent that understands spoken requests and responds naturally, built to handle routine enterprise conversations.",
    features: ["Speech-to-text and natural voice replies", "LLM-driven conversation flow", "Context-aware responses", "API-ready integration layer"],
    tech: ["Python", "OpenAI API", "Speech APIs", "REST APIs"],
    business: "Front-line call handling, FAQs and appointment-style interactions without manual effort.",
    video: voice.url,
  },
  {
    name: "AI YouTube Automation SaaS",
    what: "A SaaS-style autopilot that automates parts of the YouTube content pipeline, from idea to script to publishing workflow.",
    features: ["AI script and title generation", "Automated content workflow", "Dashboard-style interface", "Repeatable scheduling pipeline"],
    tech: ["Python", "Streamlit", "OpenAI API", "YouTube API"],
    business: "Helps creators and agencies produce consistent content with less manual work.",
    video: youtube.url,
  },
  {
    name: "Facebook & Instagram Automation System",
    what: "A combined auto-reply system that responds to comments and messages on Facebook and Instagram using the Meta Graph API.",
    features: ["Auto-reply to comments and DMs", "Unified Facebook + Instagram handling", "Webhook-based event processing", "Configurable reply logic"],
    tech: ["Python", "Meta Graph API", "Webhooks", "OpenAI API"],
    business: "Keeps brand pages responsive around the clock.",
    video: insta.url,
    github: "https://github.com/aurangzaib-ai/FACEBOOK-INSTAGRAM-AUTOREPLY",
  },
  {
    name: "WhatsApp Automation",
    what: "Automated messaging on WhatsApp for replies, notifications and structured conversations.",
    features: ["Automated message replies", "Template and bulk messaging", "Conversation routing", "Cloud API integration"],
    tech: ["Python", "WhatsApp Cloud API", "REST APIs"],
    business: "Customer support, order updates and lead follow-ups on the channel customers already use.",
    video: whatsapp.url,
    github: "https://github.com/amnahadia34-dotcom/Whatsapp-Automation-",
  },
  {
    name: "AI Social Media Automation",
    what: "A bot that generates and manages social media content with AI, reducing repetitive posting work.",
    features: ["AI-generated captions and posts", "Automated posting workflow", "Multi-platform ready", "Simple control interface"],
    tech: ["Python", "OpenAI API", "Meta Graph API", "Streamlit"],
    business: "Consistent social presence for small teams without a dedicated content manager.",
    video: social.url,
    github: "https://github.com/amnahadia34-dotcom/SOCIAL-MEDIA-BOT-PROJECT",
  },
  {
    name: "Smart Property Consolidation System",
    what: "Consolidates property data from multiple sources into one clean, structured dataset for easy review.",
    features: ["Multi-source data merging", "Cleaning and de-duplication", "Google Sheets sync", "Interactive Streamlit view"],
    tech: ["Python", "Pandas", "Streamlit", "Google Sheets API"],
    business: "Saves hours of manual spreadsheet work for property and real-estate operations.",
    video: property.url,
    github: "https://github.com/amnahadia34-dotcom/Property-moduler",
  },
  {
    name: "AI Chatbot Development",
    what: "A custom AI chatbot that answers questions and guides users through conversations.",
    features: ["Natural language Q&A", "Custom knowledge and prompts", "Conversation memory", "Web interface"],
    tech: ["Python", "OpenAI API", "Streamlit", "REST APIs"],
    business: "Support and lead qualification on websites and internal tools.",
    video: chatbot.url,
  },
];

const skills = [
  { icon: Bot, name: "Python", desc: "Core language for automation, scripting and AI agents." },
  { icon: Sparkles, name: "OpenAI API", desc: "LLM-powered agents, chatbots and content generation." },
  { icon: Plug, name: "REST APIs", desc: "Designing and integrating APIs across services." },
  { icon: Workflow, name: "Meta Graph API", desc: "Facebook & Instagram automation and webhooks." },
  { icon: Phone, name: "WhatsApp Cloud API", desc: "Messaging automation and conversation flows." },
  { icon: Database, name: "Google Sheets API", desc: "Spreadsheet sync and lightweight data backends." },
  { icon: PenTool, name: "Streamlit", desc: "Fast, clean dashboards and app interfaces." },
  { icon: Database, name: "Data Consolidation", desc: "Merging, cleaning and structuring multi-source data." },
];

const stack = ["Python", "Pandas", "Streamlit", "OpenAI API", "REST APIs", "Webhooks", "Meta Graph API", "WhatsApp Cloud API", "Google Sheets API", "YouTube API", "Git & GitHub", "JSON"];

const approach = [
  { icon: Search, t: "Understand the workflow", d: "Map the real business process and find the repetitive steps." },
  { icon: PenTool, t: "Design the system", d: "Choose the right APIs, AI models and data flow." },
  { icon: Rocket, t: "Build & integrate", d: "Ship working Python automation connected to real tools." },
  { icon: ShieldCheck, t: "Test & refine", d: "Validate edge cases and keep the system reliable." },
];

const nav = [["About", "about"], ["Skills", "skills"], ["Projects", "projects"], ["Demos", "demos"], ["Approach", "approach"], ["Contact", "contact"]];

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-xs text-primary">{children}</span>;
}

function SectionHead({ k, title, sub }: { k: string; title: string; sub?: string }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">{k}</p>
      <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </div>
  );
}

function Index() {
  const [active, setActive] = useState<Project | null>(null);
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="font-display font-bold tracking-tight">AMNA<span className="text-primary">.</span></a>
          <nav className="hidden gap-6 text-sm text-muted-foreground md:flex">
            {nav.map(([l, id]) => <a key={id} href={`#${id}`} className="transition-colors hover:text-foreground">{l}</a>)}
          </nav>
          <a href={`mailto:${EMAIL}`} className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">Hire me</a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden pt-32 pb-24">
        <div className="grid-bg absolute inset-0" />
        <div className="glow absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2" />
        <div className="relative mx-auto max-w-6xl px-5">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-xs text-muted-foreground">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" /> Available for automation projects
          </p>
          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
            AMNA<br /><span className="text-primary">AURANGZAIB</span>
          </h1>
          <p className="mt-6 font-display text-xl font-semibold md:text-2xl">AI Automation Engineer</p>
          <p className="mt-2 font-mono text-sm text-accent">AI Agents • Python • APIs • SaaS & Business Automation</p>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">“Building intelligent systems that connect AI, APIs and real business workflows.”</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">View projects <ArrowRight className="h-4 w-4" /></a>
            <a href={GITHUB} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-semibold transition-colors hover:bg-secondary"><Github className="h-4 w-4" /> GitHub</a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-semibold transition-colors hover:bg-secondary"><Linkedin className="h-4 w-4" /> LinkedIn</a>
          </div>
          <p className="mt-8 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4" /> Bahawalpur, Pakistan</p>
        </div>
      </section>

      {/* Intro + About */}
      <section id="about" className="border-t border-border py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2">
          <div>
            <SectionHead k="01 — Introduction" title="Automation that does real work." />
            <p className="text-lg text-muted-foreground">I build AI-powered automation systems: agents, chatbots and API integrations that take repetitive tasks off people's plates and plug directly into the tools businesses already use.</p>
          </div>
          <div>
            <SectionHead k="02 — About Amna" title="Engineer at the intersection of AI & APIs." />
            <p className="text-muted-foreground">I'm an AI Automation Engineer based in Bahawalpur, Pakistan, working mainly in Python. My focus is connecting large language models with platforms like WhatsApp, Facebook, Instagram, YouTube and Google Sheets to create practical, end-to-end workflows.</p>
            <p className="mt-4 text-muted-foreground">From voice agents to data consolidation tools, I enjoy turning a messy manual process into a clean, reliable system.</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHead k="03 — Skills & Expertise" title="What I work with every day." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((s) => (
              <div key={s.name} className="rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40">
                <s.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-display font-semibold">{s.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHead k="04 — Portfolio Overview" title="Seven systems, one goal: less manual work." sub="Every project below includes a demo video so you can see it running." />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((p, i) => (
              <a key={p.name} href={`#p-${i}`} className="flex items-center gap-3 rounded-lg border border-border bg-card/50 p-4 text-sm transition-colors hover:border-primary/40">
                <span className="font-mono text-accent">{String(i + 1).padStart(2, "0")}</span>{p.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHead k="05 — Featured Projects" title="Selected work." />
          <div className="space-y-8">
            {projects.map((p, i) => (
              <article id={`p-${i}`} key={p.name} className="grid scroll-mt-24 gap-8 rounded-2xl border border-border bg-card p-6 md:grid-cols-5 md:p-8">
                <button onClick={() => setActive(p)} className="group relative aspect-video overflow-hidden rounded-xl border border-border bg-muted md:col-span-2" aria-label={`Watch ${p.name} demo`}>
                  <video src={`${p.video}#t=1`} muted playsInline preload="metadata" className="h-full w-full object-cover opacity-70 transition-opacity group-hover:opacity-90" />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:scale-110"><Play className="ml-1 h-6 w-6" /></span>
                  </span>
                </button>
                <div className="md:col-span-3">
                  <p className="font-mono text-xs text-accent">PROJECT {String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-2 font-display text-2xl font-bold">{p.name}</h3>
                  <p className="mt-3 text-muted-foreground">{p.what}</p>
                  <ul className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
                    {p.features.map((f) => <li key={f} className="flex gap-2"><span className="text-primary">▹</span>{f}</li>)}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">{p.tech.map((t) => <Badge key={t}>{t}</Badge>)}</div>
                  <p className="mt-4 rounded-lg border-l-2 border-accent bg-secondary/50 p-3 text-sm"><span className="font-semibold text-accent">Business application: </span>{p.business}</p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <button onClick={() => setActive(p)} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground"><Play className="h-4 w-4" /> Watch Demo</button>
                    {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2 text-sm font-semibold hover:bg-secondary"><Github className="h-4 w-4" /> GitHub</a>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Demos gallery */}
      <section id="demos" className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHead k="06 — GitHub & Project Demos" title="Watch the systems in action." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <div key={p.name} className="overflow-hidden rounded-xl border border-border bg-card">
                <button onClick={() => setActive(p)} className="group relative block aspect-video w-full bg-muted" aria-label={`Play ${p.name}`}>
                  <video src={`${p.video}#t=1`} muted playsInline preload="metadata" className="h-full w-full object-cover opacity-70 group-hover:opacity-90" />
                  <Play className="absolute inset-0 m-auto h-10 w-10 text-primary" />
                </button>
                <div className="flex items-center justify-between gap-2 p-4">
                  <p className="text-sm font-semibold">{p.name}</p>
                  {p.github && <a href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub repo" className="text-muted-foreground hover:text-primary"><Github className="h-4 w-4" /></a>}
                </div>
              </div>
            ))}
          </div>
          <a href={GITHUB} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 text-primary hover:underline"><Github className="h-4 w-4" /> See all repositories on GitHub <ArrowRight className="h-4 w-4" /></a>
        </div>
      </section>

      {/* Stack */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHead k="07 — Technology Stack" title="Tools of the trade." />
          <div className="flex flex-wrap gap-3">
            {stack.map((s) => <span key={s} className="rounded-lg border border-border bg-card px-4 py-2 font-mono text-sm transition-colors hover:border-primary hover:text-primary">{s}</span>)}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHead k="08 — Engineering Approach" title="How I solve problems." />
          <div className="grid gap-4 md:grid-cols-4">
            {approach.map((a, i) => (
              <div key={a.t} className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-center justify-between"><a.icon className="h-6 w-6 text-accent" /><span className="font-mono text-xs text-muted-foreground">0{i + 1}</span></div>
                <h3 className="mt-4 font-display font-semibold">{a.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative overflow-hidden border-t border-border py-24">
        <div className="glow absolute -bottom-60 left-1/2 h-[500px] w-[500px] -translate-x-1/2" />
        <div className="relative mx-auto max-w-4xl px-5 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">09 — Contact</p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Let's automate something together.</h2>
          <div className="mt-10 grid gap-4 text-left sm:grid-cols-2">
            {[
              { icon: Mail, l: "Email", v: EMAIL, h: `mailto:${EMAIL}` },
              { icon: Phone, l: "Phone", v: PHONE, h: "tel:+923226184767" },
              { icon: Github, l: "GitHub", v: "amnahadia34-dotcom", h: GITHUB },
              { icon: Linkedin, l: "LinkedIn", v: "amna-aurangzaib", h: LINKEDIN },
            ].map((c) => (
              <a key={c.l} href={c.h} target={c.h.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50">
                <c.icon className="h-5 w-5 text-primary" />
                <div><p className="text-xs text-muted-foreground">{c.l}</p><p className="font-semibold break-all">{c.v}</p></div>
              </a>
            ))}
          </div>
          <p className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4" /> Bahawalpur, Pakistan</p>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">© {new Date().getFullYear()} Amna Aurangzaib · AI Automation Engineer</footer>

      {active && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-4 backdrop-blur animate-in fade-in" onClick={() => setActive(null)}>
          <div className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-display text-lg font-semibold">{active.name}</h3>
              <button onClick={() => setActive(null)} aria-label="Close" className="rounded-full border border-border p-2 hover:bg-secondary"><X className="h-4 w-4" /></button>
            </div>
            <video key={active.video} src={active.video} controls autoPlay playsInline className="aspect-video w-full rounded-xl border border-border bg-card" />
          </div>
        </div>
      )}
    </div>
  );
}
