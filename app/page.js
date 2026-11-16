import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Modules from '@/components/Modules';
import SearchDemo from '@/components/SearchDemo';
import Portals from '@/components/Portals';
import Pipeline from '@/components/Pipeline';
import Dashboard from '@/components/Dashboard';
import Compare from '@/components/Compare';
import Integrations from '@/components/Integrations';
import LaunchPlan from '@/components/LaunchPlan';
import MobileSync from '@/components/MobileSync';
import Faq from '@/components/Faq';
import PricingModel from '@/components/PricingModel';
import CtaBand from '@/components/CtaBand';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Modules />
      <SearchDemo />
      <Portals />
      <Pipeline />
      <Dashboard />
      <Compare />
      <Integrations />
      <LaunchPlan />
      <MobileSync />
      <PricingModel />
      <Faq />
      <CtaBand />
    </>
  );
}
