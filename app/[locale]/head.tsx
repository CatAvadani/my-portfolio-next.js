export default function Head() {
  return (
    <>
      <title>Catalina Avadani | Frontend Developer</title>
      <meta
        name='description'
        content="I'm Catalina, a frontend developer passionate about React, Next.js, and accessibility. I craft interactive, user-focused web apps with a love for design and continuous growth."
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: `
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Catalina Avadani",
              "url": "https://catalinaavadani.com",
              "jobTitle": "Frontend Developer",
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
