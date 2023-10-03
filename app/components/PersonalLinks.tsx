"use client";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import ResumeModal from "./Modals/ResumeModal";
import personalLinkData from "../data/linkData.json";

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
  onClick?: () => void;
  src: string;
  alt: string;
}

const PersonalLinks = () => {
  const [resumeModalOpen, setResumeModal] = useState(false);

  const openCloseModal = useCallback(() => {
    setResumeModal((prevState) => !prevState);
  }, []);

  // assign function from json data
  const linkData = personalLinkData.map((item) => {
    if (item.onClick) {
      return {
        ...item,
        onClick: () => {
          if (item.onClick === "sendConnorEmail") {
            sendConnorEmail();
          } else if (item.onClick === "openCloseModal") {
            openCloseModal();
          }
        },
      };
    }
    return item as ILinkData;
  });

  return (
    <div className="flex flex-row  items-center justify-center space-x-2 mb-1">
      {linkData.map((link, i) => (
        <a
          key={`${i}-${link.alt}`}
          href={link.href}
          rel={link.rel}
          target={link.target}
          className="hover:translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-500"
        >
          <Image
            title={link.title}
            src={link.src}
            alt={link.alt}
            onClick={link.onClick}
            width={30}
            height={30}
            className="dark:invert"
          />
        </a>
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
