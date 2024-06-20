import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface IIconButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const IconButton = ({ ...props }: IIconButtonProps) => {
  return (
    <button
      className="p-2 rounded-lg hover:bg-gray-200 active:bg-gray-400 group transition-colors ease-in-out duration-100"
      {...props}
    >
      <svg
        width="20"
        height="20"
        fill="black"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
      >
        <path d="M480-416.35 287.83-224.17Q275.15-211.5 256-211.5t-31.83-12.67Q211.5-236.85 211.5-256t12.67-31.83L416.35-480 224.17-672.17Q211.5-684.85 211.5-704t12.67-31.83Q236.85-748.5 256-748.5t31.83 12.67L480-543.65l192.17-192.18Q684.85-748.5 704-748.5t31.83 12.67Q748.5-723.15 748.5-704t-12.67 31.83L543.65-480l192.18 192.17Q748.5-275.15 748.5-256t-12.67 31.83Q723.15-211.5 704-211.5t-31.83-12.67L480-416.35Z" />
      </svg>
    </button>
  );
};

export default IconButton;
