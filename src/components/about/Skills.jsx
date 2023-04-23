import React from "react";

const skillsContent = [
  { skillClass: "p100", skillPercent: "100", skillName: "HTML/CSS" },
  { skillClass: "p89", skillPercent: "89", skillName: "JAVASCRIPT" },
  { skillClass: "p86", skillPercent: "86", skillName: "PHP" },
  { skillClass: "p95", skillPercent: "95", skillName: "WORDPRESS" },
  { skillClass: "p98", skillPercent: "98", skillName: "JQUERY" },
  { skillClass: "p84", skillPercent: "84", skillName: "VUE JS" },
  { skillClass: "p92", skillPercent: "92", skillName: "REACT JS" },
  { skillClass: "p90", skillPercent: "90", skillName: "NEXT JS" },
  { skillClass: "p100", skillPercent: "100", skillName: "TAILWINDCSS" },
  { skillClass: "p65", skillPercent: "65", skillName: "PYTHON" },
  { skillClass: "p88", skillPercent: "88", skillName: "LARAVEL" },
  { skillClass: "p100", skillPercent: "100", skillName: "TAILWINDCSS" },
  { skillClass: "p70", skillPercent: "70", skillName: "NODE JS" },
  { skillClass: "p65", skillPercent: "65", skillName: "EXPRESS" },
  { skillClass: "p100", skillPercent: "100", skillName: "BOOTSTRAP" },
  { skillClass: "p80", skillPercent: "80", skillName: "JAVA" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
