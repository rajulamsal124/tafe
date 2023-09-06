import React from "react";
import Link from "next/link";

import { socialMediaLinks } from "../../data/socialLinks";

type SocialLink = {
  href: string;
  iconClassName: string;
};

type SocialsProps = {
  componentsClass?: string;
  textSize?: string;
};

const Socials: React.FC<SocialsProps> = ({ componentsClass, textSize }) => {
  return (
    <>
      {socialMediaLinks.map((link, index) => (
        <a
          key={index}
          className={componentsClass ? componentsClass : ""}
          href={link.href}
        >
          <i className={`${link.iconClassName} ${textSize}`}></i>
        </a>
      ))}
    </>
  );
};

export default Socials;
