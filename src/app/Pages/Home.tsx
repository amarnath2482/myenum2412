import React from 'react';
import { AnimatedBeamDemo } from "@/app/Pages/Home/AnimatedBeamDemo";
import { AnimatedTestimonialsDemo } from "@/app/Pages/Home/AnimatedTestimonialsDemo";
import { CardHoverEffectDemo } from "@/app/Pages/Home/CardHoverEffectDemo";
import { CoverDemo } from './Home/CoverDemo';

function Home() {
  return (
    <>

      <CoverDemo />
      <AnimatedBeamDemo />
      <CardHoverEffectDemo />
      <AnimatedTestimonialsDemo />
      
    </>
  );
}

export default Home;
