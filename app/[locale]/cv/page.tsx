import InteractiveCV from "@/components/interactiveCv";

export default function CVPage() {
  return <InteractiveCV />;
}

// Add metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  return {
    title:
      params.locale === "en"
        ? "Interactive CV - Catalina Avadani"
        : "Interaktivt CV - Catalina Avadani",
    description:
      params.locale === "en"
        ? "Interactive CV showcasing my journey as a full stack developer"
        : "Interaktivt CV som visar min resa som fullstack-utvecklare",
  };
}
