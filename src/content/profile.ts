export type CareerEntry = {
  marker: string;
  organization: string;
  role?: string;
  description: string;
};

export type GalleryItem = {
  src: string;
  width: number;
  height: number;
  alt: string;
  label: string;
};

export type TrainingEntry = {
  year: string;
  title: string;
  provider: string;
};

export type Contribution = {
  number: string;
  title: string;
  detail: string;
  featured?: boolean;
};

export const profile = {
  name: "Engr. Md. Fazley Alam",
  shortName: "Fazley Alam",
  title: "Energy Sector Consultant",
  location: "Dhaka, Bangladesh",
  designation:
    "Energy Sector Consultant | Board Director, BGDCL | Former Managing Director | Former Director (Gas), BERC",
  availability: "Available for international assignments",
  headline: "Engineering Experience. Strategic Energy Leadership.",
  introduction:
    "Bringing more than 27 years of experience in natural gas infrastructure, regulatory affairs, and executive leadership to the evolving energy landscape.",
  biography: [
    "Engr. Md. Fazley Alam is an experienced energy sector professional whose career spans more than 27 years across natural gas transmission, distribution, infrastructure development, regulatory affairs, and corporate leadership in Bangladesh.",
    "A First Class graduate in Mechanical Engineering from Bangladesh University of Engineering and Technology (BUET), he began his professional journey with Bakhrabad Gas Systems Company Limited on 7 February 1999 and subsequently served in management and leadership responsibilities at Pashchimanchal Gas Company Limited.",
    "His professional journey later included service as Director (Gas) at the Bangladesh Energy Regulatory Commission (BERC) from 2023 to 2025, followed by executive leadership as Managing Director of Bakhrabad Gas Distribution Company Limited from 2025 to 2026.",
    "He currently serves on the Board of Directors of Bakhrabad Gas Distribution Company Limited and applies his technical, regulatory, and management experience to independent energy sector consultancy. His advisory focus spans upstream exploration and production, drilling, gas infrastructure, LNG and storage facilities, EPC/EPCM delivery, procurement, and strategic investment evaluation for national and international initiatives.",
  ],
  education: {
    institution: "Bangladesh University of Engineering and Technology",
    abbreviation: "BUET",
    year: "1992",
    qualification: "B.Sc. in Mechanical Engineering",
    result: "First Class",
    description:
      "An engineering education at BUET provided the technical foundation for a career spanning gas infrastructure, regulation, operations, and executive leadership.",
    additional: [
      { year: "1985", qualification: "Higher Secondary Certificate (HSC)", board: "Rajshahi Board", result: "First Division" },
      { year: "1983", qualification: "Secondary School Certificate (SSC)", board: "Rajshahi Board", result: "Second Division" },
    ],
  },
  professionalRecord: [
    { label: "Date of birth", value: "22 March 1967" },
    { label: "Home district", value: "Thakurgaon" },
    { label: "Father’s name", value: "Md. Younus Ali" },
    { label: "Mother’s name", value: "Mst. Dorima Khatun" },
    { label: "Gas-sector joining date", value: "7 February 1999" },
  ],
  images: {
    hero: {
      src: "/images/fazley-alam/01-executive-meeting.png",
      width: 1448,
      height: 1086,
      alt: "Engr. Md. Fazley Alam reviewing documents in a formal conference setting",
    },
    industry: {
      src: "/images/fazley-alam/02-energy-drilling-site.png",
      width: 1448,
      height: 1086,
      alt: "Engineering professionals standing in front of industrial drilling infrastructure",
    },
    biography: {
      src: "/images/fazley-alam/03-professional-indoor.png",
      width: 1448,
      height: 1086,
      alt: "Indoor portrait of Engr. Md. Fazley Alam",
    },
  },
  career: [
    {
      marker: "1999",
      organization: "Bakhrabad Gas Systems Company Limited",
      description:
        "Began his professional career, developing experience in gas transmission, distribution, technical operations, and operational management.",
    },
    {
      marker: "2003",
      organization: "Pashchimanchal Gas Company Limited",
      description:
        "Undertook management and leadership responsibilities involving regional gas infrastructure and service delivery.",
    },
    {
      marker: "2016–2019",
      organization: "Pashchimanchal Gas Company Limited",
      role: "Deputy General Manager",
      description:
        "Served in senior management across the company’s gas-sector operations and organizational responsibilities.",
    },
    {
      marker: "2019–2023",
      organization: "Pashchimanchal Gas Company Limited",
      role: "General Manager",
      description:
        "Held general management responsibility during a period that included major infrastructure and project work.",
    },
    {
      marker: "2023–2025",
      organization: "Bangladesh Energy Regulatory Commission",
      role: "Director (Gas)",
      description:
        "Contributed to regulatory oversight, policy implementation, and strategic energy-sector decisions.",
    },
    {
      marker: "2025–2026",
      organization: "Bakhrabad Gas Distribution Company Limited",
      role: "Managing Director",
      description:
        "Served in executive leadership of a major natural gas distribution organization.",
    },
    {
      marker: "Current",
      organization: "Bakhrabad Gas Distribution Company Limited",
      role: "Director, Board of Directors",
      description:
        "Contributes board-level governance and strategic oversight within one of Bangladesh’s major gas distribution companies.",
    },
    {
      marker: "Current",
      organization: "Independent Professional Practice",
      role: "Energy Sector Consultant",
      description:
        "Focused on technically grounded advice for energy infrastructure evaluation, planning, and strategic development.",
    },
  ] satisfies CareerEntry[],
  contributions: [
    {
      number: "01",
      title: "Financial turnaround at BGDCL",
      detail:
        "As Managing Director, moved Bakhrabad Gas Distribution Company Limited from a net loss of BDT 201.95 crore in FY 2024–25 to a net profit after tax of BDT 78.26 crore in FY 2025–26.",
      featured: true,
    },
    {
      number: "02",
      title: "System-loss reduction",
      detail:
        "Played a key role in reducing and maintaining Bakhrabad Gas Distribution Company’s system loss from 10% to below 6.93%.",
      featured: true,
    },
    {
      number: "03",
      title: "CNG and LPG regulatory oversight",
      detail:
        "As Director (Gas), oversaw the issuance and renewal of CNG and LPG licences and the determination of natural gas and LPG prices.",
    },
    {
      number: "04",
      title: "BERC technical leadership",
      detail:
        "Served as Team Leader for monitoring whether LPG was sold at BERC-fixed prices and as Convener of BERC’s gas-related technical committees.",
    },
    {
      number: "05",
      title: "SASEC and depository works",
      detail:
        "Completed the BDT 56 crore SASEC project from 2018 to June 2023 and depository works worth approximately BDT 10 crore for RDA and RHD.",
    },
    {
      number: "06",
      title: "Revenue recovery",
      detail:
        "Played a vital role in recovering BDT 96 crore from BSCIC in Rajshahi and Sirajganj.",
    },
    {
      number: "07",
      title: "Vigilance and revenue protection",
      detail:
        "Contributed to revenue collection through fines by preventing irregularities and illegal activities while serving in the Vigilance Department.",
    },
    {
      number: "08",
      title: "Northern gas network infrastructure",
      detail:
        "Played a crucial role in developing network infrastructure for gas supply in Rangpur, Nilphamari, and Pirganj and in securing ECNEC approval for the project.",
    },
    {
      number: "09",
      title: "Gas-meter verification capability",
      detail:
        "Took a leading role in installing a Meter Testing Bench for gas-meter verification within the company.",
    },
    {
      number: "10",
      title: "Gas-supply expansion planning",
      detail:
        "Contributed to the Preliminary Project Proposal (PCP) for expanding gas supply in Bogra and Rajshahi.",
    },
    {
      number: "11",
      title: "Early-career gas-theft prevention",
      detail:
        "Protected millions of BDT in government revenue by helping prevent large-scale gas theft between 1999 and 2003.",
    },
  ] satisfies Contribution[],
  training: [
    {
      year: "2025",
      title: "Regulating and Metering Station (RMS) Commissioning, Operation and Maintenance Training",
      provider: "Canalta Controls Ltd, Alberta, Canada",
    },
    {
      year: "2020",
      title: "Safety by Design Series on Revolutionary Advanced Isolation Technology for Aging Infrastructure",
      provider: "TD Williamson India Private Ltd, Mumbai — online",
    },
    { year: "2020", title: "Corporate Governance", provider: "Institute of Business Administration, University of Dhaka" },
    { year: "2019", title: "Project Management", provider: "Bangladesh Institute of Management, Dhaka" },
    {
      year: "2018",
      title: "Overview of Pressure Regulator, Alphard2, Gas Chromatograph and Flow Computer Products",
      provider: "Valvitalia SpA System Division, Italy",
    },
    {
      year: "2017",
      title: "8th International Bangladesh Industrial Innovation and Development Expo & Dialogue — BIID 2017",
      provider: "SREDA and Power Cell",
    },
    { year: "2016", title: "International Gas Business Management Program", provider: "IPDC, Indonesia" },
    { year: "2015", title: "Essential Government Job Rules", provider: "Bangladesh Institute of Management, Dhaka" },
  ] satisfies TrainingEntry[],
  expertise: [
    {
      number: "01",
      icon: "Search",
      title: "Oil & Gas Exploration and Production",
      description:
        "Technical and strategic perspective across upstream energy requirements and development considerations.",
    },
    {
      number: "02",
      icon: "Drill",
      title: "Onshore & Offshore Drilling",
      description:
        "Evaluation of drilling project requirements, interfaces, operational considerations, and delivery planning.",
    },
    {
      number: "03",
      icon: "Network",
      title: "Gas Transmission & Distribution",
      description:
        "Experience-informed advisory across natural gas networks, operations, infrastructure, and service delivery.",
    },
    {
      number: "04",
      icon: "Container",
      title: "LNG Infrastructure & Storage",
      description:
        "Assessment of infrastructure needs, project interfaces, operational context, and strategic implications.",
    },
    {
      number: "05",
      icon: "Warehouse",
      title: "Petroleum Terminals & Depots",
      description:
        "Planning and technical evaluation considerations for petroleum storage and terminal infrastructure.",
    },
    {
      number: "06",
      icon: "FileCheck2",
      title: "Procurement & International Tendering",
      description:
        "Support for procurement strategy, technical requirements, tender evaluation, and decision processes.",
    },
    {
      number: "07",
      icon: "HardHat",
      title: "EPC / EPCM & Infrastructure Development",
      description:
        "Structured review of delivery models, engineering interfaces, project planning, and implementation needs.",
    },
    {
      number: "08",
      icon: "ChartNoAxesCombined",
      title: "Energy Investment & Project Evaluation",
      description:
        "Balanced technical, regulatory, operational, and strategic assessment to inform investment decisions.",
    },
  ],
  leadership: [
    "Executive Management",
    "Corporate Governance",
    "Regulatory Oversight",
    "Operational Excellence",
    "Infrastructure Strategy",
    "Stakeholder Coordination",
    "Energy Policy Implementation",
  ],
  approach: [
    {
      number: "01",
      title: "Understand",
      text: "Understand technical, operational, regulatory, and commercial requirements.",
    },
    {
      number: "02",
      title: "Evaluate",
      text: "Assess project feasibility, risks, available options, and strategic implications.",
    },
    {
      number: "03",
      title: "Advise",
      text: "Develop practical recommendations informed by experience.",
    },
    {
      number: "04",
      title: "Support",
      text: "Support decision-making, stakeholder coordination, and implementation planning.",
    },
  ],
  gallery: [
    {
      src: "/images/fazley-alam/04-architectural-portrait.png",
      width: 1448,
      height: 1086,
      alt: "Engr. Md. Fazley Alam beside a contemporary architectural setting and reflecting water",
      label: "Architectural moment",
    },
    {
      src: "/images/fazley-alam/05-mountain-portrait.png",
      width: 1122,
      height: 1402,
      alt: "Engr. Md. Fazley Alam in a snowy mountain landscape",
      label: "Personal moment",
    },
    {
      src: "/images/fazley-alam/06-city-night-portrait.png",
      width: 1122,
      height: 1402,
      alt: "Engr. Md. Fazley Alam overlooking a city skyline at night",
      label: "City perspective",
    },
  ] satisfies GalleryItem[],
  contact: {
    email: null as string | null,
    linkedIn: "https://www.linkedin.com/in/fazley-alam-ba1aa3325",
    facebook: "https://www.facebook.com/share/19LtsQSY6q/?mibextid=wwXIfr",
    whatsApp: "https://wa.me/8801730357226",
    whatsAppDisplay: "+880 1730-357226",
    telephone: null as string | null,
  },
};

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contributions", href: "#contributions" },
  { label: "Expertise", href: "#expertise" },
  { label: "Gallery", href: "#gallery" },
];
