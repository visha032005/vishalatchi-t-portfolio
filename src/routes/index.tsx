import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import {
  ArrowDown,
  Award,
  BadgeCheck,
  Briefcase,
  Cpu,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Presentation,
  Send,
  Sparkles,
} from "lucide-react";

import { Navbar } from "@/components/portfolio/Navbar";
import { Reveal } from "@/components/portfolio/Reveal";
import {
  achievements,
  certifications,
  education,
  internships,
  profile,
  projects,
  skills,
  workshops,
} from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vishalatchi T — MCA Student & Aspiring Software Professional" },
      {
        name: "description",
        content:
          "Portfolio of Vishalatchi T, MCA student at Holy Cross College Tiruchirappalli — projects, internships in AI/ML, IoT and Data Analytics, skills and certifications.",
      },
      {
        property: "og:title",
        content: "Vishalatchi T — MCA Student & Aspiring Software Professional",
      },
      {
        property: "og:description",
        content:
          "Projects, internships, skills and certifications of Vishalatchi T, MCA student and aspiring software professional.",
      },
    ],
  }),
  component: Index,
});

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-muted-foreground">{description}</p>}
    </Reveal>
  );
}

function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-5 py-20 sm:py-24 ${className}`}>
      {children}
    </section>
  );
}

function Index() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email app to send the message.");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        {/* HERO */}
        <section id="home" className="hero-bg relative overflow-hidden">
          <div className="mx-auto flex max-w-6xl flex-col justify-center px-5 pb-20 pt-32 sm:pt-40">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-medium text-muted-foreground">
                <Sparkles className="size-3.5 text-primary" />
                Open to internships & fresher roles
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-6xl">
                Hi, I&apos;m <span className="gradient-text">Vishalatchi T</span>
              </h1>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-4 font-display text-lg text-primary sm:text-xl">
                {profile.tagline}
              </p>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
                {profile.intro}
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                  style={{ boxShadow: "var(--shadow-glow)" }}
                >
                  View My Projects
                </a>
                <button
                  type="button"
                  onClick={() =>
                    toast("Resume available on request", {
                      description: `Please reach out at ${profile.email} for the latest resume.`,
                    })
                  }
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-6 py-3 text-sm font-semibold transition-colors hover:border-primary/60"
                >
                  <Download className="size-4" />
                  Download Resume
                </button>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
                >
                  Contact Me
                </a>
              </div>
            </Reveal>

            <Reveal delay={380}>
              <div className="mt-8 flex items-center gap-3">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                  className="grid size-11 place-items-center rounded-xl border border-border bg-secondary/40 transition-colors hover:border-primary/60 hover:text-primary"
                >
                  <Github className="size-5" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                  className="grid size-11 place-items-center rounded-xl border border-border bg-secondary/40 transition-colors hover:border-primary/60 hover:text-primary"
                >
                  <Linkedin className="size-5" />
                </a>
                <a
                  href="#about"
                  aria-label="Scroll to about section"
                  className="ml-auto hidden items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground sm:flex"
                >
                  Scroll <ArrowDown className="size-4 animate-bounce" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ABOUT */}
        <Section id="about">
          <SectionHeading eyebrow="About" title="A little about me" />
          <div className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
            <Reveal className="glass p-7">
              <p className="leading-relaxed text-muted-foreground">
                I am currently pursuing my Master of Computer Applications at Holy Cross College,
                Tiruchirappalli, after completing my Bachelor of Computer Applications at Cauvery
                College for Women. My academic journey has given me a solid foundation in
                programming, databases and web technologies.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Through internships in Artificial Intelligence and Machine Learning, Internet of
                Things and Data Analytics, I have explored how technology is applied to real
                problems. I enjoy turning what I learn into working projects and I keep learning
                new technologies as I go.
              </p>
            </Reveal>
            <div className="grid gap-4">
              {[
                { icon: GraduationCap, title: "MCA Student", text: "Holy Cross College, Tiruchirappalli" },
                { icon: Cpu, title: "AI/ML, IoT & Data Analytics", text: "Hands-on internship exposure" },
                { icon: Briefcase, title: "Project Development", text: "Web projects using PHP, MySQL & HTML" },
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 90} className="glass flex items-start gap-4 p-5">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                    <item.icon className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Section>

        {/* EDUCATION */}
        <Section id="education">
          <SectionHeading eyebrow="Education" title="Academic timeline" />
          <ol className="relative mx-auto max-w-3xl border-l border-border pl-6 sm:pl-10">
            {education.map((item, i) => (
              <Reveal as="li" key={item.degree} delay={i * 90} className="relative mb-8 last:mb-0">
                <span
                  aria-hidden
                  className="absolute -left-[31px] top-6 size-3 rounded-full bg-primary sm:-left-[47px]"
                  style={{ boxShadow: "0 0 0 4px color-mix(in oklab, var(--primary) 20%, transparent)" }}
                />
                <div className="glass p-6">
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                    <h3 className="min-w-0 text-base font-semibold sm:text-lg">{item.degree}</h3>
                    <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-xs text-primary">
                      {item.year}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{item.institution}</p>
                  <p className="mt-3 text-sm font-medium text-foreground">{item.score}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </Section>

        {/* SKILLS */}
        <Section id="skills">
          <SectionHeading
            eyebrow="Skills"
            title="Technical skills"
            description="Technologies and tools I have worked with during my academics, projects and internships."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, i) => (
              <Reveal key={skill.name} delay={i * 70} className="glass p-6">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
                  <h3 className="min-w-0 truncate text-lg font-semibold">{skill.name}</h3>
                  <span className="shrink-0 text-xs uppercase tracking-wider text-muted-foreground">
                    {skill.category}
                  </span>
                </div>
                <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full transition-[width] duration-1000"
                    style={{
                      width: `${skill.level}%`,
                      backgroundImage: "var(--gradient-text)",
                    }}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* INTERNSHIPS */}
        <Section id="internships">
          <SectionHeading eyebrow="Experience" title="Internships" />
          <div className="grid gap-5 md:grid-cols-3">
            {internships.map((item, i) => (
              <Reveal key={item.org} delay={i * 90} className="glass flex h-full flex-col p-6">
                <span className="w-fit rounded-full bg-secondary px-3 py-1 text-xs text-primary">
                  {item.year}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{item.domain}</h3>
                <p className="mt-1 text-sm font-medium text-muted-foreground">{item.org}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* PROJECTS */}
        <Section id="projects">
          <SectionHeading eyebrow="Projects" title="Featured projects" />
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal key={project.title} delay={i * 100} className="glass flex h-full flex-col p-7">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>
                <ul className="mt-5 space-y-2">
                  {project.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-muted-foreground">
                      <BadgeCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-3 py-1 text-xs text-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3 pt-1">
                  <button
                    type="button"
                    disabled
                    className="cursor-not-allowed rounded-full border border-border px-4 py-2 text-xs font-semibold text-muted-foreground opacity-70"
                  >
                    GitHub link coming soon
                  </button>
                  <button
                    type="button"
                    disabled
                    className="cursor-not-allowed rounded-full border border-border px-4 py-2 text-xs font-semibold text-muted-foreground opacity-70"
                  >
                    Live demo coming soon
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* CERTIFICATIONS */}
        <Section id="certifications">
          <SectionHeading eyebrow="Certifications" title="Certifications by year" />
          <div className="grid gap-5 md:grid-cols-2">
            {certifications.map((group, i) => (
              <Reveal key={group.year} delay={i * 80} className="glass p-6">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-secondary text-primary">
                    <Award className="size-5" />
                  </span>
                  <h3 className="text-lg font-semibold">{group.year}</h3>
                </div>
                <ul className="mt-4 space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                      <BadgeCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* WORKSHOPS & ACHIEVEMENTS */}
        <Section id="achievements">
          <SectionHeading eyebrow="Beyond the classroom" title="Workshops & achievements" />
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal className="glass p-6">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-secondary text-primary">
                  <Presentation className="size-5" />
                </span>
                <h3 className="text-lg font-semibold">Workshops</h3>
              </div>
              <ul className="mt-5 space-y-4">
                {workshops.map((w) => (
                  <li key={w.title} className="border-l border-border pl-4">
                    <p className="text-sm font-medium">{w.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {w.org ? `${w.org} · ` : ""}
                      {w.year}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={100} className="glass p-6">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-secondary text-primary">
                  <Award className="size-5" />
                </span>
                <h3 className="text-lg font-semibold">Seminar & achievements</h3>
              </div>
              <ul className="mt-5 space-y-4">
                {achievements.map((a) => (
                  <li key={a.title} className="border-l border-border pl-4">
                    <p className="text-sm font-medium">{a.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {a.org ? `${a.org} · ` : ""}
                      {a.year}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact">
          <SectionHeading
            eyebrow="Contact"
            title="Let's connect"
            description="Feel free to reach out for internship opportunities, fresher roles or collaboration."
          />
          <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
            <Reveal className="glass flex flex-col gap-4 p-7">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-4 text-sm transition-colors hover:text-primary"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                  <Mail className="size-5" />
                </span>
                <span className="min-w-0 break-all">{profile.email}</span>
              </a>
              <a
                href={`tel:${profile.phone}`}
                className="flex items-center gap-4 text-sm transition-colors hover:text-primary"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                  <Phone className="size-5" />
                </span>
                {profile.phone}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-sm transition-colors hover:text-primary"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                  <Linkedin className="size-5" />
                </span>
                LinkedIn Profile
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-sm transition-colors hover:text-primary"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                  <Github className="size-5" />
                </span>
                GitHub Profile
              </a>
              <p className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                  <MapPin className="size-5" />
                </span>
                Tiruchirappalli, Tamil Nadu, India
              </p>
            </Reveal>

            <Reveal delay={100} className="glass p-7">
              <form onSubmit={handleSubmit} className="grid gap-4">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                    placeholder="Your name"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="resize-y rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                    placeholder="Write your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                  style={{ boxShadow: "var(--shadow-glow)" }}
                >
                  <Send className="size-4" />
                  Send Message
                </button>
              </form>
            </Reveal>
          </div>
        </Section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-sm text-muted-foreground">
            © 2026 Vishalatchi T. All Rights Reserved.
          </p>
          <div className="flex gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="grid size-10 place-items-center rounded-xl border border-border transition-colors hover:border-primary/60 hover:text-primary"
            >
              <Github className="size-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="grid size-10 place-items-center rounded-xl border border-border transition-colors hover:border-primary/60 hover:text-primary"
            >
              <Linkedin className="size-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
