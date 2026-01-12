import React from "react";
import {
  Building2,
  BedDouble,
  ShoppingBag,
  PencilRuler,
  GraduationCap,
  HardHat,
  Landmark,
  PartyPopper,
  Car,
  Stethoscope,
} from "lucide-react";

export interface IndustryItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  headline: string;
  description: string;
  applications: string[];
  impact: string;
  roi: string;
  embedUrl: string;
}

export const industriesData: IndustryItem[] = [
  {
    id: "real-estate",
    title: "Real Estate & Property Development",
    icon: <Building2 size={20} />,
    headline: "Sell Properties Faster with Immersive Virtual Tours",
    description:
      "Real estate professionals use Virtual Tour 360 to showcase properties to remote buyers, reduce unnecessary site visits, and close deals faster. Create comprehensive property tours that highlight every room, feature, and detail. Add information hotspots to call out recent renovations, square footage, or special amenities.",
    applications: [
      "Residential home listings with room by room navigation",
      "Commercial property showcases for office space and retail locations",
      "Pre construction marketing with rendered 360 images from architectural plans",
      "Luxury property presentations that match high end marketing materials",
      "Open house alternatives that work 24/7 globally",
    ],
    impact:
      "Real estate agents report 30-50% reduction in unnecessary property visits from unqualified buyers. Virtual tours act as a pre-qualification tool that attracts serious buyers while saving time. Properties with virtual tours receive 87% more views and generate 49% more qualified leads than listings without tours.",
    roi: "A single property sale pays for an annual subscription many times over. Agents who adopt virtual tours consistently report higher close rates and faster time to sale.",
    embedUrl: "https://app.virtualtour360.ai/real-estate/",
  },
  {
    id: "hospitality",
    title: "Hospitality & Hotels",
    icon: <BedDouble size={20} />,
    headline: "Increase Bookings with Immersive Hotel Tours",
    description:
      "Hotels, resorts, vacation rentals, and event venues use virtual tours to showcase rooms, amenities, and spaces before guests book. Give potential guests confidence in their booking decisions by letting them explore your property virtually. Highlight unique features like rooftop bars, spa facilities, conference rooms, and suite layouts.",
    applications: [
      "Hotel room tours showing different accommodation tiers",
      "Resort property walkthroughs featuring pools, beaches, and grounds",
      "Restaurant and bar showcases to promote on site dining",
      "Event space presentations for wedding and conference bookings",
      "Amenity highlights including gyms, spas, and recreational facilities",
    ],
    impact:
      "Hospitality businesses with virtual tours see 67% higher booking conversion rates compared to those relying only on photos. Virtual tours reduce pre-arrival questions to front desk staff by 45% and decrease booking cancellations from unmet expectations by 31%.",
    roi: "Even small hotels report a 15-25% increase in direct bookings after adding virtual tours to their websites, reducing dependency on third party booking platforms with high commission fees.",
    embedUrl: "https://app.virtualtour360.ai/hospitality-hotels/",
  },
  {
    id: "retail",
    title: "Retail & Showrooms",
    icon: <ShoppingBag size={20} />,
    headline: "Showcase Products and Store Layouts Virtually",
    description:
      "Retailers use Virtual Tour 360 to bring their physical stores online, showcase product displays, and create virtual shopping experiences. Let customers explore your store layout, browse product arrangements, and discover items they might miss in photos alone.",
    applications: [
      "Furniture showroom tours showing room vignettes and product displays",
      "Automotive dealership virtual visits with vehicle detail highlights",
      "Fashion boutique showcases featuring merchandise and store atmosphere",
      "Specialty retail environments like jewelry stores and galleries",
      "Pop up store documentation for marketing and franchise replication",
    ],
    impact:
      "Retailers with virtual tours report 40% longer average session duration on their websites and 28% higher conversion from browsers to in store visitors. Virtual showrooms also reduce returns by setting accurate expectations about products and store experience.",
    roi: "Large furniture retailers see virtual tours pay for themselves within weeks through increased foot traffic and reduced “just browsing” visits.",
    embedUrl: "https://app.virtualtour360.ai/real-estate/",
  },
  {
    id: "architecture",
    title: "Architecture & Interior Design",
    icon: <PencilRuler size={20} />,
    headline: "Present Your Vision Before Construction Begins",
    description:
      "Architects and interior designers use Virtual Tour 360 to present completed projects in their portfolios and showcase design concepts to clients before construction. Create virtual tours from rendered 360 images produced in Blender, 3ds Max, Unreal Engine, or other 3D software.",
    applications: [
      "Portfolio presentations of completed architectural projects",
      "Client concept reviews with pre construction renderings",
      "Design option comparisons showing alternative layouts or finishes",
      "Documentation of construction progress at key milestones",
      "Marketing materials for firm capabilities and past work",
    ],
    impact:
      "Design professionals using virtual tours report 60% fewer revision requests because clients understand spaces better before construction. Virtual tours also accelerate approval processes by 25-40%.",
    roi: "A single project saved from major revision covers years of subscription costs. Firms also report winning 35% more proposals.",
    embedUrl: "https://app.virtualtour360.ai/real-estate/",
  },
  {
    id: "education",
    title: "Education & University Campuses",
    icon: <GraduationCap size={20} />,
    headline: "Virtual Campus Tours for Prospective Students",
    description:
      "Educational institutions use Virtual Tour 360 for campus tours that reach prospective students worldwide. Showcase classrooms, laboratories, dormitories, libraries, athletic facilities, and outdoor spaces.",
    applications: [
      "Prospective student recruitment with comprehensive campus tours",
      "Department specific showcases highlighting specialized facilities",
      "Housing tours showing dormitory options and common areas",
      "International student outreach eliminating travel requirements",
      "Alumni engagement showcasing campus improvements",
    ],
    impact:
      "Universities with virtual tours see 45% more engagement from prospective students beyond commuting distance and reduce strain on admissions staff.",
    roi: "Even small enrollment increases create tuition revenue that far exceeds the minimal cost of virtual tour technology.",
    embedUrl: "https://app.virtualtour360.ai/real-estate/",
  },
  {
    id: "construction",
    title: "Construction & Site Planning",
    icon: <HardHat size={20} />,
    headline: "Document Projects and Monitor Progress Virtually",
    description:
      "Construction firms use Virtual Tour 360 to document site conditions, track construction progress, and provide stakeholder updates without coordinating site visits.",
    applications: [
      "Construction progress documentation",
      "Pre construction site condition surveys",
      "Safety compliance documentation",
      "Subcontractor coordination",
      "Portfolio marketing materials",
    ],
    impact:
      "Construction firms reduce stakeholder site visits by 70%, saving time and improving safety by limiting non-essential personnel.",
    roi: "Time saved typically delivers 10-20x return on subscription cost.",
    embedUrl: "https://app.virtualtour360.ai/real-estate/",
  },
  {
    id: "museums",
    title: "Museums & Galleries",
    icon: <Landmark size={20} />,
    headline: "Expand Your Reach Beyond Physical Walls",
    description:
      "Museums and galleries use Virtual Tour 360 to make collections accessible globally and preserve temporary exhibits permanently.",
    applications: [
      "Permanent collection virtual access",
      "Temporary exhibition archives",
      "Educational tours",
      "Accessibility support",
      "Marketing previews",
    ],
    impact:
      "Institutions reach 300-500% more people and drive 35% more in person attendance.",
    roi: "Membership and donation growth generate returns measured in thousands of percent.",
    embedUrl: "https://app.virtualtour360.ai/real-estate/",
  },
  {
    id: "events",
    title: "Events & Venues",
    icon: <PartyPopper size={20} />,
    headline: "Market Your Venue to Event Planners Worldwide",
    description:
      "Event venues use Virtual Tour 360 to market facilities to planners comparing options remotely.",
    applications: [
      "Wedding venues",
      "Conference centers",
      "Performance spaces",
      "Outdoor events",
      "Virtual site visits",
    ],
    impact:
      "Venues book 40% more out of town events and reduce time spent on unqualified tours.",
    roi: "Single high value bookings exceed annual costs by 100-1000x.",
    embedUrl: "https://app.virtualtour360.ai/real-estate/",
  },
  {
    id: "automotive",
    title: "Automotive Showrooms",
    icon: <Car size={20} />,
    headline: "Sell More Vehicles with Virtual Dealership Tours",
    description:
      "Car dealerships use Virtual Tour 360 to showcase inventory, showroom floors, and service departments.",
    applications: [
      "New vehicle showcases",
      "Used vehicle browsing",
      "Service department trust building",
      "Luxury inventory highlights",
      "Multi location consistency",
    ],
    impact:
      "Dealerships see 25% more showroom visits from pre-qualified customers.",
    roi: "One additional vehicle sale per year covers subscription costs.",
    embedUrl: "https://app.virtualtour360.ai/real-estate/",
  },
  {
    id: "healthcare",
    title: "Healthcare Facilities",
    icon: <Stethoscope size={20} />,
    headline: "Reduce Patient Anxiety with Facility Virtual Tours",
    description:
      "Healthcare providers use Virtual Tour 360 to help patients feel comfortable before their first visit.",
    applications: [
      "Dental offices",
      "Hospitals",
      "Veterinary clinics",
      "Specialty practices",
      "Long term care facilities",
    ],
    impact:
      "Facilities report 35% reduction in first appointment no-shows.",
    roi: "Reduced no-shows and higher acquisition make tours self funding within one month.",
    embedUrl: "https://app.virtualtour360.ai/real-estate/",
  },
];
