import React from "react";
import TeamMember1 from "../assets/tm-4.png";
import TeamMember2 from "../assets/tm-6.png";
import TeamMember3 from "../assets/tm-5.png";
import TeamMember4 from "../assets/tm-2.png";
import TeamMember5 from "../assets/tm-7.png";
import TeamMember6 from "../assets/tm-8.png";

interface TeamMember {
  name: string;
  jobTitle: string;
  image: string;
}

const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    { name: "Victor Maina", jobTitle: "Chief Executive Officer (CEO)", image: TeamMember1 },
    { name: "Sylvia Chebet", jobTitle: "Chief Marketing Officer (CMO)", image: TeamMember3 },
    { name: "William Ndirangu", jobTitle: "Chief Technology Officer (CTO)", image: TeamMember2 },
    { name: "Stephy Kamau", jobTitle: "Chief Creative Officer (CCO)", image: TeamMember4 },
    { name: "Uwes Ahabab", jobTitle: "Chief Financial Officer (CFO)", image: TeamMember5 },
    { name: "Beatrice Wambui", jobTitle: "Chief Operations Officer (COO)", image: TeamMember6 },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 w-auto place-content-evenly">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="bg-black border rounded-lg shadow-md p-4 max-w-xs transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-auto bg-gray-900 mb-4 border rounded-lg transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-300"
          />
          <h3 className="text-lg uppercase font-semibold mb-2">{member.name}</h3>
          <p className="text-gray-600">{member.jobTitle}</p>
          <button className="bg-teal-400 hover:bg-teal-500 duration-300 text-white px-4 py-2 rounded-md mt-4 focus:outline-none">
            Contact
          </button>
        </div>
      ))}
    </div>
  );
};

export default Team;
