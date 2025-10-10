import { CTA } from '@/components/CTA';
import { Feature } from '@/components/Feature';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { NavBar } from '@/components/NavBar';
import { Works } from '@/components/Works';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar/>
      <Hero/>
      <Feature/>
      <Works/>
      <CTA/>
      <Footer/>
    </div>
  );
}
