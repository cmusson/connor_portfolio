import React from "react";

interface ISkillProps {
  skill: string;
}

const Skill = ({ skill }: ISkillProps) => {
  return (
    <span className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-600 rounded font-semibold">
      {skill}
    </span>
  );
};

export default Skill;
