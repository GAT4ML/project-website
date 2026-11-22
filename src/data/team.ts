export type TeamMember = {
  name: string;
  position: string;
  color: string;
  image?: string;
  homepage?: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Prof. Dr. Patricia Lago",
    position: "Full Professor",
    color: "from-[#d9f9df] to-[#8de7a0]",
    image: "https://s2group.cs.vu.nl/img/people/patricia.jpeg",
    homepage: "http://patricialago.nl/",
  },
  {
    name: "Dr. Justus Bogner",
    position: "Assistant Professor",
    color: "from-[#dcebf4] to-[#84b7d8]",
    image: "https://s2group.cs.vu.nl/img/people/justus.jpg",
    homepage: "https://xjreb.github.io/",
  },
  {
    name: "Hiya Bhatt",
    position: "PhD Student",
    color: "from-[#e4f9e8] to-[#63d97a]",
  },
  {
    name: "Aastha Pant",
    position: "Postdoc Researcher",
    color: "from-[#d7e8f3] to-[#6ca4ca]",
    homepage: "https://aasthapant.com/",
  },
];
