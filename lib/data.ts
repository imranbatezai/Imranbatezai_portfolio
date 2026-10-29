import type {
  NavLink,
  HighlightStat,
  ExpertiseItem,
  ExperienceItem,
  AdditionalExperienceItem,
  EducationItem,
  Publication,
  ConferenceItem,
  ProficiencyItem,
  LanguageItem,
  CertificationItem,
  AchievementItem,
  WorkshopCategory,
} from "@/types";

export const site = {
  name: "Dr. Imran Khan Batezai",
  role: "Ph.D. Scholar in Education",
  specialties: [
    "Research Analyst",
    "Survey Expert",
    "Data Analyst",
    "Monitoring & Evaluation",
  ],
  intro:
    "Analytical and results-driven researcher with over a decade of combined experience in public health monitoring & evaluation, education research, field data management, quantitative and qualitative analysis, and evidence-based reporting.",
  location: "University Town, University of Peshawar, Khyber Pakhtunkhwa",
  email: "Imranresearch.a@gmail.com",
  phone: "+92-333-7791456",
  cvFile: "/Imran-Khan-Batezai-CV.pdf",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Research", href: "#research" },
  { label: "Publications", href: "#publications" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const highlights: HighlightStat[] = [
  { value: "10+", label: "Years Professional Experience" },
  { value: "Ph.D.", label: "Scholar & Researcher" },
  { value: "5", label: "Peer-Reviewed Publications" },
  { value: "1", label: "International Publications" },
  { value: "40", label: "Temporary Education Centres Established" },
  { value: "2,000", label: "Out-of-School Children Enrolled" },
  { value: "80", label: "TEC Teachers Hired & Trained" },
  { value: "120", label: "Government-School Teachers Trained" },
];

export const aboutTags: string[] = [
  "Policymakers",
  "Government Counterparts",
  "Donor Stakeholders",
  "NGOs",
  "Development Organizations",
  "Research Institutions",
  "Field Teams",
];

export const aboutAreas: string[] = [
  "Education research",
  "Public health monitoring",
  "Monitoring & Evaluation",
  "Field data management",
  "Quantitative analysis",
  "Qualitative research",
  "Survey management",
  "Research synthesis",
  "Data visualization",
  "Evidence-based reporting",
  "Stakeholder coordination",
];

export const expertise: ExpertiseItem[] = [
  {
    title: "Research Analysis",
    description:
      "Synthesizing programme, survey and surveillance data into clear, decision-ready findings.",
    icon: "Search",
  },
  {
    title: "Survey Design & Management",
    description:
      "Designing and running household and field surveys, from instrument design to data collection.",
    icon: "ClipboardList",
  },
  {
    title: "Quantitative Data Analysis",
    description: "Statistical analysis of large administrative and survey datasets.",
    icon: "BarChart3",
  },
  {
    title: "Qualitative Data Analysis",
    description:
      "Key informant interviews, focus groups and thematic analysis of field narratives.",
    icon: "MessageSquare",
  },
  {
    title: "Monitoring & Evaluation",
    description:
      "Tracking programme activities against targets and reporting progress to stakeholders.",
    icon: "LineChart",
  },
  {
    title: "Public Health Data",
    description:
      "Epidemiological and surveillance data synthesis in support of eradication programming.",
    icon: "Activity",
  },
  {
    title: "Education Research",
    description:
      "Research on out-of-school children, accelerated learning and education access & quality.",
    icon: "GraduationCap",
  },
  {
    title: "Field Data Management",
    description:
      "Coordinating data managers and analysts to keep large field datasets clean and current.",
    icon: "Database",
  },
  {
    title: "Technical Report Writing",
    description:
      "Weekly, monthly and quarterly reports, briefing notes and manuscripts for varied audiences.",
    icon: "FileText",
  },
  {
    title: "Budget Preparation",
    description: "Preparing budgets for field research and programme activities.",
    icon: "Calculator",
  },
  {
    title: "Data Visualization",
    description:
      "Turning administrative and coverage data into visuals that policymakers can act on.",
    icon: "PieChart",
  },
  {
    title: "Team Leadership & Field Coordination",
    description:
      "Supervising field teams, data managers and analysts across multi-site projects.",
    icon: "Users",
  },
];

export const experience: ExperienceItem[] = [
  {
    title: "Data & Reporting Analyst",
    organization: "Integrated Communication Information Management System (ICIMS)",
    location: "Peshawar",
    dates: "Jul 2025 – Present",
    current: true,
    responsibilities: [
      "Preparing weekly, monthly and quarterly reports",
      "Preparing briefing materials and presentations",
      "Synthesizing epidemiological and surveillance data",
      "Tracking polio programme activities",
      "Monitoring progress toward eradication targets",
      "Conducting quantitative and qualitative data analysis",
      "Managing large volumes of administrative, coverage and programme data",
      "Reviewing published literature and web resources",
      "Producing data visualizations",
      "Preparing written summaries for policymakers, government counterparts and programme stakeholders",
    ],
  },
  {
    title: "Data & Research Analyst",
    organization: "Integrated Communication Information Management System (ICIMS)",
    location: "Peshawar",
    dates: "Jan 2025 – Jun 2025",
    responsibilities: [
      "Research synthesis",
      "Analytical reporting",
      "Data analysis",
      "Polio eradication programme support",
    ],
  },
  {
    title: "Research Analyst",
    organization: "Data Support Center (DSC)",
    location: "Peshawar",
    dates: "Jun 2023 – Dec 2024",
    responsibilities: [
      "Qualitative research",
      "Key informant interviews",
      "Focus groups",
      "Research coordination",
      "Community forums",
      "Advisory meetings",
      "Report writing",
      "Presentation development",
      "Manuscript development",
      "Supervision of data managers and analysts",
    ],
  },
  {
    title: "Ph.D. Scholar",
    organization: "Institute of Education & Research, University of Peshawar",
    dates: "Feb 2023 – Present",
    current: true,
    summary:
      '"Analysis of Accelerated Learning Programs for Transitioning Out-of-School Children into Formal Schools: Challenges and Opportunities in Balochistan"',
    responsibilities: [
      "Explanatory sequential mixed-methods research design",
      "Four peer-reviewed publications on out-of-school children and Accelerated Learning Programs",
    ],
  },
  {
    title: "Field Officer",
    organization: "WESS (Water, Environment, Sanitation & Society) Project, USAID-funded SGP",
    dates: "Jan 2016 – Apr 2017",
    responsibilities: [
      "Established 40 Temporary Education Centres",
      "Supported enrollment of 2,000 out-of-school children",
      "Hired and trained 80 TEC teachers",
      "Trained 120 government-school teachers",
      "Conducted house-to-house surveys",
      "Supported school admissions",
      "Conducted community enrollment campaigns",
      "Conducted awareness sessions",
    ],
  },
];

export const additionalExperience: AdditionalExperienceItem[] = [
  { title: "Visiting Lecturer", organization: "Institute of Education & Research, University of Balochistan" },
  { title: "Provincial Field Supervisor", organization: "EY-Ford Rhodes, Balochistan Livelihood & Entrepreneurship Project" },
  { title: "Field Supervisor", organization: "GLOW Consultancy" },
  { title: "Master Trainer", organization: "Various Entrepreneurship Projects" },
  { title: "Field Supervisor", organization: "AiD Agriculture & Energy Survey" },
  { title: "District Supervisor", organization: "EY-Ford Rhodes, Balochistan Human Capital Investment Project" },
  { title: "District Field Supervisor", organization: "GLOW Consultancy" },
  { title: "District Coordinator", organization: "BRACE" },
  { title: "District Supervisor", organization: "BRSP" },
  { title: "District Supervisor", organization: "BRSP & NRSP" },
  { title: "Supervisor", organization: "GLOW" },
  { title: "Monitor", organization: "UNHCR RAHA Project Beneficiary Survey" },
  { title: "Field Monitor", organization: "FAO, WFP, OCHA, UNICEF, WHO Drought Assessment Survey" },
  { title: "Data Collector & Analyst", organization: "UNICEF Out-of-School Children Survey" },
  { title: "Line Listing Officer", organization: "HANDS with Aga Khan University, National Nutrition Survey" },
  { title: "Survey Enumerator", organization: "Chip Training & Consulting / UNICEF" },
  { title: "Field Officer", organization: "USAID SGP WESS Project" },
  { title: "Union Council Communication Support Officer", organization: "Chip Training & Consulting / UNICEF Pakistan" },
  { title: "Social Mobilizer", organization: "Chip Training & Consulting / UNICEF Pakistan Polio Eradication Initiative" },
  { title: "Head Teacher", organization: "Guidance English Grammar School" },
];

export const education: EducationItem[] = [
  {
    degree: "Ph.D. in Education",
    institution: "University of Peshawar",
    location: "Khyber Pakhtunkhwa",
    status: "Coursework 80% · Research Proposal Approved from ASRB",
    focus: "Research Design & Techniques",
  },
  {
    degree: "M.Phil. in Education",
    institution: "University of Balochistan",
    location: "Quetta",
    score: "83% — 3.67 / 4.0 CGPA",
    focus: "Advanced Research Methods and Proposal Development",
    highlight: "Topper, M.Phil. Education",
  },
  {
    degree: "M.Ed.",
    institution: "Alhamd Islamic University",
    score: "69%",
    focus: "Research & Management of Education",
  },
  {
    degree: "B.Ed.",
    institution: "University of Balochistan",
    score: "64%",
    focus: "Measurement and Supervision",
  },
  {
    degree: "M.Sc. International Relations",
    institution: "University of Balochistan",
    location: "Quetta",
    score: "56%",
    focus: "International Organizations",
  },
  {
    degree: "B.Sc.",
    institution: "University of Balochistan",
    location: "Quetta",
    score: "58%",
    focus: "Chemistry, Geography",
  },
  {
    degree: "F.Sc.",
    institution: "BBISE Quetta",
  },
  {
    degree: "S.Sc.",
    institution: "BBISE Quetta",
  },
];

export const phdResearch = {
  title: "Doctoral Research",
  researchTitle:
    "Analysis of Accelerated Learning Programs for Transitioning Out-of-School Children into Formal Schools: Challenges and Opportunities in Balochistan",
  institution: "Institute of Education & Research, University of Peshawar",
  method: "Explanatory Sequential Mixed-Methods Design",
  focusAreas: [
    "Out-of-school children",
    "Accelerated Learning Programs",
    "Transition to formal education",
    "Education access",
    "Education quality",
    "Challenges and opportunities",
    "Mixed-methods research",
  ],
};

export const publications: Publication[] = [
   {
    citation: "Batezai, I. K., & Kiazai, A. N. (2022). Impact of Accelerated Learning Programs (ALPs) to achieve Sustainable Development Goals (SDGs) targets in District Quetta.",
    year: "2022",
    journal: "Journal of Development and Social Sciences, 3(2), 748–761",
    doi: "https://doi.org/10.47205/jdss.2022(3-II)68",
  },
  {
    citation: "Descriptive analysis of Accelerated Learning Program centers to provide access and quality education to out-of-school children in Quetta.",
    year: "2020",
    journal: "The Sindh University Journal of Education (SUJE), 49",
    doi: "https://sujo.usindh.edu.pk/index.php/SUJE/article/view/3614/2702",
  },
  {
    citation: "Empirical assessment of the reasons for out-of-school children at Accelerated Learning Program centers in District Quetta.",
    year: "2020",
    journal: "Pakistan Studies Journal, 11",
    doi: "https://www.academia.edu/128022908/Empirical_Assessment_of_the_Reasons_of_Out_of_School_Children_in_Accelerated_Learning_Program_Centers_in_District_Quetta_",
  },
  {
    citation: "Social and cultural barriers towards female education in District Pishin.",
    year: "2021",
    journal: "Journal of Humanities and Educational Research, 11",
  },
  {
    citation: "Batezai, I. K., & Ali, A. (2025). Connecting the disconnected: From school exclusion to educational transition through Accelerated Learning Programs in Balochistan, Pakistan.",
    year: "2025",
    journal: "TPM – Testing, Psychometrics, Methodology in Applied Psychology, 32(4), 1910-1925",
    doi: "https://tpmap.org/submission/index.php/tpm/article/view/4661",
  },
];

export const conferences: ConferenceItem[] = [
  {
    year: "2026",
    title:
      "Connecting the Disconnected: From School Exclusion to Educational Transition through Accelerated Learning Programs in Balochistan, Pakistan",
    event: "Organized by CHRCD",
    venue: "Baragali Summer Campus, University of Peshawar",
    dates: "19–22 July 2026",
  },
  {
    year: "2025",
    title:
      "Unlocking Doors to Education: Parents' Perception on the Effectiveness of Accelerated Learning Programs for Out-of-School Children in District Quetta",
    event: '3-Day Seminar School on "Research Methods for 21st Century Educators & Researchers"',
    venue: "Baragali Summer Campus, University of Peshawar",
    dates: "23–25 August 2025",
  },
  {
    year: "2024",
    title:
      "Accelerated Learning Programs: Increasing Engagement and Unlocking Doors to Education for Out-of-School Children in District Quetta in Alignment with Sustainable Development Goal 4.5",
    event: 'International Conference on "21st Century Challenges: Equity, Access & Inclusion in Education"',
    venue: "Baragali Summer Campus, University of Peshawar",
    dates: "2–4 August 2024",
  },
  {
    year: "2023",
    title: "Global, Transnational and Local Curriculum",
    event: "National Curriculum Debate Conference",
    venue: "Baragali Summer Campus, University of Peshawar",
    dates: "16–17 August 2023",
  },
];

export const technicalSkills: ProficiencyItem[] = [
  { name: "MS Office", level: "Advanced" },
  { name: "IBM SPSS", level: "Advanced" },
  { name: "STATA", level: "Proficient" },
  { name: "Power BI", level: "Proficient" },
  { name: "GIS Software", level: "Proficient" },
  { name: "SmartPLS 3 & 4", level: "Advanced" },
];

export const coreSkills: string[] = [
  "Proposal & Technical Report Writing",
  "Budget Preparation",
  "Quantitative & Qualitative Data Analysis",
  "Team Leadership & Field Coordination",
  "Negotiation & Advocacy",
  "Cross-Cultural Collaboration",
  "Deadline-Driven Delivery",
];

export const languages: LanguageItem[] = [
  { name: "English", level: "Excellent" },
  { name: "Urdu", level: "Excellent" },
  { name: "Pashto", level: "Excellent" },
  { name: "Arabic", level: "Reading/Writing" },
];

export const certifications: CertificationItem[] = [
  { name: "ADIT", issuer: "ACFC (A Call for Change)", grade: "A+ (90%)" },
  { name: "Diploma in IT", issuer: "Pearl Academy, Quetta", grade: "O+ Grade" },
  { name: "Advanced English", issuer: "PECC", grade: "A+ (90%)" },
];

export const achievements: AchievementItem[] = [
  {
    title: "Research Grant for Sustainable Development Goals (RG-SDG 2021), Balochistan",
    description:
      "USD 1,000 grant presented by the Governor of Balochistan on 13 January 2022.",
    prominent: true,
  },
  {
    title: "Principal Author, HEC-Recognized Publications",
    description:
      'Principal author of three research articles published in HEC-recognized "Y"-category journals.',
  },
  {
    title: "Topper, M.Phil. Education",
    description: "Institute of Education & Research, University of Balochistan.",
  },
];

export const workshops: WorkshopCategory[] = [
  {
    category: "Education",
    items: [
      "BEMIS & EMIS",
      "Out-of-School Children Enrollment",
      "Online Results Dashboard",
      "Instructional Teaching Strategies",
      "Joyful Learning & School Development Planning",
      "Dropout Children",
      "School Assessment, Evaluation & Verification Techniques",
      "Basic Literacy & Numeracy",
    ],
  },
  {
    category: "Public Health",
    items: [
      "EPI & PEI",
      "Routine Immunization",
      "PRIME",
      "Interpersonal Communication Skills",
      "Behavior Change Communication",
      "Data Management",
      "IPV",
    ],
  },
  {
    category: "General / Cross-Sector",
    items: [
      "Food & Agriculture",
      "Nutrition",
      "Livelihood",
      "Health & Hygiene",
      "Monitoring & Dashboards",
      "Micro-Planning",
      "Social Mobilization",
      "Tele-Sheet Analysis",
      "Child Protection & Security Awareness",
      "CCB Networking",
      "Zoonoses",
      "Business Management",
      "Data Reporting",
      "Monitoring & Evaluation",
      "HR",
      "Proposal Writing",
      "Case Study Writing",
      "Water & Sanitation",
    ],
  },
];
