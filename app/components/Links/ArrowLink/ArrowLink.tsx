import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IArrowLinkProps {
  href: string;
}

const ArrowLink = ({ href }: IArrowLinkProps) => {
  return (
    <Link href={href}>
      <Image
        src="/down_arrow.svg"
        alt="go to about section"
        className="animate-bounce dark:invert"
        width={35}
        height={35}
      />
    </Link>
  );
};

export default ArrowLink;
