"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Send, Phone, Loader2 } from "lucide-react";
import { siteConfig } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setFeedback(data.message || "Message sent! I'll get back to you soon.");
        setFormState({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        const fallback = data.mailto
          ? ` ${data.message || "Send failed."} Or email directly.`
          : data.message || "Failed to send. Please email directly.";
        setFeedback(fallback);
        if (data.mailto) {
          window.open(data.mailto, "_blank");
        }
      }
    } catch {
      setStatus("error");
      setFeedback("Network error. Please email prakashkrishnan526@gmail.com directly.");
    }

    setTimeout(() => {
      setStatus("idle");
      setFeedback("");
    }, 5000);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: Phone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, "")}` },
    { icon: Github, label: "GitHub", value: "@Prakash2503", href: siteConfig.github },
    { icon: Linkedin, label: "LinkedIn", value: "prakash-s", href: siteConfig.linkedin },
    { icon: MapPin, label: "Location", value: siteConfig.location },
  ];

  return (
    <SectionWrapper id="contact" className="section-glow pb-32 md:pb-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          subtitle="Contact"
          title="Get In Touch"
          description="Open to internships, AI/ML roles, and collaboration. Reach out via form, email, or LinkedIn."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-12 lg:grid-cols-2"
        >
          <motion.div variants={slideInLeft} className="space-y-4">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <motion.div
                key={label}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 rounded-2xl card-soft border border-lime-500/10 p-5 transition-colors hover:border-lime-500/30"
              >
                <div className="icon-cyber h-12 w-12">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="font-medium text-white transition-colors hover:text-lime-400"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="font-medium text-white">{value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            <div className="rounded-2xl border border-lime-500/20 bg-lime-500/5 p-5">
              <p className="text-sm text-slate-400">
                Prefer LinkedIn? Connect on{" "}
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-accent"
                >
                  LinkedIn
                </a>{" "}
                or browse code on{" "}
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-accent"
                >
                  GitHub
                </a>
                .
              </p>
            </div>
          </motion.div>

          <motion.form
            variants={slideInRight}
            onSubmit={handleSubmit}
            className="card-soft space-y-5 rounded-2xl border border-lime-500/15 p-8"
          >
            <div>
              <label htmlFor="name" className="mb-2 block text-sm text-lime-400/80">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formState.name}
                onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                className="input-cyber"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-lime-400/80">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formState.email}
                onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                className="input-cyber"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm text-lime-400/80">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formState.message}
                onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                className="input-cyber resize-none"
                placeholder="Tell me about your opportunity or project..."
              />
            </div>

            {feedback && (
              <p
                className={`text-sm ${status === "error" ? "text-red-400" : "text-lime-400"}`}
              >
                {feedback}
              </p>
            )}

            <Button type="submit" variant="primary" disabled={status === "loading"} className="w-full sm:w-auto">
              {status === "loading" ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
              {status === "loading" ? "Sending..." : "Send Message"}
            </Button>

            <p className="text-center text-xs text-slate-500">
              Messages are delivered to{" "}
              <a href={`mailto:${siteConfig.email}`} className="link-accent">
                {siteConfig.email}
              </a>
            </p>
          </motion.form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
