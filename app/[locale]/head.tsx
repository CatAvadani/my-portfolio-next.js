// If using Next.js app directory, add this to app/[locale]/head.tsx (or inside your main layout if using old pages directory)
// Replace '/images/catalina.jpg' with your image path or an external link

import Script from 'next/script';

export default function Head() {
  return (
    <>
      <title>Catalina Avadani | Frontend Developer</title>
      {/* Convert Experiences A/B Testing */}
      <Script
        src='//cdn-4.convertexperiments.com/v1/js/10017264-10017602.js?environment=production'
        strategy='beforeInteractive'
      />
      <meta
        name='description'
        content="I'm Catalina, a frontend developer passionate about React, Next.js, and accessibility. I craft interactive, user-focused web apps with a love for design and continuous growth."
      />
      {/* Open Graph for Facebook/LinkedIn */}
      <meta
        property='og:title'
        content='Catalina Avadani | Frontend Developer'
      />
      <meta
        property='og:description'
        content="I'm Catalina, a frontend developer passionate about React, Next.js, and accessibility."
      />
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://catalinaavadani.com' />
      <meta
        property='og:image'
        content='https://catalinaavadani.com/images/catalina-profile.jpg'
      />
      {/* Twitter Card */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta
        name='twitter:title'
        content='Catalina Avadani | Frontend Developer'
      />
      <meta
        name='twitter:description'
        content="I'm Catalina, a frontend developer passionate about React, Next.js, and accessibility."
      />
      <meta
        name='twitter:image'
        content='https://catalinaavadani.com/images/catalina-profile.jpg'
      />
      {/* Schema.org markup for Google */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: `
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Catalina Avadani",
              "image": "https://catalinaavadani.com/images/catalina-profile.jpg",
              "jobTitle": "Frontend Developer",
              "url": "https://catalinaavadani.com",
              "sameAs": [
                "https://www.linkedin.com/in/catalinaava09",
                "https://github.com/CatAvadani"
              ]
            }
          `,
        }}
      />
    </>
  );
}
