export type Project = {
  id: ProjectList;
  name: string;
  description: string;
  description_bm: string;
  url?: string;
};

export const ProjectList = [
  "datagovmy",
  "datagovmy-docs",
  "opendosm",
  "hansard",
  "mybelanjawan",
  "nas",
  "sharegovmy",
] as const;

export type ProjectList = (typeof ProjectList)[number];

export const LAUNCHED_PROJECTS: Array<Project> = [
  {
    id: "datagovmy",
    name: "data.gov.my",
    description: "Your one-stop centre to browse Malaysia's wealth of open data.",
    description_bm: "Rumah bagi segala data terbuka sektor awam Malaysia.",
    url: "https://data.gov.my/",
  },
  {
    id: "datagovmy-docs",
    name: "data.gov.my docs",
    description:
      "Documentation for Malaysia's official Open API, covering both static and realtime APIs.",
    description_bm:
      "Documentation for Malaysia's official Open API, covering both static and realtime APIs.",
    url: "https://developer.data.gov.my/",
  },
  {
    id: "opendosm",
    name: "OpenDOSM",
    description: "A platform that catalogs, visualises, and analyses data published by DOSM.",
    description_bm: "A platform that catalogs, visualises, and analyses data published by DOSM.",
    url: "https://open.dosm.gov.my/",
  },
  {
    id: "hansard",
    name: "Hansard Parlimen",
    description: "Digitalised hansards and text analytics to help you track your representatives.",
    description_bm:
      "Digitalised hansards and text analytics to help you track your representatives.",
  },
];

export const UPCOMING_PROJECTS: Array<Project> = [
  {
    id: "mybelanjawan",
    name: "MyBelanjawan",
    description: "Your one-stop centre to browse Malaysia's wealth of open data.",
    description_bm: "Your one-stop centre to browse Malaysia's wealth of open data.",
  },
  {
    id: "nas",
    name: "National Address System",
    description: "Your one-stop centre to browse Malaysia's wealth of open data.",
    description_bm: "Your one-stop centre to browse Malaysia's wealth of open data.",
  },
  {
    id: "sharegovmy",
    name: "share.gov.my",
    description: "Your one-stop centre to browse Malaysia's wealth of open data.",
    description_bm: "Your one-stop centre to browse Malaysia's wealth of open data.",
  },
];
