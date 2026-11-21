export type NewsItem = {
  date: string;
  time: string;
  title: string;
  description: string;
  href: string;
};

export const newsItems: NewsItem[] = [
  {
    date: "24 Oct 2025",
    time: "09:00 CET",
    title: "GAT4ML project launches",
    description:
      "A new research initiative begins its work on practical green architectural tactics for ML-enabled systems.",
    href: "/news/gat4ml-project-launch",
  },
  {
    date: "12 Sep 2025",
    time: "14:30 CET",
    title: "Mapping the environmental impact of ML",
    description:
      "The team outlines a shared research agenda spanning software architecture, machine learning, and sustainability.",
    href: "/news/research-agenda",
  },
  {
    date: "28 Jun 2025",
    time: "11:00 CET",
    title: "Building the green tactics catalog",
    description:
      "Our first working session turns fragmented Green AI evidence into reusable architectural guidance.",
    href: "/news/green-tactics-catalog",
  },
  {
    date: "16 Apr 2025",
    time: "16:00 CET",
    title: "Research community workshop announced",
    description:
      "Researchers and practitioners are invited to help identify, assess, and refine tactics for lower-impact ML systems.",
    href: "/news/community-workshop",
  },
];
