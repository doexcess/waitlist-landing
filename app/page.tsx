'use client';

import About from '@/components/About';
import Countdown from '@/components/Countdown';
import EmailSubmissionForm from '@/components/EmailSubmissionForm';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Countdown />
      <EmailSubmissionForm />
    </main>
  );
}
