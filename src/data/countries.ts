export interface CountryData {
  name: string;
  slug: string;
  flag: string;
  videoUrl: string;
  imageUrl: string;
  shortDesc: string;
  tagline: string;
  stats: {
    processingTime: string;
    successRate: string;
    visasIssued: string;
  };
  detailedContent: {
    overview: string;
    eligibility: string[];
    process: string[];
    documents: string[];
    processingTime: string;
    pointsTable?: {
      factor: string;
      maxPoints: string;
      description: string;
    }[];
  };
  subLinks: {
    name: string;
    slug: string;
    description: string;
  }[];
  importantLinks: {
    title: string;
    url: string;
  }[];
  latestNews: {
    title: string;
    date: string;
  }[];
}

export const countries: CountryData[] = [
  {
    name: "Canada",
    slug: "canada",
    flag: "🇨🇦",
    videoUrl: "https://static.videezy.com/system/resources/previews/000/041/615/original/Toronto-HD.mp4",
    imageUrl: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=800",
    shortDesc: "Land of opportunities with world-class healthcare, education, and quality of life.",
    tagline: "Your Canadian Dream Starts Here",
    stats: {
      processingTime: "6-12 months",
      successRate: "98%",
      visasIssued: "400K+/year"
    },
    detailedContent: {
      overview: `Canada consistently ranks as one of the best countries in the world to live, work, and raise a family. With its stunning natural landscapes, multicultural cities, and robust economy, Canada offers immigrants unparalleled opportunities for success and personal growth.

The Canadian immigration system is designed to welcome skilled workers, entrepreneurs, students, and families from around the world. Through programs like Express Entry, Provincial Nominee Programs (PNPs), and family sponsorship, Canada provides multiple pathways to permanent residency and citizenship.

**Why Choose Canada?**
- Universal healthcare system
- World-renowned education institutions
- Strong job market with competitive wages
- Safe, multicultural environment
- Path to citizenship in 3-5 years
- Family-friendly policies and benefits

**Economic Opportunities**
Canada's economy is diverse and growing, with particularly strong sectors in technology, healthcare, engineering, finance, and skilled trades. Major cities like Toronto, Vancouver, and Montreal are global hubs for innovation and business.`,
      eligibility: [
        "Age: 18-45 years (optimal points for 20-29)",
        "Education: Minimum high school diploma (higher education preferred)",
        "Language: CLB 7 or higher in English/French (IELTS, CELPIP, TEF)",
        "Work Experience: Minimum 1 year skilled work experience (NOC 0, A, B)",
        "Medical Clearance: Pass immigration medical examination",
        "Security Clearance: No criminal record",
        "Genuine intention to reside in Canada"
      ],
      process: [
        "Step 1: Determine your eligibility and immigration pathway",
        "Step 2: Get your credentials assessed (ECA for education)",
        "Step 3: Take language tests (IELTS/CELPIP for English, TEF for French)",
        "Step 4: Create Express Entry profile or apply to PNP",
        "Step 5: Receive Invitation to Apply (ITA) based on CRS score",
        "Step 6: Submit complete application with all documents",
        "Step 7: Biometrics appointment and medical examination",
        "Step 8: Application processing and background checks",
        "Step 9: Receive Confirmation of Permanent Residence (COPR)",
        "Step 10: Land in Canada and receive PR Card"
      ],
      documents: [
        "Valid passport (all pages)",
        "Educational credentials and ECA report",
        "Language test results (IELTS/CELPIP/TEF)",
        "Work experience letters on company letterhead",
        "Proof of funds (bank statements, fixed deposits)",
        "Police clearance certificates",
        "Medical examination results",
        "Photographs as per specifications",
        "Marriage certificate (if applicable)",
        "Birth certificates for dependents"
      ],
      processingTime: "6-12 months for Express Entry",
      pointsTable: [
        { factor: "Age (20-29 years)", maxPoints: "110", description: "Maximum points for core age group" },
        { factor: "Education (PhD)", maxPoints: "150", description: "Doctoral degree or equivalent" },
        { factor: "Language (CLB 10+)", maxPoints: "136", description: "First official language proficiency" },
        { factor: "Canadian Experience", maxPoints: "80", description: "3+ years skilled work in Canada" },
        { factor: "Spouse Factors", maxPoints: "40", description: "Education, language, experience" },
        { factor: "Skill Transferability", maxPoints: "100", description: "Combined education and experience" },
        { factor: "Provincial Nomination", maxPoints: "600", description: "PNP nomination bonus" },
        { factor: "Job Offer (LMIA)", maxPoints: "200", description: "Valid arranged employment" }
      ]
    },
    subLinks: [
      { name: "Express Entry", slug: "express-entry", description: "Fast-track PR through Federal programs" },
      { name: "Provincial Nominee", slug: "pnp", description: "Province-specific immigration pathways" },
      { name: "Study Visa", slug: "study-visa", description: "World-class education opportunities" },
      { name: "Work Permit", slug: "work-permit", description: "Temporary work authorization" },
      { name: "Family Sponsorship", slug: "family-sponsorship", description: "Reunite with loved ones" },
      { name: "Business Immigration", slug: "business", description: "Investor and entrepreneur programs" }
    ],
    importantLinks: [
      { title: "IRCC Official Website", url: "https://www.canada.ca/en/immigration-refugees-citizenship.html" },
      { title: "Express Entry Draws", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/submit-profile/rounds-invitations.html" },
      { title: "CRS Score Calculator", url: "#" },
      { title: "NOC Code Finder", url: "#" }
    ],
    latestNews: [
      { title: "Express Entry draw #285: 5,000 ITAs issued", date: "Dec 10, 2024" },
      { title: "Ontario PNP opens new Tech Draw", date: "Dec 8, 2024" },
      { title: "IRCC announces 2025 immigration levels", date: "Dec 5, 2024" }
    ]
  },
  {
    name: "Australia",
    slug: "australia",
    flag: "🇦🇺",
    videoUrl: "https://static.videezy.com/system/resources/previews/000/044/688/original/Sydney_Opera_House.mp4",
    imageUrl: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=800",
    shortDesc: "Sun-kissed shores, vibrant cities, and endless career opportunities await.",
    tagline: "Live the Australian Dream",
    stats: {
      processingTime: "8-18 months",
      successRate: "96%",
      visasIssued: "200K+/year"
    },
    detailedContent: {
      overview: `Australia offers one of the highest standards of living in the world, combining exceptional career opportunities with an enviable lifestyle. Known for its beautiful beaches, diverse wildlife, and welcoming multicultural society, Australia attracts skilled professionals from across the globe.

The Australian immigration system prioritizes skilled workers who can contribute to the economy. Through the General Skilled Migration (GSM) program, including Subclass 189, 190, and 491 visas, qualified professionals can obtain permanent residency and eventually citizenship.

**Why Choose Australia?**
- World's highest minimum wage
- Excellent healthcare (Medicare)
- Top-ranked universities globally
- Perfect work-life balance
- Diverse, multicultural society
- Strong worker protection laws

**Economic Landscape**
Australia has one of the strongest economies in the Asia-Pacific region, with booming sectors in technology, healthcare, construction, mining, and professional services. Cities like Sydney, Melbourne, and Brisbane are major economic powerhouses.`,
      eligibility: [
        "Age: Under 45 years at time of invitation",
        "Skills Assessment: Positive assessment from relevant authority",
        "English Proficiency: Competent English (IELTS 6.0 each band minimum)",
        "Occupation: On Skilled Occupation List (SOL/MLTSSL)",
        "Points: Minimum 65 points (higher preferred)",
        "Health: Meet health requirements",
        "Character: Meet character requirements",
        "No visa cancellations or refusals"
      ],
      process: [
        "Step 1: Check if your occupation is on the Skilled Occupation List",
        "Step 2: Get skills assessment from relevant assessing authority",
        "Step 3: Take English language test (IELTS/PTE/TOEFL)",
        "Step 4: Calculate your points (minimum 65 required)",
        "Step 5: Submit Expression of Interest (EOI) in SkillSelect",
        "Step 6: Receive invitation to apply (based on points ranking)",
        "Step 7: Lodge visa application within 60 days",
        "Step 8: Complete health examinations and police checks",
        "Step 9: Provide additional documents if requested",
        "Step 10: Visa decision and grant"
      ],
      documents: [
        "Valid passport",
        "Skills assessment outcome letter",
        "English test results (IELTS/PTE)",
        "Educational qualifications and transcripts",
        "Employment references and payslips",
        "Birth certificate",
        "Police clearance certificates",
        "Health examination results",
        "Proof of relationship (if applicable)",
        "State nomination (for 190/491)"
      ],
      processingTime: "8-18 months depending on visa subclass",
      pointsTable: [
        { factor: "Age (25-32 years)", maxPoints: "30", description: "Optimal age range" },
        { factor: "English (Superior)", maxPoints: "20", description: "IELTS 8.0+ each band" },
        { factor: "Skilled Employment (8+ years)", maxPoints: "20", description: "Overseas work experience" },
        { factor: "Australian Experience (8+ years)", maxPoints: "20", description: "Local work experience" },
        { factor: "Education (PhD)", maxPoints: "20", description: "Doctoral qualification" },
        { factor: "Australian Study", maxPoints: "5", description: "2+ years study in Australia" },
        { factor: "Specialist Education", maxPoints: "10", description: "Masters by research/PhD in STEM" },
        { factor: "Regional Study", maxPoints: "5", description: "Study in regional Australia" },
        { factor: "Partner Skills", maxPoints: "10", description: "Skilled partner with competent English" },
        { factor: "State Nomination (190)", maxPoints: "5", description: "State/Territory nomination" },
        { factor: "Regional Nomination (491)", maxPoints: "15", description: "Regional area nomination" }
      ]
    },
    subLinks: [
      { name: "Skilled Independent (189)", slug: "subclass-189", description: "Points-tested permanent visa" },
      { name: "State Nominated (190)", slug: "subclass-190", description: "State-sponsored PR pathway" },
      { name: "Skilled Regional (491)", slug: "subclass-491", description: "Regional provisional visa" },
      { name: "Student Visa (500)", slug: "student-visa", description: "Study at Australian institutions" },
      { name: "Employer Sponsored", slug: "employer-sponsored", description: "Sponsored by Australian employer" },
      { name: "Partner Visa", slug: "partner-visa", description: "Join your partner in Australia" }
    ],
    importantLinks: [
      { title: "Department of Home Affairs", url: "https://immi.homeaffairs.gov.au/" },
      { title: "SkillSelect Portal", url: "https://skillselect.gov.au/" },
      { title: "Skilled Occupation List", url: "#" },
      { title: "Points Calculator", url: "#" }
    ],
    latestNews: [
      { title: "December SkillSelect round: 2,500 invitations", date: "Dec 9, 2024" },
      { title: "NSW opens new nomination categories", date: "Dec 6, 2024" },
      { title: "New occupations added to PMSOL", date: "Dec 3, 2024" }
    ]
  },
  {
    name: "New Zealand",
    slug: "new-zealand",
    flag: "🇳🇿",
    videoUrl: "https://static.videezy.com/system/resources/previews/000/042/078/original/new-zealand-4k-stock-video.mp4",
    imageUrl: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=800",
    shortDesc: "Pure landscapes, balanced lifestyle, and welcoming communities.",
    tagline: "Discover Middle Earth & Beyond",
    stats: {
      processingTime: "3-9 months",
      successRate: "94%",
      visasIssued: "50K+/year"
    },
    detailedContent: {
      overview: `New Zealand, known as Aotearoa in Māori, is a stunning island nation offering an exceptional quality of life. With its breathtaking landscapes, from pristine beaches to majestic mountains, and its friendly, inclusive society, New Zealand is an ideal destination for skilled migrants seeking work-life balance.

The Skilled Migrant Category (SMC) is New Zealand's primary pathway for skilled workers to obtain residence. The country actively seeks professionals in healthcare, IT, engineering, construction, and education.

**Why Choose New Zealand?**
- Outstanding work-life balance
- Stunning natural environment
- Safe, low-crime society
- Excellent public education
- Universal healthcare (ACC)
- Strong employment rights`,
      eligibility: [
        "Age: 55 or under",
        "Health and character requirements met",
        "English language proficiency (IELTS 6.5+ overall)",
        "Qualified in skilled occupation",
        "Minimum points score (currently 6 points)",
        "Job offer from accredited employer preferred"
      ],
      process: [
        "Step 1: Check eligibility for Skilled Migrant Category",
        "Step 2: Obtain job offer from accredited employer",
        "Step 3: Submit Expression of Interest (EOI)",
        "Step 4: Receive Invitation to Apply",
        "Step 5: Submit residence application",
        "Step 6: Complete health and character checks",
        "Step 7: Await decision"
      ],
      documents: [
        "Valid passport",
        "Job offer letter",
        "Qualification certificates",
        "English test results",
        "Police certificates",
        "Medical certificates"
      ],
      processingTime: "3-9 months"
    },
    subLinks: [
      { name: "Skilled Migrant Category", slug: "skilled-migrant", description: "Points-based residence" },
      { name: "Work to Residence", slug: "work-to-residence", description: "Transition from work visa" },
      { name: "Student Visa", slug: "student-visa", description: "Study in New Zealand" },
      { name: "Family Category", slug: "family", description: "Join family in NZ" }
    ],
    importantLinks: [
      { title: "Immigration New Zealand", url: "https://www.immigration.govt.nz/" },
      { title: "Skill Shortage Lists", url: "#" }
    ],
    latestNews: [
      { title: "New Green List occupations announced", date: "Dec 8, 2024" },
      { title: "Accredited Employer updates", date: "Dec 4, 2024" }
    ]
  },
  {
    name: "United Kingdom",
    slug: "uk",
    flag: "🇬🇧",
    videoUrl: "https://static.videezy.com/system/resources/previews/000/035/691/original/London-Eye-from-side-4K.mp4",
    imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800",
    shortDesc: "Historic charm meets modern opportunity in the heart of Europe.",
    tagline: "Your Gateway to Britain",
    stats: {
      processingTime: "3-8 weeks",
      successRate: "95%",
      visasIssued: "300K+/year"
    },
    detailedContent: {
      overview: `The United Kingdom offers a unique blend of rich history, cultural diversity, and world-leading career opportunities. As a global financial and cultural hub, the UK attracts talented professionals from around the world through its Skilled Worker visa and other immigration routes.

Post-Brexit, the UK has introduced a points-based immigration system that prioritizes skills and talent. The Skilled Worker visa is the main route for international professionals to work in the UK.

**Why Choose the UK?**
- World-class universities and research
- Global financial center (London)
- Rich cultural heritage
- NHS healthcare access
- Diverse, multicultural society
- Strong legal protections`,
      eligibility: [
        "Valid Certificate of Sponsorship from licensed employer",
        "Job at appropriate skill level (RQF 3 or above)",
        "English language proficiency (B1 level)",
        "Minimum salary threshold met",
        "Maintenance funds available",
        "TB test (from certain countries)"
      ],
      process: [
        "Step 1: Secure job offer from licensed sponsor",
        "Step 2: Receive Certificate of Sponsorship",
        "Step 3: Check points requirement (70 points needed)",
        "Step 4: Apply online for Skilled Worker visa",
        "Step 5: Provide biometrics at VAC",
        "Step 6: Await decision and receive visa"
      ],
      documents: [
        "Valid passport",
        "Certificate of Sponsorship reference",
        "Proof of English language",
        "Bank statements",
        "TB test results (if applicable)",
        "Criminal record certificate"
      ],
      processingTime: "3 weeks (standard), 5 days (priority)"
    },
    subLinks: [
      { name: "Skilled Worker Visa", slug: "skilled-worker", description: "Work for UK employer" },
      { name: "Global Talent Visa", slug: "global-talent", description: "Leaders and experts" },
      { name: "Student Visa", slug: "student-visa", description: "Study in the UK" },
      { name: "Graduate Route", slug: "graduate", description: "Stay after studies" },
      { name: "Family Visa", slug: "family", description: "Join family in UK" }
    ],
    importantLinks: [
      { title: "UK Visas & Immigration", url: "https://www.gov.uk/browse/visas-immigration" },
      { title: "Sponsor Licence Check", url: "#" }
    ],
    latestNews: [
      { title: "New salary thresholds from April 2024", date: "Dec 7, 2024" },
      { title: "Graduate visa changes announced", date: "Dec 5, 2024" }
    ]
  },
  {
    name: "United States",
    slug: "usa",
    flag: "🇺🇸",
    videoUrl: "https://static.videezy.com/system/resources/previews/000/042/118/original/New_York_City_Traffic.mp4",
    imageUrl: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=800",
    shortDesc: "The land of opportunity where dreams become reality.",
    tagline: "Pursue the American Dream",
    stats: {
      processingTime: "1-3 years",
      successRate: "85%",
      visasIssued: "1M+/year"
    },
    detailedContent: {
      overview: `The United States remains the world's top destination for immigrants seeking opportunities in business, technology, academia, and the arts. With the world's largest economy and some of the most innovative companies, the US offers unmatched career potential.

Immigration to the US can be complex, with multiple visa categories for temporary workers (H-1B, L-1, O-1) and permanent residents (EB categories, family sponsorship, and the Diversity Visa lottery).

**Why Choose the USA?**
- World's largest economy
- Innovation and tech hub
- Top universities globally
- Cultural diversity
- Entrepreneurial ecosystem
- Path to citizenship`,
      eligibility: [
        "Valid job offer from US employer (for work visas)",
        "Educational qualifications as required",
        "Specialty occupation (for H-1B)",
        "Labor certification (for EB-2/EB-3)",
        "Clean criminal record",
        "No previous visa violations"
      ],
      process: [
        "Step 1: Employer files petition (H-1B/L-1)",
        "Step 2: Await lottery selection (H-1B)",
        "Step 3: Petition approval by USCIS",
        "Step 4: Apply for visa at US Embassy",
        "Step 5: Attend visa interview",
        "Step 6: Receive visa and travel to US"
      ],
      documents: [
        "Valid passport",
        "Approved petition (I-797)",
        "Educational documents",
        "Resume/CV",
        "Employment verification",
        "DS-160 confirmation"
      ],
      processingTime: "3-12 months (H-1B), 1-5 years (Green Card)"
    },
    subLinks: [
      { name: "H-1B Specialty Worker", slug: "h1b", description: "Specialty occupation visa" },
      { name: "L-1 Intracompany Transfer", slug: "l1", description: "Company transfer visa" },
      { name: "EB-1 Extraordinary Ability", slug: "eb1", description: "Priority worker category" },
      { name: "EB-2/EB-3 Skilled Worker", slug: "eb2-eb3", description: "Employment-based Green Card" },
      { name: "F-1 Student Visa", slug: "student", description: "Study in America" },
      { name: "Diversity Visa Lottery", slug: "dv-lottery", description: "Green Card lottery" }
    ],
    importantLinks: [
      { title: "USCIS Official", url: "https://www.uscis.gov/" },
      { title: "Visa Bulletin", url: "#" }
    ],
    latestNews: [
      { title: "H-1B Cap registration opens March 2025", date: "Dec 10, 2024" },
      { title: "EB-2 India wait times update", date: "Dec 6, 2024" }
    ]
  },
  {
    name: "United Arab Emirates",
    slug: "uae",
    flag: "🇦🇪",
    videoUrl: "https://static.videezy.com/system/resources/previews/000/042/116/original/Dubai_Skyline.mp4",
    imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800",
    shortDesc: "Tax-free living in the heart of the Middle East's economic hub.",
    tagline: "Gateway to the Gulf",
    stats: {
      processingTime: "2-4 weeks",
      successRate: "97%",
      visasIssued: "500K+/year"
    },
    detailedContent: {
      overview: `The United Arab Emirates, particularly Dubai and Abu Dhabi, offers an exceptional lifestyle with tax-free income, world-class infrastructure, and a strategic location connecting East and West. The UAE has become a global hub for business, tourism, and innovation.

Recent visa reforms have made the UAE more accessible than ever, with long-term visas like the Golden Visa offering 10-year residency to qualified professionals, investors, and entrepreneurs.

**Why Choose the UAE?**
- Tax-free salary
- World-class infrastructure
- Safe, multicultural environment
- Strategic global location
- Growing tech ecosystem
- Golden Visa pathway`,
      eligibility: [
        "Valid job offer from UAE company",
        "Educational qualifications",
        "Medical fitness test",
        "Clean background check",
        "Sponsor/employer registration"
      ],
      process: [
        "Step 1: Secure job offer",
        "Step 2: Employer applies for entry permit",
        "Step 3: Enter UAE on entry permit",
        "Step 4: Medical fitness test",
        "Step 5: Emirates ID registration",
        "Step 6: Residence visa stamping"
      ],
      documents: [
        "Valid passport (6+ months validity)",
        "Passport photos",
        "Educational certificates (attested)",
        "Employment contract",
        "Medical fitness certificate",
        "Emirates ID application"
      ],
      processingTime: "2-4 weeks standard"
    },
    subLinks: [
      { name: "Employment Visa", slug: "employment", description: "Work in UAE" },
      { name: "Golden Visa", slug: "golden-visa", description: "10-year residency" },
      { name: "Investor Visa", slug: "investor", description: "Business investment" },
      { name: "Freelancer Visa", slug: "freelancer", description: "Self-employed permit" }
    ],
    importantLinks: [
      { title: "ICP Portal", url: "#" },
      { title: "Golden Visa Info", url: "#" }
    ],
    latestNews: [
      { title: "New Green Visa category launched", date: "Dec 9, 2024" }
    ]
  },
  {
    name: "Germany",
    slug: "germany",
    flag: "🇩🇪",
    videoUrl: "https://static.videezy.com/system/resources/previews/000/035/907/original/Berlin-Night.mp4",
    imageUrl: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800",
    shortDesc: "Europe's economic powerhouse with excellent work opportunities.",
    tagline: "Work in the Heart of Europe",
    stats: {
      processingTime: "1-3 months",
      successRate: "92%",
      visasIssued: "150K+/year"
    },
    detailedContent: {
      overview: `Germany is Europe's largest economy and a leader in engineering, technology, and innovation. The country offers excellent career opportunities, particularly for skilled professionals in IT, engineering, healthcare, and sciences.

The new Opportunity Card (Chancenkarte) and Skilled Immigration Act have made Germany more accessible to international talent than ever before.

**Why Choose Germany?**
- Strong, stable economy
- Free university education
- Excellent social security
- Central European location
- High quality of life
- Path to EU residency`,
      eligibility: [
        "Recognized qualification or vocational training",
        "German language skills (B1 minimum for many jobs)",
        "Job offer from German employer (for work visa)",
        "Sufficient funds for Opportunity Card",
        "Health insurance coverage"
      ],
      process: [
        "Step 1: Check qualification recognition",
        "Step 2: Learn German (if required)",
        "Step 3: Apply for visa at German Embassy",
        "Step 4: Attend visa interview",
        "Step 5: Receive visa and travel",
        "Step 6: Register at local authorities"
      ],
      documents: [
        "Valid passport",
        "Qualification certificates",
        "Recognition of qualifications",
        "Job offer/contract",
        "Health insurance proof",
        "Proof of accommodation"
      ],
      processingTime: "1-3 months"
    },
    subLinks: [
      { name: "EU Blue Card", slug: "blue-card", description: "Highly qualified workers" },
      { name: "Opportunity Card", slug: "chancenkarte", description: "Job seeker visa" },
      { name: "Work Visa", slug: "work-visa", description: "Employment visa" },
      { name: "Student Visa", slug: "student", description: "Study in Germany" }
    ],
    importantLinks: [
      { title: "Make it in Germany", url: "https://www.make-it-in-germany.com/" }
    ],
    latestNews: [
      { title: "Opportunity Card now available", date: "Dec 8, 2024" }
    ]
  },
  {
    name: "Singapore",
    slug: "singapore",
    flag: "🇸🇬",
    videoUrl: "https://static.videezy.com/system/resources/previews/000/042/117/original/Singapore_Skyline.mp4",
    imageUrl: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800",
    shortDesc: "Asia's premier business hub with exceptional quality of life.",
    tagline: "Gateway to Asia",
    stats: {
      processingTime: "3-8 weeks",
      successRate: "90%",
      visasIssued: "100K+/year"
    },
    detailedContent: {
      overview: `Singapore is one of the world's most competitive economies and a leading financial hub in Asia. Known for its efficiency, safety, and high quality of life, Singapore attracts top talent from around the globe.

The Employment Pass (EP) is the main work visa for foreign professionals, while the S Pass caters to mid-level skilled workers.

**Why Choose Singapore?**
- Low tax rates
- World-class infrastructure
- Strategic Asian location
- Safe, clean environment
- Excellent healthcare
- Multicultural society`,
      eligibility: [
        "Job offer from Singapore employer",
        "Minimum salary of SGD $5,000/month (EP)",
        "Relevant qualifications and experience",
        "Pass COMPASS framework assessment",
        "Company's Fair Consideration Framework compliance"
      ],
      process: [
        "Step 1: Secure job offer",
        "Step 2: Employer submits EP/S Pass application",
        "Step 3: COMPASS assessment (for EP)",
        "Step 4: Await approval (3-8 weeks)",
        "Step 5: Receive In-Principle Approval",
        "Step 6: Complete card issuance"
      ],
      documents: [
        "Valid passport",
        "Educational certificates",
        "Employment history",
        "Passport-size photo",
        "Company documents"
      ],
      processingTime: "3-8 weeks"
    },
    subLinks: [
      { name: "Employment Pass", slug: "employment-pass", description: "For professionals" },
      { name: "S Pass", slug: "s-pass", description: "Mid-level skilled workers" },
      { name: "EntrePass", slug: "entrepass", description: "For entrepreneurs" },
      { name: "Dependent Pass", slug: "dependent", description: "For family members" }
    ],
    importantLinks: [
      { title: "MOM Portal", url: "https://www.mom.gov.sg/" }
    ],
    latestNews: [
      { title: "COMPASS framework updates", date: "Dec 7, 2024" }
    ]
  },
  {
    name: "Hong Kong",
    slug: "hong-kong",
    flag: "🇭🇰",
    videoUrl: "https://static.videezy.com/system/resources/previews/000/042/120/original/Hong_Kong_Skyline.mp4",
    imageUrl: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&w=800",
    shortDesc: "East meets West in Asia's dynamic financial capital.",
    tagline: "Asia's World City",
    stats: {
      processingTime: "4-6 weeks",
      successRate: "88%",
      visasIssued: "80K+/year"
    },
    detailedContent: {
      overview: `Hong Kong is a Special Administrative Region of China and one of Asia's most vibrant financial centers. The city offers a unique blend of Eastern and Western cultures, world-class infrastructure, and exceptional career opportunities.

The General Employment Policy (GEP) and Top Talent Pass Scheme (TTPS) are the main pathways for skilled professionals.

**Why Choose Hong Kong?**
- Low, simple tax system
- No capital gains tax
- Global financial hub
- Gateway to China
- Excellent public transport
- Rich cultural experience`,
      eligibility: [
        "Job offer from Hong Kong employer (GEP)",
        "Salary commensurate with market rate",
        "Good educational background",
        "Top university graduates (TTPS)",
        "High earners (HKD $2.5M+)"
      ],
      process: [
        "Step 1: Secure job offer or qualify for TTPS",
        "Step 2: Employer/self sponsorship application",
        "Step 3: Submit to Immigration Department",
        "Step 4: Await approval",
        "Step 5: Collect visa",
        "Step 6: Register with authorities"
      ],
      documents: [
        "Valid passport",
        "Educational certificates",
        "Employment contract",
        "Company sponsorship letter",
        "Financial proof"
      ],
      processingTime: "4-6 weeks"
    },
    subLinks: [
      { name: "General Employment", slug: "gep", description: "Employment visa" },
      { name: "Top Talent Pass", slug: "ttps", description: "Elite professionals" },
      { name: "Quality Migrant", slug: "qmas", description: "Points-based scheme" },
      { name: "Investment Visa", slug: "investment", description: "Business investment" }
    ],
    importantLinks: [
      { title: "Immigration Department", url: "https://www.immd.gov.hk/" }
    ],
    latestNews: [
      { title: "TTPS extended to more universities", date: "Dec 5, 2024" }
    ]
  }
];

export const getCountryBySlug = (slug: string): CountryData | undefined => {
  return countries.find(country => country.slug === slug);
};

export const getAllCountrySlugs = (): string[] => {
  return countries.map(country => country.slug);
};


