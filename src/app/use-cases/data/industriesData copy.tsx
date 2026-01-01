import { 
  Building2, 
  ShoppingBag, 
  GraduationCap, 
  Hotel, 
  Palmtree, 
  Car, 
  Stethoscope, 
  Construction, 
  Landmark, 
  Ticket,
  CheckCircle2,
  TrendingUp,
  BarChart3
} from "lucide-react";

// --- 1. Data Structure ---
export const industriesData = [
  {
    id: "real-estate",
    title: "Real Estate & Property",
    icon: <Building2 />,
    headline: "Sell Properties Faster with Immersive Tours",
    description: "Real estate professionals use Virtual Tour 360 to showcase properties to remote buyers, reduce unnecessary site visits, and close deals faster.",
    applications: [
      "Residential home listings with room-by-room navigation",
      "Commercial property showcases for office & retail",
      "Pre-construction marketing with rendered 360 images",
      "Open house alternatives that work 24/7 globally"
    ],
    impact: "Real estate agents report 30-50% reduction in unnecessary property visits from unqualified buyers.",
    roi: "Properties with virtual tours receive 87% more views and generate 49% more qualified leads."
  },
  {
    id: "hospitality",
    title: "Hospitality & Hotels",
    icon: <Hotel />,
    headline: "Increase Bookings with Immersive Hotel Tours",
    description: "Give potential guests confidence in their booking decisions by letting them explore your rooms, amenities, and spaces virtually before they arrive.",
    applications: [
      "Hotel room tours showing different tiers",
      "Resort walkthroughs featuring pools and beaches",
      "Event space presentations for weddings",
      "Spa and recreational facility showcases"
    ],
    impact: "Hospitality businesses with virtual tours see 67% higher booking conversion rates.",
    roi: "Reduces pre-arrival questions by 45% and decreases booking cancellations by 31%."
  },
  {
    id: "retail",
    title: "Retail & Showrooms",
    icon: <ShoppingBag />,
    headline: "Showcase Products and Store Layouts Virtually",
    description: "Bring your physical stores online. Let customers explore your store layout, browse product arrangements, and discover items they might miss in photos alone.",
    applications: [
      "Furniture showroom tours showing room vignettes",
      "Fashion boutique showcases featuring merchandise",
      "Specialty retail environments like galleries",
      "Pop-up store documentation"
    ],
    impact: "Retailers report 40% longer average session duration on their websites.",
    roi: "28% higher conversion from browsers to in-store visitors."
  },
  {
    id: "architecture",
    title: "Architecture & Design",
    icon: <Palmtree />, // Using Palmtree as a placeholder for Design/Aesthetics
    headline: "Present Your Vision Before Construction Begins",
    description: "Architects and designers use 360 tours to present completed projects and showcase design concepts to clients using rendered images.",
    applications: [
      "Portfolio presentations of completed projects",
      "Client concept reviews with pre-construction renders",
      "Design option comparisons",
      "Construction progress documentation"
    ],
    impact: "60% fewer revision requests because clients understand spaces better.",
    roi: "Firms report winning 35% more proposals when including virtual tour capabilities."
  },
  {
    id: "education",
    title: "Education & Campus",
    icon: <GraduationCap />,
    headline: "Virtual Campus Tours for Prospective Students",
    description: "Reach prospective students worldwide. Showcase classrooms, dormitories, and facilities to increase enrollment and engagement.",
    applications: [
      "Prospective student recruitment tours",
      "Housing tours showing dormitory options",
      "Department-specific facility showcases",
      "International student outreach"
    ],
    impact: "Universities see 45% more engagement from prospective students living far away.",
    roi: "Massive tuition revenue ROI from small enrollment increases attributed to better outreach."
  },
  {
    id: "construction",
    title: "Construction & Planning",
    icon: <Construction />,
    headline: "Document Projects and Monitor Progress",
    description: "Document site conditions, track construction progress, and provide stakeholder updates without coordinating expensive site visits.",
    applications: [
      "Construction progress documentation",
      "Safety compliance documentation",
      "Subcontractor coordination",
      "Pre-construction site surveys"
    ],
    impact: "Reduces stakeholder site visits by 70%, saving time and improving safety.",
    roi: "Dispute prevention saves 10-20x the subscription cost on medium-sized projects."
  },
  {
    id: "museums",
    title: "Museums & Galleries",
    icon: <Landmark />,
    headline: "Expand Your Reach Beyond Physical Walls",
    description: "Create virtual exhibitions that never close. Preserve temporary exhibits permanently and provide educational content globally.",
    applications: [
      "Permanent collection virtual access",
      "Temporary exhibition archives",
      "Educational tours with rich hotspots",
      "Accessibility features for mobility limitations"
    ],
    impact: "Institutions reach 300-500% more people than can physically visit.",
    roi: "Drives 35% more in-person attendance from visitors who preview online first."
  },
  {
    id: "events",
    title: "Events & Venues",
    icon: <Ticket />,
    headline: "Market Your Venue to Event Planners",
    description: "Market facilities to planners remotely. Showcase room layouts, capacity, and decor to book more weddings and conferences.",
    applications: [
      "Wedding venue tours",
      "Conference center showcases",
      "Performance venue presentations",
      "Virtual site visits for planners"
    ],
    impact: "Venues book 40% more out-of-town events without physical site visits.",
    roi: "Single high-value event booking exceeds annual subscription cost by 100x."
  },
  {
    id: "automotive",
    title: "Automotive",
    icon: <Car />,
    headline: "Sell More Vehicles with Virtual Dealerships",
    description: "Showcase inventory and facilities. Create tours of showroom floors and service departments to build trust.",
    applications: [
      "New vehicle showroom tours",
      "Service department showcases",
      "Specialty inventory features",
      "Used vehicle lot browsing"
    ],
    impact: "25% more showroom visits from pre-qualified customers.",
    roi: "Self-funding within the first month through increased service department usage."
  },
  {
    id: "healthcare",
    title: "Healthcare",
    icon: <Stethoscope />,
    headline: "Reduce Patient Anxiety with Facility Tours",
    description: "Help patients feel comfortable before their visit. Showcase waiting areas and treatment rooms to reduce anxiety.",
    applications: [
      "Dental office tours reducing anxiety",
      "Hospital facility showcases",
      "Long-term care facility tours",
      "Veterinary clinic tours"
    ],
    impact: "35% reduction in first appointment no-shows.",
    roi: "Self-funding immediately via increased patient acquisition and reduced no-shows."
  }
];