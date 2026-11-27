export type TeamMember = {
  name: string;
  position: string;
  color: string;
  image: string;
  homepage?: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Dr. Justus Bogner",
    position: "Main PI, Assistant Professor",
    color: "from-[#dcebf4] to-[#84b7d8]",
    image: "/people/justus.jpg",
    homepage: "https://xjreb.github.io/",
  },
  {
    name: "Prof. Dr. Patricia Lago",
    position: "Co-PI, Full Professor",
    color: "from-[#d9f9df] to-[#8de7a0]",
    image: "/people/patricia.jpeg",
    homepage: "http://patricialago.nl/",
  },
  {
    name: "Hiya Bhatt",
    position: "Project-funded PhD Student",
    color: "from-[#d7e8f3] to-[#6ca4ca]",
    image: "/people/hiya.jpg",
    homepage: "https://hiyabhatt.github.io/",
  },
  {
    name: "Aastha Pant",
    position: "Project-funded Postdoctoral Researcher",
    color: "from-[#dff7e3] to-[#9addaa]",
    image: "/people/Aastha.jpeg",
    homepage: "https://aasthapant.com/",
  },
  {
    name: "Erica Liu",
    position: "Project-funded Research Assistant",
    color: "from-[#dcebf4] to-[#84b7d8]",
    image: "/people/erica.jpg",
    homepage: "https://www.linkedin.com/in/erica-yang-liu/",
  },
  {
    name: "Dr. Markus Funke",
    position: "Collaborator, Assistant Professor",
    color: "from-[#e4f9e8] to-[#63d97a]",
    image: "/people/markus.jpeg",
    homepage: "https://www.linkedin.com/in/markus-t-funke",
  }
];
