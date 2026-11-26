export type TeamMember = {
  name: string;
  position: string;
  color: string;
  image: string;
  homepage?: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Prof. Dr. Patricia Lago",
    position: "Full Professor",
    color: "from-[#d9f9df] to-[#8de7a0]",
    image: "/people/patricia.jpeg",
    homepage: "http://patricialago.nl/",
  },
  {
    name: "Dr. Justus Bogner",
    position: "Assistant Professor",
    color: "from-[#dcebf4] to-[#84b7d8]",
    image: "/people/justus.jpg",
    homepage: "https://xjreb.github.io/",
  },
  {
    name: "Dr. Markus Funke",
    position: "Assistant Professor",
    color: "from-[#e4f9e8] to-[#63d97a]",
    image: "/people/markus.jpeg",
    homepage: "https://www.linkedin.com/in/markus-t-funke",
  },
  {
    name: "Hiya Bhatt",
    position: "PhD Student",
    color: "from-[#d7e8f3] to-[#6ca4ca]",
    image: "/people/hiya.jpg",
    homepage: "https://hiyabhatt.github.io/",
  },
  {
    name: "Aastha Pant",
    position: "Postdoc Researcher",
    color: "from-[#dff7e3] to-[#9addaa]",
    image: "/people/Aastha.jpeg",
    homepage: "https://aasthapant.com/",
  },
  {
    name: "Erica Liu",
    position: "Research Assistant",
    color: "from-[#dcebf4] to-[#84b7d8]",
    image: "/people/erica.jpg",
    homepage: "https://www.linkedin.com/in/erica-yang-liu/",
  },
];
