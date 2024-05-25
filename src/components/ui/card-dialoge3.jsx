import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { useState } from "react";

export default function CardDialoge3({
  Image,
  Title,
  link,
  description,
  readMore,
}) {
  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  return (
    <>
      <div className="lg:max-w-xs block bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800/20 dark:border-gray-700  overflow-hidden">
        <a href={link}>
          <img className="rounded-t-lg" src={Image} alt="" />
        </a>
        <div className="p-5">
          <a href={link}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {Title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <button
            onClick={open}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            />
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </button>
        </div>
      </div>
      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          classNameName="relative z-10 focus:outline-none"
          onClose={close}
        >
          <div classNameName="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div classNameName="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel classNameName="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl">
                  <DialogTitle
                    as="h3"
                    classNameName="text-base/7 font-medium text-white"
                  >
                    {Title}
                  </DialogTitle>
                  <p classNameName="mt-2 text-sm/6 text-white/50">{readMore}</p>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
