import { siteConfig } from "@/data/portfolio";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chennai",
      addressCountry: "IN",
    },
    url: siteConfig.github,
    sameAs: [siteConfig.github, siteConfig.linkedin],
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Full Stack Development",
      "Computer Vision",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
