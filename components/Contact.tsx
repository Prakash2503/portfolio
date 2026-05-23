"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Send, Phone, Loader2 } from "lucide-react";
import { siteConfig } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { useTranslations } from "@/hooks/useTranslations";
import { slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const { t } = useTranslations();
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
        setFeedback(
          data.message?.includes("inbox")
            ? t("notifications.successInbox")
            : t("notifications.success")
        );
        setFormState({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        if (data.message?.includes("valid email")) {
          setFeedback(t("notifications.invalidEmail"));
        } else if (data.message?.includes("required")) {
          setFeedback(t("notifications.required"));
        } else {
          setFeedback(t("notifications.sendFailed"));
        }
        if (data.mailto) {
          window.open(data.mailto, "_blank");
        }
      }
    } catch {
      setStatus("error");
      setFeedback(t("notifications.networkError"));
    }

    setTimeout(() => {
      setStatus("idle");
      setFeedback("");
    }, 5000);
  };

  const contactInfo: {
    icon: typeof Mail;
    labelKey: string;
    value: string;
    href?: string;
  }[] = [
    { icon: Mail, labelKey: "email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: Phone, labelKey: "phone", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, "")}` },
    { icon: Github, labelKey: "github", value: "@Prakash2503", href: siteConfig.github },
    { icon: Linkedin, labelKey: "linkedin", value: "prakash-s", href: siteConfig.linkedin },
    { icon: MapPin, labelKey: "location", value: siteConfig.location },
  ];

  return (
    <SectionWrapper id="contact" className="section-glow pb-32 md:pb-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          subtitle={t("contact.subtitle")}
          title={t("contact.title")}
          description={t("contact.description")}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-12 lg:grid-cols-2"
        >
          <motion.div variants={slideInLeft} className="space-y-4">
            {contactInfo.map(({ icon: Icon, labelKey, value, href }) => (
              <motion.div
                key={labelKey}
                whileHover={{ x: 4 }}
                className="card-soft flex items-center gap-4 rounded-2xl p-5 neon-glow-hover"
              >
                <div className="icon-cyber h-12 w-12">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-theme-muted">
                    {t(`contact.labels.${labelKey}`)}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="font-medium text-theme-fg transition-colors hover:text-theme-accent"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="font-medium text-theme-fg">{value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            <div className="card-cyber p-5">
              <p className="text-sm text-theme-muted">
                {t("contact.preferLinkedIn")}{" "}
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-accent"
                >
                  LinkedIn
                </a>{" "}
                {t("contact.orBrowse")}{" "}
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
            className="card-soft space-y-5 rounded-2xl p-8"
          >
            <div>
              <label htmlFor="name" className="mb-2 block text-sm text-theme-accent opacity-80">
                {t("contact.form.name")}
              </label>
              <input
                id="name"
                type="text"
                required
                value={formState.name}
                onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                className="input-cyber"
                placeholder={t("contact.form.namePlaceholder")}
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-theme-accent opacity-80">
                {t("contact.form.email")}
              </label>
              <input
                id="email"
                type="email"
                required
                value={formState.email}
                onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                className="input-cyber"
                placeholder={t("contact.form.emailPlaceholder")}
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm text-theme-accent opacity-80">
                {t("contact.form.message")}
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formState.message}
                onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                className="input-cyber resize-none"
                placeholder={t("contact.form.messagePlaceholder")}
              />
            </div>

            {feedback && (
              <p
                className={`text-sm ${status === "error" ? "text-red-400" : "text-theme-accent"}`}
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
              {status === "loading" ? t("contact.form.sending") : t("contact.form.submit")}
            </Button>

            <p className="text-center text-xs text-theme-muted">
              {t("contact.form.deliveredTo")}{" "}
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
