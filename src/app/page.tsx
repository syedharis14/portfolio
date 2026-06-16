import { Hero } from "@/components/sections/Hero";
import { Industries } from "@/components/sections/Industries";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Approach } from "@/components/sections/Approach";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Industries />
      <FeaturedWork />
      <Approach />
      <ContactCTA />
    </>
  );
}
