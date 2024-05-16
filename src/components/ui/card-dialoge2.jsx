import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

import { useState } from "react";

export default function CardDialoge2({ image }) {
  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="group flex flex-col justify-start items-start gap-2 w-96 h-56 duration-500 relative rounded-lg p-4 bg-primary hover:-translate-y-2 hover:shadow-xl shadow shadow-sky-400">
        <img
          className="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-sky-400"
          src={image}
          alt="image here"
        />

        <div className="relative">
          <h2 className="lg:text-4xl text-2xl  text-center font-extrabold mb-2 text-white">
            Certificate
          </h2>
        </div>
        <button
          onClick={open}
          className="bottom-10 absolute border-zinc-400 hover:-translate-y-[1px] hover:border-b-[6px]
                   active:border-b-[2px] active:brightness-90 active:translate-y-[2px]  bg-white text-blue-500 font-bold mt-6 rounded p-2 px-6"
        >
          Explore
        </button>
      </div>

      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="relative z-10 focus:outline-none"
          onClose={close}
        >
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl">
                  <div className="mx-auto w-full max-w-lg divide-y divide-white/5 rounded-xl bg-white/5">
                    <Disclosure as="div" className="p-6" defaultOpen={true}>
                      <DisclosureButton className="group flex w-full items-center justify-between">
                        <span className="text-sm/6 font-medium text-white group-data-[hover]:text-white/80">
                          Javascript intermediate
                        </span>
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
                        <img src="/Certificate/js-intermediate.png" alt="" />.
                      </DisclosurePanel>
                    </Disclosure>
                    <Disclosure as="div" className="p-6">
                      <DisclosureButton className="group flex w-full items-center justify-between">
                        <span className="text-sm/6 font-medium text-white group-data-[hover]:text-white/80">
                          Front end
                        </span>
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
                        <iframe src="/Certificate/front-end.pdf"></iframe>
                      </DisclosurePanel>
                    </Disclosure>
                    <Disclosure as="div" className="p-6">
                      <DisclosureButton className="group flex w-full items-center justify-between">
                        <span className="text-sm/6 font-medium text-white group-data-[hover]:text-white/80">
                          Web developer
                        </span>
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
                        <iframe src="/Certificate/web-dev.pdf"></iframe>
                      </DisclosurePanel>
                    </Disclosure>
                    <Disclosure as="div" className="p-6">
                      <DisclosureButton className="group flex w-full items-center justify-between">
                        <span className="text-sm/6 font-medium text-white group-data-[hover]:text-white/80">
                          pemrograman JS
                        </span>
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
                        <iframe src="/Certificate/pemrograman-dasar-js.pdf"></iframe>
                      </DisclosurePanel>
                    </Disclosure>
                    <Disclosure as="div" className="p-6">
                      <DisclosureButton className="group flex w-full items-center justify-between">
                        <span className="text-sm/6 font-medium text-white group-data-[hover]:text-white/80">
                          pemrograman dasar
                        </span>
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
                        <iframe src="/Certificate/pemrograman-dasar.pdf"></iframe>
                      </DisclosurePanel>
                    </Disclosure>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
