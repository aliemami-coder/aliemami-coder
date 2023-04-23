import React from "react";

const SocialShare = [
    {
        iconName: "fa fa-linkedin",
        link: "https://www.linkedin.com/in/ali-emami",
    },
    {iconName: "fa fa-github", link: "https://github.com/aliemami-coder"},
    {
        iconName: "fa fa-instagram",
        link: "https://www.instagram.com/aliemmami.py",
    },
    {
        iconName: "fa fa-telegram",
        link: "https://t.me/aliemami_coder"
    },
];

const Social = () => {
    return (
        <ul className="social list-unstyled pt-1 mb-5">
            {SocialShare.map((val, i) => (
                <li key={i}>
                    <a href={val.link} target="_blank" rel="noreferrer">
                        <i className={val.iconName}></i>
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default Social;
