import Hero from "@/components/home/Hero";
import SelectedWork from "@/components/home/SelectedWork";
import WhatIDo from "@/components/home/WhatIDo";
import Currently from "@/components/home/Currently";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <WhatIDo />
      <Currently />
    </>
  );
}