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
import { Showcase, LaunchOptions, TechStack } from '@/components/HomeExtras';

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
      <Showcase />
      <LaunchOptions />
      <LaunchPlan />
      <MobileSync />
      <TechStack />
      <PricingModel />
      <Faq />
      <CtaBand />
    </>
  );
}
