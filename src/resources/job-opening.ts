import { BenefitList } from "./benefits";

export type JobOpening = {
  key: string;
  section: string;
  position: string;
  status: boolean;
  apply: null;
  job_details: JobDetail;
};

export type JobDetail = {
  title: string;
  section: string;
  perks: Array<{ icon: BenefitList; title: string }>;
  job_description: string;
  skills: string;
};

export const JOB_OPENINGS: Array<JobOpening> = [
  {
    key: "cyber-security-1",
    section: "Cyber Security",
    position: "Hacker",
    status: true,
    apply: null,
    job_details: {
      title: "Hacker in the GovTech Nucleus Unit",
      section: "Cyber Security",
      perks: [
        {
          icon: "map-pin",
          title: "Hybrid working arrangement",
        },
        {
          icon: "briefcase",
          title: "Full-time",
        },
        {
          icon: "competitive_salary",
          title: "Competitive salary",
        },
      ],
      job_description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.\n\nullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n1. Something\n2. Something else\n",
      skills:
        "Something\n- Something\n- Something else\n\nUllamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.\n\nFugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  },
  {
    key: "designer-1",
    section: "Design",
    position: "Senior Designer",
    status: false,
    apply: null,
    job_details: {
      title: "Desinger in the GovTech Nucleus Unit",
      section: "Design",
      perks: [
        {
          icon: "map-pin",
          title: "Hybrid working arrangement",
        },
        {
          icon: "briefcase",
          title: "Full-time",
        },
        {
          icon: "competitive_salary",
          title: "Competitive salary",
        },
      ],
      job_description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.\n\nullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n1. Something\n2. Something else\n",
      skills:
        "Something\n- Something\n- Something else\n\nUllamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.\n\nFugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  },
  {
    key: "frontend-engineer-1",
    section: "Frontend",
    position: "Senior Engineer",
    status: true,
    apply: null,
    job_details: {
      title: "The One and Only Frontend Engineer in the GovTech Nucleus Unit",
      section: "Frontend",
      perks: [
        {
          icon: "map-pin",
          title: "Hybrid working arrangement",
        },
        {
          icon: "computer-desktop",
          title: "New laptop for you",
        },
        {
          icon: "competitive_salary",
          title: "Competitive salary",
        },
      ],
      job_description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.\n\nullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n1. Something\n2. Something else\n",
      skills:
        "Something\n- Something\n- Something else\n\nUllamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.\n\nFugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  },
];
