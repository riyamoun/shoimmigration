/**
 * Detailed visa information for Australia
 * Contains comprehensive data for each visa subclass
 */

export interface VisaDetail {
  slug: string;
  name: string;
  subclass: string;
  category: string;
  overview: string;
  keyFeatures: string[];
  eligibility: string[];
  process: string[];
  documents: string[];
  processingTime: string;
  cost: {
    primary: string;
    secondary?: string;
    child?: string;
  };
  validity: string;
  workRights: string;
  pathwayToPR: boolean;
  importantNotes: string[];
}

export const australiaVisas: VisaDetail[] = [
  {
    slug: "subclass-600",
    name: "Visitor Visa",
    subclass: "600",
    category: "Temporary",
    overview: `The Subclass 600 Visitor Visa allows you to visit Australia for tourism, business, or to see family and friends. This is one of the most popular visas for short-term visits to Australia.

There are several streams under this visa:
- **Tourist Stream**: For tourism or visiting family/friends
- **Business Visitor Stream**: For business activities like attending conferences, negotiations, or exploring business opportunities
- **Sponsored Family Stream**: For visiting family members who are Australian citizens or permanent residents
- **Approved Destination Status (ADS) Stream**: For Chinese citizens traveling in tour groups

This visa does NOT allow you to work in Australia, undertake studies for more than 3 months, or access Australian healthcare (Medicare).`,
    keyFeatures: [
      "Stay for up to 3, 6, or 12 months depending on the stream",
      "Multiple entries allowed during validity",
      "Can apply online from outside Australia",
      "No work rights - strictly for visits",
      "Can study for up to 3 months",
      "Health insurance strongly recommended",
      "Can be granted for up to 10 years (Frequent Traveller)",
    ],
    eligibility: [
      "Have a valid passport with at least 6 months validity",
      "Genuine intention to visit temporarily and return home",
      "Sufficient funds to support your stay in Australia",
      "Meet health and character requirements",
      "Have no debts to the Australian government",
      "Not have had a visa cancelled or refused previously",
      "For Business stream: genuine business purpose",
      "For Sponsored stream: have an eligible sponsor in Australia",
    ],
    process: [
      "Step 1: Determine the correct stream for your visit purpose",
      "Step 2: Create an ImmiAccount on the Department of Home Affairs website",
      "Step 3: Complete the online application form (Form 1419)",
      "Step 4: Pay the visa application charge",
      "Step 5: Upload supporting documents (passport, photos, financial evidence)",
      "Step 6: Attend biometrics appointment if required",
      "Step 7: Wait for processing (do not book travel until visa granted)",
      "Step 8: Receive visa grant notification via email",
      "Step 9: Check visa conditions on VEVO before travel",
    ],
    documents: [
      "Valid passport (bio page scan)",
      "Recent passport-sized photograph",
      "Proof of sufficient funds (bank statements, payslips)",
      "Evidence of ties to home country (employment, property, family)",
      "Travel itinerary or flight bookings (tentative)",
      "Accommodation details in Australia",
      "Letter of invitation from host (if visiting family/friends)",
      "Business invitation letter (for business stream)",
      "Travel insurance documentation",
      "Previous travel history evidence",
    ],
    processingTime: "75% of applications: 20 days | 90% of applications: 29 days",
    cost: {
      primary: "AUD $190 (Tourist stream outside Australia)",
      secondary: "AUD $190 per applicant",
      child: "AUD $190 per child",
    },
    validity: "Up to 12 months (standard) or up to 10 years (Frequent Traveller stream)",
    workRights: "No work permitted. Volunteer work also generally not allowed.",
    pathwayToPR: false,
    importantNotes: [
      "You cannot apply for most other visas while holding a Subclass 600 visa in Australia",
      "Overstaying can result in a 3-year ban from Australia",
      "Health insurance is not mandatory but strongly recommended",
      "If visiting for medical treatment, consider Subclass 602 instead",
      "Business visitors cannot work - only attend meetings, conferences, negotiations",
      "Condition 8503 (No Further Stay) may be applied, preventing visa extensions",
    ],
  },
  {
    slug: "subclass-482",
    name: "Temporary Skill Shortage Visa",
    subclass: "482",
    category: "Employer Sponsored",
    overview: `The Subclass 482 Temporary Skill Shortage (TSS) Visa allows skilled workers to come to Australia and work for an approved sponsor (employer) for up to 4 years. This is one of the main pathways for employers to fill skill shortages in Australia.

There are three streams:
- **Short-term Stream**: For occupations on the Short-term Skilled Occupation List (STSOL). Up to 2 years, limited PR pathway.
- **Medium-term Stream**: For occupations on the Medium and Long-term Strategic Skills List (MLTSSL). Up to 4 years with PR pathway via Subclass 186.
- **Labour Agreement Stream**: For workers sponsored through a Labour Agreement between an employer and the Australian Government.

This visa requires nomination by an approved Australian employer who has demonstrated they cannot find a suitable Australian worker for the position.`,
    keyFeatures: [
      "Work for your sponsoring employer in the nominated occupation",
      "Stay for 2 years (Short-term) or 4 years (Medium-term)",
      "Bring eligible family members to Australia",
      "Travel in and out of Australia while visa is valid",
      "Access Medicare for you and your family",
      "Medium-term stream provides pathway to permanent residency (Subclass 186)",
      "Can study while working",
      "Children can access subsidized schooling",
    ],
    eligibility: [
      "Be nominated by an approved sponsor for a position on the skilled occupation list",
      "Have at least 2 years relevant work experience in your nominated occupation",
      "Have a positive skills assessment (if required for your occupation)",
      "Meet English language requirements (IELTS 5.0 overall, minimum 4.5 each band for Short-term; IELTS 5.0 each band for Medium-term)",
      "Be under 45 years old (some exemptions apply)",
      "Meet health and character requirements",
      "Have genuine intention to work in the nominated position",
      "Hold adequate health insurance",
    ],
    process: [
      "Step 1: Find an Australian employer willing to sponsor you",
      "Step 2: Employer becomes an approved sponsor (Standard Business Sponsorship)",
      "Step 3: Employer lodges nomination for the position",
      "Step 4: You apply for the visa after nomination approval",
      "Step 5: Obtain skills assessment if required for your occupation",
      "Step 6: Take English language test (IELTS/PTE/TOEFL/OET/Cambridge)",
      "Step 7: Complete health examinations at approved clinic",
      "Step 8: Obtain police clearance certificates from all countries lived 12+ months",
      "Step 9: Submit complete visa application with all documents",
      "Step 10: Wait for processing and respond to any requests",
      "Step 11: Visa grant - can travel to Australia and commence work",
    ],
    documents: [
      "Valid passport",
      "Skills assessment (if applicable)",
      "English language test results",
      "Evidence of 2+ years relevant work experience",
      "Employment references on company letterhead",
      "Educational qualifications and transcripts",
      "Resume/CV",
      "Police clearance certificates",
      "Health examination results (eMedical)",
      "Evidence of employment relationship (contract, offer letter)",
      "Proof of health insurance",
      "Form 80 (Personal particulars for assessment)",
    ],
    processingTime: "75% of applications: 51 days | 90% of applications: 4 months",
    cost: {
      primary: "AUD $1,455 (Short-term) | AUD $2,645 (Medium-term)",
      secondary: "AUD $1,455 - $2,645 per adult",
      child: "AUD $365 - $660 per child",
    },
    validity: "2 years (Short-term) or 4 years (Medium-term stream)",
    workRights: "Full-time work for your sponsor in the nominated occupation. Can also do secondary work.",
    pathwayToPR: true,
    importantNotes: [
      "You must work for your sponsoring employer - changing employers requires a new nomination",
      "Medium-term stream leads to Subclass 186 (Employer Nomination Scheme) PR after 3 years",
      "Short-term stream has limited PR pathway - can only apply for ANOTHER Short-term visa once",
      "Your employer must pay you at least the Annual Market Salary Rate (AMSR)",
      "If you stop working for your sponsor, you have 60 days to find a new sponsor or leave Australia",
      "Skills assessment validity varies by assessing authority - check before applying",
      "Skilling Australians Fund (SAF) levy applies - paid by employer",
      "Labour Market Testing (LMT) requirements apply in most cases",
    ],
  },
  {
    slug: "subclass-189",
    name: "Skilled Independent Visa",
    subclass: "189",
    category: "Permanent",
    overview: `The Subclass 189 Skilled Independent Visa is a points-tested permanent residence visa for skilled workers who are not sponsored by an employer, state/territory, or family member. This is the most independent pathway to Australian PR.

This visa allows you to live and work anywhere in Australia permanently. You must submit an Expression of Interest (EOI) through SkillSelect and be invited to apply based on your points ranking.

The Points Test considers factors like age, English proficiency, skilled employment, education, and other factors. The minimum is 65 points, but competitive scores are typically 90+ points.`,
    keyFeatures: [
      "Permanent residence from day one",
      "Live and work anywhere in Australia",
      "Sponsor eligible family members for PR",
      "Access Medicare healthcare",
      "Study at any educational institution",
      "Path to Australian citizenship after 4 years",
      "Travel to and from Australia for 5 years",
      "No employer or state sponsorship required",
    ],
    eligibility: [
      "Age: Under 45 at time of invitation",
      "Occupation on the relevant skilled occupation list",
      "Positive skills assessment for your occupation",
      "Minimum 65 points on the points test (competitive: 90+)",
      "Competent English (IELTS 6.0 each band minimum)",
      "Meet health and character requirements",
      "No outstanding debts to the Australian government",
    ],
    process: [
      "Step 1: Check if your occupation is on the skilled occupation list",
      "Step 2: Get skills assessment from the relevant authority",
      "Step 3: Take English language test",
      "Step 4: Calculate your points (use official points calculator)",
      "Step 5: Submit EOI in SkillSelect",
      "Step 6: Receive invitation to apply (based on ranking)",
      "Step 7: Lodge visa application within 60 days",
      "Step 8: Complete health and police checks",
      "Step 9: Provide any requested additional documents",
      "Step 10: Visa decision",
    ],
    documents: [
      "Valid passport",
      "Skills assessment outcome letter",
      "English test results",
      "Educational qualifications and transcripts",
      "Employment references and evidence",
      "Police clearance certificates",
      "Health examination results",
      "Birth certificates",
      "Marriage/relationship evidence (if applicable)",
      "Passport photos",
    ],
    processingTime: "75% of applications: 6 months | 90% of applications: 9 months",
    cost: {
      primary: "AUD $4,640",
      secondary: "AUD $2,320 per additional adult",
      child: "AUD $1,160 per child",
    },
    validity: "Permanent (travel facility for 5 years)",
    workRights: "Unrestricted work rights anywhere in Australia",
    pathwayToPR: true,
    importantNotes: [
      "Invitation rounds typically held monthly",
      "Higher points = faster invitation",
      "Points must be correct at both EOI and invitation",
      "Some occupations have pro-rata allocation (ceiling limits)",
      "Skills assessment takes 2-4 months - plan ahead",
    ],
  },
  {
    slug: "subclass-190",
    name: "Skilled Nominated Visa",
    subclass: "190",
    category: "Permanent",
    overview: `The Subclass 190 Skilled Nominated Visa is a points-tested permanent residence visa for skilled workers who are nominated by an Australian state or territory government.

State nomination adds 5 points to your total, making this a great option if you don't have enough points for Subclass 189. Each state has its own occupation lists and requirements.

You must commit to living in the nominating state/territory for at least 2 years after arrival.`,
    keyFeatures: [
      "Permanent residence from day one",
      "5 bonus points from state nomination",
      "Lower points threshold than Subclass 189",
      "Access Medicare and social security",
      "Path to citizenship after 4 years",
      "Sponsor family members",
      "Full work and study rights",
    ],
    eligibility: [
      "Receive nomination from a state/territory",
      "Occupation on state's skilled occupation list",
      "Meet state-specific requirements (some require job offers)",
      "Minimum 65 points (including 5 from nomination)",
      "Under 45 years at time of invitation",
      "Positive skills assessment",
      "Competent English",
    ],
    process: [
      "Step 1: Research state nomination requirements",
      "Step 2: Get skills assessment",
      "Step 3: Take English test",
      "Step 4: Submit EOI in SkillSelect selecting states",
      "Step 5: Apply for state nomination",
      "Step 6: Receive state nomination",
      "Step 7: Receive visa invitation",
      "Step 8: Lodge visa application",
      "Step 9: Complete health and character checks",
      "Step 10: Visa decision",
    ],
    documents: [
      "Valid passport",
      "Skills assessment",
      "English test results",
      "Educational documents",
      "Employment evidence",
      "State nomination approval",
      "Police clearances",
      "Health examination",
      "Commitment statement to state",
    ],
    processingTime: "75% of applications: 5 months | 90% of applications: 8 months",
    cost: {
      primary: "AUD $4,640",
      secondary: "AUD $2,320 per adult",
      child: "AUD $1,160 per child",
    },
    validity: "Permanent",
    workRights: "Unrestricted",
    pathwayToPR: true,
    importantNotes: [
      "Must live in nominating state for first 2 years",
      "Each state has different occupation lists and requirements",
      "Some states require job offers or work experience in the state",
      "State nomination fees apply (varies by state)",
    ],
  },
  {
    slug: "subclass-491",
    name: "Skilled Work Regional (Provisional)",
    subclass: "491",
    category: "Provisional",
    overview: `The Subclass 491 Skilled Work Regional (Provisional) Visa is a points-tested provisional visa for skilled workers who want to live and work in regional Australia.

This visa provides 15 bonus points for regional nomination and leads to permanent residence (Subclass 191) after 3 years of living and working in regional Australia.

Regional areas include all of Australia except Sydney, Melbourne, and Brisbane metropolitan areas.`,
    keyFeatures: [
      "15 bonus points from regional nomination",
      "5-year provisional visa",
      "Pathway to PR via Subclass 191 after 3 years",
      "Work and study rights in regional Australia",
      "Access Medicare",
      "Bring family members",
      "Lower points requirement than metro visas",
    ],
    eligibility: [
      "Nomination by state/territory or eligible relative",
      "Occupation on regional occupation list",
      "Minimum 65 points (including 15 from nomination)",
      "Under 45 years",
      "Skills assessment",
      "Competent English",
      "Commit to living in regional Australia",
    ],
    process: [
      "Step 1: Check regional occupation lists",
      "Step 2: Get skills assessment",
      "Step 3: Take English test",
      "Step 4: Submit EOI for regional nomination",
      "Step 5: Obtain state/territory or family nomination",
      "Step 6: Receive visa invitation",
      "Step 7: Lodge visa application",
      "Step 8: Health and police checks",
      "Step 9: Visa grant",
      "Step 10: Move to regional Australia",
    ],
    documents: [
      "Valid passport",
      "Skills assessment",
      "English test results",
      "Education documents",
      "Employment evidence",
      "Regional nomination",
      "Police clearances",
      "Health examination",
      "Genuine intention evidence",
    ],
    processingTime: "75% of applications: 6 months | 90% of applications: 11 months",
    cost: {
      primary: "AUD $4,640",
      secondary: "AUD $2,320 per adult",
      child: "AUD $1,160 per child",
    },
    validity: "5 years (provisional)",
    workRights: "Full work rights in regional Australia only",
    pathwayToPR: true,
    importantNotes: [
      "Must live in regional area for full 5 years",
      "PR pathway requires 3 years + minimum income threshold",
      "Cannot move to Sydney, Melbourne, Brisbane metro on this visa",
      "Condition 8579 applies - regional living requirement",
    ],
  },
  {
    slug: "student-visa",
    name: "Student Visa",
    subclass: "500",
    category: "Temporary",
    overview: `The Subclass 500 Student Visa allows international students to study full-time at registered Australian educational institutions.

This visa covers all types of study from primary school to postgraduate research. Duration depends on your course length, and you can work part-time while studying.

Australia is home to world-class universities and offers post-study work rights, making it an excellent destination for international education.`,
    keyFeatures: [
      "Study at any registered institution",
      "Work up to 48 hours per fortnight during term",
      "Unlimited work during scheduled breaks",
      "Bring family members (restrictions apply)",
      "Post-study work visa pathway (485)",
      "Access student health cover (OSHC)",
      "Multiple entries during validity",
    ],
    eligibility: [
      "Enrolled in a registered course (CRICOS)",
      "Genuine Temporary Entrant (GTE) requirement",
      "Meet English language requirements",
      "Have adequate health insurance (OSHC)",
      "Sufficient funds for tuition and living costs",
      "Meet health and character requirements",
      "Be at least school age (for school enrollment)",
    ],
    process: [
      "Step 1: Research and choose your course",
      "Step 2: Apply to the educational institution",
      "Step 3: Receive Confirmation of Enrolment (CoE)",
      "Step 4: Arrange Overseas Student Health Cover (OSHC)",
      "Step 5: Create ImmiAccount and apply for visa",
      "Step 6: Provide evidence of funds and GTE statement",
      "Step 7: Complete health examination",
      "Step 8: Provide biometrics if required",
      "Step 9: Wait for visa decision",
    ],
    documents: [
      "Valid passport",
      "Confirmation of Enrolment (CoE)",
      "OSHC policy",
      "Evidence of English proficiency",
      "Financial evidence (12 months funds)",
      "GTE statement",
      "Academic transcripts",
      "Police clearances",
      "Health examination",
    ],
    processingTime: "75% of applications: 29 days | 90% of applications: 42 days",
    cost: {
      primary: "AUD $710",
      secondary: "AUD $530 per family member",
    },
    validity: "Duration of course + additional time",
    workRights: "48 hours per fortnight during term, unlimited during breaks",
    pathwayToPR: true,
    importantNotes: [
      "GTE requirement is strictly assessed",
      "Must maintain enrollment and attendance",
      "Course progress requirements apply",
      "Can lead to Subclass 485 post-study work visa",
      "Some courses provide points for skilled migration",
    ],
  },
];

/**
 * Get visa details by slug
 */
export function getVisaBySlug(slug: string): VisaDetail | undefined {
  return australiaVisas.find((visa) => visa.slug === slug);
}

/**
 * Get all visas for a category
 */
export function getVisasByCategory(category: string): VisaDetail[] {
  return australiaVisas.filter((visa) => visa.category === category);
}
