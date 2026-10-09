import { profile, type CareerId, type ContributionId, type ExpertiseId, type GalleryId, type TrainingId } from "@/content/profile";

export type Locale = "en" | "bn";
export type ThemeSetting = "light" | "dark" | "system";

type TitledText = { title: string; text: string };
type CareerCopy = { organization: string; role?: string; description: string };
type ContributionCopy = { title: string; detail: string };
type TrainingCopy = { title: string; provider: string };
type GalleryCopy = { label: string; alt: string };

export type Dictionary = {
  metadata: { title: string; description: string };
  common: {
    name: string; shortName: string; professionalTitle: string; location: string;
    current: string; previous: string; numberPrefix: string;
  };
  navigation: { about: string; experience: string; contributions: string; expertise: string; gallery: string; contact: string };
  controls: {
    languageLabel: string; english: string; bangla: string; appearanceLabel: string;
    light: string; dark: string; system: string; openMenu: string; closeMenu: string;
    home: string; primaryNavigation: string; footerNavigation: string; backToTop: string; skipToContent: string;
  };
  header: { talk: string };
  hero: {
    eyebrow: string; headlineFirst: string; headlineSecond: string; introduction: string; designation: string;
    explore: string; discuss: string; availability: string; imageCaption: string; imageLocation: string;
    imageAlt: string; experienceValue: string; experienceLabel: string; leadershipValue: string;
    leadershipLabel: string; energyValue: string; energyLabel: string; scroll: string;
  };
  about: {
    eyebrow: string; heading: string; biography: string[]; portraitAlt: string; portraitEyebrow: string;
    portraitNote: string; pillars: TitledText[]; recordEyebrow: string; recordHeading: string;
    record: { birth: string; district: string; father: string; mother: string; joined: string };
    recordValues: { birth: string; district: string; father: string; mother: string; joined: string };
  };
  cv: {
    eyebrow: string; heading: string; description: string; english: string; bangla: string;
    englishAria: string; banglaAria: string; primary: string; secondary: string;
  };
  journey: {
    eyebrow: string; heading: string; description: string; items: Record<CareerId, CareerCopy>;
    fieldLabel: string; fieldCaption: string; industryAlt: string;
  };
  contributions: {
    eyebrow: string; heading: string; description: string; items: Record<ContributionId, ContributionCopy>;
  };
  expertise: {
    eyebrow: string; heading: string; description: string; items: Record<ExpertiseId, TitledText>;
  };
  leadership: { eyebrow: string; headingFirst: string; headingEmphasis: string; description: string; items: string[] };
  approach: { eyebrow: string; heading: string; description: string; items: TitledText[] };
  education: {
    eyebrow: string; institution: string; abbreviation: string; qualification: string; result: string; description: string;
    hsc: string; hscBoard: string; hscResult: string; ssc: string; sscBoard: string; sscResult: string;
  };
  development: { eyebrow: string; heading: string; description: string; items: Record<TrainingId, TrainingCopy> };
  gallery: {
    eyebrow: string; heading: string; description: string; items: Record<GalleryId, GalleryCopy>;
    viewerLabel: string; enlarge: string; close: string; previous: string; next: string;
  };
  contact: {
    eyebrow: string; headingFirst: string; headingEmphasis: string; description: string; availability: string;
    basedIn: string; linkedIn: string; linkedInValue: string; facebook: string; facebookValue: string;
    whatsApp: string; portfolio: string; portfolioValue: string; pendingLabel: string; pendingText: string;
  };
  footer: { rights: string; motto: string };
};

const en: Dictionary = {
  metadata: {
    title: "Engr. Md. Fazley Alam | Energy Sector Consultant",
    description: "Explore the professional experience and energy consultancy expertise of Engr. Md. Fazley Alam, Board Director, former Managing Director and former Director (Gas), BERC.",
  },
  common: {
    name: "Engr. Md. Fazley Alam", shortName: "Fazley Alam", professionalTitle: "Energy Sector Consultant",
    location: "Dhaka, Bangladesh", current: "Current", previous: "Former", numberPrefix: "",
  },
  navigation: { about: "About", experience: "Experience", contributions: "Contributions", expertise: "Expertise", gallery: "Gallery", contact: "Contact" },
  controls: {
    languageLabel: "Language", english: "English", bangla: "বাংলা", appearanceLabel: "Appearance",
    light: "Light", dark: "Dark", system: "System", openMenu: "Open menu", closeMenu: "Close menu",
    home: "Home", primaryNavigation: "Primary navigation", footerNavigation: "Footer navigation", backToTop: "Back to top", skipToContent: "Skip to main content",
  },
  header: { talk: "Let’s talk" },
  hero: {
    eyebrow: "Energy sector leadership & consulting",
    headlineFirst: "Engineering Experience.", headlineSecond: "Strategic Energy Leadership.",
    introduction: "Bringing more than {experienceYears} years of experience in natural gas infrastructure, regulatory affairs, and executive leadership to the evolving energy landscape.",
    designation: "Energy Sector Consultant | Board Director, BGDCL | Former Managing Director | Former Director (Gas), BERC",
    explore: "Explore my experience", discuss: "Discuss an engagement", availability: "Available for international assignments",
    imageCaption: "Executive perspective", imageLocation: "Dhaka, Bangladesh",
    imageAlt: "Engr. Md. Fazley Alam reviewing documents in a formal conference setting",
    experienceValue: "{experienceYears}+", experienceLabel: "Years of experience", leadershipValue: "Executive",
    leadershipLabel: "Leadership", energyValue: "Energy", energyLabel: "Regulation & infrastructure", scroll: "Scroll to discover",
  },
  about: {
    eyebrow: "Professional profile", heading: "A Career Dedicated to Energy Infrastructure and Leadership",
    biography: [
      "Engr. Md. Fazley Alam is an experienced energy sector professional whose career spans more than {experienceYears} years across natural gas transmission and distribution, infrastructure development, regulatory affairs, and corporate leadership in Bangladesh.",
      "A First Class graduate in Mechanical Engineering from Bangladesh University of Engineering and Technology (BUET), he began his professional journey with Bakhrabad Gas Systems Company Limited on {joinDate} and subsequently served in management and leadership responsibilities at Pashchimanchal Gas Company Limited.",
      "His professional journey later included service as Director (Gas) at the Bangladesh Energy Regulatory Commission (BERC) from 2023 to 2025, followed by service as Managing Director of Bakhrabad Gas Distribution Company Limited from {mdTenure}.",
      "He currently serves on the Board of Directors of Bakhrabad Gas Distribution Company Limited and applies his technical, regulatory, and management experience to independent energy sector consultancy for national and international initiatives.",
    ],
    portraitAlt: "Indoor portrait of Engr. Md. Fazley Alam", portraitEyebrow: "Professional perspective",
    portraitNote: "Technical depth. Strategic clarity.",
    pillars: [
      { title: "Technical Expertise", text: "Engineering perspective across complex energy systems." },
      { title: "Regulatory Experience", text: "Understanding of oversight, compliance, and policy implementation." },
      { title: "Executive Leadership", text: "Management experience within major energy-sector organizations." },
      { title: "Strategic Advisory", text: "Practical counsel grounded in technical and operational realities." },
    ],
    recordEyebrow: "Profile record", recordHeading: "Biographical details",
    record: { birth: "Date of birth", district: "Home district", father: "Father’s name", mother: "Mother’s name", joined: "Gas-sector joining date" },
    recordValues: { birth: "{birthDate}", district: "Thakurgaon", father: "Md. Younus Ali", mother: "Mst. Dorima Khatun", joined: "{joinDate}" },
  },
  cv: {
    eyebrow: "Curriculum vitae", heading: "Download the Professional CV",
    description: "Choose either verified PDF. The version matching the current site language is presented first.",
    english: "Download English CV", bangla: "Download Bangla CV",
    englishAria: "Download Fazley Alam’s English CV as a PDF", banglaAria: "Download Fazley Alam’s Bangla CV as a PDF",
    primary: "Selected language", secondary: "Other language",
  },
  journey: {
    eyebrow: "Career journey", heading: "Professional Journey",
    description: "A career spanning technical operations, organizational leadership, regulatory responsibility, and strategic energy consultancy.",
    items: {
      bgsl: { organization: "Bakhrabad Gas Systems Company Limited", description: "Began his professional career in gas transmission, distribution, technical operations, and operational management." },
      pgclEarly: { organization: "Pashchimanchal Gas Company Limited", description: "Progressed through management responsibilities involving regional gas infrastructure and service delivery." },
      dgm: { organization: "Pashchimanchal Gas Company Limited", role: "Deputy General Manager", description: "Contributed to gas infrastructure development and operational management." },
      gm: { organization: "Pashchimanchal Gas Company Limited", role: "General Manager", description: "Held senior management responsibilities in regional gas infrastructure, project delivery, and service operations." },
      berc: { organization: "Bangladesh Energy Regulatory Commission", role: "Director (Gas)", description: "Oversaw CNG and LPG licensing, natural gas and LPG pricing, price-compliance monitoring, and gas-related technical committees." },
      md: { organization: "Bakhrabad Gas Distribution Company Limited", role: "Managing Director", description: "Led executive management and gas distribution operations through to retirement from public service." },
      board: { organization: "Bakhrabad Gas Distribution Company Limited", role: "Director, Board of Directors", description: "Contributes to corporate governance and strategic oversight." },
      consultant: { organization: "Independent Consultancy", role: "Energy Sector Consultant", description: "Advises on energy infrastructure, procurement, EPC/EPCM development, and strategic investment evaluation." },
    },
    fieldLabel: "Field perspective", fieldCaption: "Experience across energy infrastructure and industry operations.",
    industryAlt: "Engineering professionals standing in front of industrial drilling infrastructure",
  },
  contributions: {
    eyebrow: "Gas-sector record", heading: "Selected Professional Contributions",
    description: "Documented contributions spanning organizational performance, regulatory responsibility, infrastructure development, revenue protection, and technical capability.",
    items: {
      financial: { title: "Contribution to BGDCL’s financial turnaround", detail: "During his Managing Director tenure ({mdTenure}), he contributed to BGDCL’s financial turnaround. The company reported {profitAfterTax} profit after tax in FY {currentFY}, compared with a {lossAfterTax} loss after tax in FY {priorFY}. Profit before contribution to the workers’ profit participation fund was {profitBeforeFund}, compared with a {lossBeforeFund} loss on the same basis. These are company-level full-year results; his tenure covered part of FY {currentFY}." },
      systemLoss: { title: "System-loss reduction", detail: "Played a key role in reducing and maintaining BGDCL system loss from {systemLossFrom} to below {systemLossBelow}." },
      regulation: { title: "CNG and LPG regulatory oversight", detail: "As Director (Gas), oversaw CNG and LPG licence issuance and renewal and the determination of natural gas and LPG prices." },
      bercLeadership: { title: "BERC technical leadership", detail: "Led monitoring of LPG price compliance and convened BERC’s gas-related technical committees." },
      sasec: { title: "SASEC and deposit works", detail: "Completed the {sasecAmount} SASEC project during {sasecPeriod} and deposit works of approximately {depositAmount} for RDA and RHD." },
      recovery: { title: "Revenue recovery", detail: "Played a vital role in recovering {recoveryAmount} from BSCIC in Rajshahi and Sirajganj." },
      vigilance: { title: "Vigilance and revenue protection", detail: "Contributed to revenue collection through fines by preventing irregularities and illegal activities while serving in the Vigilance Department." },
      northernNetwork: { title: "Northern gas network infrastructure", detail: "Contributed to gas network development in Rangpur, Nilphamari, and Pirganj and to securing ECNEC project approval." },
      meterTesting: { title: "Gas-meter verification capability", detail: "Led the installation of a gas meter testing bench for in-company verification." },
      expansionPlanning: { title: "Gas-supply expansion planning", detail: "Contributed to preliminary proposals for expanding gas supply in Bogra and Rajshahi." },
      theftPrevention: { title: "Early-career gas-theft prevention", detail: "Helped protect government revenue by preventing large-scale gas theft between 1999 and 2003." },
    },
  },
  expertise: {
    eyebrow: "Consulting focus", heading: "Expertise Across the Energy Value Chain",
    description: "A multidisciplinary perspective shaped by technical operations, regulatory service, and executive responsibility.",
    items: {
      exploration: { title: "Oil & Gas Exploration and Production", text: "Technical and strategic perspective across upstream energy requirements and development considerations." },
      drilling: { title: "Onshore & Offshore Drilling", text: "Evaluation of drilling requirements, interfaces, operational considerations, and delivery planning." },
      transmission: { title: "Natural Gas Transmission & Distribution", text: "Experience-informed advisory across gas networks, operations, infrastructure, and service delivery." },
      lng: { title: "LNG Infrastructure & Storage", text: "Assessment of infrastructure needs, project interfaces, operating context, and strategic implications." },
      terminals: { title: "Petroleum Terminals & Depots", text: "Planning and technical evaluation for petroleum storage and terminal infrastructure." },
      procurement: { title: "Procurement & International Tendering", text: "Support for procurement strategy, technical requirements, tender evaluation, and decisions." },
      epc: { title: "EPC / EPCM & Infrastructure Development", text: "Structured review of delivery models, engineering interfaces, planning, and implementation needs." },
      investment: { title: "Energy Investment & Project Evaluation", text: "Balanced technical, regulatory, operational, and strategic assessment to inform investment decisions." },
    },
  },
  leadership: {
    eyebrow: "Leadership & governance", headingFirst: "Leadership Beyond", headingEmphasis: "Technical Expertise",
    description: "Energy-sector decisions call for an integrated view of engineering, regulation, organizational responsibility, and stakeholder priorities.",
    items: ["Executive Management", "Corporate Governance", "Regulatory Oversight", "Operational Excellence", "Infrastructure Strategy", "Stakeholder Coordination", "Energy Policy Implementation"],
  },
  approach: {
    eyebrow: "Consulting approach", heading: "From Technical Complexity to Strategic Clarity",
    description: "A practical framework for engaging with complex energy and infrastructure questions.",
    items: [
      { title: "Understand", text: "Understand technical, operational, regulatory, and commercial requirements." },
      { title: "Evaluate", text: "Assess project feasibility, risks, available options, and strategic implications." },
      { title: "Advise", text: "Develop practical recommendations informed by experience." },
      { title: "Support", text: "Support decision-making, stakeholder coordination, and implementation planning." },
    ],
  },
  education: {
    eyebrow: "Engineering foundation", institution: "Bangladesh University of Engineering and Technology", abbreviation: "BUET",
    qualification: "BSc in Mechanical Engineering", result: "First Class",
    description: "An engineering education at BUET provided the technical foundation for a career spanning gas infrastructure, regulation, operations, and executive leadership.",
    hsc: "Higher Secondary Certificate (HSC)", hscBoard: "Rajshahi Board", hscResult: "First Division",
    ssc: "Secondary School Certificate (SSC)", sscBoard: "Rajshahi Board", sscResult: "Second Division",
  },
  development: {
    eyebrow: "Professional development", heading: "Selected Training & International Exposure",
    description: "Formal learning across gas systems, safety, corporate governance, project management, energy technology, and international gas business.",
    items: {
      rms: { title: "RMS commissioning, operation and maintenance", provider: "Canalta Controls Ltd, Alberta, Canada" },
      safety: { title: "Safety by Design and advanced isolation technology", provider: "TD Williamson India Private Ltd, Mumbai — online" },
      governance: { title: "Corporate Governance", provider: "IBA, University of Dhaka" },
      projectManagement: { title: "Project Management", provider: "Bangladesh Institute of Management, Dhaka" },
      valvitalia: { title: "Gas regulation, chromatography and flow-computer products", provider: "Valvitalia SpA System Division, Italy" },
      biid: { title: "BIID Industrial Innovation and Development Expo and Dialogue", provider: "SREDA and Power Cell" },
      gasBusiness: { title: "International Gas Business Management Program", provider: "IPDC, Indonesia" },
      jobRules: { title: "Essential Government Job Rules", provider: "Bangladesh Institute of Management, Dhaka" },
    },
  },
  gallery: {
    eyebrow: "Professional & personal moments", heading: "Beyond the Boardroom",
    description: "A restrained glimpse at the person behind the professional perspective.",
    items: {
      architecture: { label: "Architectural moment", alt: "Engr. Md. Fazley Alam beside a contemporary architectural setting and reflecting water" },
      mountain: { label: "Personal moment", alt: "Engr. Md. Fazley Alam in a snowy mountain landscape" },
      city: { label: "City perspective", alt: "Engr. Md. Fazley Alam overlooking a city skyline at night" },
    },
    viewerLabel: "Image viewer", enlarge: "Enlarge", close: "Close image viewer", previous: "Previous image", next: "Next image",
  },
  contact: {
    eyebrow: "Start a conversation", headingFirst: "Let’s Discuss the", headingEmphasis: "Future of Energy",
    description: "For energy sector advisory engagements, infrastructure discussions, strategic collaboration, and professional inquiries, please get in touch.",
    availability: "Available for international assignments", basedIn: "Based in", linkedIn: "LinkedIn", linkedInValue: "Professional profile",
    facebook: "Facebook", facebookValue: "Professional connection", whatsApp: "WhatsApp", portfolio: "Portfolio", portfolioValue: "Visit website",
    pendingLabel: "Contact details", pendingText: "Approved professional contact channels will be available here shortly.",
  },
  footer: { rights: "All rights reserved.", motto: "Energy leadership · Engineering excellence" },
};

const bn: Dictionary = {
  metadata: {
    title: "প্রকৌশলী মোঃ ফজলে আলম | জ্বালানি খাতের পরামর্শক",
    description: "প্রকৌশলী মোঃ ফজলে আলমের পেশাগত অভিজ্ঞতা, পরিচালনা পর্ষদ ও নির্বাহী নেতৃত্ব এবং জ্বালানি খাতের পরামর্শক দক্ষতা সম্পর্কে জানুন।",
  },
  common: {
    name: "প্রকৌশলী মোঃ ফজলে আলম", shortName: "ফজলে আলম", professionalTitle: "জ্বালানি খাতের পরামর্শক",
    location: "ঢাকা, বাংলাদেশ", current: "বর্তমান", previous: "সাবেক", numberPrefix: "",
  },
  navigation: { about: "পরিচিতি", experience: "কর্মজীবন", contributions: "অবদান", expertise: "দক্ষতা", gallery: "গ্যালারি", contact: "যোগাযোগ" },
  controls: {
    languageLabel: "ভাষা", english: "English", bangla: "বাংলা", appearanceLabel: "রঙের ধরন",
    light: "হালকা", dark: "গাঢ়", system: "সিস্টেম অনুযায়ী", openMenu: "মেনু খুলুন", closeMenu: "মেনু বন্ধ করুন",
    home: "প্রচ্ছদ", primaryNavigation: "প্রধান নেভিগেশন", footerNavigation: "ফুটার নেভিগেশন", backToTop: "উপরে ফিরে যান", skipToContent: "মূল বিষয়ে যান",
  },
  header: { talk: "আলোচনা করুন" },
  hero: {
    eyebrow: "জ্বালানি খাতে নেতৃত্ব ও পরামর্শ",
    headlineFirst: "প্রকৌশল অভিজ্ঞতা।", headlineSecond: "কৌশলগত জ্বালানি নেতৃত্ব।",
    introduction: "প্রাকৃতিক গ্যাস অবকাঠামো, নিয়ন্ত্রক কার্যক্রম ও নির্বাহী নেতৃত্বে {experienceYears} বছরের বেশি অভিজ্ঞতা নিয়ে পরিবর্তনশীল জ্বালানি খাতে অবদান রাখছেন।",
    designation: "জ্বালানি খাতের পরামর্শক | পরিচালনা পর্ষদের পরিচালক, BGDCL | সাবেক ব্যবস্থাপনা পরিচালক | সাবেক পরিচালক (গ্যাস), BERC",
    explore: "কর্মজীবন দেখুন", discuss: "পরামর্শ নিয়ে আলোচনা করুন", availability: "আন্তর্জাতিক দায়িত্ব গ্রহণে আগ্রহী",
    imageCaption: "নির্বাহী দৃষ্টিভঙ্গি", imageLocation: "ঢাকা, বাংলাদেশ",
    imageAlt: "আনুষ্ঠানিক সম্মেলনকক্ষে নথি পর্যালোচনা করছেন প্রকৌশলী মোঃ ফজলে আলম",
    experienceValue: "{experienceYears}+", experienceLabel: "বছরের অভিজ্ঞতা", leadershipValue: "নির্বাহী",
    leadershipLabel: "নেতৃত্ব", energyValue: "জ্বালানি", energyLabel: "নিয়ন্ত্রণ ও অবকাঠামো", scroll: "আরও জানতে নিচে যান",
  },
  about: {
    eyebrow: "পেশাগত পরিচিতি", heading: "জ্বালানি অবকাঠামো ও নেতৃত্বে নিবেদিত কর্মজীবন",
    biography: [
      "প্রকৌশলী মোঃ ফজলে আলম বাংলাদেশের জ্বালানি খাতের একজন অভিজ্ঞ পেশাজীবী। প্রাকৃতিক গ্যাস সঞ্চালন ও বিতরণ, অবকাঠামো উন্নয়ন, নিয়ন্ত্রক কার্যক্রম এবং করপোরেট নেতৃত্বে তাঁর কর্মজীবন {experienceYears} বছরেরও বেশি।",
      "বাংলাদেশ প্রকৌশল বিশ্ববিদ্যালয় (BUET) থেকে যন্ত্রকৌশলে প্রথম শ্রেণিতে স্নাতক ডিগ্রি অর্জনের পর তিনি {joinDate} বাখরাবাদ গ্যাস সিস্টেমস কোম্পানি লিমিটেডে কর্মজীবন শুরু করেন। পরবর্তীতে পশ্চিমাঞ্চল গ্যাস কোম্পানি লিমিটেডে ব্যবস্থাপনা ও নেতৃত্বের বিভিন্ন দায়িত্ব পালন করেন।",
      "পরবর্তীতে তিনি ২০২৩ থেকে ২০২৫ সাল পর্যন্ত বাংলাদেশ এনার্জি রেগুলেটরি কমিশনে পরিচালক (গ্যাস) এবং {mdTenure} পর্যন্ত বাখরাবাদ গ্যাস ডিস্ট্রিবিউশন কোম্পানি লিমিটেডের ব্যবস্থাপনা পরিচালক হিসেবে দায়িত্ব পালন করেন।",
      "বর্তমানে তিনি বাখরাবাদ গ্যাস ডিস্ট্রিবিউশন কোম্পানি লিমিটেডের পরিচালনা পর্ষদের পরিচালক। পাশাপাশি দেশীয় ও আন্তর্জাতিক উদ্যোগে কারিগরি, নিয়ন্ত্রক ও ব্যবস্থাপনা অভিজ্ঞতার ভিত্তিতে স্বাধীনভাবে জ্বালানি খাতে পরামর্শ প্রদান করছেন।",
    ],
    portraitAlt: "প্রকৌশলী মোঃ ফজলে আলমের ইনডোর প্রতিকৃতি", portraitEyebrow: "পেশাগত দৃষ্টিভঙ্গি",
    portraitNote: "কারিগরি গভীরতা। কৌশলগত স্বচ্ছতা।",
    pillars: [
      { title: "কারিগরি দক্ষতা", text: "জটিল জ্বালানি ব্যবস্থায় প্রকৌশলভিত্তিক দৃষ্টিভঙ্গি।" },
      { title: "নিয়ন্ত্রক অভিজ্ঞতা", text: "তদারকি, বিধি পরিপালন ও নীতি বাস্তবায়নের বাস্তব অভিজ্ঞতা।" },
      { title: "নির্বাহী নেতৃত্ব", text: "গুরুত্বপূর্ণ জ্বালানি প্রতিষ্ঠানে ব্যবস্থাপনা ও নেতৃত্বের অভিজ্ঞতা।" },
      { title: "কৌশলগত পরামর্শ", text: "কারিগরি ও পরিচালন বাস্তবতার ভিত্তিতে কার্যকর পরামর্শ।" },
    ],
    recordEyebrow: "ব্যক্তিগত তথ্য", recordHeading: "সংক্ষিপ্ত তথ্য",
    record: { birth: "জন্মতারিখ", district: "নিজ জেলা", father: "পিতার নাম", mother: "মাতার নাম", joined: "গ্যাস খাতে যোগদানের তারিখ" },
    recordValues: { birth: "{birthDate}", district: "ঠাকুরগাঁও", father: "মোঃ ইউনুস আলী", mother: "মোছাঃ দোরিমা খাতুন", joined: "{joinDate}" },
  },
  cv: {
    eyebrow: "জীবনবৃত্তান্ত", heading: "পেশাগত জীবনবৃত্তান্ত ডাউনলোড করুন",
    description: "যাচাইকৃত দুইটি PDF সংস্করণই পাওয়া যাবে। ওয়েবসাইটের নির্বাচিত ভাষার সংস্করণটি প্রথমে দেখানো হয়েছে।",
    english: "ইংরেজি জীবনবৃত্তান্ত ডাউনলোড", bangla: "বাংলা জীবনবৃত্তান্ত ডাউনলোড",
    englishAria: "ফজলে আলমের ইংরেজি জীবনবৃত্তান্ত PDF আকারে ডাউনলোড করুন", banglaAria: "ফজলে আলমের বাংলা জীবনবৃত্তান্ত PDF আকারে ডাউনলোড করুন",
    primary: "নির্বাচিত ভাষা", secondary: "অন্য ভাষা",
  },
  journey: {
    eyebrow: "কর্মজীবনের পথচলা", heading: "পেশাগত কর্মজীবন",
    description: "কারিগরি পরিচালনা, প্রাতিষ্ঠানিক নেতৃত্ব, নিয়ন্ত্রক দায়িত্ব এবং কৌশলগত জ্বালানি পরামর্শে বিস্তৃত কর্মজীবন।",
    items: {
      bgsl: { organization: "বাখরাবাদ গ্যাস সিস্টেমস কোম্পানি লিমিটেড", description: "প্রাকৃতিক গ্যাস সঞ্চালন ও বিতরণ, কারিগরি কার্যক্রম এবং পরিচালন ব্যবস্থাপনায় পেশাগত কর্মজীবন শুরু করেন।" },
      pgclEarly: { organization: "পশ্চিমাঞ্চল গ্যাস কোম্পানি লিমিটেড", description: "আঞ্চলিক গ্যাস অবকাঠামো ও সেবা কার্যক্রমে ধারাবাহিকভাবে ব্যবস্থাপনার দায়িত্ব পালন করেন।" },
      dgm: { organization: "পশ্চিমাঞ্চল গ্যাস কোম্পানি লিমিটেড", role: "উপমহাব্যবস্থাপক", description: "গ্যাস অবকাঠামো উন্নয়ন ও পরিচালন ব্যবস্থাপনায় অবদান রাখেন।" },
      gm: { organization: "পশ্চিমাঞ্চল গ্যাস কোম্পানি লিমিটেড", role: "মহাব্যবস্থাপক", description: "আঞ্চলিক গ্যাস অবকাঠামো, প্রকল্প বাস্তবায়ন ও সেবা কার্যক্রমে ঊর্ধ্বতন ব্যবস্থাপনার দায়িত্ব পালন করেন।" },
      berc: { organization: "বাংলাদেশ এনার্জি রেগুলেটরি কমিশন", role: "পরিচালক (গ্যাস)", description: "CNG ও LPG লাইসেন্স, প্রাকৃতিক গ্যাস ও LPG-এর মূল্য নির্ধারণ, মূল্য পরিপালন তদারকি এবং গ্যাস-সংশ্লিষ্ট কারিগরি কমিটির দায়িত্ব পালন করেন।" },
      md: { organization: "বাখরাবাদ গ্যাস ডিস্ট্রিবিউশন কোম্পানি লিমিটেড", role: "ব্যবস্থাপনা পরিচালক", description: "সরকারি চাকরি থেকে অবসর গ্রহণ পর্যন্ত নির্বাহী ব্যবস্থাপনা ও গ্যাস বিতরণ কার্যক্রমে নেতৃত্ব দেন।" },
      board: { organization: "বাখরাবাদ গ্যাস ডিস্ট্রিবিউশন কোম্পানি লিমিটেড", role: "পরিচালনা পর্ষদের পরিচালক", description: "করপোরেট সুশাসন ও কৌশলগত তদারকিতে অবদান রাখছেন।" },
      consultant: { organization: "স্বাধীন পরামর্শ কার্যক্রম", role: "জ্বালানি খাতের পরামর্শক", description: "জ্বালানি অবকাঠামো, ক্রয়, EPC/EPCM উন্নয়ন এবং কৌশলগত বিনিয়োগ মূল্যায়নে পরামর্শ প্রদান করছেন।" },
    },
    fieldLabel: "মাঠপর্যায়ের অভিজ্ঞতা", fieldCaption: "জ্বালানি অবকাঠামো ও শিল্প কার্যক্রমে অভিজ্ঞতা।",
    industryAlt: "বৃহৎ ড্রিলিং অবকাঠামোর সামনে দাঁড়িয়ে থাকা প্রকৌশল ও সংশ্লিষ্ট পেশাজীবীরা",
  },
  contributions: {
    eyebrow: "গ্যাস খাতে অবদান", heading: "নির্বাচিত পেশাগত অবদান",
    description: "প্রাতিষ্ঠানিক কার্যসম্পাদন, নিয়ন্ত্রক দায়িত্ব, অবকাঠামো উন্নয়ন, রাজস্ব সুরক্ষা এবং কারিগরি সক্ষমতায় নথিভুক্ত অবদান।",
    items: {
      financial: { title: "BGDCL-এর আর্থিক ঘুরে দাঁড়ানোয় অবদান", detail: "ব্যবস্থাপনা পরিচালক হিসেবে তাঁর দায়িত্বকাল ({mdTenure}) চলাকালে তিনি BGDCL-এর আর্থিক ঘুরে দাঁড়ানোর প্রক্রিয়ায় অবদান রাখেন। প্রতিষ্ঠানটি {priorFY} অর্থবছরের {lossAfterTax} কর-পরবর্তী লোকসানের বিপরীতে {currentFY} অর্থবছরে {profitAfterTax} কর-পরবর্তী মুনাফা প্রতিবেদন করে। শ্রমিকদের মুনাফা অংশগ্রহণ তহবিলে অবদানের আগে মুনাফা ছিল {profitBeforeFund}; আগের অর্থবছরে একই ভিত্তিতে লোকসান ছিল {lossBeforeFund}। এগুলো প্রতিষ্ঠানের পূর্ণ অর্থবছরের ফলাফল; তাঁর দায়িত্বকাল {currentFY} অর্থবছরের একটি অংশজুড়ে ছিল।" },
      systemLoss: { title: "সিস্টেম লস হ্রাস", detail: "BGDCL-এর সিস্টেম লস {systemLossFrom} থেকে {systemLossBelow}-এর নিচে নামিয়ে আনা ও বজায় রাখতে গুরুত্বপূর্ণ ভূমিকা পালন করেন।" },
      regulation: { title: "CNG ও LPG নিয়ন্ত্রক তদারকি", detail: "পরিচালক (গ্যাস) হিসেবে CNG ও LPG লাইসেন্স প্রদান ও নবায়ন এবং প্রাকৃতিক গ্যাস ও LPG-এর মূল্য নির্ধারণ কার্যক্রম তদারক করেন।" },
      bercLeadership: { title: "BERC-এ কারিগরি নেতৃত্ব", detail: "LPG-এর নির্ধারিত মূল্য পরিপালন তদারকিতে নেতৃত্ব দেন এবং BERC-এর গ্যাস-সংশ্লিষ্ট কারিগরি কমিটিগুলোর আহ্বায়কের দায়িত্ব পালন করেন।" },
      sasec: { title: "SASEC ও ডিপোজিট কাজ", detail: "{sasecPeriod} সময়ে {sasecAmount} মূল্যের SASEC প্রকল্প এবং RDA ও RHD-এর জন্য প্রায় {depositAmount} মূল্যের ডিপোজিট কাজ সম্পন্ন করেন।" },
      recovery: { title: "রাজস্ব পুনরুদ্ধার", detail: "রাজশাহী ও সিরাজগঞ্জে BSCIC-এর কাছ থেকে {recoveryAmount} আদায়ে গুরুত্বপূর্ণ ভূমিকা রাখেন।" },
      vigilance: { title: "ভিজিল্যান্স ও রাজস্ব সুরক্ষা", detail: "ভিজিল্যান্স বিভাগে দায়িত্ব পালনের সময় অনিয়ম ও অবৈধ কার্যক্রম প্রতিরোধ এবং জরিমানার মাধ্যমে রাজস্ব আদায়ে অবদান রাখেন।" },
      northernNetwork: { title: "উত্তরাঞ্চলের গ্যাস নেটওয়ার্ক", detail: "রংপুর, নীলফামারী ও পীরগঞ্জে গ্যাস নেটওয়ার্ক উন্নয়ন এবং প্রকল্পের ECNEC অনুমোদন অর্জনে ভূমিকা রাখেন।" },
      meterTesting: { title: "গ্যাস মিটার যাচাই সক্ষমতা", detail: "প্রতিষ্ঠানের অভ্যন্তরে গ্যাস মিটার যাচাইয়ের জন্য মিটার টেস্টিং বেঞ্চ স্থাপনে নেতৃত্ব দেন।" },
      expansionPlanning: { title: "গ্যাস সরবরাহ সম্প্রসারণ পরিকল্পনা", detail: "বগুড়া ও রাজশাহীতে গ্যাস সরবরাহ সম্প্রসারণের প্রাথমিক প্রকল্প প্রস্তাব প্রণয়নে অবদান রাখেন।" },
      theftPrevention: { title: "কর্মজীবনের শুরুতে গ্যাস চুরি প্রতিরোধ", detail: "১৯৯৯ থেকে ২০০৩ সালের মধ্যে বড় পরিসরের গ্যাস চুরি প্রতিরোধের মাধ্যমে সরকারি রাজস্ব সুরক্ষায় ভূমিকা রাখেন।" },
    },
  },
  expertise: {
    eyebrow: "পরামর্শের ক্ষেত্র", heading: "জ্বালানি মূল্যশৃঙ্খলজুড়ে দক্ষতা",
    description: "কারিগরি পরিচালনা, নিয়ন্ত্রক দায়িত্ব ও নির্বাহী নেতৃত্বে অর্জিত বহুমাত্রিক দৃষ্টিভঙ্গি।",
    items: {
      exploration: { title: "তেল ও গ্যাস অনুসন্ধান ও উৎপাদন", text: "আপস্ট্রিম জ্বালানি চাহিদা ও উন্নয়ন বিবেচনায় কারিগরি ও কৌশলগত দৃষ্টিভঙ্গি।" },
      drilling: { title: "স্থলভাগ ও সমুদ্রভাগে ড্রিলিং", text: "ড্রিলিংয়ের চাহিদা, সমন্বয়, পরিচালন বিষয় এবং বাস্তবায়ন পরিকল্পনার মূল্যায়ন।" },
      transmission: { title: "প্রাকৃতিক গ্যাস সঞ্চালন ও বিতরণ", text: "গ্যাস নেটওয়ার্ক, পরিচালনা, অবকাঠামো ও সেবা কার্যক্রমে অভিজ্ঞতাভিত্তিক পরামর্শ।" },
      lng: { title: "LNG অবকাঠামো ও সংরক্ষণ", text: "অবকাঠামো চাহিদা, প্রকল্পের পারস্পরিক সংযোগ, পরিচালন প্রেক্ষাপট ও কৌশলগত প্রভাব মূল্যায়ন।" },
      terminals: { title: "পেট্রোলিয়াম টার্মিনাল ও ডিপো", text: "পেট্রোলিয়াম সংরক্ষণ ও টার্মিনাল অবকাঠামোর পরিকল্পনা ও কারিগরি মূল্যায়ন।" },
      procurement: { title: "ক্রয় ও আন্তর্জাতিক দরপত্র", text: "ক্রয় কৌশল, কারিগরি শর্ত, দরপত্র মূল্যায়ন ও সিদ্ধান্ত প্রক্রিয়ায় সহায়তা।" },
      epc: { title: "EPC / EPCM ও অবকাঠামো উন্নয়ন", text: "বাস্তবায়ন মডেল, প্রকৌশল সমন্বয়, প্রকল্প পরিকল্পনা ও বাস্তবায়ন চাহিদার কাঠামোবদ্ধ পর্যালোচনা।" },
      investment: { title: "জ্বালানি বিনিয়োগ ও প্রকল্প মূল্যায়ন", text: "বিনিয়োগ সিদ্ধান্তে সহায়তার জন্য কারিগরি, নিয়ন্ত্রক, পরিচালন ও কৌশলগত মূল্যায়ন।" },
    },
  },
  leadership: {
    eyebrow: "নেতৃত্ব ও সুশাসন", headingFirst: "কারিগরি দক্ষতার", headingEmphasis: "বাইরেও নেতৃত্ব",
    description: "জ্বালানি খাতের সিদ্ধান্তে প্রকৌশল, নিয়ন্ত্রণ, প্রাতিষ্ঠানিক দায়িত্ব ও অংশীজনের অগ্রাধিকারের সমন্বিত দৃষ্টিভঙ্গি প্রয়োজন।",
    items: ["নির্বাহী ব্যবস্থাপনা", "করপোরেট সুশাসন", "নিয়ন্ত্রক তদারকি", "পরিচালন উৎকর্ষ", "অবকাঠামো কৌশল", "অংশীজন সমন্বয়", "জ্বালানি নীতি বাস্তবায়ন"],
  },
  approach: {
    eyebrow: "পরামর্শের পদ্ধতি", heading: "কারিগরি জটিলতা থেকে কৌশলগত স্বচ্ছতা",
    description: "জটিল জ্বালানি ও অবকাঠামো বিষয় মোকাবিলায় একটি বাস্তবধর্মী কাঠামো।",
    items: [
      { title: "অনুধাবন", text: "কারিগরি, পরিচালন, নিয়ন্ত্রক ও বাণিজ্যিক চাহিদা বোঝা।" },
      { title: "মূল্যায়ন", text: "প্রকল্পের সম্ভাব্যতা, ঝুঁকি, বিকল্প ও কৌশলগত প্রভাব মূল্যায়ন।" },
      { title: "পরামর্শ", text: "অভিজ্ঞতার ভিত্তিতে বাস্তবসম্মত সুপারিশ তৈরি।" },
      { title: "সহায়তা", text: "সিদ্ধান্ত গ্রহণ, অংশীজন সমন্বয় ও বাস্তবায়ন পরিকল্পনায় সহায়তা।" },
    ],
  },
  education: {
    eyebrow: "প্রকৌশল শিক্ষার ভিত্তি", institution: "বাংলাদেশ প্রকৌশল বিশ্ববিদ্যালয়", abbreviation: "BUET",
    qualification: "যন্ত্রকৌশলে BSc", result: "প্রথম শ্রেণি",
    description: "BUET-এর প্রকৌশল শিক্ষা গ্যাস অবকাঠামো, নিয়ন্ত্রণ, পরিচালনা ও নির্বাহী নেতৃত্বে তাঁর কর্মজীবনের কারিগরি ভিত্তি তৈরি করেছে।",
    hsc: "উচ্চ মাধ্যমিক সার্টিফিকেট (HSC)", hscBoard: "রাজশাহী বোর্ড", hscResult: "প্রথম বিভাগ",
    ssc: "মাধ্যমিক স্কুল সার্টিফিকেট (SSC)", sscBoard: "রাজশাহী বোর্ড", sscResult: "দ্বিতীয় বিভাগ",
  },
  development: {
    eyebrow: "পেশাগত উন্নয়ন", heading: "নির্বাচিত প্রশিক্ষণ ও আন্তর্জাতিক অভিজ্ঞতা",
    description: "গ্যাস ব্যবস্থা, নিরাপত্তা, করপোরেট সুশাসন, প্রকল্প ব্যবস্থাপনা, জ্বালানি প্রযুক্তি ও আন্তর্জাতিক গ্যাস ব্যবসায় আনুষ্ঠানিক প্রশিক্ষণ।",
    items: {
      rms: { title: "RMS কমিশনিং, পরিচালনা ও রক্ষণাবেক্ষণ", provider: "Canalta Controls Ltd, আলবার্টা, কানাডা" },
      safety: { title: "Safety by Design ও উন্নত আইসোলেশন প্রযুক্তি", provider: "TD Williamson India Private Ltd, মুম্বাই — অনলাইন" },
      governance: { title: "করপোরেট সুশাসন", provider: "IBA, ঢাকা বিশ্ববিদ্যালয়" },
      projectManagement: { title: "প্রকল্প ব্যবস্থাপনা", provider: "বাংলাদেশ ইনস্টিটিউট অব ম্যানেজমেন্ট, ঢাকা" },
      valvitalia: { title: "গ্যাস নিয়ন্ত্রণ, ক্রোমাটোগ্রাফি ও ফ্লো-কম্পিউটার পণ্য", provider: "Valvitalia SpA System Division, ইতালি" },
      biid: { title: "BIID শিল্প উদ্ভাবন ও উন্নয়ন এক্সপো এবং সংলাপ", provider: "SREDA ও Power Cell" },
      gasBusiness: { title: "আন্তর্জাতিক গ্যাস ব্যবসা ব্যবস্থাপনা কর্মসূচি", provider: "IPDC, ইন্দোনেশিয়া" },
      jobRules: { title: "সরকারি চাকরির প্রয়োজনীয় বিধিমালা", provider: "বাংলাদেশ ইনস্টিটিউট অব ম্যানেজমেন্ট, ঢাকা" },
    },
  },
  gallery: {
    eyebrow: "পেশাগত ও ব্যক্তিগত মুহূর্ত", heading: "বোর্ডরুমের বাইরে",
    description: "পেশাগত পরিচয়ের আড়ালে থাকা মানুষটির কয়েকটি সংযত মুহূর্ত।",
    items: {
      architecture: { label: "স্থাপত্যের প্রাঙ্গণে", alt: "আধুনিক স্থাপত্য ও প্রতিফলিত জলাশয়ের পাশে প্রকৌশলী মোঃ ফজলে আলম" },
      mountain: { label: "ব্যক্তিগত মুহূর্ত", alt: "তুষারাবৃত পাহাড়ি পরিবেশে প্রকৌশলী মোঃ ফজলে আলম" },
      city: { label: "নগরীর আলোয়", alt: "রাতের আলোকিত নগরীর সামনে প্রকৌশলী মোঃ ফজলে আলম" },
    },
    viewerLabel: "ছবি দেখার পর্দা", enlarge: "বড় করে দেখুন", close: "ছবি বন্ধ করুন", previous: "আগের ছবি", next: "পরের ছবি",
  },
  contact: {
    eyebrow: "আলোচনা শুরু করুন", headingFirst: "আলোচনা হোক", headingEmphasis: "জ্বালানির ভবিষ্যৎ নিয়ে",
    description: "জ্বালানি খাতের পরামর্শ, অবকাঠামো আলোচনা, কৌশলগত সহযোগিতা এবং পেশাগত অনুসন্ধানের জন্য যোগাযোগ করুন।",
    availability: "আন্তর্জাতিক দায়িত্ব গ্রহণে আগ্রহী", basedIn: "অবস্থান", linkedIn: "LinkedIn", linkedInValue: "পেশাগত প্রোফাইল",
    facebook: "Facebook", facebookValue: "পেশাগত যোগাযোগ", whatsApp: "WhatsApp", portfolio: "পোর্টফোলিও", portfolioValue: "ওয়েবসাইট দেখুন",
    pendingLabel: "যোগাযোগের তথ্য", pendingText: "অনুমোদিত পেশাগত যোগাযোগের মাধ্যম শিগগিরই এখানে যুক্ত হবে।",
  },
  footer: { rights: "সর্বস্বত্ব সংরক্ষিত।", motto: "জ্বালানি নেতৃত্ব · প্রকৌশল উৎকর্ষ" },
};

const bnDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

export function formatDigits(locale: Locale, value: string | number) {
  const text = String(value);
  return locale === "bn" ? text.replace(/\d/g, (digit) => bnDigits[Number(digit)]) : text;
}

function formatDate(locale: Locale, iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  const months = locale === "bn"
    ? ["জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"]
    : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return `${formatDigits(locale, day)} ${months[month - 1]} ${formatDigits(locale, year)}`;
}

function crore(locale: Locale, amount: number) {
  return locale === "bn" ? `${formatDigits(locale, amount)} কোটি টাকা` : `BDT ${amount} crore`;
}

function percent(locale: Locale, amount: number) {
  return `${formatDigits(locale, amount)}%`;
}

function tokens(locale: Locale): Record<string, string> {
  return {
    experienceYears: formatDigits(locale, profile.yearsExperience),
    birthDate: formatDate(locale, profile.dates.birth),
    joinDate: formatDate(locale, profile.dates.gasSectorJoined),
    mdTenure: `${formatDate(locale, profile.dates.managingDirectorStart)}–${formatDate(locale, profile.dates.managingDirectorEnd)}`,
    currentFY: formatDigits(locale, profile.financial.currentFiscalYear),
    priorFY: formatDigits(locale, profile.financial.priorFiscalYear),
    profitAfterTax: crore(locale, profile.financial.profitAfterTaxCrore),
    lossAfterTax: crore(locale, profile.financial.lossAfterTaxCrore),
    profitBeforeFund: crore(locale, profile.financial.profitBeforeWorkersFundCrore),
    lossBeforeFund: crore(locale, profile.financial.lossBeforeWorkersFundCrore),
    systemLossFrom: percent(locale, profile.financial.systemLossFromPercent),
    systemLossBelow: percent(locale, profile.financial.systemLossBelowPercent),
    sasecAmount: crore(locale, profile.financial.sasecProjectCrore),
    depositAmount: crore(locale, profile.financial.depositWorksCrore),
    recoveryAmount: crore(locale, profile.financial.revenueRecoveryCrore),
    sasecPeriod: locale === "bn" ? "২০১৮–জুন ২০২৩" : "2018–June 2023",
  };
}

function interpolateDictionary(dictionary: Dictionary, values: Record<string, string>): Dictionary {
  let serialized = JSON.stringify(dictionary);
  for (const [key, value] of Object.entries(values)) serialized = serialized.split(`{${key}}`).join(value);
  return JSON.parse(serialized) as Dictionary;
}

export function getDictionary(locale: Locale): Dictionary {
  return interpolateDictionary(locale === "bn" ? bn : en, tokens(locale));
}

export function localizedMarker(locale: Locale, marker: string) {
  if (marker === "current") return getDictionary(locale).common.current;
  if (marker === "mdTenure") return tokens(locale).mdTenure;
  return formatDigits(locale, marker);
}

export const locales: Locale[] = ["en", "bn"];
