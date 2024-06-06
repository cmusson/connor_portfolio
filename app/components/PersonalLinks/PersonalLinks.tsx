"use client";
import React, { useCallback, useState } from "react";
import { ResumeModal } from "../Modal";
import personalLinkData from "../../data/linkData.json";
import { PersonalLink } from "../Links";

const emailAddress = "mussonconnor@gmail.com";
const sendConnorEmail = () => {
  const mailtoLink = `mailto:${emailAddress}`;
  window.location.href = mailtoLink;
};

interface ILinkData {
  title: string;
  href?: string;
  rel?: string;
  target?: string;
  onClick?: string;
  src: string;
  alt: string;
}

const PersonalLinks = () => {
  const [resumeModalOpen, setResumeModal] = useState(false);

  const openCloseModal = useCallback(() => {
    console.log("fired");
    setResumeModal((prevState) => !prevState);
  }, []);

  const linkData = personalLinkData.map((item) => {
    return item as ILinkData;
  });

  const handleClick = (onClick: string | undefined) => {
    if (onClick === "sendConnorEmail") {
      return sendConnorEmail;
    } else if (onClick === "openCloseModal") {
      return openCloseModal;
    } else return;
  };

  return (
    <div className="flex flex-row  items-center justify-center space-x-2 mb-1">
      {linkData.map((link, i) => (
        <PersonalLink
          key={i}
          link={link}
          handleClick={handleClick(link.onClick)}
        />
      ))}
      {resumeModalOpen ? (
        <ResumeModal
          isOpen={resumeModalOpen as boolean}
          handleClose={openCloseModal}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default PersonalLinks;
