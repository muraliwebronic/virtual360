import {
  Layers,
  Glasses,
  MonitorPlay,
  MousePointer2,
  Eye,
  Code2,
  Smartphone,
  Zap,
  LayoutDashboard,
  Rocket,
} from "lucide-react";

export const featuresData = [
  {
    title: "No Code 360 Degree Builder",
    subtitle: "Build Virtual Tours Without Any Technical Skills",
    imgUrl:"/Features_images/Build Virtual Tours Without Any Technical Skills - Virtual Tour 360 - Thingsatwe.png",
    description:
      "Our intuitive drag and drop editor makes virtual tour creation accessible to everyone. Upload your 360 degree images, arrange them into scenes, add interactive hotspots, and publish. The entire process takes minutes, not hours. No coding knowledge required, no complex software to learn, no technical barriers between your vision and reality.",
    benefits: [
      "Save time on every project with our streamlined workflow",
      "Reduce dependency on developers or technical staff",
      "Empower your entire team to create professional tours",
      "Lower costs by handling tour creation in house",
    ],
    icon: <Layers size={28} />,
    alignment: "left" as const,
  },
  {
    title: "Apple Vision Pro & Meta Quest Native Support",
    subtitle: "First Class Support for Spatial Computing Platforms",
    imgUrl:"/Features_images/First Class Support for Spatial Computing Platforms - Virtual Tour 360 - Thingsatwe.png",
    description:
      "Virtual Tour 360 is the only WordPress plugin built from the ground up with Apple Vision Pro and Meta Quest support. Your tours automatically include spatial mode, allowing viewers to experience your spaces in full immersive 3D. No additional work, no separate exports, no compromises. Build once, deploy to spatial platforms instantly.",
    benefits: [
      "Future proof your content for the spatial web era",
      "Offer clients cutting edge VR experiences without additional cost",
      "Stand out from competitors with Vision Pro ready deliverables",
      "Reach audiences on both traditional screens and immersive headsets",
    ],
    icon: <Glasses size={28} />,
    alignment: "right" as const,
    highlight: true,
  },
  {
    title: "Spatial Mode vs. Web View",
    subtitle: "Dual Output Technology for Maximum Reach",
    imgUrl:"/Features_images/Dual Output Technology for Maximum Reach - Virtual Tour 360 - Thingsatwe.png",
    description:
      "Every tour you create automatically generates two optimized viewing experiences. Web View provides a smooth, responsive interface for desktop and mobile browsers with touch controls, mouse navigation, and keyboard shortcuts. Spatial Mode activates when viewers use VR headsets or Apple Vision Pro, delivering a fully immersive 360 degree environment with hand gesture controls and spatial audio.",
    benefits: [
      "Maximize audience reach across all platforms and devices",
      "No need to create separate versions for different platforms",
      "Seamless experience automatically adapts to viewer's device",
      "Serve web users and spatial computing early adopters simultaneously",
    ],
    icon: <MonitorPlay size={28} />,
    alignment: "left" as const,
  },
  {
    title: "Interactive Hotspots & Pins",
    subtitle: "Guide Your Audience Through Every Detail",
    imgUrl:"/Features_images/Guide Your Audience Through Every Detail - Virtual Tour 360 - Thingsatwe.png",
    description:
      "Add two types of hotspots to your virtual tours: navigation hotspots that transport viewers between scenes, and information hotspots that display rich content when clicked. Place them anywhere in your 360 degree images with pixel perfect precision. Customize their appearance, label them clearly, and create intuitive paths through your spaces.",
    benefits: [
      "Create self guided tour experiences that engage viewers",
      "Highlight key features and important details in your spaces",
      "Reduce support questions by providing in context information",
      "Increase time spent exploring your virtual tours",
    ],
    icon: <MousePointer2 size={28} />,
    alignment: "right" as const,
  },
  {
    title: "Live Preview Editor",
    subtitle: "See Your Changes in Real Time",
    imgUrl:"/Features_images/See Your Changes in Real Time - Virtual Tour 360 - Thingsatwe.png",
    description:
      "Build with confidence using our live preview system. Every hotspot you add, every scene you connect, every adjustment you make appears instantly in the preview window. No rendering delays, no export waiting, no switching between edit mode and preview mode. What you see is exactly what your audience will experience.",
    benefits: [
      "Iterate faster with immediate visual feedback",
      "Catch and fix issues before publishing",
      "Experiment freely knowing you can preview instantly",
      "Deliver perfect tours on the first try",
    ],
    icon: <Eye size={28} />,
    alignment: "left" as const,
  },
  {
    title: "One Click WordPress Embed",
    subtitle: "Seamless Integration with Your WordPress Site",
    imgUrl:"/Features_images/Seamless Integration with Your WordPress Site - Virtual Tour 360 - Thingsatwe.png",
    description:
      "Forget about complex iframe codes or plugin conflicts. Virtual Tour 360 generates a simple shortcode for every tour. Copy it, paste it into any WordPress page or post, and your tour appears exactly where you want it. Works with all major page builders including Elementor, Divi, Gutenberg, WPBakery, and Beaver Builder.",
    benefits: [
      "No technical knowledge needed for website integration",
      "Compatible with your existing WordPress theme and plugins",
      "Clean, lightweight embed that does not slow down your site",
      "Update tours automatically without changing the shortcode",
    ],
    icon: <Code2 size={28} />,
    alignment: "right" as const,
  },
  {
    title: "Mobile Responsive & Full Screen Mode",
    subtitle: "Perfect Experience on Every Device",
    imgUrl:"/Features_images/Perfect Experience on Every Device - Virtual Tour 360 - Thingsatwe.png",
    description:
      "Your virtual tours automatically adapt to any screen size. Desktop users get full resolution detail with mouse controls. Tablet users enjoy touch optimized navigation. Mobile users experience smooth performance even on modest hardware. Every viewer can also enter full screen mode for maximum immersion regardless of their device.",
    benefits: [
      "Reach mobile users who make up majority of web traffic",
      "Provide consistent quality across all device types",
      "No separate mobile versions or responsive testing needed",
      "Professional presentation on every screen size",
    ],
    icon: <Smartphone size={28} />,
    alignment: "left" as const,
  },
  {
    title: "VR Ready Pipeline",
    subtitle: "From 360 Camera to Virtual Reality in Minutes",
    imgUrl:"/Features_images/From 360 Camera to Virtual Reality in Minutes - Virtual Tour 360 - Thingsatwe.png",
    description:
      "Our complete workflow takes you from capturing 360 degree images to publishing VR ready tours faster than any alternative solution. Upload directly from popular 360 cameras like Ricoh Theta, Insta360, GoPro Max, and more. Our system optimizes your images for web delivery and spatial platforms automatically.",
    benefits: [
      "Eliminate time consuming post processing steps",
      "Maintain quality while reducing file sizes for fast loading",
      "Deliver client projects faster with streamlined workflow",
      "Handle the entire process from capture to delivery in one platform",
    ],
    icon: <Zap size={28} />,
    alignment: "right" as const,
  },
  {
    title: "Clean UI & Simple Workflow",
    subtitle: "Designed for Speed, Not Complexity",
    imgUrl:"/Features_images/Designed for Speed, Not Complexity - Virtual Tour 360 - Thingsatwe.png",
    description:
      "We believe powerful tools should be easy to use. Our interface eliminates clutter and focuses on the essential controls you need. Drag and drop scenes to organize them. Right click on images to add hotspots. Click preview to test your tour. The entire editor is keyboard accessible and follows intuitive patterns you already know.",
    benefits: [
      "Minimize learning curve for new users",
      "Increase productivity with fewer clicks and clearer workflows",
      "Reduce training time for team members and clients",
      "Focus on creative decisions instead of figuring out the interface",
    ],
    icon: <LayoutDashboard size={28} />,
    alignment: "left" as const,
  },
  {
    title: "Fast Embedding",
    subtitle: "Lightweight Code for Instant Loading",
    imgUrl:"/Features_images/Lightweight Code for Instant Loading - Virtual Tour 360 - Thingsatwe.png",
    description:
      "Virtual tours built with our plugin load faster than competitors because we obsess over performance. No heavy iframes, no bloated JavaScript libraries, no unnecessary HTTP requests. Your tours embed as optimized web components that load progressively, displaying the initial view in under 2 seconds even on slow connections.",
    benefits: [
      "Improve website speed scores and SEO rankings",
      "Reduce bounce rates from slow loading content",
      "Provide better experience for international visitors",
      "Lower hosting costs with efficient bandwidth usage",
    ],
    icon: <Rocket size={28} />,
    alignment: "right" as const,
  },
];