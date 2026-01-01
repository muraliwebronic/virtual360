"use client";
import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";

const UseCasesHero = () => {
  return (
    <section className="pt-32 pb-16 px-6 lg:px-8 text-center max-w-5xl mx-auto font-['Poppins']">
      <SectionHeading
        title="Virtual Tours for"
        highlight="Every Industry"
        description="From real estate to education, our 360° tour builder helps businesses showcase their spaces and create immersive experiences for their audiences."
        size="large"
        gradient={true}
        breakOnDesktop={true}
        className="mb-8"
      />
    </section>
  );
};

export default UseCasesHero;