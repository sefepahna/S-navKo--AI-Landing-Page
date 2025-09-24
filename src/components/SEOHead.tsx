import { useEffect } from "react";

export function SEOHead() {
  useEffect(() => {
    // Set document title
    document.title = "SınavKoç AI - Yapay Zeka Destekli Sınav Hazırlığı";
    
    // Create meta tags
    const metaTags = [
      { name: "description", content: "Yapay zeka destekli kişiselleştirilmiş öğrenme deneyimi ve koçluk ile öğrencilerin başarısını artıran yenilikçi eğitim platformu. 2026'da geliyor." },
      { name: "keywords", content: "yapay zeka, AI, sınav hazırlığı, eğitim teknolojisi, kişiselleştirilmiş öğrenme, üniversite hazırlık, koçluk" },
      { name: "author", content: "SınavKoç AI" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { property: "og:title", content: "SınavKoç AI - Geleceğin Eğitim Teknolojisi" },
      { property: "og:description", content: "Yapay zeka destekli kişiselleştirilmiş öğrenme deneyimi ile sınav hazırlığında devrim yaratıyoruz." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://sinavkoc.ai" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "SınavKoç AI - Yapay Zeka Destekli Sınav Hazırlığı" },
      { name: "twitter:description", content: "Yapay zeka destekli kişiselleştirilmiş öğrenme deneyimi ile sınav hazırlığında devrim yaratıyoruz." },
      { name: "robots", content: "index, follow" },
      { name: "language", content: "Turkish" },
      { name: "geo.region", content: "TR" },
      { name: "geo.country", content: "Turkey" }
    ];

    // Add meta tags to document head
    metaTags.forEach(tag => {
      const meta = document.createElement("meta");
      if (tag.name) {
        meta.name = tag.name;
      }
      if (tag.property) {
        meta.setAttribute("property", tag.property);
      }
      meta.content = tag.content;
      document.head.appendChild(meta);
    });

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "SınavKoç AI",
      "description": "Yapay zeka destekli sınav hazırlığı platformu",
      "url": "https://sinavkoc.ai",
      "logo": "https://sinavkoc.ai/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+90-533-615-12-40",
        "contactType": "Customer Service",
        "email": "info@sinavkocai.com"
      },
      "sameAs": [
        "https://x.com/sinavkocai",
        "https://www.instagram.com/sinavkocai/",
        "https://www.linkedin.com/company/sinavkoc-ai/"
      ]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Cleanup function to remove meta tags when component unmounts
    return () => {
      metaTags.forEach(tag => {
        const selector = tag.name ? `meta[name="${tag.name}"]` : `meta[property="${tag.property}"]`;
        const element = document.querySelector(selector);
        if (element) {
          document.head.removeChild(element);
        }
      });
      
      const structuredDataScript = document.querySelector('script[type="application/ld+json"]');
      if (structuredDataScript) {
        document.head.removeChild(structuredDataScript);
      }
    };
  }, []);

  return null;
}