export type NewsItem = {
  date: string;
  title: string;
  description: string;
  href: string;
};

export const newsItems: NewsItem[] = [
  {
    date: "05 Dec 2025",
    title: "GAT4ML receives NWO M-2 grant",
    description:
      "The project will fund one PhD position and one three-year postdoctoral position. Its work will build a catalog of Green AI tactics, make tactics easier to browse and select, and gather evidence on their impact and industry adoption.",
    href: "https://vu.nl/en/news/2025/justus-bogner-and-patricia-lago-win-grant-in-nwo-open-competition-m-2",
  },
  {
    date: "24 Nov 2025",
    title: "GAT4ML among newly funded VU research projects",
    description:
      "VU Amsterdam announces GAT4ML as one of its projects funded through NWO's Open Competition Domain Science-M programme, led by Justus Bogner and Patricia Lago.",
    href: "https://vu.nl/en/news/2025/research-projects-open-competition-enw-m-launched",
  },
  {
    date: "24 Nov 2026",
    title: "NWO awards funding to GAT4ML",
    description:
      "GAT4ML, led by Justus Bogner and Patricia Lago, is among 21 innovative projects funded through NWO's Open Competition Domain Science-M programme.",
    href: "https://www.nwo.nl/en/news/grants-for-twenty-one-innovative-research-projects-in-the-open-competition-domain-science-m-programme",
  },
];
