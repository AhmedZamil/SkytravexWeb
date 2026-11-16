import Link from 'next/link';
import PageHero from '@/components/PageHero';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <PageHero
      label="Error 404"
      line="This page is not on the route map."
      accent="The link may be old or mistyped."
      text="Head back to the home page or tell us what you were looking for."
    >
      <Link href="/" className="btn btn-primary chase">
        Go to the home page
      </Link>
      <Link href="/demo" className="btn">
        Contact us
      </Link>
    </PageHero>
  );
}
