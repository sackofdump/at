export interface Role {
  title: string;
  startDate: string;
  endDate: string;
  duration: string;
  skills: string[];
}

export interface Experience {
  id: number;
  company: string;
  location: string;
  type: string;
  totalDuration: string;
  accentColor: string;
  roles: Role[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: "UW Credit Union",
    location: "Madison, Wisconsin",
    type: "Full-time",
    totalDuration: "4 yrs 4 mos",
    accentColor: "#06b6d4",
    roles: [
      {
        title: "Senior Multimedia Designer",
        startDate: "Jan 2026",
        endDate: "Present",
        duration: "10 mos",
        skills: [
          "Adobe Creative Suite",
          "Branding & Identity",
          "Motion Graphics",
          "UI/UX",
          "Photography",
        ],
      },
      {
        title: "Graphic Designer",
        startDate: "Jul 2022",
        endDate: "Jan 2026",
        duration: "3 yrs 7 mos",
        skills: [
          "Iconography",
          "Print Collateral",
          "Layout Design",
          "Typography",
          "Color Theory",
        ],
      },
    ],
  },
  {
    id: 2,
    company: "Park Printing Solutions",
    location: "Wisconsin",
    type: "Full-time",
    totalDuration: "5 mos",
    accentColor: "#8b5cf6",
    roles: [
      {
        title: "Graphic Designer Prepress",
        startDate: "Mar 2022",
        endDate: "Jul 2022",
        duration: "5 mos",
        skills: [
          "Print Collateral",
          "Prepress Production",
          "File Preparation",
          "Adobe Illustrator",
          "Attention to Detail",
        ],
      },
    ],
  },
  {
    id: 3,
    company: "Madison Forms LLC",
    location: "McFarland, Wisconsin",
    type: "Full-time",
    totalDuration: "1 yr 6 mos",
    accentColor: "#06b6d4",
    roles: [
      {
        title: "Prepress Technician",
        startDate: "Oct 2020",
        endDate: "Mar 2022",
        duration: "1 yr 6 mos",
        skills: [
          "Print Collateral",
          "Prepress Production",
          "Quality Control",
          "Attention to Detail",
          "Adobe Creative Suite",
        ],
      },
    ],
  },
  {
    id: 4,
    company: "Thysse",
    location: "Wisconsin",
    type: "Full-time",
    totalDuration: "1 yr 9 mos",
    accentColor: "#f59e0b",
    roles: [
      {
        title: "Digital Press Operator",
        startDate: "Oct 2018",
        endDate: "Jun 2020",
        duration: "1 yr 9 mos",
        skills: [
          "Print Collateral",
          "Digital Printing",
          "Color Management",
          "Attention to Detail",
          "Machine Operation",
        ],
      },
    ],
  },
  {
    id: 5,
    company: "Healthgrades",
    location: "Middleton Town, Wisconsin",
    type: "Full-time",
    totalDuration: "3 yrs 10 mos",
    accentColor: "#8b5cf6",
    roles: [
      {
        title: "Digital Press Operator",
        startDate: "Jan 2015",
        endDate: "Oct 2018",
        duration: "3 yrs 10 mos",
        skills: [
          "Print Collateral",
          "Digital Printing",
          "Quality Control",
          "Color Management",
          "Attention to Detail",
        ],
      },
    ],
  },
  {
    id: 6,
    company: "Culver Franchising System, LLC",
    location: "McFarland, Wisconsin",
    type: "Full-time · On-site",
    totalDuration: "4 yrs 4 mos",
    accentColor: "#f59e0b",
    roles: [
      {
        title: "Assistant Manager",
        startDate: "Feb 2010",
        endDate: "May 2014",
        duration: "4 yrs 4 mos",
        skills: [
          "Customer Service",
          "Employee Training",
          "Team Management",
          "Operations",
          "Leadership",
        ],
      },
    ],
  },
];

export interface Skill {
  name: string;
  category: "design" | "production" | "leadership";
}

export const skills: Skill[] = [
  { name: "Adobe Creative Suite", category: "design" },
  { name: "Adobe Photoshop", category: "design" },
  { name: "Adobe Illustrator", category: "design" },
  { name: "Adobe InDesign", category: "design" },
  { name: "Branding & Identity", category: "design" },
  { name: "Typography", category: "design" },
  { name: "Iconography", category: "design" },
  { name: "Color Theory", category: "design" },
  { name: "Layout Design", category: "design" },
  { name: "Print Collateral", category: "production" },
  { name: "Prepress Production", category: "production" },
  { name: "Digital Press Operations", category: "production" },
  { name: "Color Management", category: "production" },
  { name: "Quality Control", category: "production" },
  { name: "File Preparation", category: "production" },
  { name: "Employee Training", category: "leadership" },
  { name: "Customer Service", category: "leadership" },
  { name: "Team Management", category: "leadership" },
  { name: "Operations", category: "leadership" },
];
