export interface ServiceItem {
  id: string;
  chip: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  gradientBg: string;
  image: string;
  features: string[];
  popular?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
  avatar: string;
  source: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const COMPANY_INFO = {
  name: "Dun-Rite",
  legalName: "Dun-Rite Heat & AC Services",
  tagline: "Don't just get it done, get it Dun-Rite!",
  subline: "Licensed HVAC contractors for homes and businesses. Flat-rate pricing, same-day service, 10-year warranty on all installations.",
  phone: "(888) 366-1998",
  phoneRaw: "8883661998",
  email: "info@dunritetx.com",
  license: "Texas License #TACLA-48219E",
  emergencyNote: "24/7 Emergency HVAC — No extra charge for nights or weekends",
  hours: {
    weekdays: "Mon–Fri: 7am – 8pm",
    saturday: "Saturday: 8am – 6pm",
    sunday: "Sunday: Emergency Only",
    emergency: "24/7/365 Emergency Dispatch"
  },
  socials: [
    { name: "LinkedIn", href: "https://www.linkedin.com/company/dunrite-services" },
    { name: "Yelp", href: "https://www.yelp.com/biz/dunrite-services-mckinney-4" },
    { name: "Facebook", href: "#" },
    { name: "Google", href: "#" }
  ]
};

export const TRUST_CHIPS = [
  "NATE Certified",
  "EPA 608 Licensed",
  "BBB A+ Rated",
  "100% Satisfaction Guarantee"
];

export const STATS_ITEMS = [
  { target: 15000, suffix: "+", label: "Systems Serviced" },
  { target: 24, suffix: " Years", label: "In Business Since 2001" },
  { target: 99, suffix: "%", label: "Client Satisfaction" },
  { target: 90, suffix: " Min", label: "Avg Response Time" }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "ac-install",
    chip: "FROM $2,400",
    title: "AC Installation & Replacement",
    shortDesc: "Central air, ductless mini-splits, whole-home systems — properly sized for your space.",
    fullDesc: "Upgrade to maximum efficiency with precision SEER2-rated systems engineered for extreme Texas heat. Includes complete load calculation, certified installation, smart thermostat sync, and our 10-year parts & labor warranty.",
    gradientBg: "from-blue-50 to-indigo-100/60",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
    features: [
      "Custom Manual J cooling load calculation",
      "Carrier, Trane, Lennox, Goodman & Rheem",
      "0% interest financing options available",
      "Full ductwork airflow optimization"
    ],
    popular: true
  },
  {
    id: "heating-install",
    chip: "FROM $1,800",
    title: "Heating Installation & Furnaces",
    shortDesc: "Furnaces, heat pumps, and dual-fuel systems for all home sizes and energy types.",
    fullDesc: "Stay warm through severe Texas cold snaps. We design and install high-efficiency gas furnaces, electric air handlers, and advanced inverter heat pumps built for durability.",
    gradientBg: "from-amber-50 to-orange-100/60",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=80",
    features: [
      "High-AFUE energy-saving gas furnaces",
      "Hybrid dual-fuel heat pump systems",
      "Carbon monoxide safety verification",
      "Quiet variable-speed blower motors"
    ]
  },
  {
    id: "repair",
    chip: "FROM $89",
    title: "AC & Heating Repair",
    shortDesc: "Same-day, flat-rate pricing — most repairs completed on the first visit from fully stocked vans.",
    fullDesc: "No hot air, frozen coils, or strange noises. Our certified technicians troubleshoot fast, present you a fixed flat-rate quote upfront, and fix it on the spot.",
    gradientBg: "from-emerald-50 to-teal-100/60",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    features: [
      "Comprehensive diagnostic inspection",
      "Genuine OEM factory replacement parts",
      "No overtime or hidden trip fees",
      "1-Year warranty on all repairs"
    ],
    popular: true
  },
  {
    id: "tune-up",
    chip: "FROM $89",
    title: "Tune-Up & Preventative Maintenance",
    shortDesc: "Seasonal inspections, coil cleaning, and efficiency checks to extend system life.",
    fullDesc: "Prevent costly summer breakdowns and lower electric bills. Our 24-point precision tune-up restores peak airflow, calibrates electrical components, and flushes condensate lines.",
    gradientBg: "from-violet-50 to-purple-100/60",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
    features: [
      "24-Point safety & efficiency checklist",
      "Refrigerant subcooling & superheat test",
      "Condenser coil chemical cleaning",
      "Electrical capacitor & contactor check"
    ]
  },
  {
    id: "air-quality",
    chip: "FROM $350",
    title: "Air Quality & REME HALO®",
    shortDesc: "Purifiers, UV light systems, humidifiers, and advanced filtration for healthier air.",
    fullDesc: "Eliminate allergens, dust, volatile organic compounds, mold spores, and airborne viruses. As certified REME HALO® and whole-home filtration installers, we create hospital-grade home air.",
    gradientBg: "from-cyan-50 to-sky-100/60",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    features: [
      "REME HALO® in-duct air purification",
      "MERV 13-16 whole-home media filters",
      "Whole-home dehumidification systems",
      "UV-C germicidal coil lamps"
    ]
  },
  {
    id: "emergency",
    chip: "FROM $149",
    title: "24/7 Emergency Service",
    shortDesc: "Nights, weekends, holidays — no extra charge. Metro DFW & ATX coverage within 90 minutes.",
    fullDesc: "When your AC quits in 105°F weather or your furnace fails during a freeze, Dun-Rite answers immediately. On-call master technicians dispatched 24 hours a day, 365 days a year.",
    gradientBg: "from-slate-100 to-blue-100/70",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    features: [
      "Direct line to dispatch (no robot runaround)",
      "Fully stocked trucks with 200+ parts",
      "Never an overtime penalty fee",
      "Immediate residential & commercial triage"
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Request a Quote",
    description: "Fill out our form or call us — we respond within the hour and schedule around your convenience.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80"
  },
  {
    step: "02",
    title: "Tech Arrives On Time",
    description: "Your certified tech arrives in a fully stocked van, ready to handle almost every issue on the first visit.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80"
  },
  {
    step: "03",
    title: "Flat-Rate Price",
    description: "We diagnose the issue, explain your options clearly, and quote a firm price before turning a single screw.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
  },
  {
    step: "04",
    title: "Done & Guaranteed",
    description: "Work completed, system tested, walk-through done. Backed by our 10-year warranty on installations.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "rev-1",
    name: "Marcus T.",
    role: "Homeowner",
    location: "McKinney, TX",
    rating: 5,
    quote: "AC broke on a Thursday night in August with 102° outside. Called Dun-Rite at 10pm, tech was at my house by 8am Friday. Fixed in 90 minutes. Price was exactly what they said on the phone. Incredible service!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    source: "Verified Google Review"
  },
  {
    id: "rev-2",
    name: "Dana W.",
    role: "Facilities Director",
    location: "Plano & Dallas, TX",
    rating: 5,
    quote: "We manage a portfolio of commercial properties across DFW and Dun-Rite handles all of them. Three years in, zero emergency surprises we weren't warned about in advance. True partners.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    source: "Verified Yelp Review"
  },
  {
    id: "rev-3",
    name: "James R.",
    role: "Homeowner",
    location: "Austin, TX",
    rating: 5,
    quote: "Got four quotes for a new heat pump system. Dun-Rite was the only one who explained the sizing rationale and didn't try to upsell me. Installed clean, on time, exactly what I paid. 10/10.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    source: "Verified Google Review"
  }
];

export const SERVICE_AREAS = [
  "McKinney", "Dallas", "Fort Worth", "Austin", "Plano", "Frisco",
  "Allen", "Round Rock", "Cedar Park", "Denton", "Carrollton",
  "Southlake", "Grapevine", "Lewisville", "Georgetown", "Pflugerville",
  "Prosper", "Celina", "Fairview", "Murphy", "Princeton", "Anna",
  "Melissa", "Farmersville", "Lavon", "Buda", "Kyle", "Bee Cave",
  "Lakeway", "Little Elm", "Keller", "Mansfield", "Flower Mound"
];

export const FAQS: FAQItem[] = [
  {
    question: "How quickly can you get to me?",
    answer: "For standard service calls, we're usually at your doorstep within 24 hours. For emergencies, we dispatch immediately — most metro DFW and Austin areas within 90 minutes, 24/7 including nights, weekends, and holidays."
  },
  {
    question: "Do you give a price before starting?",
    answer: "Always. After diagnosing the issue, we give you a firm, flat-rate price before touching anything. No hourly billing, no surprise trip fees, no nickel-and-diming. The number you approve is the exact number you pay."
  },
  {
    question: "What brands do you work on?",
    answer: "All of them — Carrier, Trane, Lennox, Rheem, Goodman, York, Bryant, American Standard, Daikin, Mitsubishi, and Ruud. For new installations, we are brand-agnostic and will recommend the best equipment for your home's square footage and budget."
  },
  {
    question: "Is your work guaranteed?",
    answer: "Yes. All new installations carry a 10-year workmanship warranty covering both parts and labor. System repairs carry a full 1-year warranty. If something isn't 100% right after we leave, we return at zero charge."
  },
  {
    question: "Do you offer financing?",
    answer: "Yes — 0% interest and low-monthly-payment financing plans are available on qualifying new system installations. Ask your technician or mention it when you request your free estimate."
  },
  {
    question: "Do I need to be home during the service?",
    answer: "For a first visit, yes — so we can explain the diagnosis in plain English and answer any questions. Repeat clients on our scheduled preventative maintenance plans can arrange secure access in advance."
  }
];

export const AVATAR_STACK = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80"
];
