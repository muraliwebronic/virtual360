import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import StepBlock from "@/components/how-it-works/StepBlock";
import Link from "next/link";
import { Play, ArrowRight, Zap, Lightbulb, Clock } from "lucide-react";
import HowItWorksDemoCTA from "@/components/how-it-works/HowItWorksDemoCTA";

export default function HowItWorksPage() {
  return (
    <main className="w-full bg-white font-['Poppins']">
      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 px-6 lg:px-8 text-center max-w-5xl mx-auto">
        <SectionHeading
          title="Create Stunning Virtual Tours"
          highlight="in 3 Simple Steps"
          description="No technical skills required. No complex software to master. Just three straightforward steps from your 360 degree images to a published tour"
          size="large"
          gradient={true}
          breakOnDesktop={true}
          className="mb-10"
        />
      </section>

      {/* --- STEPS CONTAINER --- */}
      <section className="container max-w-6xl mx-auto px-6 lg:px-8 pb-32">
        {/* Step 1 */}
        <StepBlock
          number="1"
          title="Upload Your 360 Degree Images"
          subtitle="Start with Your 360 Photography"
          imgUrl="/How it Works/Upload Your 360 Degree Images - Virtual Tour 360 - Thingsatwe.png"
          // Using simple HTML tags inside the description for the list of cameras
          description={
            <>
              Upload your equirectangular 360 degree panoramas from any camera:
              <span className="font-semibold text-gray-800">
                {" "}
                Ricoh Theta, Insta360, GoPro Max
              </span>
              , or even rendered images from 3D software like Blender or Unreal
              Engine. Our system accepts JPEG and PNG formats up to 16K
              resolution. Drag and drop multiple images at once to save time on
              large projects.
            </>
          }
          // Mapping "What happens behind the scenes" to the Insight Prop
          insightTitle="What happens behind the scenes"
          insight="Our system automatically optimizes your images for web delivery without sacrificing quality. Large files are compressed intelligently, metadata is preserved, and multiple resolution versions are generated for different screen sizes. Your original images remain untouched."
          detailsTitle="Supported Formats"
          details={[
            "360 degree equirectangular images (2:1 aspect ratio)",
            "Standard JPEG and PNG files",
            "Resolution from 4K to 16K",
            "File sizes up to 50MB per image",
          ]}
        />

        {/* Step 2 */}
        <StepBlock
          number="2"
          title="Add Scenes & Link with Interactive Hotspots"
          subtitle="Organize and Connect Your Virtual Space"
          imgUrl="/How it Works/Add Scenes & Link with Interactive Hotspots - Virtual Tour 360 - Thingsatweb.png.png"
          description={
            <>
              <p className="mb-4">
                Once your images are uploaded, drag them into your tour canvas
                to create scenes. Each scene represents one 360 degree viewpoint
                in your space. Now bring your tour to life by adding two types
                of hotspots
              </p>
              <div className="pl-4 border-l-2 border-gray-200 space-y-3">
                <p>
                  <strong className="text-[#1A1A1A]">
                    Navigation Hotspots: <span> </span>
                  </strong>
                  Create connections between scenes so viewers can walk through
                  your space naturally. Click on an image, place a navigation
                  hotspot where you want viewers to transition, then select
                  which scene it should link to. The system automatically
                  handles the smooth transition animation.
                </p>
                <p>
                  <strong className="text-[#1A1A1A]">
                    Information Hotspots: <span> </span>
                  </strong>
                  Add rich content throughout your tour. Click to place an info
                  hotspot, then add text descriptions, titles, or even embed
                  images. These hotspots appear as pulsing icons that viewers
                  can click to reveal your content.
                </p>
              </div>
            </>
          }
          detailsTitle="Customization Options"
          details={[
            "Choose hotspot colors to match your branding",
            "Adjust hotspot sizes for visibility and aesthetics",
            "Preview hotspot placement from different angles",
            "Reposition hotspots by dragging them to new locations",
          ]}
        />

        {/* Step 3 */}
        <StepBlock
          number="3"
          title="Publish Everywhere"
          subtitle="Deploy to WordPress and VR Platforms"
          imgUrl="/How it Works/Publish Everywhere - Virtual Tour 360 - Thingsatwe.png"
          description={
            <>
              <p className="mb-4">
                When your tour is ready, publishing takes seconds. Click the
                publish button to generate:
              </p>
              <ul className="list-disc pl-5 space-y-2 marker:text-blue-500">
                <li>
                  <strong className="text-[#1A1A1A]">
                    WordPress Shortcode: <span> </span>
                  </strong>
                  Copy the shortcode and paste it into any page, post, or widget
                  area on your WordPress site. The tour embeds cleanly with no
                  iframe complexity or plugin conflicts.
                </li>
                <li>
                  <strong className="text-[#1A1A1A]">
                    Direct Link: <span> </span>
                  </strong>
                  A Get a standalone URL that works anywhere: email campaigns,
                  social media, QR codes, or embedded in non WordPress websites.
                  When accessed on Apple Vision Pro or Meta Quest browsers,
                  tours automatically activate Spatial Mode for an immersive
                  experience.
                </li>
                {/* <li>
                  <strong className="text-[#1A1A1A]">
                    Publishing is instant: <span> </span>
                  </strong>
                  No rendering queues, no processing delays, no waiting. Your
                  tour goes live the moment you click publish and can be updated
                  anytime with changes reflected immediately.
                </li> */}
              </ul>
            </>
          }
          // Mapping "Publishing is instant" to the Insight Prop
          insightTitle="Instant Publishing"
          insight="No rendering queues, no processing delays, no waiting. Your tour goes live the moment you click publish and can be updated anytime with changes reflected immediately."
          detailsTitle="Deployment Features"
          details={[
            "Instant WordPress embedding via Shortcode",
            "Direct links for email and social media sharing",
            "Automatic Spatial Mode for VR headset users",
            "Real-time updates without re-embedding",
          ]}
        />
      </section>

      {/* --- INTERACTIVE DEMO CTA --- */}
      <HowItWorksDemoCTA />

      {/* --- BENEFITS SUMMARY --- */}
      <section className="py-24 bg-blue-50/30">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
            <BenefitCard
              icon={<Clock />}
              title="Speed"
              desc="Most users publish their first complete tour within 30 minutes of starting, including the time to upload images and learn the interface"
            />
            <BenefitCard
              icon={<Zap />}
              title="Simplicity"
              desc="If you can use a modern smartphone or web app, you can use Virtual Tour 360. No special training or technical background required"
            />
            <BenefitCard
              icon={<Lightbulb />}
              title="Flexibility"
              desc="Make changes anytime without republishing or breaking existing embeds. Add new scenes, update hotspots, or refresh images while your tour stays live"
            />
            <BenefitCard
              icon={<ArrowRight />}
              title="Pro Results"
              desc="Even first time users create tours that look and perform like those from expensive specialized agencies"
            />
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 container max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-[#1A1A1A] mb-6">
          Ready to Start Building?
        </h2>
        <p className="text-gray-600 text-lg mb-10">
          Join thousands of professionals creating immersive web experiences.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            href="/pricing"
            className="relative group w-full sm:w-auto px-8 py-3.5 overflow-hidden bg-[#2A74ED] text-white rounded-2xl shadow-xl shadow-blue-500/10 hover:shadow-blue-600/20 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-[0.98]"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10 flex items-center  justify-between sm:justify-center gap-4">
              <div className="flex flex-col ">
                <span className="font-bold text-white sm:text-lg leading-tight tracking-tight">
                  Start Building Free
                </span>
              </div>
              <ArrowRight
                size={20}
                className="text-white group-hover:translate-x-1 transition-transform"
              />
            </div>
          </Link>

          <Link
            href="/Virtual Tour 360.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white border border-gray-200 text-[#1A1A1A] rounded-xl font-bold hover:border-blue-300 transition-all"
          >
            View Documentation
          </Link>
        </div>
      </section>
    </main>
  );
}

// Small Helper Component for Benefits
const BenefitCard = ({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) => (
  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
      {icon}
    </div>
    <h3 className="font-bold text-lg mb-2 text-[#1A1A1A]">{title}</h3>
    <p className="text-sm text-gray-500  leading-relaxed">{desc}</p>
  </div>
);
