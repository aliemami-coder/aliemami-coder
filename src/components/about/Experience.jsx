import React from "react";

const experienceContent = [
    {
        year: "2021 - Present",
        position: "Full Stack Developer",
        company: "Sakhtbazar",
        details: `SEO manager and graphic designer, user interface and user experience`,
    },
    {
        year: "2021 - Present",
        position: "Full Stack Developer",
        company: "AronGroups",
        details: `Front and back end programmer and maintenance of designed platforms`,
    },
    {
        year: "2019",
        position: " IT manager",
        company: "Faraz Sanat Palize",
        details: `IT manager and digital marketer and manager of social networks`,
    },
    {
        year: "   2018",
        position: " PHP programmer",
        company: "Sabinserver",
        details: `  Designing and programming WordPress templates and content writing in the field of hosting`,
    },
];

const Experience = () => {
    return (
        <ul>
            {experienceContent.map((val, i) => (
                <li key={i}>
                    <div className="icon">
                        <i className="fa fa-briefcase"></i>
                    </div>
                    <span className="time open-sans-font text-uppercase">{val.year}</span>
                    <h5 className="poppins-font text-uppercase">
                        {val.position}
                        <span className="place open-sans-font">{val.company}</span>
                    </h5>
                    <p className="open-sans-font">{val.details}</p>
                </li>
            ))}
        </ul>
    );
};

export default Experience;
