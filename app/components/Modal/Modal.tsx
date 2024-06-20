"use client";
import { Transition } from "@headlessui/react";
import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import { CloseButton } from "../Buttons";

interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
  title: string;
  children: ReactNode;
}

const Modal = ({ isOpen, handleClose, title, children }: ModalProps) => {
  // Close modal when user presses escape key
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    document.body.addEventListener("keydown", closeOnEscapeKey);

    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  // Prevent scrolling on the body when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = "unset";
      };
    }

    return undefined;
  }, [isOpen]);

  const portalRoot = document.getElementById("modal-root") as HTMLElement;

  return createPortal(
    <>
      <Transition
        show={isOpen}
        enter="transition duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-30"
        leave="transition duration-200 ease-in-out"
        leaveFrom="opacity-30"
        leaveTo="opacity-0"
      >
        {/* Outer black opaque background */}
        <button
          aria-label="Close Modal"
          onClick={handleClose}
          className="z-40 fixed top-0 left-0 w-screen h-screen bg-black opacity-30"
        />
      </Transition>
      <Transition
        show={isOpen}
        enter="transition duration-300"
        enterFrom="translate-y-6 opacity-0"
        enterTo="translate-y-0 opacity-100"
        leave="transition duration-300 ease-in-out"
        leaveFrom="translate-y-0 opacity-100"
        leaveTo="translate-y-6 opacity-0"
      >
        <div className="z-40 pointer-events-none fixed flex items-center justify-center top-0 left-0 w-screen h-screen bg-transparent">
          {/* White modal */}
          <div className="grid grid-rows-[auto,1fr] w-[min(42rem,calc(100%-1.5rem))] h-fit h-[90vh] z-40 pointer-events-auto rounded-xl bg-white shadow-2xl">
            <div className="w-full flex justify-between items-center p-2 border-b">
              <span className="w-10" />
              <h2 className="dark:text-black">{title}</h2>
              <CloseButton aria-label="Close Modal" onClick={handleClose} />
            </div>
            {/* Modal content */}
            <div className="block px-8 py-6 w-full overflow-y-auto">
              {children}
            </div>
          </div>
        </div>
      </Transition>
    </>,
    portalRoot
  );
};

export default Modal;
