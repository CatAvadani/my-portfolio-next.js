import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Body
        style={{
          backgroundColor: '#f3f4f6',
          color: '#000000',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <Container style={{ maxWidth: '600px', margin: '0 auto' }}>
          <Section
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e5e7eb',
              margin: '40px 0',
              padding: '40px',
              borderRadius: '8px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Heading
              style={{
                lineHeight: '1.25',
                fontSize: '24px',
                marginBottom: '20px',
                color: '#1f2937',
              }}
            >
              You received the following message from the contact form
            </Heading>
            <Text
              style={{
                fontSize: '16px',
                lineHeight: '1.6',
                marginBottom: '20px',
                color: '#374151',
              }}
            >
              {message}
            </Text>
            <Hr
              style={{
                border: 'none',
                borderTop: '1px solid #e5e7eb',
                margin: '20px 0',
              }}
            />
            <Text
              style={{
                fontSize: '14px',
                color: '#6b7280',
              }}
            >
              The sender's email is:{' '}
              <strong style={{ color: '#1f2937' }}>{senderEmail}</strong>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
