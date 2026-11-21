export type TeamMember = {
  id: string;
  name: string;
  position: string;
  color: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: "01",
    name: "Team Member 01",
    position: "Principal Investigator",
    color: "from-[#d9f9df] to-[#8de7a0]",
  },
  {
    id: "02",
    name: "Team Member 02",
    position: "Software Architecture Researcher",
    color: "from-[#dcebf4] to-[#84b7d8]",
  },
  {
    id: "03",
    name: "Team Member 03",
    position: "Machine Learning Researcher",
    color: "from-[#e4f9e8] to-[#63d97a]",
  },
  {
    id: "04",
    name: "Team Member 04",
    position: "Sustainability Researcher",
    color: "from-[#d7e8f3] to-[#6ca4ca]",
  },
  {
    id: "05",
    name: "Team Member 05",
    position: "Energy Systems Researcher",
    color: "from-[#dff7e3] to-[#9addaa]",
  },
  {
    id: "06",
    name: "Team Member 06",
    position: "Project Coordinator",
    color: "from-[#e0edf5] to-[#8eb9d5]",
  },
];
