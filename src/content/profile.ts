export const profile = {
  name: "Engr. Md. Fazley Alam",
  nameBn: "প্রকৌশলী মোঃ ফজলে আলম",
  shortName: "Fazley Alam",
  shortNameBn: "ফজলে আলম",
  yearsExperience: 27,
  location: { city: "Dhaka", country: "Bangladesh" },
  dates: {
    birth: "1967-03-22",
    gasSectorJoined: "1999-02-07",
    managingDirectorStart: "2025-07-01",
    managingDirectorEnd: "2026-03-01",
  },
  financial: {
    currentFiscalYear: "2025–26",
    priorFiscalYear: "2024–25",
    profitAfterTaxCrore: 78.26,
    lossAfterTaxCrore: 201.95,
    profitBeforeWorkersFundCrore: 125.52,
    lossBeforeWorkersFundCrore: 104.65,
    systemLossFromPercent: 10,
    systemLossBelowPercent: 6.93,
    sasecProjectCrore: 56,
    depositWorksCrore: 10,
    revenueRecoveryCrore: 96,
  },
  education: { bscYear: 1992, hscYear: 1985, sscYear: 1983 },
  career: [
    { id: "bgsl", marker: "1999–2003" },
    { id: "pgclEarly", marker: "2003–2016" },
    { id: "dgm", marker: "2016–2019" },
    { id: "gm", marker: "2019–2023" },
    { id: "berc", marker: "2023–2025" },
    { id: "md", marker: "mdTenure" },
    { id: "board", marker: "current" },
    { id: "consultant", marker: "current" },
  ] as const,
  contributionIds: [
    "financial", "systemLoss", "regulation", "bercLeadership", "sasec", "recovery",
    "vigilance", "northernNetwork", "meterTesting", "expansionPlanning", "theftPrevention",
  ] as const,
  featuredContributionIds: ["financial", "systemLoss"] as const,
  expertise: [
    { id: "exploration", icon: "Search" },
    { id: "drilling", icon: "Drill" },
    { id: "transmission", icon: "Network" },
    { id: "lng", icon: "Container" },
    { id: "terminals", icon: "Warehouse" },
    { id: "procurement", icon: "FileCheck2" },
    { id: "epc", icon: "HardHat" },
    { id: "investment", icon: "ChartNoAxesCombined" },
  ] as const,
  training: [
    { id: "rms", year: 2025 }, { id: "safety", year: 2020 }, { id: "governance", year: 2020 },
    { id: "projectManagement", year: 2019 }, { id: "valvitalia", year: 2018 }, { id: "biid", year: 2017 },
    { id: "gasBusiness", year: 2016 }, { id: "jobRules", year: 2015 },
  ] as const,
  images: {
    hero: { src: "/images/fazley-alam/01-executive-meeting.png", width: 1448, height: 1086 },
    industry: { src: "/images/fazley-alam/02-energy-drilling-site.png", width: 1448, height: 1086 },
    biography: { src: "/images/fazley-alam/03-professional-indoor.png", width: 1448, height: 1086 },
    gallery: [
      { id: "architecture", src: "/images/fazley-alam/04-architectural-portrait.png", width: 1448, height: 1086 },
      { id: "mountain", src: "/images/fazley-alam/05-mountain-portrait.png", width: 1122, height: 1402 },
      { id: "city", src: "/images/fazley-alam/06-city-night-portrait.png", width: 1122, height: 1402 },
    ],
  },
  documents: {
    englishCv: "/documents/Fazley_Alam_CV_English.pdf",
    banglaCv: "/documents/Fazley_Alam_CV_Bangla.pdf",
  },
  contact: {
    linkedIn: "https://www.linkedin.com/in/fazley-alam-ba1aa3325",
    facebook: "https://www.facebook.com/share/19LtsQSY6q/?mibextid=wwXIfr",
    whatsApp: "https://wa.me/8801730357226",
    whatsAppDisplay: "+880 1730-357226",
    portfolio: "https://fazley-portfolio.vercel.app/",
  },
} as const;

export type CareerId = (typeof profile.career)[number]["id"];
export type ContributionId = (typeof profile.contributionIds)[number];
export type ExpertiseId = (typeof profile.expertise)[number]["id"];
export type TrainingId = (typeof profile.training)[number]["id"];
export type GalleryId = (typeof profile.images.gallery)[number]["id"];
