import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { z } from "zod";
import {
  Github, Linkedin, Mail, Phone, MapPin, Play, X, ArrowRight, Bot, Workflow, Plug, Database, Sparkles, Search, PenTool,
  Rocket, ShieldCheck, FileText, Brain, MessageSquareCode, Code2, Webhook, LayoutDashboard, Table2, Braces, Share2,
  MessageCircle, Sheet, Video, GitBranch, ArrowDown, Send, Mic, Layers,
} from "lucide-react";
import { projects, EMAIL, PHONE, GITHUB, LINKEDIN, type Project } from "@/lib/portfolio-data";

const TITLE = "Amna Aurangzaib — AI Automation Engineer Portfolio";
const DESC = "AI agents, Python, APIs and SaaS business automation projects by Amna Aurangzaib, with demo videos and case studies.";

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

const skills = [
  { icon: Bot, name: "Python", desc: "Core language for automation, scripting and AI agents." },
  { icon: Sparkles, name: "OpenAI API", desc: "LLM-powered agents, chatbots and content generation." },
  { icon: Plug, name: "REST APIs", desc: "Designing and integrating APIs across services." },
  { icon: Workflow, name: "Meta Graph API", desc: "Facebook & Instagram automation and webhooks." },
  { icon: Phone, name: "WhatsApp Cloud API", desc: "Messaging automation and conversation flows." },
  { icon: Database, name: "Google Sheets API", desc: "Spreadsheet sync and lightweight data backends." },
  { icon: PenTool, name: "Streamlit", desc: "Fast, clean dashboards and app interfaces." },
  { icon: Layers, name: "Data Consolidation", desc: "Merging, cleaning and structuring multi-source data." },
];

const stackGroups = [
  { label: "AI & Intelligence", items: [
    { i: Sparkles, n: "OpenAI API", d: "LLM reasoning & generation" },
    { i: Brain, n: "AI Agents", d: "Task-driven assistants" },
    { i: MessageSquareCode, n: "Prompt Engineering", d: "Reliable model behaviour" },
  ]},
  { label: "Backend & Programming", items: [
    { i: Code2, n: "Python", d: "Automation core" },
    { i: Rocket, n: "FastAPI", d: "Lightweight API services" },
    { i: Plug, n: "REST APIs", d: "Service integration" },
    { i: Webhook, n: "Webhooks", d: "Event-driven triggers" },
  ]},
  { label: "Applications & Data", items: [
    { i: LayoutDashboard, n: "Streamlit", d: "App interfaces" },
    { i: Table2, n: "Pandas", d: "Data cleaning & merging" },
    { i: Braces, n: "JSON", d: "Structured data exchange" },
  ]},
  { label: "Business Integrations", items: [
    { i: Share2, n: "Meta Graph API", d: "Facebook & Instagram" },
    { i: MessageCircle, n: "WhatsApp Cloud API", d: "Business messaging" },
    { i: Sheet, n: "Google Sheets API", d: "Spreadsheet sync" },
    { i: Video, n: "YouTube API", d: "Content pipelines" },
  ]},
  { label: "Development", items: [
    { i: GitBranch, n: "Git", d: "Version control" },
    { i: Github, n: "GitHub", d: "Code hosting" },
  ]},
];

const approach = [
  { icon: Search, t: "Understand the workflow", d: "Map the real business process, identify bottlenecks and determine what actually needs automation." },
  { icon: PenTool, t: "Design the system", d: "Choose the right AI models, APIs, data flows and system architecture for the problem." },
  { icon: Rocket, t: "Build & integrate", d: "Develop the automation and connect intelligence with real tools, APIs and business workflows." },
  { icon: ShieldCheck, t: "Test & refine", d: "Validate workflows, edge cases, integrations and reliability before considering the system complete." },
];

const values = [
  { p: "Customer Conversations", s: "AI Voice Automation", i: Mic },
  { p: "Repetitive Customer Messages", s: "WhatsApp Automation", i: MessageCircle },
  { p: "Social Interactions", s: "Facebook & Instagram Automation", i: Share2 },
  { p: "Content Operations", s: "YouTube Automation", i: Video },
  { p: "Fragmented Business Data", s: "Data Consolidation", i: Table2 },
  { p: "Repetitive Processes", s: "AI + API Workflows", i: Workflow },
];

const nav = [["About", "about"], ["Skills", "skills"], ["Projects", "projects"], ["Demos", "demos"], ["Approach", "approach"], ["Contact", "contact"]] as const;

function Badge({ children }: { children: ReactNode }) {
  return <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-xs text-primary">{children}</span>;
}

function SectionHead({ k, title, sub }: { k: string; title: string; sub?: string }) {
  return (
    <div className="reveal mb-10 max-w-2xl">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">{k}</p>
      <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </div>
  );
}

function Flow({ steps, vertical }: { steps: string[]; vertical?: boolean }) {
  return (
    <div className={vertical ? "flex flex-col items-stretch gap-1" : "flex flex-wrap items-center gap-2"}>
      {steps.map((s, i) => (
        <div key={s} className={vertical ? "flex flex-col items-center gap-1" : "flex items-center gap-2"}>
          <span className="flow-step w-full rounded-lg border border-primary/30 bg-primary/5 px-3 py-2 text-center font-mono text-xs text-foreground" style={{ transitionDelay: `${i * 120}ms` }}>{s}</span>
          {i < steps.length - 1 && (vertical ? <ArrowDown className="h-4 w-4 text-primary" /> : <ArrowRight className="h-4 w-4 text-primary" />)}
        </div>
      ))}
    </div>
  );
}

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  company: z.string().trim().max(120).optional(),
  message: z.string().trim().min(1, "Tell me what you'd like to automate").max(1500),
});

function ContactForm() {
  const [err, setErr] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const r = contactSchema.safeParse(fd);
    if (!r.success) {
      const m: Record<string, string> = {};
      r.error.issues.forEach((i) => (m[String(i.path[0])] = i.message));
      setErr(m);
      return;
    }
    setErr({});
    const { name, email, company, message } = r.data;
    const subject = `Automation inquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nCompany: ${company || "-"}\n\n${message}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setDone(true);
  }
  const field = "mt-1 w-full rounded-lg border border-input bg-background/60 px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary";
  return (
    <form onSubmit={submit} noValidate className="space-y-4 rounded-2xl border border-border bg-card/80 p-6 backdrop-blur">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm">Name<input name="name" className={field} maxLength={100} />{err.name && <span className="text-xs text-destructive">{err.name}</span>}</label>
        <label className="text-sm">Email<input name="email" type="email" className={field} maxLength={255} />{err.email && <span className="text-xs text-destructive">{err.email}</span>}</label>
      </div>
      <label className="block text-sm">Company / Organization <span className="text-muted-foreground">(optional)</span><input name="company" className={field} maxLength={120} /></label>
      <label className="block text-sm">What would you like to automate?<textarea name="message" rows={4} className={field} maxLength={1500} />{err.message && <span className="text-xs text-destructive">{err.message}</span>}</label>
      <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_-6px_var(--primary)]"><Send className="h-4 w-4" /> Send Message</button>
      <p className="text-center text-xs text-muted-foreground">{done ? "Your email app should now open with the message ready to send." : "Opens your email app with the message pre-filled — nothing is stored on this site."}</p>
    </form>
  );
}

function Index() {
  const [demo, setDemo] = useState<Project | null>(null);
  const [study, setStudy] = useState<Project | null>(null);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") { setDemo(null); setStudy(null); } };
    window.addEventListener("keydown", k);
    const ro = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => ro.observe(el));
    const so = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActiveId(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("section[id]").forEach((el) => so.observe(el));
    return () => { window.removeEventListener("keydown", k); ro.disconnect(); so.disconnect(); };
  }, []);

  useEffect(() => {
    document.body.style.overflow = demo || study ? "hidden" : "";
  }, [demo, study]);

  const repos = projects.filter((p) => p.github);
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  const Actions = ({ p }: { p: Project }) => (
    <div className="mt-5 flex flex-wrap gap-2">
      {p.video && <button onClick={() => setDemo(p)} className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"><Play className="h-4 w-4" /> Watch Demo</button>}
      <button onClick={() => setStudy(p)} className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"><FileText className="h-4 w-4" /> View Case Study</button>
      {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold transition-colors hover:bg-secondary"><Github className="h-4 w-4" /> GitHub</a>}
    </div>
  );

  const Thumb = ({ p, className = "" }: { p: Project; className?: string }) =>
    p.video ? (
      <button onClick={() => setDemo(p)} className={`group relative aspect-video overflow-hidden rounded-xl border border-border bg-muted ${className}`} aria-label={`Watch ${p.name} demo`}>
        <video src={`${p.video}#t=1`} muted playsInline preload="metadata" className="h-full w-full object-cover opacity-75 transition-all duration-500 group-hover:scale-105 group-hover:opacity-95" />
        <span className="absolute inset-0 flex items-center justify-center"><span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform group-hover:scale-110"><Play className="ml-1 h-6 w-6" /></span></span>
      </button>
    ) : null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 lg:grid lg:grid-cols-[1fr_auto_1fr]">
          <a href="#top" className="font-display text-lg font-bold tracking-tight">AMNA<span className="text-primary">.</span></a>
          <nav className="hidden items-center gap-1 rounded-full border border-border/60 bg-card/40 p-1 text-sm lg:flex">
            {nav.map(([l, id]) => (
              <a key={id} href={`#${id}`} className={`rounded-full px-3.5 py-1.5 transition-all duration-300 ${activeId === id ? "bg-primary/15 text-primary" : "text-muted-foreground hover:text-foreground"}`}>{l}</a>
            ))}
          </nav>
          <a href="#contact" className="justify-self-end rounded-full border border-primary/50 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_24px_-6px_var(--primary)]">Let's Work Together</a>
        </div>
        <nav className="flex gap-1 overflow-x-auto border-t border-border/40 px-3 py-2 text-xs lg:hidden">
          {nav.map(([l, id]) => <a key={id} href={`#${id}`} className={`shrink-0 rounded-full px-3 py-1 ${activeId === id ? "bg-primary/15 text-primary" : "text-muted-foreground"}`}>{l}</a>)}
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden pt-40 pb-20 lg:pt-36">
        <div className="grid-bg absolute inset-0" />
        <div className="glow absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-xs text-muted-foreground"><span className="h-2 w-2 animate-pulse rounded-full bg-primary" /> Available for automation projects</p>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">AMNA<br /><span className="text-primary">AURANGZAIB</span></h1>
            <p className="mt-6 font-display text-xl font-semibold md:text-2xl">AI Automation Engineer</p>
            <p className="mt-2 font-mono text-sm text-accent">AI Agents • Python • APIs • SaaS & Business Automation</p>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">“Building intelligent systems that connect AI, APIs and real business workflows.”</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">View projects <ArrowRight className="h-4 w-4" /></a>
              <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-semibold transition-colors hover:bg-secondary"><Github className="h-4 w-4" /> GitHub</a>
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-semibold transition-colors hover:bg-secondary"><Linkedin className="h-4 w-4" /> LinkedIn</a>
            </div>
            <p className="mt-8 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4" /> Bahawalpur, Pakistan</p>
          </div>
          <div className="reveal hidden rounded-2xl border border-border bg-card/70 p-6 backdrop-blur lg:block">
            <p className="font-mono text-xs text-muted-foreground">// automation pipeline</p>
            <div className="mt-4"><Flow vertical steps={["Business Input", "AI / Logic Layer", "APIs & Integrations", "Automation", "Business Action"]} /></div>
          </div>
        </div>
      </section>

      {/* Intro + About */}
      <section id="about" className="border-t border-border py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2">
          <div>
            <SectionHead k="01 — Introduction" title="Automation that does real work." />
            <p className="reveal text-lg text-muted-foreground">I build AI-powered automation systems: agents, chatbots and API integrations that take repetitive tasks off people's plates and plug directly into the tools businesses already use.</p>
          </div>
          <div>
            <SectionHead k="02 — About Amna" title="Engineer at the intersection of AI & APIs." />
            <div className="reveal">
              <p className="text-muted-foreground">I'm an AI Automation Engineer based in Bahawalpur, Pakistan, working mainly in Python. My focus is connecting large language models with platforms like WhatsApp, Facebook, Instagram, YouTube and Google Sheets to create practical, end-to-end workflows.</p>
              <p className="mt-4 text-muted-foreground">From voice agents to data consolidation tools, I enjoy turning a messy manual process into a clean, reliable system.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value */}
      <section className="relative overflow-hidden border-t border-border py-20">
        <div className="nodes-bg absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-5">
          <SectionHead k="Problem → System" title="From Business Problem to Working System." sub="I don't approach automation by asking what AI can do. I start by understanding what the business actually needs." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v.p} className="reveal lift rounded-xl border border-border bg-card/80 p-5">
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Problem</p>
                <p className="mt-1 font-semibold">{v.p}</p>
                <div className="my-3 flex items-center gap-2 text-primary"><span className="h-px flex-1 bg-primary/30" /><ArrowDown className="h-4 w-4" /><span className="h-px flex-1 bg-primary/30" /></div>
                <p className="flex items-center gap-2 font-display font-semibold text-primary"><v.i className="h-4 w-4" /> {v.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-t border-border py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHead k="03 — Skills & Expertise" title="What I work with every day." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((s) => (
              <div key={s.name} className="reveal lift rounded-xl border border-border bg-card p-6">
                <s.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-display font-semibold">{s.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHead k="04 — Portfolio Overview" title="Seven systems, one goal: less manual work." sub="Every project includes a demo video and a case study so you can see how it works." />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((p, i) => (
              <a key={p.name} href={`#p-${i}`} className="reveal lift flex items-center gap-3 rounded-lg border border-border bg-card/50 p-4 text-sm">
                <span className="font-mono text-accent">{String(i + 1).padStart(2, "0")}</span>
                <span><span className="block font-semibold">{p.name}</span><span className="text-xs text-muted-foreground">{p.category}</span></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative border-t border-border py-20">
        <div className="glow absolute top-40 -right-60 h-[500px] w-[500px]" />
        <div className="relative mx-auto max-w-6xl px-5">
          <SectionHead k="05 — Featured Projects" title="Selected work." sub="Real systems built around real workflows — each with the problem, the solution and a working demo." />
          <div className="grid gap-6 lg:grid-cols-2">
            {featured.map((p) => {
              const i = projects.indexOf(p);
              return (
                <article id={`p-${i}`} key={p.name} className="reveal lift scroll-mt-28 rounded-2xl border border-border bg-card p-6">
                  <Thumb p={p} className="w-full" />
                  <ProjectBody p={p} i={i} />
                  <Actions p={p} />
                </article>
              );
            })}
          </div>
          <div className="mt-6 space-y-6">
            {rest.map((p) => {
              const i = projects.indexOf(p);
              return (
                <article id={`p-${i}`} key={p.name} className="reveal lift grid scroll-mt-28 gap-6 rounded-2xl border border-border bg-card p-6 md:grid-cols-5">
                  <Thumb p={p} className="md:col-span-2 md:self-start" />
                  <div className="md:col-span-3"><ProjectBody p={p} i={i} compact /><Actions p={p} /></div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Demos gallery */}
      <section id="demos" className="border-t border-border py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHead k="06 — Project Demos" title="Watch the systems in action." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.filter((p) => p.video).map((p) => (
              <div key={p.name} className="reveal lift overflow-hidden rounded-xl border border-border bg-card">
                <Thumb p={p} className="w-full rounded-none border-0" />
                <div className="flex items-center justify-between gap-2 p-4">
                  <div><p className="text-sm font-semibold">{p.name}</p><p className="text-xs text-muted-foreground">{p.category}</p></div>
                  <button onClick={() => setStudy(p)} aria-label={`${p.name} case study`} className="text-muted-foreground transition-colors hover:text-primary"><FileText className="h-4 w-4" /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Engineering */}
      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHead k="07 — Explore the Engineering" title="Explore the Engineering." sub="Go beyond the interface and explore the repositories, architecture and implementation behind selected projects." />
          <div className="grid gap-4 sm:grid-cols-2">
            {repos.map((p) => {
              const u = new URL(p.github!);
              return (
                <a key={p.github} href={p.github} target="_blank" rel="noopener noreferrer" className="reveal lift group rounded-xl border border-border bg-card p-6">
                  <div className="flex items-center justify-between"><Github className="h-6 w-6 text-primary" /><span className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors group-hover:text-primary">View GitHub <ArrowRight className="h-4 w-4" /></span></div>
                  <h3 className="mt-4 font-display font-semibold">{p.name}</h3>
                  <p className="mt-1 break-all font-mono text-xs text-muted-foreground">{u.pathname.slice(1)}</p>
                  <div className="mt-4 flex flex-wrap gap-2">{p.tech.map((t) => <Badge key={t}>{t}</Badge>)}</div>
                </a>
              );
            })}
          </div>
          <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 text-primary hover:underline"><Github className="h-4 w-4" /> See all repositories on GitHub <ArrowRight className="h-4 w-4" /></a>
        </div>
      </section>

      {/* Stack */}
      <section className="relative overflow-hidden border-t border-border py-20">
        <div className="nodes-bg absolute inset-0" />
        <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-30" aria-hidden>
          <path d="M0,120 C300,40 500,260 800,140 S1300,60 1600,180" fill="none" stroke="var(--primary)" strokeWidth="1" className="flow-line" />
          <path d="M0,420 C350,320 600,520 900,400 S1400,300 1700,440" fill="none" stroke="var(--accent)" strokeWidth="1" className="flow-line" />
        </svg>
        <div className="relative mx-auto max-w-6xl px-5">
          <SectionHead k="08 — Technology Stack" title="Tools of the trade." sub="The technologies behind the projects above, grouped by the role they play in a system." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {stackGroups.map((g) => (
              <div key={g.label} className="reveal rounded-2xl border border-border bg-card/80 p-5 backdrop-blur">
                <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">{g.label}</p>
                <div className="space-y-2">
                  {g.items.map((t) => (
                    <div key={t.n} className="lift flex items-center gap-3 rounded-lg border border-border bg-background/50 px-3 py-2.5">
                      <t.i className="h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm font-semibold">{t.n}</span>
                      <span className="ml-auto text-right text-xs text-muted-foreground">{t.d}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="border-t border-border py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHead k="09 — Engineering Approach" title="How I solve problems." />
          <div className="relative">
            <div className="absolute top-12 right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-primary/0 via-primary/60 to-primary/0 md:block" />
            <div className="relative grid gap-4 md:grid-cols-4">
              {approach.map((a, i) => (
                <div key={a.t} className="reveal lift rounded-xl border border-border bg-card p-6" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="flex items-center justify-between"><span className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-background"><a.icon className="h-5 w-5 text-accent" /></span><span className="font-mono text-xs text-muted-foreground">0{i + 1}</span></div>
                  <h3 className="mt-4 font-display text-sm font-bold uppercase tracking-wide">{a.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{a.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal mt-10 rounded-2xl border border-border bg-card/60 p-6">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">System thinking</p>
            <Flow steps={["Problem", "Architecture", "Intelligence", "Integration", "Business Outcome"]} />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative overflow-hidden border-t border-border py-20">
        <div className="glow absolute -bottom-60 left-1/2 h-[500px] w-[500px] -translate-x-1/2" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-2">
          <div className="reveal">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">10 — Contact</p>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Have a workflow worth automating?</h2>
            <p className="mt-5 text-muted-foreground">I'm interested in AI automation, intelligent agents, API integrations and business workflow challenges where technology can create practical value.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-semibold text-primary-foreground transition-opacity hover:opacity-90"><Mail className="h-4 w-4" /> Email Me</a>
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-semibold transition-colors hover:bg-secondary"><Linkedin className="h-4 w-4" /> LinkedIn</a>
              <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-semibold transition-colors hover:bg-secondary"><Github className="h-4 w-4" /> GitHub</a>
            </div>
            <div className="mt-8 space-y-3 text-sm">
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-muted-foreground hover:text-primary"><Mail className="h-4 w-4 text-primary" /> {EMAIL}</a>
              <a href="tel:+923226184767" className="flex items-center gap-3 text-muted-foreground hover:text-primary"><Phone className="h-4 w-4 text-primary" /> {PHONE}</a>
              <p className="flex items-center gap-3 text-muted-foreground"><MapPin className="h-4 w-4 text-primary" /> Bahawalpur, Pakistan</p>
            </div>
          </div>
          <div className="reveal"><ContactForm /></div>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">© {new Date().getFullYear()} Amna Aurangzaib · AI Automation Engineer</footer>

      {demo?.video && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-background/90 p-4 backdrop-blur animate-in fade-in" onClick={() => setDemo(null)}>
          <div className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-display text-lg font-semibold">{demo.name}</h3>
              <button onClick={() => setDemo(null)} aria-label="Close" className="rounded-full border border-border p-2 hover:bg-secondary"><X className="h-4 w-4" /></button>
            </div>
            <video key={demo.video} src={demo.video} controls autoPlay playsInline className="aspect-video w-full rounded-xl border border-border bg-card" />
          </div>
        </div>
      )}

      {study && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-background/90 p-4 backdrop-blur animate-in fade-in" onClick={() => setStudy(null)}>
          <div className="mx-auto my-8 max-w-3xl rounded-2xl border border-border bg-card p-6 md:p-10" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between gap-4">
              <div><p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Case Study · {study.category}</p><h3 className="mt-2 font-display text-2xl font-bold md:text-3xl">{study.name}</h3></div>
              <button onClick={() => setStudy(null)} aria-label="Close" className="rounded-full border border-border p-2 hover:bg-secondary"><X className="h-4 w-4" /></button>
            </div>
            <div className="mt-8 space-y-8">
              <CS t="The Problem"><p className="text-muted-foreground">{study.problem}</p></CS>
              <CS t="The Solution"><p className="text-muted-foreground">{study.solution}</p></CS>
              <CS t="Key Features"><ul className="grid gap-2 text-sm sm:grid-cols-2">{study.features.map((f) => <li key={f} className="flex gap-2"><span className="text-primary">▹</span>{f}</li>)}</ul></CS>
              <CS t="System Workflow"><div className="in"><Flow steps={study.workflow} /></div></CS>
              <CS t="Technology Stack"><div className="flex flex-wrap gap-2">{study.tech.map((t) => <Badge key={t}>{t}</Badge>)}</div></CS>
              <CS t="Business Application"><p className="text-muted-foreground">{study.business}</p></CS>
              {study.video && <CS t="Demo"><video key={study.video} src={study.video} controls playsInline preload="metadata" className="aspect-video w-full rounded-xl border border-border bg-muted" /></CS>}
              <CS t="GitHub Repository">
                {study.github
                  ? <a href={study.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold hover:bg-secondary"><Github className="h-4 w-4" /> View repository</a>
                  : <p className="text-sm text-muted-foreground">Repository not publicly listed for this project.</p>}
              </CS>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function CS({ t, children }: { t: string; children: ReactNode }) {
  return <div><p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">{t}</p>{children}</div>;
}

function ProjectBody({ p, i, compact }: { p: Project; i: number; compact?: boolean }) {
  return (
    <div className={compact ? "" : "mt-5"}>
      <div className="flex flex-wrap items-center gap-2"><span className="font-mono text-xs text-accent">PROJECT {String(i + 1).padStart(2, "0")}</span><span className="text-xs text-muted-foreground">· {p.category}</span></div>
      <h3 className="mt-2 font-display text-2xl font-bold">{p.name}</h3>
      <div className="mt-3 space-y-2 text-sm">
        <p><span className="font-semibold text-foreground">Problem: </span><span className="text-muted-foreground">{p.problem}</span></p>
        <p><span className="font-semibold text-foreground">Solution: </span><span className="text-muted-foreground">{p.solution}</span></p>
      </div>
      <ul className="mt-4 grid gap-1.5 text-sm sm:grid-cols-2">{p.features.map((f) => <li key={f} className="flex gap-2"><span className="text-primary">▹</span>{f}</li>)}</ul>
      <div className="mt-4 flex flex-wrap gap-2">{p.tech.map((t) => <Badge key={t}>{t}</Badge>)}</div>
    </div>
  );
}
