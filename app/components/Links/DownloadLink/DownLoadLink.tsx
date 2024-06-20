import React, { ReactNode } from "react";

interface IDownloadLinkProps {
  fileUrl: string;
  fileName: string;
  children: ReactNode;
}

const DownloadLink = ({ fileUrl, fileName, children }: IDownloadLinkProps) => {
  return (
    <a
      href={fileUrl}
      download={fileName}
      className="whitespace-nowrap mt-1 text-neutral-100 font-semibold px-6 py-3 bg-teal-700 rounded shadow hover:bg-teal-800"
    >
      {children}
    </a>
  );
};

export default DownloadLink;
