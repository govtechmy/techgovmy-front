type JobOpening = {
  section: string;
  position: string;
  status: boolean;
  apply: null;
};

export const JOB_OPENINGS: Array<JobOpening> = [
  {
    section: "Cyber Security",
    position: "Hacker",
    status: true,
    apply: null,
  },
  {
    section: "Design",
    position: "Senior Designer",
    status: false,
    apply: null,
  },
  {
    section: "Frontend",
    position: "Senior Engineer",
    status: true,
    apply: null,
  },
];
