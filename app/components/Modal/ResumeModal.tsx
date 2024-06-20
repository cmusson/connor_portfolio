"use client";
import React, { useEffect } from "react";
import PdfViewer from "../PdfViewer/PdfViewer";
import ReactPortal from "./ReactPortal";
import Modal from "./Modal";

interface IResumeModal {
  isOpen: boolean;
  handleClose: () => void;
}

const ResumeModal = ({ isOpen, handleClose }: IResumeModal) => {
  return (
    <Modal
      isOpen={isOpen}
      handleClose={handleClose}
      title={"Connor Musson CV/Resume"}
    >
      <PdfViewer />
    </Modal>
  );
};

export default ResumeModal;
