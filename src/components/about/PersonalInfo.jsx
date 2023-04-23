import React from "react";

const personalInfoContent = [
  { meta: "First Name", metaInfo: "Ali" },
  { meta: "Last Name", metaInfo: "Emami" },
  { meta: "Age", metaInfo: "23 Years" },
  { meta: "Nationality", metaInfo: "Iranian" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Andisheh Town, Tabriz City, Iran" },
  { meta: "Phone", metaInfo: "+989145805045" },
  { meta: "Email", metaInfo: "aliemami.coder@gmail.com" },
  { meta: "Telegram", metaInfo: "@aliemami_coder" },
  { meta: "Languages", metaInfo: "Turkish, Azerbaijan, Persian, English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
