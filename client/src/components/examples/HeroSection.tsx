import HeroSection from '../HeroSection';

export default function HeroSectionExample() {
  return <HeroSection onStartChallenge={() => console.log('Start challenge clicked')} />;
}
