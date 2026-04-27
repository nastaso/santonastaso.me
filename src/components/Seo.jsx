import React from 'react';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

const Seo = ({ title, description, pathname, keywords, image }) => {
  const metadata = useSiteMetadata();

  // Determine the appropriate title and description
  const seoTitle = title ? `${metadata.author} - ${title}` : metadata.title;
  const seoDescription = description || metadata.description;
  const seoKeywords = keywords || metadata.keywords || "Alex Santonastaso, software engineer, developer, portfolio";

  // Use a cleaner description for social previews
  const ogDescription = description || 'Software Engineer based in London. Portfolio and projects.';

  const seo = {
    title: seoTitle,
    description: seoDescription,
    ogDescription,
    keywords: seoKeywords,
    url: `${metadata.siteUrl}${pathname || ``}`,
    image: `${metadata.siteUrl.replace(/\/$/, '')}/og-image.png`,
  };

  // Structured data for the organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": metadata.author,
    "url": metadata.siteUrl,
    "sameAs": [
      metadata.github,
      metadata.linkedin,
    ]
  };

  // Structured data for the website
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": metadata.title,
    "url": metadata.siteUrl,
    "description": metadata.description,
    "author": {
      "@type": "Person",
      "name": metadata.author
    }
  };

  // Structured data for portfolio (if on homepage)
  const portfolioSchema = !pathname || pathname === '/' ? {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": metadata.author,
    "jobTitle": "Software Engineer",
    "description": metadata.description,
    "url": metadata.siteUrl,
    "image": `${metadata.siteUrl.replace(/\/$/, '')}/android-chrome-512x512.png`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "London",
      "addressCountry": "GB"
    },
    "alumniOf": [
      {
        "@type": "CollegeOrUniversity",
        "name": "Queen Mary University of London",
        "description": "MSc Big Data Science"
      },
      {
        "@type": "CollegeOrUniversity",
        "name": "University of Westminster",
        "description": "BSc Computer Science"
      }
    ],
    "knowsAbout": ["Python", "JavaScript", "TypeScript", "React", "FastAPI", "AWS", "Terraform", "Docker", "CI/CD", "Web Development", "Automation", "Data Science"],
    "sameAs": [
      metadata.github,
      metadata.linkedin,
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "National Careers Service",
      "url": "https://nationalcareers.service.gov.uk/"
    }
  } : null;

  return (
    <>
      {/* Basic Meta Tags */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="author" content={metadata.author} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={seo.url} />
      
      {/* Language and Locale */}
      <html lang="en" />
      <meta name="language" content="English" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.ogDescription} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:site_name" content={metadata.title} />
      <meta property="og:locale" content="en_GB" />
      
      {/* Open Graph Image */}
      {seo.image && <meta property="og:image" content={seo.image} />}
      {seo.image && <meta property="og:image:width" content="1200" />}
      {seo.image && <meta property="og:image:height" content="630" />}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={seo.image ? "summary_large_image" : "summary"} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.ogDescription} />
      {seo.image && <meta name="twitter:image" content={seo.image} />}
      
      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#06b6d4" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      {portfolioSchema && (
        <script type="application/ld+json">
          {JSON.stringify(portfolioSchema)}
        </script>
      )}
    </>
  );
};

export default Seo;
