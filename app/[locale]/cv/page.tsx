import InteractiveCV from '@/components/interactiveCv';

export default function CVPage() {
  return <InteractiveCV />;
}

// Add metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>; // Changed: params is now a Promise
}) {
  // Changed: Await the params object
  const { locale } = await params;

  return {
    title:
      locale === 'en'
        ? 'Interactive CV - Catalina Avadani'
        : 'Interaktivt CV - Catalina Avadani',
    description:
      locale === 'en'
        ? 'Interactive CV showcasing my journey as a full stack developer'
        : 'Interaktivt CV som visar min resa som fullstack-utvecklare',
  };
}
