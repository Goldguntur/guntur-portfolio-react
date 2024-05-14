import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";

import { useState } from "react";

export default function CardDialoge({ Image }) {
  let [isOpen, setIsOpen] = useState(false);

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <div
        className="card  bg-cv-bg  h-52 rounded-t-md bg-cover relative overflow-hidden group "
        onClick={() => setIsOpen(true)}
      >
        <div className=" bg-bg-cv backdrop-blur-sm w-full h-min bottom-0 absolute translate-y-12  group-hover:translate-y-0">
          <a
            href="http://"
            className="p-2 text-lg font-light hover:underline transition-all"
          >
            DOWNLOAD THIS CV
          </a>
        </div>
      </div>

      <Transition show={isOpen}>
        <Dialog
          as="div"
          className="relative z-10 focus:outline-none"
          onClose={close}
        >
          <div
            className="fixed inset-0 z-10 w-screen overflow-y-auto"
            aria-hidden="true"
          >
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full text-center max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl">
                  <DialogTitle
                    as="h3"
                    className="text-base/7 font-bold text-white"
                  >
                    CV
                  </DialogTitle>
                  <img src={Image} alt="CV" />
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
