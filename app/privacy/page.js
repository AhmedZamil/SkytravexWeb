import LegalPage from '@/components/LegalPage';
import { site } from '@/lib/site';

export const metadata = { title: 'Privacy notice' };

export default function PrivacyPage() {
  return (
    <LegalPage
      label="Privacy"
      line="Privacy notice"
      updated="17 November 2026"
      sections={[
        ['Who we are', `This website is operated by ${site.company} for its SkyTravex product. Contact: ${site.email}, ${site.phone}.`],
        [
          'What we collect',
          'When you use the demo, contact or partner forms we collect the details you type in: your name, email address, phone number, company, country, business type, team size and message, together with the page you sent it from.',
          'We do not use advertising cookies on this website.',
        ],
        [
          'How it is sent',
          `Form submissions are delivered to our team by email through FormSubmit (formsubmit.co), which processes them only to deliver them to ${site.leadsEmail}.`,
        ],
        ['Why we use it', 'To reply to you, arrange a walkthrough, prepare a quote and follow up on your request. We do not sell your details.'],
        ['How long we keep it', 'We keep enquiries while we are in contact with you and for up to two years afterwards, unless you ask us to delete them sooner.'],
        [
          'The live demo',
          `After the demo form you are sent to ${site.demoUrl}, a separate website with its own terms and privacy notice.`,
        ],
        ['Your choices', `You can ask to see, correct or delete the details you sent us by writing to ${site.email}.`],
      ]}
    />
  );
}
